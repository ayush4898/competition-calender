/*global chrome*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

let style = {
  height: "22px",
  width: "22px",
  borderRadius: "50%",
  color: "lightgreen",
  margin: "15px",
  cursor: "pointer",
};
var event = {
  summary: "Google I/O 2015",
  location: "800 Howard St., San Francisco, CA 94103",
  description: "A chance to hear more about Google's developer products.",
  start: {
    dateTime: "2015-05-28T09:00:00-07:00",
    timeZone: "America/Los_Angeles",
  },
  end: {
    dateTime: "2015-05-28T17:00:00-07:00",
    timeZone: "America/Los_Angeles",
  },
  recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
  attendees: [{ email: "lpage@example.com" }, { email: "sbrin@example.com" }],
  reminders: {
    useDefault: false,
    overrides: [
      { method: "email", minutes: 24 * 60 },
      { method: "popup", minutes: 10 },
    ],
  },
};

function AddToCalender(props) {
  const handleClick = () => {
    const s = new Date(props.s)
      .toISOString()
      .replace(/-/g, "")
      .replace(/:/g, "");
    const e = new Date(props.e)
      .toISOString()
      .replace(/-/g, "")
      .replace(/:/g, "");
    const calendarTime = `${s}/${e}`;
    let url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      props.name
    )}&dates=${calendarTime}&location=${
      props.url
    }&pli=1&uid=&sf=true&output=xml#eventpage_6`;
    if (chrome.tabs) chrome.tabs.create({ url: url });
    else {
      console.log(url);
    }
  };

  return (
    <FontAwesomeIcon
      icon={faCalendarCheck}
      style={style}
      onClick={handleClick}
    />
  );
}

export default AddToCalender;
