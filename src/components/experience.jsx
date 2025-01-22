import { useState } from 'react';
import '../styles/experience.css';
import Job from './job';

export default function Experience() {
  const [jobList, setJobList] = useState([]);

  function handleAdd() {
    setJobList([...jobList, { id: crypto.randomUUID() }]);
  }

  function handleDelete(index) {
    setJobList(jobList.filter((_, i) => i !== index));
  }

  return (
    <section className="experience">
      <h2>Experience:</h2>
      <ul>
        {jobList.map((job, index) => (
          <li key={job.id}>
            <Job />
            <button onClick={() => handleDelete(index)}>delete</button>
          </li>
        ))}
      </ul>
      <button className="newJobBtn" onClick={handleAdd}>
        Add New Job
      </button>
      <button onClick={() => console.log(jobList)}>console log jobs</button>
    </section>
  );
}
