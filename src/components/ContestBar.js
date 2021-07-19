import "./ContestBar.css";
import Icons from "./icons";
import AddToCalender from "./AddToCalender";

function ChangeFormateDate(oldDate) {
  let a = new Date(oldDate);
  return a.toString().substr(0, 24);
}

function ContestsBar(props) {
  return (
    <div>
      <div className="outer">
        <div className="icon">
          <Icons site={props.contest.site} />
          {/* <FontAwesomeIcon icon={faCodeBranch} /> */}
        </div>
        <div className="info">
          <div className="name">
            <a href={props.contest.url} target="_blank" rel="noreferrer">
              {props.contest.name}
            </a>
          </div>
          {/* {props.contest.status === "CODING" ? ( */}
          <div className="time">
            <div className="innertime">
              Starts : {ChangeFormateDate(props.contest.start_time)}
              <small> (IST) </small>
            </div>
            <div className="innertime">
              Ends : {ChangeFormateDate(props.contest.end_time)}
              <small> (IST)</small>
            </div>
          </div>
          {/* ) : (
            <div>"hello"</div>
          )} */}
        </div>
        <div>
          <AddToCalender
            name={props.contest.name}
            url={props.contest.url}
            s={props.contest.start_time}
            e={props.contest.end_time}
          />
        </div>
      </div>
    </div>
  );
}

export default ContestsBar;
