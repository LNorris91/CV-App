import { useState } from 'react';
import '../styles/education.css';
import School from './school';

export default function Education() {
  const [schoolList, setSchoolList] = useState([{ id: crypto.randomUUID() }]);

  function handleAdd() {
    setSchoolList([...schoolList, { id: crypto.randomUUID() }]);
  }

  function handleDelete(index) {
    setSchoolList(schoolList.filter((_, i) => i !== index));
  }

  return (
    <section className="education">
      <h2>Education:</h2>
      <ul>
        {schoolList.map((school, index) => (
          <li key={school.id}>
            <School />
            <button className="deleteBtn" onClick={() => handleDelete(index)}>
              delete
            </button>
          </li>
        ))}
      </ul>
      <button className="newSchoolBtn" onClick={handleAdd}>
        Add New School
      </button>
    </section>
  );
}
