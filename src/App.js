import React from 'react';
import BloggersList from './components/BloggersList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>互联网优质博主导航</h1>
      </header>
      <main>
        <BloggersList />
      </main>
      <footer>
        <p>© 2024 互联网优质博主导航. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;