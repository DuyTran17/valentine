import logo from './logo.svg';
import './App.css';
import Yes from './Yes/Yes';
import Home from './Home/Home';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/"
            element={
              <Home />} />
          <Route path="/<3"
            element={
              <Yes />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
