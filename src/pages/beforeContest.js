import ContestsBar from "../components/ContestBar";

function BeforeContestsBar(props) {
  return (
    <div>
      {props.contest.map((contest) => {
        return <ContestsBar contest={contest} />;
      })}
    </div>
  );
}

export default BeforeContestsBar;
