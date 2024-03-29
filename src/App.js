import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Detail from "./routes/Detail"
import Home from "./routes/Home"

function App() {
  return (
  <Router>
    <Switch>
      <Route path="/movie/:id&:value">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
