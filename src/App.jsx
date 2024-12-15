import './App.css';
import Resize from './Chat';
import ClickEvent from './ClickEvent';

const user={
  name : "Shiva",
  city : "Hyderabad",
  area : "Ameerpet"
}

function App() {
  return (
    <div className="container">
      <h1>Welcome to React
      <Resize/>
      </h1>
    </div>
  );
}

export default App;