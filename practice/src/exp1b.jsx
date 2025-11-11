import React from 'react';

function ListRender() {
  const students = [
    { id: 1, name: 'Balaji', course: 'MERN Stack' },
    { id: 2, name: 'Ravi', course: 'Python Full Stack' },
    { id: 3, name: 'Sita', course: 'Data Science' },
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Student List 👨‍🎓</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {students.map((student) => (
          <li
            key={student.id}
            style={{
              background: '#f0f0f0',
              margin: '10px auto',
              width: '300px',
              padding: '10px',
              borderRadius: '8px',
            }}
          >
            <strong>{student.name}</strong> — {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListRender;
