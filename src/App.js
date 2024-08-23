import React, { useState } from 'react';
import '../public/style.css'; 

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: {
      sports: false,
      music: false,
      technology: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        interests: {
          ...formData.interests,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted successfully! ${formData.name}, your interests: ${Object.keys(formData.interests).filter(key => formData.interests[key]).join(', ')}`);
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Interests:</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="sports"
                checked={formData.interests.sports}
                onChange={handleChange}
              />
              Sports
            </label>
            <label>
              <input
                type="checkbox"
                name="music"
                checked={formData.interests.music}
                onChange={handleChange}
              />
              Music
            </label>
            <label>
              <input
                type="checkbox"
                name="technology"
                checked={formData.interests.technology}
                onChange={handleChange}
              />
              Technology
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
    </main>
  );
}

export default App;
