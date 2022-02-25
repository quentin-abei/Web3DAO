import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x26d07Dc0e62078E907862d4BEC3C008260547D88",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Ultimate Web3Preneur ID",
        description: "This NFT will give you access to Web3Preneurs",
        image: readFileSync("scripts/assets/web3.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()