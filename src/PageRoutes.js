import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Contest, Hidden, Settings } from "./pages/index";

function PageRoutes() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/hidden" component={Hidden} />
          <Route path="/setting" component={Settings} />
          <Route exact path="" component={Contest} />
        </Switch>
      </Router>
    </div>
  );
}

export default PageRoutes;
