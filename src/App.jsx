import "./App.css";
import Layout from "./Layout/Layout";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <div className="App">
{/*       <GoogleOAuthProvider clientId="your client ID"> */}
        <Layout />
{/*       </GoogleOAuthProvider> */}
    </div>
  );
}

export default App;


