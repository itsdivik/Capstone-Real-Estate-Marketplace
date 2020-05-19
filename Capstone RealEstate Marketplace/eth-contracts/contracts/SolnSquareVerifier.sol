pragma solidity >=0.4.21 <0.6.0;
import "./ERC721Mintable.sol";
import "./SquareVerifier.sol";

contract SolnSquareVerifier is CustomERC721Token 
{
  SquareVerifier private verifier;

  constructor (address verifierContract) public 
  {
      verifier = SquareVerifier(verifierContract);
  }
//structure sollution
  struct Solution{
      uint _index;
      address _address;
  }
  Solution[] private solutions;
  mapping(bytes32 => bool) private uniqueSolutions;
  event SolutionAdded(address submitter);
  function addSolution(uint256 index, address submitter, bytes32 solutionKey)public 
  //submition
  {
    Solution memory newSolution = Solution(index, submitter);
    solutions.push(newSolution);
    uniqueSolutions[solutionKey] = true;
    emit SolutionAdded(submitter);
  }

    modifier verifySolution(
        uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[2] memory input
    ) {
        require(verifier.verifyTx(a, b, c, input),
            "SolnSquareVerifier: Solution has invalid proof"
        );
        _;
    }
  function mintWithVerification(
      address to,
      uint256 id,
      uint[2] memory a,
      uint[2][2] memory b,
      uint[2] memory c,
      uint[2] memory input
  )
    //public verification
      public
      verifySolution(a, b, c, input)
      returns(bool)
  {
      bytes32 solutionKey = keccak256(abi.encodePacked(a, b, c, input));
      require(
          uniqueSolutions[solutionKey] == false,
          "SolnSquareVerifier: solution is not unique"
      );
      addSolution(id, to, solutionKey);
      return mint(to, id);
  }
}
