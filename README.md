# UniswapV2Periphery Mockup Contract

This repository contains the UniswapV2Periphery mockup contract, which complements the UniswapV2Core by providing additional functionalities such as router contracts and other utilities.

### Deployment Address

- UniswapV2Router01: [0x90f2F4E97Eb6B62D9049D07C6f6877FD171a9a0F](https://sepolia.arbiscan.io/address/0x90f2F4E97Eb6B62D9049D07C6f6877FD171a9a0F)
- UniswapV2Router02: [0x3FBA3ef10e452D1e8Cc6C0cf552A8A25b572Ec41](https://sepolia.arbiscan.io/address/0x3FBA3ef10e452D1e8Cc6C0cf552A8A25b572Ec41)

## Prerequisites

- Node.js v12+ LTS and npm (comes with Node)
- Hardhat

## Installation

### Clone the repository:

```bash
git clone https://github.com/ScumAgent/v2-periphery
```

### Navigate to the project folder:

```bash
cd v2-periphery
```

### Install dependencies:

```bash
npm istall
```

## Set Up Configuration

1. Review the .example.env file.
2. Create a .env file based on the example and adjust the values as needed.

### For Linux or macOS:

```bash
cp .example.env .env
```

### Windows:

```bash
copy .example.env .env
```

## Compilation

Compile the smart contracts using Hardhat:

```bash
npx hardhat compile
```

## Quick Start Guide

### 1. Testing

Run the following command to execute the contract tests. Ensure you've written the tests in your Hardhat project's test directory.

```bash
npx hardhat test
```

### 2. Deployment

Run the following command to compile the contracts using the Solidity compiler and deploy the UniswapV2Router.

```bash
npx hardhat run scripts/deploy.js --network arbtest
```

## Conclusion

If you would like to contribute to the project, please fork the repository, make your changes, and then submit a pull request. We appreciate all contributions and feedback!