import React from "react";
import githubLogo from "../components/logo/GitHub.png";
let style = {
  img: {
    height: "30%",
    width: "30%",
    marginTop: "25%",
  },
};

function Github(props) {
  return (
    <div>
      <a
        href="https://github.com/ayush4898/competition-calender"
        target="__blank"
      >
        <img src={githubLogo} alt="Github" style={style.img} />
        <p>Github</p>
      </a>
    </div>
  );
}

export default Github;
