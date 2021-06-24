import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//as Router renames

//style.css

function App() {
  return (
    <div style={{ minHeight: '100vh', margin: 0, padding: 0, display: 'flex'}}>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard}/> 
            <PrivateRoute path="/update-profile" component={UpdateProfile}/> 
            {/* you need the exact to match the / exactly */}
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/forgot-password" component={ForgotPassword}/>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
