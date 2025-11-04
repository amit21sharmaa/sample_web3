import { useEffect, useState } from "react";
import { connectToCelo } from "./utils/celoConnection";

function App() {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    async function connectionWallet() {
      try {
        const connection = await connectToCelo();
        if (connection) {
          setAddress(connection.address);
        }
      } catch (err) {
        console.error(err);
      }
    }
    connectionWallet();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Web3 dApp</h2>
      {address ? (
        <p>Connected Wallet Address: <b>{address}</b></p>
      ) : (
        <p>Connecting to MiniPay...</p>
      )}
    </div>
  );
}

export default App;
