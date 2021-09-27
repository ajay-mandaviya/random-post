import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Comment from "./component/Comment";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostProvider from "./context/postContext";
function App() {
  return (
    <div className="App">
    <PostProvider>
        <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path={"/post/:id"} component={Comment} />
          </Switch>
        </BrowserRouter>
      </PostProvider>
    </div>
  );
}

export default App;
