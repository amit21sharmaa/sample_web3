export async function connectToCelo() {
  if (window && window.ethereum) {
    try {
      if (window.ethereum.isMiniPay) {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3Instance.eth.getAccounts();
        return accounts[0];
      }
    } catch (error) {
      console.error("Celo connection failed:", error);
      throw error;
    }
  } else {
    console.log("Not inside MiniPay — open this app from MiniPay browser.");
  }
}
