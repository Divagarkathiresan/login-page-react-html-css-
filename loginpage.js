import React from "react";

function Login() {
  return (
    <div style={{ backgroundColor: '#f0f8ff', padding: '40px', borderRadius: '10px', width: '300px', margin: '50px auto', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)' }}>
      <header>
        <h3 style={{ color: '#4b0082', textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>
          Login
        </h3>
      </header>
      <form>
        <div style={{ marginBottom: '15px' }}>
          <label style={{display:'block',marginBottom: '10px', color: '#333' , fontweight: 'Bold'}}>Email:</label>
          <input type="text" placeholder="Enter your Mail Id" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Password:</label>
          <input type="password" placeholder="Enter your Password" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <button style={{ backgroundColor: '#4b0082', color: '#fff', padding: '10px 20px', border: '2px solid white', borderRadius: '5px', cursor: 'pointer', width: '107%', fontSize: '16px'}}>Submit</button>
      </form>
    </div>
  )
}

export default Login;
