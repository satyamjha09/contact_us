import React from 'react'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ContactHeader from './components/ContactHeader/ContactHeader';
import ContactFrom from './components/ContactFrom/ContactFrom';

const App = () => {
  return (
    <div>
      <Navigation/>
      <main className="main_container">
        <ContactHeader/>
        <ContactFrom/>
      </main>
    </div>
  )
}

export default App