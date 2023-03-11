import Navbar from './Navbar';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      {/* <div className="content">
        <h1>{ title }</h1>
        <h3>{ like }</h3>

        <p>{ 10 }</p>
        <p> { 'Hellooo Ninjas' }</p>
        <p>{ [1,2,3,4,5,5,6,54,3,45,3,43] }</p>
        <p>{ Math.random() * 200 }</p>

        <a href={ link }>Oracle site</a>
      </div> */}
    </div>
  );
}

export default App;
