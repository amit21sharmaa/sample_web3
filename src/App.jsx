import { useEffect, useState } from "react";
import { connectToCelo } from "./utils/celoConnection";

function App() {
  const [address, setAddress] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [status, setStatus] = useState(false);
  const [statusMsg, setStatusMsg] = useState("")

  useEffect(() => {
    async function connectionWallet() {
      try {
        const connection = await connectToCelo();
        if (connection) {
          setAddress(connection.address);
          setStatus(connection.flag.isMinipay)
          setStatusMsg(connection.msg)
        }
      } catch (err) {
        console.error(err);
        setErrorMsg(err)
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
      <p>{statusMsg}</p>
    </div>
  );
}

export default App;
