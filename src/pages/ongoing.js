import ContestsBar from "../components/ContestBar";

function OngoingContestsBar(props) {
  return (
    <div>
      {props.contest.map((contest) => {
        return <ContestsBar contest={contest} />;
      })}
    </div>
  );
}

export default OngoingContestsBar;
