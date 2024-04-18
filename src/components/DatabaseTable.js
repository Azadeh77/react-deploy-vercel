import React, { useState, useEffect } from 'react';

const DatabaseTable = () => {
  const [loginInformation, setLoginInformation] = useState([]);

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => {
        setLoginInformation(data.loginInformation);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Database Table</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {loginInformation.map((row, index) => (
            <tr key={index}>
              <td>{row.username}</td>
              <td>{row.password}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DatabaseTable;