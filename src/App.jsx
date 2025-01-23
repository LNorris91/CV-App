import './App.css';
import GeneralInfo from './components/generalInfo';
import Experience from './components/experience';
import Education from './components/education';

function App() {
  return (
    <div className="app">
      <GeneralInfo />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
