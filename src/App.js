import {BrowserRouter as Router, Switch as Routes, Route} from 'react-router-dom';
//import Effortscale from './components/Effortscale.js';
import Navbar from './components/Navbar.jsx';
import TrainingList from './components/TrainingList.jsx';
// import TrainingList from './components/TrainingList.jsx';
// import Sets from './components/Sets';
import './styles/App.css';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
       <Route path='/'><TrainingList/></Route>
      </Routes>
    </Router>
  );
}

export default App;
