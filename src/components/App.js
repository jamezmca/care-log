import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";

//style.css

function App() {
  return (
    <AuthProvider>
      <div style={{ minHeight: '100vh' }}>
        <Signup />
      </div>
    </AuthProvider>
  );
}

export default App;
