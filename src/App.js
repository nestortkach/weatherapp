import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="App_main">
        <h1 className="App_title">
          Weather Forecast
        </h1>
        <h2 className="App_description">
          Enter a zipcode below to get the current weather conditions for that area.
        </h2>
        <div className="App_form">
          <input
            type="text"
            placeholder="Enter zipcode..."
            className="App_input"
          />
          <div className="App_submit">
            ENTER
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
