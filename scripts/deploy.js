const { ethers } = require("hardhat");

async function main() {
    // Retrieve the UniswapV2Router01 contract
    const UniswapV2Router01 = await ethers.getContractFactory("UniswapV2Router01");
    console.log("Deploying UniswapV2Router contract...");

    // Deploy the contract
    const uniswapV2Router01 = await UniswapV2Router01.deploy();

    // Wait until the contract is fully deployed
    await uniswapV2Router01.waitForDeployment();
    console.log("UniswapV2Router01 deployed to:", uniswapV2Router01.target);

    // Retrieve the UniswapV2Router02 contract
    const UniswapV2Router02 = await ethers.getContractFactory("UniswapV2Router02");
    console.log("Deploying UniswapV2Router02 contract...");

    // Deploy the contract
    const uniswapV2Router02 = await UniswapV2Router02.deploy();

    // Wait until the contract is fully deployed
    await uniswapV2Router02.waitForDeployment();
    console.log("UniswapV2Router02 deployed to:", uniswapV2Router02.target);
}

// Execute the main function and handle errors appropriately
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
