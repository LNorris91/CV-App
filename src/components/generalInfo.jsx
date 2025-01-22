import { useState } from 'react';
import '../styles/generalInfo.css';

export default function GeneralInfo() {
  const [outputVisibility, setOutputVisibility] = useState('none');
  const [inputVisibility, setInputVisibility] = useState('block');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  function handleVisibilities() {
    setOutputVisibility(outputVisibility == 'none' ? 'block' : 'none');
    setInputVisibility(inputVisibility == 'none' ? 'block' : 'none');
  }

  return (
    <>
      <div
        className="inputs"
        style={{
          display: inputVisibility,
        }}
      >
        <h2>General Info:</h2>
        <label>
          Name:
          <input
            type="text"
            value={name}
            id="name"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            id="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={phoneNumber}
            id="phoneNumber"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </label>

        <button onClick={handleVisibilities}>Submit</button>
      </div>
      <div
        className="outputs"
        style={{
          display: outputVisibility,
        }}
      >
        <h1>{name}</h1>
        <h3>{email}</h3>
        <h3>{phoneNumber}</h3>
        <button className="editBtn" onClick={handleVisibilities}>
          Edit
        </button>
      </div>
    </>
  );
}
