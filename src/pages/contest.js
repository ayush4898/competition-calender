import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
// import ContestsBar from "../components/ContestBar";
import OngoingContestsBar from "./ongoing";
import BeforeContestsBar from "./beforeContest";

let style = {
  main: {
    width: "100%",
    display: "flex",
    "flex-direction": "row",
  },
  list: {
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

let activeStyle = {
  ...style.list,
  backgroundColor: "rgb(135,176,218)",
};
let notactiveStyle = {
  ...style.list,
  backgroundColor: "rgb(52,73,94)",
};
function Contest(props) {
  let temp = JSON.parse(localStorage.getItem("contests") || "ayush");
  console.log("temp", temp);
  const [contests, setContest] = useState(temp);
  const [active, isActive] = useState("active");

  // useEffect(() => {
  //   axios.get("https://kontests.net/api/v1/all").then(async (data) => {
  //     console.log(data.data);
  //     await setContest(data.data);
  //   });
  // }, []);

  const handleClick = async (event) => {
    await isActive(event);
  };
  console.log(contests);
  let Ongoing = contests.filter((contest) => contest.status === "CODING");
  let Before = contests.filter((contest) => contest.status === "BEFORE");
  console.log(Ongoing, Before);

  return (
    <div>
      <Router>
        <div style={style.main}>
          <NavLink
            to=""
            onClick={() => handleClick("active")}
            style={active === "active" ? activeStyle : notactiveStyle}
          >
            Active Contest
          </NavLink>
          <NavLink
            to="/before"
            onClick={() => handleClick("future")}
            style={active === "future" ? activeStyle : notactiveStyle}
          >
            Future Contest
          </NavLink>
        </div>
        <Switch>
          <Route path="/before">
            <BeforeContestsBar contest={Before} />
          </Route>
          <Route path="">
            <OngoingContestsBar contest={Ongoing} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Contest;
