import { ethers } from "hardhat";
import * as dotenv from "dotenv";
dotenv.config();

import { Network } from "@flarenetwork/flare-tx-sdk";

async function main() {
    // 1. Setup Network and Wallet using SDK
    const network = Network.COSTON2;

    // Verify FDC Module
    console.log("FDC Round:", await network.fdc.getRoundID());
    console.log("Proof:", await network.fdc.getProof(100n, {}));


    // Ensure Private Key is loaded
    const privateKey = process.env.PRIVATE_KEY;
    if (!privateKey) throw new Error("PRIVATE_KEY not set");

    // Let's use standard ethers provider for now to interface
    // Note: In the future, we should use the SDK's wallet implementation if possible.
    const provider = new ethers.JsonRpcProvider("https://coston2-api.flare.network/ext/C/rpc");
    const wallet = new ethers.Wallet(privateKey, provider);

    console.log("🤖 DeFAI Agent Bot Starting...");
    console.log("Address:", wallet.address);

    // 2. Poll for "Events" (Mocking the Trigger)
    const contractAddress = process.env.AGENT_CONTRACT_ADDRESS;
    if (!contractAddress) {
        console.warn("AGENT_CONTRACT_ADDRESS not set. Skipping contract interaction.");
    } else {
        const DeFAIAgent = await ethers.getContractAt("DeFAIAgent", contractAddress);

        console.log(`Listening on contract: ${contractAddress}`);

        // Mock Loop
        setInterval(async () => {
            try {
                console.log("Checking conditions...");
                // Check if we should execute (e.g. check balance or external API)
                // This is where we would use the fdc submodule!
                console.log("FDC Round:", await network.fdc.getRoundID());
                console.log("Proof:", await network.fdc.getProof(100n, {}));
                console.log("Agent alive.");
            } catch (e) {
                console.error("Error in loop:", e);
            }
        }, 5000);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
