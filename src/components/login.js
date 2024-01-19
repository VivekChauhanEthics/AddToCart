
import React, { useState } from 'react';
import "./css/login.css";
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Initialize Firebase 
const firebaseConfig = {
  apiKey: 'AIzaSyBFjG_bQBep5uwxHMNBfighddqvC4VRukw',
  authDomain: 'add-to-cart-331f9.firebaseapp.com',
  projectId: 'add-to-cart-331f9',
  storageBucket: 'add-to-cart-331f9.appspot.com',
  messagingSenderId: '791631730594',
  appId: '1:791631730594:web:7c2afa4da4d61e185504fb',
  measurementId: 'G-RZ6828G3QK',
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

function LoginForm({ onLogin }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  }; 
  
  const validateFullname = (fullName) => {
    return fullName.trim().length >= 4;
  };

  const handleRegister = async () => {

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    } else {
      setPasswordError('');
    }

    if (!validateFullname(fullName)) {
      setFullNameError('Full name must be at least 4 characters long.');
      return;
    } else {
      setFullNameError('');
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Full Name:', fullName);
      setEmail('');
      setPassword('');
      setFullName('');
      console.log('You are registered successfully!');
      alert('You are registered successfully!');
    } catch (error) {
      console.error('Error during registration:', error.message);
      alert('Error during registration:', error.message);
    }
  };

  const handleLogin = async () => {

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    } else {
      setPasswordError('');
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setEmail('');
      setPassword('');
      console.log('You are signed in successfully:', user);
      alert('You are signed in successfully:', user);
     

      onLogin();
    } catch (error) {
      console.error('Error during login:', error.message);
      alert('Error during login:', error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
  
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      console.log('Google login successful:', user);
      alert('You are login with Google  successfully:', user);
  
      onLogin(); 
    } catch (error) {
      console.error('Error during Google login:', error.message);
      alert('Error during Google login:', error.message);
    }
  };
  
  const imgUrl = "https://iglebestg.ebizontech.biz/images/login/login8464.png";

  return (
    <div className='loginCont'>
        <div>
            <img src={imgUrl} alt='image-login' className='img-fluid loginImage'/>
        </div>
        <div className='ms-lg-5 loginInputs'>
            <h1 className='text-center'>{isRegistering ? 'Register' : 'Login'}</h1>
            {isRegistering ? (
                <div className='loginInputField'>
                  <div>
                    <label className='mt-3' type="text">Full Name</label><br/>
                    <input className='p-1' type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} style={{ width: "300px", background: "#ecf1fe", border: "1px solid #ced4da" }} />
                    {fullNameError && <p className="text-danger m-0" style={{fontSize:"12px"}}>{fullNameError}</p>}
                  </div>
                  <div>
                    <label className='mt-3' type="text">Email</label><br/>
                    <input className='p-1' type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{width:"300px", background:"#ecf1fe", border:"1px solid #ced4da"}}/>
                    {emailError && <p className="text-danger m-0" style={{fontSize:"12px"}}>{emailError}</p>}
                  </div>
                  <div>
                    <label className='mt-3' type="text">Password</label><br/>
                    <input className='p-1'  type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{width:"300px", background:"#ecf1fe", border:"1px solid #ced4da"}}/>
                    {passwordError && <p className="text-danger m-0" style={{fontSize:"12px"}}>{passwordError}</p>}
                  </div>
                  <button className='mt-4 p-1 bg-primary text-white' onClick={handleRegister} style={{width:"300px", border:"1px solid #ced4da"}}>Register</button>
                </div>
                ) : (
                  <div className='loginInputField'>
                    <div>
                      <label className='mt-4 ' type="text">Email</label><br/>
                      <input className='p-1' type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{width:"300px", background:"#ecf1fe", border:"1px solid #ced4da"}}/>
                      {emailError && <p className="text-danger m-0" style={{fontSize:"12px"}}>{emailError}</p>}
                    </div>
                    <div>
                      <label className='mt-3' type="text">Password</label><br/>
                      <input className='p-1'  type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{width:"300px", background:"#ecf1fe", border:"1px solid #ced4da"}}/>
                      {passwordError && <p className="text-danger m-0" style={{fontSize:"12px"}}>{passwordError}</p>}
                    </div>
                    <button className='mt-4 p-1 bg-primary text-white' onClick={handleLogin} style={{width:"300px", border:"1px solid #ced4da"}}>Login</button>
                    <button className='mt-4 pb-1 pt-2  text-white justify-content-center d-flex border-0' onClick={handleGoogleLogin} style={{width:"300px", border:"1px solid #ced4da"}}>
                      <img className='img-fluid' style={{width:"26px", height:"26px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII=" />
                      <h6 className='ms-2 text-dark'>Continue with Google</h6>
                    </button>
                  </div>
                 )}
            <p className='mt-2 text-primary text-center' onClick={() => setIsRegistering(!isRegistering)} style={{ cursor: 'pointer' }}>
                {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
            </p>
        </div>
    </div>
  );
}

export default LoginForm;
