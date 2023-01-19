import React, { useState } from 'react';
import Card from '../UI/Card.js'
import Button from '../UI/Button.js'
import ErrorModal from '../UI/ErrorModal.js'
import classname from './AddUser.module.css';


const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }
  const usernameAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input!', 
        message: 'Please fill all input field'
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age!', 
        message: 'Please enter a valid age (Greater than 0)!'
      });

      return;
    }
    props.onAddUser(enteredUsername,enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  }


  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} errHandler={errorHandler}/>}
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
    </div>
  );
};

export default AddUser;
