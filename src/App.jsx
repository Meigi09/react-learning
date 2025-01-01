import React from 'react'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import Test from './components/Test'


const App = () => {
  return (
    <div className='body'>
      <Header/>
      <Entry/>
      <Test/>
    </div>
  )
}

export default App
