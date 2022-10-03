import './App.css';
import AssignmentMark from './components/AssignmentMark/AssignmentMark';
import NavBar from './components/NavBar/NavBar';
import PhoneBar from './components/PhoneBar/PhoneBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Pricing></Pricing>
      <AssignmentMark></AssignmentMark>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
