import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ContestsBar from "../components/ContestBar";
import OngoingContestsBar from "./ongoing";
import BeforeContestsBar from "./beforeContest";

let style = {
  main: {
    width: "100%",
    display: "flex",
    "flex-direction": "row",
  },
  list: {
    "background-color": "#34495E",
    "text-decoration": "none",
    color: "white",
    width: "50%",
    height: "30px",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "margin-right": "1px",
  },
};

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
        <div style={style.main}>
          <Link to="/ongoing" style={style.list}>
            Active Contest
          </Link>
          <Link to="/before" style={style.list}>
            Future Contest
          </Link>
        </div>
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
