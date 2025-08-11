import { useEffect } from "react";
import "flowbite";
import "./App.css";

function App() {
  useEffect(() => {
    import("flowbite");
  }, []);

  return <div></div>;
}

export default App;
