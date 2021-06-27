import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Contest, Hidden, Settings } from "./pages/index";

function PageRoutes() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Contest} />
          <Route path="/hidden" component={Hidden} />
          <Route path="/setting" component={Settings} />
        </Switch>
      </Router>
    </div>
  );
}

export default PageRoutes;
