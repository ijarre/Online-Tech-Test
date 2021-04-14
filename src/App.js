import "./dist/css/style.css";
import Home from "./page/home";
import SoalSatu from "./components/soal-1/soal-1";

import TodoApp from "./components/todo-2-ed/TodoApp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        {/* <Home /> */}

        <Switch>
          <Route path="/soal-satu" exact component={SoalSatu} />
          <Route path="/" exact component={Home} />
          <Route exact path="/todo" component={TodoApp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
