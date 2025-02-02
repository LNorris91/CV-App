import { useState } from 'react';
import '../styles/school.css';

export default function School() {
  const [school, setSchool] = useState('');
  const [study, setStudy] = useState('');
  const [date, setDate] = useState('');
  const [outputDisplay, setOutputDisplay] = useState('none');
  const [inputDisplay, setInputDisplay] = useState('block');

  function handleDisplays() {
    setOutputDisplay(outputDisplay == 'none' ? 'block' : 'none');
    setInputDisplay(inputDisplay == 'none' ? 'block' : 'none');
  }

  return (
    <>
      <section
        className="inputs"
        style={{
          display: inputDisplay,
        }}
      >
        <div className="inputContainer">
          <label>
            School:
            <input
              type="text"
              value={school}
              id="school"
              onChange={(event) => setSchool(event.target.value)}
            />
          </label>
          <label>
            Title of Study:
            <input
              type="text"
              value={study}
              id="study"
              onChange={(event) => setStudy(event.target.value)}
            />
          </label>
          <label>
            Date of Study:
            <input
              type="date"
              value={date}
              id="date"
              onChange={(event) => setDate(event.target.value)}
            />
          </label>
          <button className="submitBtn" onClick={handleDisplays}>
            Submit
          </button>
        </div>
      </section>
      <section
        className="outputs"
        style={{
          display: outputDisplay,
        }}
      >
        <h3 id="schoolName">{school.toUpperCase()}</h3>
        <p id="gradDate">{date}</p>
        <h3>{study}</h3>
        <button className="editBtn" onClick={handleDisplays}>
          Edit
        </button>
      </section>
    </>
  );
}
