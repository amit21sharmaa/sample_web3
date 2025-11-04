// src/utils/celoConnection.ts
import { newKitFromWeb3 } from "@celo/contractkit";
import Web3 from "web3";

export async function connectToCelo() {
  if (window.ethereum && window.ethereum.isMiniPay) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const web3 = new Web3(window.ethereum);
      const kit = newKitFromWeb3(web3);

      const accounts = await kit.web3.eth.getAccounts();
      const address = accounts[0];

      return { kit, address };
    } catch (error) {
      console.error("Celo connection failed:", error);
      throw error;
    }
  } else {
    console.log("Not inside MiniPay — open this app from MiniPay browser.");
  }
}
