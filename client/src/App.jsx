import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/health")
      .then(res => setStatus(res.data.message))
      .catch(() => setStatus("Backend not connected ❌"));
  }, []);

  return (
    <div>
      <h1>Print Hub 🖨️</h1>
      <p>Backend Status: {status}</p>
    </div>
  );
}

export default App;
