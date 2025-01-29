import { useState } from 'react';
import '../styles/experience.css';
import Job from './job';

export default function Experience() {
  const [jobList, setJobList] = useState([{ id: crypto.randomUUID() }]);

  function handleAdd() {
    setJobList([...jobList, { id: crypto.randomUUID() }]);
  }

  function handleDelete(index) {
    setJobList(jobList.filter((_, i) => i !== index));
  }

  return (
    <section className="experience">
      <h2 id="experienceHeader">Experience</h2>
      <ul>
        {jobList.map((job, index) => (
          <li key={job.id}>
            <Job />
            <button className="deleteBtn" onClick={() => handleDelete(index)}>
              delete
            </button>
          </li>
        ))}
      </ul>
      <div className="line"></div>
      <button className="newJobBtn" onClick={handleAdd}>
        Add New Job
      </button>
    </section>
  );
}
