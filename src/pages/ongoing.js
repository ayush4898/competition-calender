import ContestsBar from "../components/ContestBar";

function OngoingContestsBar(props) {
  return (
    <div>
      {props.contest.map((contest) => {
        if (!localStorage.getItem(contest.site))
          return <ContestsBar contest={contest} />;
      })}
    </div>
  );
}

export default OngoingContestsBar;
