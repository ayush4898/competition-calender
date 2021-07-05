import { faCodeBranch, faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContestBar.css";
function ChangeFormateDate(oldDate) {
  return oldDate.toString().split("-").reverse().join("-");
}

function ContestsBar(props) {
  return (
    <div>
      <div className="outer">
        <div className="icon">
          <FontAwesomeIcon icon={faCodeBranch} />
        </div>
        <div className="info">
          <div className="name">
            <a href={props.contest.url} target="_blank" rel="noreferrer">
              {props.contest.name}
            </a>
          </div>
          <div className="time">
            <span>Start Time : {props.contest.start_time}</span>
            <span>
              End Time:{ChangeFormateDate(props.contest.end_time.split("T")[0])}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContestsBar;
