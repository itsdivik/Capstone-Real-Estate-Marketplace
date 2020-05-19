const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const SquareVerifier = artifacts.require('SquareVerifier');
const truffleAssert = require("truffle-assertions");
let proofJson = {
  "proof": {
      "a": ["0x1ba0df5159c4c75da8a30d34e28b0a2242b9634aed77c9b41b979e6081ed5033", "0x04a81e18c8c57362b000213bce6d533055ba4f830dc76abf9c5bf37907ffbdd0"],
      "b": [["0x272c1132c59a11b904df2e3921eaf7b40ce948a1a24e9b36dd6e2e04cc3e9560", "0x1535e1e6c5cb4d685ef68595487910d68d8813765f422b977b53e32f8c53fc94"], ["0x26e8a26d9bd754c038c42bb9b5b32b91a0c1463aba53b03eb8e224f1230f853a", "0x2c080f65faca972f26229da56b338fc12d62261f8626ec42659bc1090e7a983d"]],
      "c": ["0x08c833d09a989255fa84bd16e9b4374fbf2c59f92f8b67298771b72c03e56f7f", "0x2f85944aef8c9f217463077e0d8f85fdf5546b3b570820ade0cf9c95a3feb440"]
  },
  "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000009", "0x0000000000000000000000000000000000000000000000000000000000000001"]
}

contract('TestSolnSquareVerifier', accounts => {
  describe('can verify soultion and mint token', () => {
    const account_one = accounts[0];
    const account_two = accounts[1];
    let verifier;
    let solnSquareVerifier;

    beforeEach(async () => {
      verifier = await SquareVerifier.new({ from: account_one });
      solnSquareVerifier = await SolnSquareVerifier.new(verifier.address, {from: account_one});
    });
    it('can add a new solution', async () => {
      const tx = await solnSquareVerifier.addSolution(5, account_two, web3.utils.fromUtf8("123456789"), {from: account_two});
      truffleAssert.eventEmitted(tx, "SolutionAdded", null, "Invalid event emitted"); 
    });
    it("can mint an ERC721 token", async() => {
      let result = await solnSquareVerifier.mintWithVerification.call(account_two, 1,
        proofJson.proof.a, proofJson.proof.b, proofJson.proof.c,
        proofJson.inputs,
        {from: account_one}
      );
      assert.equal(result, true, 'cannot mint an ERC721 token');
    });
  });
});