import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import Icons from "../../components/icons";
import "./setting.css";
let contests = [
  "CodeForces",
  "TopCoder",
  "AtCoder",
  "CodeChef",
  "HackerRank",
  "HackerEarth",
  "Kick Start",
  "LeetCode",
  "Toph",
];

const Settings = () => {
  const [isHidden, sethidden] = useState([]);
  useEffect(() => {
    let change = (array) => sethidden(array);
    let array = [];
    contests.map((contest) => {
      if (localStorage.getItem(contest)) {
        array.push(contest);
      }
    });
    change(array);
  }, []);

  const handleChange = (contest) => {
    console.log(contest);
    if (localStorage.getItem(contest)) {
      localStorage.removeItem(contest);
      sethidden([]);
    } else {
      localStorage.setItem(contest, true);
      sethidden([]);
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "rgb(135,176,218)",
          height: "30px",
          fontSize: "20px",
          fontWeight: "500",
          paddingTop: "7px",
        }}
      >
        Subscribed Platforms
      </div>
      <ul className="outer_list">
        {contests.map((contest) => (
          <li className="inner_list">
            <div className="icon">
              <Icons site={contest} />
            </div>
            <div className="name_container">{contest}</div>
            <div className="switch">
              {localStorage.getItem(contest) ? (
                <Switch
                  onChange={() => handleChange(contest)}
                  checked={false}
                  className="react-switch"
                />
              ) : (
                <Switch
                  onChange={() => handleChange(contest)}
                  checked={true}
                  className="react-switch"
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Settings;
