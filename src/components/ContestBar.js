import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ContestsBar(props) {
  return (
    <div>
      <div className="outer">
        <div className="icon">
          <FontAwesomeIcon icon={faCodeBranch} />
        </div>
        <div>
          <div className="name">
            <a href={props.contest.url} target="_blank" rel="noreferrer">
              {props.contest.name}
            </a>
          </div>
          <div className="time">
            <span>Start Time : {props.contest.start_time}</span>
            <span>End Time:{props.contest.end_time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContestsBar;
