import "./App.css";
import PageRoutes from "./PageRoutes";
import axios from "axios";

function App() {
  let date = new Date();
  // of the local storage does not contain list or older list
  if (
    !localStorage.getItem("date") ||
    localStorage.getItem("date") !== JSON.stringify(date.getDate())
  ) {
    localStorage.removeItem("contests");
    axios.get("https://kontests.net/api/v1/all").then(async (data) => {
      console.log(data.data);
      let contest = data.data;

      localStorage.setItem("contests", JSON.stringify(contest));
      // console.log(localStorage.getItem("contests"));
      localStorage.setItem("date", JSON.stringify(date.getDate()));
      console.log("api called!!");
    });
  }

  return (
    <div className="App">
      <PageRoutes />
    </div>
  );
}
// https://medium.com/litslink/how-to-create-google-chrome-extension-using-react-js-5c9e343323ff
export default App;
