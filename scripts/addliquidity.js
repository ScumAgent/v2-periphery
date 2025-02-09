const { ethers } = require("hardhat");

const ETHAddress = "0x324e4d9afbEe1b5cA0c0F37e7b771a18094B39A6";
const SCUMAddress = "0x9A0ca57DD72eac6D38FA150cC7eF1cAce8682E13";

async function addLiquidity(deployer, tokenAAddress, tokenBAddress, amountA, amountB) {
    const tokenA = await ethers.getContractAt("ERC20", tokenAAddress);
    const tokenB = await ethers.getContractAt("ERC20", tokenBAddress);
    const router = await ethers.getContractAt("UniswapV2Router01", "0x90f2F4E97Eb6B62D9049D07C6f6877FD171a9a0F");

    tx = await tokenA.approve(await router.getAddress(), ethers.MaxUint256);
    await tx.wait();
    console.log("approve tokenA:", tx.hash);

    tx = await tokenB.approve(await router.getAddress(), ethers.MaxUint256);
    await tx.wait();
    console.log("approve tokenB:", tx.hash);

    tx = await router.addLiquidity(
        tokenAAddress,
        tokenBAddress,
        amountA,
        amountB,
        amountA,
        amountB,
        deployer.address,
        ethers.MaxUint256,
    );
    await tx.wait();
    console.log("add liquidity:", tx.hash);
}

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const amountETH = "1" + "0".repeat(14);
    const amountSCUM = "10000000" + "0".repeat(18);

    const weth = await ethers.getContractAt("IWETH", ETHAddress);
    tx = await weth.deposit({ value: amountETH });
    await tx.wait();
    console.log("weth deposit:", tx.hash);

    await addLiquidity(deployer, ETHAddress, SCUMAddress, amountETH, amountSCUM);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });