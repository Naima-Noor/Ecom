import React, { useState, useEffect } from 'react';
import axios from 'axios';

const List = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the server using Axios
    axios.get('http://localhost:5000/getApplicant')
      .then((response) => {
        // Update the 'users' state with the fetched data
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching registered users:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-4 row justify-content-center" style={{ color: 'black' }}>Registered Users</h3>
      <table className="table table-striped">
        <thead className="thead-light">
          <tr >
            <th style={{ color: '#088178' }}>Name</th>
            <th  style={{ color: '#088178' }}>Father's Name</th>
            <th style={{ color: '#088178' }}>Contact Number</th>
            <th style={{ color: '#088178' }}>Email</th>
            <th style={{ color: '#088178' }}>Address</th>
            <th style={{ color: '#088178' }}>Gender</th>
            <th style={{ color: '#088178' }}s>Description</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.fatherName}</td>
              <td>{user.contactNumber}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.gender}</td>
              <td>{user.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
