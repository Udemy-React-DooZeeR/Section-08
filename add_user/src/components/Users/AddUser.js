import React, { useState } from 'react';
import Card from '../UI/Card.js'
import Button from '../UI/Button.js'
import classname from './AddUser.module.css';


const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }
  const usernameAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (enteredAge < 1) {
      return;
    }
    setEnteredUsername('');
    setEnteredAge('');
  }

  return (
    <Card className={classname.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username" >Username</label>
        <input 
          id="username" 
          type="text" 
          value={enteredUsername} 
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age</label>
        <input 
          id="age" 
          type="number" 
          value={enteredAge} 
          onChange={usernameAgeHandler}
        ></input>
        <Button type="submit" >Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
