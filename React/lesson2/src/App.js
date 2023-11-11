import Box from "./components/Box";
import info from "../src/data/Data";
import Card from "../src/components/Card";
function App() {
  console.log(info);
  return (
    <>
      <div className="App">
        <Card />
        <h1 style={{ color: "blue", fontWeight: "bold" }}>Salam</h1>
        <p>Hello everyone</p>
        {info.map((item, index) => {
          return <Box name={item.name} surname={item.username} />;
        })}
      </div>
    </>
  );
}

export default App;

// JSX - Javascript Xml
// SPA - Single Page Application
