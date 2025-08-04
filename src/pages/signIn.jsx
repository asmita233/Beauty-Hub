import React from 'react';

const SignIn = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <div style={{ border: '1px solid #ccc', padding: '40px', borderRadius: '8px', width: '300px' }}>
        <h2>Sign In</h2>
        <form>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required style={{ width: '100%', padding: '8px', margin: '8px 0' }} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required style={{ width: '100%', padding: '8px', margin: '8px 0' }} />
          </div>
          <div>
            <label>
              <input type="checkbox" /> Remember Me
            </label>
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', marginTop: '10px' }}>Sign In</button>
          <div style={{ marginTop: '10px' }}>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <div style={{ marginTop: '10px' }}>
            Don't have an account? <a href="/signup">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
