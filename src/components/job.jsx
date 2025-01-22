import { useState } from 'react';

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
        <label>
          Currently Working?
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(event) => setIsChecked(event.target.checked)}
          />
        </label>
        <button onClick={handleDisplays}>Submit</button>
      </section>
      <section
        className="outputs"
        style={{
          display: outputDisplay,
        }}
      >
        <h1>{company}</h1>
        <h4>{title}</h4>
        <p>{role}</p>
        <p>from: {startDate}</p>
        <p
          style={{
            display: isChecked ? 'none' : 'block',
          }}
        >
          to: {endDate}
        </p>
        <button className="editBtn" onClick={handleDisplays}>
          Edit
        </button>
      </section>
    </>
  );
}
