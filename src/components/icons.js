import hackerrank from "./logo/hackerrank.png";
import atcoder from "./logo/atcoder.png";
import google from "./logo/google.png";
import codechef from "./logo/codechef.jpeg";
import codeforces from "./logo/codeforces.png";
import hackerearth from "./logo/hackerearth .png";
import topcoder from "./logo/topcoder.png";
import LeetCode from "./logo/LeetCode.png";
import toph from "./logo/toph.png";

function Icons(props) {
  switch (props.site) {
    case "HackerRank":
      return (
        <img
          src={hackerrank}
          alt="logo"
          style={{ marginTop: "15%", height: "80%", width: "80%" }}
        />
      );
    case "CodeChef":
      return (
        <img
          src={codechef}
          alt="logo"
          style={{ marginTop: "15%", height: "70%", width: "70%" }}
        />
      );
    case "HackerEarth":
      return (
        <img
          src={hackerearth}
          alt="logo"
          style={{ marginTop: "15%", height: "60%", width: "60%" }}
        />
      );
    case "TopCoder":
      return (
        <img
          src={topcoder}
          alt="logo"
          style={{ marginTop: "15%", height: "70%", width: "70%" }}
        />
      );
    case "AtCoder":
      return (
        <img
          src={atcoder}
          alt="logo"
          style={{ marginTop: "15%", height: "70%", width: "70%" }}
        />
      );
    case "LeetCode":
      return (
        <img
          src={LeetCode}
          alt="logo"
          style={{ marginTop: "15%", height: "70%", width: "70%" }}
        />
      );
    case "Kick Start":
      return (
        <img
          src={google}
          alt="logo"
          style={{ marginTop: "15%", height: "60%", width: "60%" }}
        />
      );
    case "CodeForces":
      return (
        <img
          src={codeforces}
          alt="logo"
          style={{ marginTop: "15%", height: "80%", width: "80%" }}
        />
      );
    case "Toph":
      return (
        <img
          src={toph}
          alt="logo"
          style={{ marginTop: "15%", height: "70%", width: "70%" }}
        />
      );

    default:
      return <div>Logo</div>;
  }
}

export default Icons;
