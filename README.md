# CapStone Project

Objective of this project is to develope a decentralized Real-Estate listing service.The real estate properties are represented by the ERC721 tokens. We are using the zk-SNARKs toolbox from ZoKrates to establish the verification mechanism before minting each token after the verification, the tokens will be listed and ready for the exchange on the blockchain decentralized marketplace OpenSea.

# Contract Addresses:
1. SquareVerifier: 0xC32921D14Ba5a0e9D56F64f87480Bd368473daf5

2. SolnSquareVerifier: [0x0Db1ba13BB611FD80D64ef369b48164087010DBA](https://rinkeby.etherscan.io/address/0x0Db1ba13BB611FD80D64ef369b48164087010DBA)

OpenSea Storefront: https://rinkeby.opensea.io/assets/real-estate-token-v8

Contract ABI will be found here: `./eth-contracts/build/contracts/*.json`

##### Steps--:
### Installation

- `git clone` this repository
- `npm install`

# Truffle Tests

- `truffle test` to run the tests suite

# To Deploy Smart Contracts
You need to setup the `truffle-config.js`, with your wallet and infura account before deploy to the rinkeby network

- `truffle compile` to compile contracts
- `truffle migrate --reset --network rinkeby` to deploy to rinkeby network


# Acknowledgments

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.
* [Docker](https://docs.docker.com/install/) - Docker is the recommended way to get started with Zokrates. Docker is a tool designed to make it easier to create, deploy, and run applications by using containers.
* [OpenSea](https://docs.opensea.io/docs) - OpenSea is a decentralized marketplace that is used for selling for crypto assets
* [Infura](https://infura.io/) - Scalable Blockchain Infrastructure
* [Metamask](https://metamask.io/) - MetaMask is a bridge that allows to visit the distributed web in browser.
* [ZoKrates](https://github.com/Zokrates/ZoKrates) - Implement zkSnarks using ZoKrates, a toolbox for zkSNARKs on Ethereum.
