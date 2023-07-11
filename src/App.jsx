import "./App.css";
import Layout from "./Layout/Layout";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="1091829629427-259fs9hsbi2g0amf2hljakmu1nicbsng.apps.googleusercontent.com">
        <Layout />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;

// clientID=1091829629427-k89kvagmen3mfnk7refsop1j8bmavsed.apps.googleusercontent.com

//https://accounts.google.com/gsi/select?client_id=1091829629427-k89kvagmen3mfnk7refsop1j8bmavsed.apps.googleusercontent.com&ux_mode=popup&ui_mode=card&as=GJUaiuNFchZXkeWu6zQrfA&channel_id=4bdf5ca09542a839a9fbffcf479d34c5432c419ed4b5b850ccf3bae2a3e1cbfd&origin=http%3A%2F%2Flocalhost%3A5173
