const { utils, Wallet } = require("zksync-web3");

const ethers = require('ethers');
const { Deployer } = require("@matterlabs/hardhat-zksync-deploy");

// An example of a deploy script that will deploy and call a simple contract.
module.exports = async function (hre) {
    // Initialize the wallet.
    const wallet = new Wallet("273b9f99f9e0536941b871670a6a0d1496a055adb55b9fa99f196ea84efc2afa");

    // Create deployer object and load the artifact of the contract we want to deploy.
    const deployer = new Deployer(hre, wallet);
    const artifact = await deployer.loadArtifact("UniswapV3Factory");

    const dexContract = await deployer.deploy(artifact,[]);

    // Show the contract info.
    const contractAddress = dexContract.address;
    console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}

