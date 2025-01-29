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
    <section className="generalInfo">
      <div
        className="inputs"
        style={{
          display: inputVisibility,
        }}
      >
        <h2 id="generalInfoHeader">General Info</h2>
        <div className="inputContainer">
          <label>
            Name:
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </label>
          <button className="submitBtn" onClick={handleVisibilities}>
            SUBMIT
          </button>
          <div className="line" id="generalInfoLine"></div>
        </div>
      </div>
      <div
        className="outputs"
        style={{
          display: outputVisibility,
        }}
      >
        <div className="outputContainer">
          <h1 id="name">{name.toUpperCase()}</h1>
          <p id="email">{email}</p>
          <p id="phone">{phoneNumber}</p>
          <div className="line"></div>
        </div>
        <button className="editBtn" onClick={handleVisibilities}>
          Edit
        </button>
      </div>
    </section>
  );
}
