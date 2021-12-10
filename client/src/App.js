import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";


/* <div>
	        <Redirect
	          to={{
	            pathname: "/roomlist",
	            state: { from: location }
	          }}
	        />
	        <Switch>
	          <Route path="/login">
	            <Login />
	          </Route>
	          <SecureRoute path="/roomlist">
	            <RoomList />
	          </SecureRoute>
	          <SecureRoute path="/addroom">
	            <AddRoom />
	          </SecureRoute>
	          <SecureRoute path="/chatroom/:room">
	            <ChatRoom />
	          </SecureRoute>
	        </Switch>
	      </div> */

import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Chatroom from "./chat/Chatroom";
import {
  BrowserRouter as 
  Redirect,
  useLocation
} from "react-router-dom";

//import Login from './components/Login';
	import RoomList from './components/RoomList';
	import AddRoom from './components/AddRoom';
	import ChatRoom from './components/ChatRoom';

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/chat">{user ? <Chatroom /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>


      

        
    </Router>
  );
} 


export default App;
/*
function SecureRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem('nickname') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

*/