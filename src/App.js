import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Opening from "./components/Opening";

function App() {
  // const fs = require("fs");
  // const quote = "Live More, Worry Less :)";

  // const [, , fileCount] = process.argv;

  // for(let numCount=1; numCount<=fileCount; numCount++){
  //   const fileName = "./text-" + numCount;
  //   fs.writeFile(fileName, quote, (err)=>{
  //     console.log("Finished writing new file....!")
  //   })
  // }

  return (
    <Router>
      <Appbar />
      <Opening />
    </Router>
  );
}

export default App;
