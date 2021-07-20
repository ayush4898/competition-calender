import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Contest, Hidden, Github } from "./pages/index";
import Settings from "./pages/setting/setting";

function PageRoutes() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/hidden" component={Hidden} />
          <Route path="/github" component={Github} />
          <Route path="/setting" component={Settings} />
          <Route exact path="" component={Contest} />
        </Switch>
      </Router>
    </div>
  );
}

export default PageRoutes;
