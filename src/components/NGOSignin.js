// // src/SignIn.js
// import React from 'react';
// import './SignIn.css';
// import { Link } from 'react-router-dom';

// function NGOSignIn() {
//   const handleSignIn = (e) => {
//     e.preventDefault();
//     // Add your sign-in logic here
//     console.log('Sign In form submitted');
//   };

//   return (
//     <div className="sign-in-form">
//       <h2> NGO Sign In</h2>
//       <form onSubmit={handleSignIn}>
//         <div className="form-group">
//           <label htmlFor="email">Email address</label>
//           <input type="email" id="email" placeholder="Enter your email" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" placeholder="Enter your password" required />
//         </div>
//         <button type="submit" className="submit-btn" >Sign In</button>
//       </form>
//       <p className="signup-link">
//   Don't have an account? <Link to="/NGOregistration">Sign Up</Link>
  
// </p>

//     </div>
//   );
// }



// export default NGOSignIn;


// src/SignIn.js
import React from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NGOSignIn() {
  const navigate = useNavigate(); // Hook for navigation

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here, like API calls or validation
    console.log('Sign In form submitted');
    
    // After successful sign-in, navigate to another page (e.g., dashboard)
    navigate('/dashboard'); // Change this to your desired route
  };

  return (
    <div className="sign-in-form">
      <h2> NGO Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="submit-btn">Sign In</button>
      </form>
      <p className="signup-link">
        Don't have an account? <Link to="/NGOregistration">Sign Up</Link>
      </p>
    </div>
  );
}

export default NGOSignIn;
