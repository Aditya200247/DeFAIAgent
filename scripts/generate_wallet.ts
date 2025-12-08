import { ethers } from "ethers";
import * as fs from "fs";

async function main() {
    const wallet = ethers.Wallet.createRandom();
    const content = `
------------------------------------------
🆕 LESS GOOO! New Wallet Generated!
------------------------------------------
Address:     ${wallet.address}
Private Key: ${wallet.privateKey}
------------------------------------------
Copy the 'Private Key' value into your .env file as PRIVATE_KEY=...
Don't forget to request faucet funds for the Address!
    `;

    fs.writeFileSync("wallet_info.txt", content);
    console.log("Wallet info written to wallet_info.txt");
}

main();
