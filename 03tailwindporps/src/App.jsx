import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-2xl mb-4">tailwind test</h1>
      <Card username="rahul" imgtag="god" />
      <Card username="raijien" imgtag="demon" />
    </>
  );
}

export default App;
