import React from 'react';

function App() {
  return (
    <div style={{
      backgroundColor: '#ffe0f0',
      minHeight: '100vh',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      color: '#a0005c',
    }}>
      <img
        src="https://via.placeholder.com/150"
        alt="Your profile"
        style={{
          borderRadius: '50%',
          marginBottom: '1rem',
          border: '4px solid #ff69b4'
        }}
      />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Alyssa James</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#c2185b' }}>
        Front-End Developer
      </h2>

      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
        <a href="https://github.com/ajames576" target="_blank" rel="noopener noreferrer"
          style={linkStyle}>
          GitHub
        </a>
        <a href="https://linkedin.com/in/alyssajames" target="_blank" rel="noopener noreferrer"
          style={linkStyle}>
          LinkedIn
        </a>
        <a href="mailto:alyssa.james576.com" style={linkStyle}>
          Email Me
        </a>
      </div>

      <p style={{ maxWidth: '500px', textAlign: 'center', fontSize: '1.1rem' }}>
        I’m passionate about designing beautiful, functional web experiences. Let's build something amazing together!
      </p>
    </div>
  );
}

// Style object for social links
const linkStyle = {
  backgroundColor: '#ff69b4',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '30px',
  textDecoration: 'none',
  fontWeight: 'bold',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  transition: 'all 0.2s ease-in-out',
  fontSize: '1rem'
};

export default App;
