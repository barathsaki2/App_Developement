import React, { useState } from 'react';
import './App.css';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';

const App = () => {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div className="App">
      {isRegister ? <RegisterForm /> : <LoginForm />}
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? 'Switch to Login' : 'Switch to Register'}
      </button>
    </div>
  );
};

export default App;
