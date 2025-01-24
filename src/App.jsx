import './App.css';
import GeneralInfo from './components/generalInfo';
import Experience from './components/experience';
import Education from './components/education';

function App() {
  return (
    <div className="app">
      <h1>Build Your Resumé</h1>
      <div className="cv">
        <GeneralInfo />
        <Experience />
        <Education />
      </div>
    </div>
  );
}

export default App;
