import React, { useEffect, useState } from "react";
import axios from "axios";
import ContestsBar from "../components/ContestBar";

function Contest(props) {
  const [contests, setContest] = useState([]);

  useEffect(() => {
    axios.get("https://kontests.net/api/v1/all").then(async (data) => {
      console.log(data.data);
      await setContest(data.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {contests.map((contest, index) => (
          <li key={index}>{<ContestsBar contest={contest} />}</li>
        ))}
      </ul>
    </div>
  );
}

export default Contest;
