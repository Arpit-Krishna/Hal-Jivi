import React from 'react'
// import Login from './Login'

export default function User() {
  var isUserLogged = localStorage.getItem('isUserLogged');
  console.log(isUserLogged);

  function handleLogout() {
    isUserLogged = false;
    // console.log(isUserLogged)
    localStorage.setItem('isUserLogged', false);
    localStorage.setItem('currentUser', '{}');
    window.location.href = '/Login';
  }

  if (isUserLogged==='true') {
    const currUser = JSON.parse(localStorage.getItem('currentUser'));

    return (
      <div>
        <button onClick={handleLogout}>Logout</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currUser.name}</td>
              <td>{currUser.email}</td>
              <td>{currUser.phoneNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

  } else {
    window.location.href = '/Login';
  }
}
