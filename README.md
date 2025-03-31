# hardhat-revive-storage
## Prerequisites
Ensure that you have substrate-node and eth-rpc binaries on your local machine. If not, follow these instructions to install them:

```bash
git clone https://github.com/paritytech/polkadot-sdk
cd polkadot-sdk
cargo build --bin substrate-node --release
cargo build -p pallet-revive-eth-rpc --release
```
Once the build is complete, you will find both binaries in the `./target/release` directory.

Start the network by running:

```bash
./target/release/substrate-node --dev
./target/release/eth-rpc --dev
```

## How to Initialize
```bash
git clone https://github.com/sekisamu/hardhat-revive-storage
npm install
```
Open the `hardhat.config.js` file and update the following fields under networks -> hardhat:

nodeBinaryPath: Set this to the local path of your substrate-node binary.

adapterBinaryPath: Set this to the local path of your eth-rpc binary.

Ensure that both paths correctly point to the respective executable files.

How to Test
```bash
# For PolkaVM chains
USE_RESOLC=true npx hardhat test --network polkavm

# For EVM chains
npx hardhat test --network sepolia
```
Note: You need to restart the network and rpc endpoint after each test.
