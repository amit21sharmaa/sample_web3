export async function connectToCelo() {
  if (window && window.ethereum) {
    try {
      if (window.ethereum.isMiniPay) {
        let accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
          params: [],
        });
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
