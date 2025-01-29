import { useState } from 'react';
import '../styles/job.css';

export default function Job() {
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [role, setRole] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isChecked, setIsChecked] = useState(false);
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
            Company:
            <input
              type="text"
              value={company}
              id="company"
              onChange={(event) => setCompany(event.target.value)}
            />
          </label>
          <label>
            Title:
            <input
              type="text"
              value={title}
              id="title"
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label>
            Role Responsibilities:
            <textarea
              value={role}
              id="role"
              cols={30}
              rows={7}
              onChange={(event) => setRole(event.target.value)}
            ></textarea>
          </label>
          <label>
            Start Date:
            <input
              type="date"
              value={startDate}
              id="startDate"
              onChange={(event) => setStartDate(event.target.value)}
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              value={endDate}
              id="endDate"
              disabled={isChecked}
              onChange={(event) => setEndDate(event.target.value)}
            />
          </label>
          <label id="checkboxLabel">
            Currently Working?
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(event) => setIsChecked(event.target.checked)}
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
        <h2>{title}</h2>
        <h3>{company.toUpperCase()}</h3>
        <p id="duration">
          {startDate} to {isChecked ? 'Present' : endDate}
        </p>
        <p>{role}</p>
        <button className="editBtn" onClick={handleDisplays}>
          Edit
        </button>
      </section>
    </>
  );
}
