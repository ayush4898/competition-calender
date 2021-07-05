import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ContestsBar from "../components/ContestBar";
import OngoingContestsBar from "./ongoing";
import BeforeContestsBar from "./beforeContest";
function Contest(props) {
  const [contests, setContest] = useState([]);

  useEffect(() => {
    axios.get("https://kontests.net/api/v1/all").then(async (data) => {
      console.log(data.data);
      await setContest(data.data);
    });
  }, []);

  let Ongoing = contests.filter((contest) => contest.status === "CODING");
  let Before = contests.filter((contest) => contest.status === "BEFORE");
  console.log(Ongoing, Before);
  return (
    <div>
      <Router>
        <Link to="/ongoing">Active Contest</Link>
        <Link to="/before">Future Contest</Link>

        <Switch>
          <Route path="/ongoing">
            <OngoingContestsBar contest={Ongoing} />
          </Route>
          <Route path="/before">
            <BeforeContestsBar contest={Before} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Contest;
