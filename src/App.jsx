import { useState } from 'react'
import './App.css'
import StartScreen from './components/StartScreen/StartScreen'
import Quiz from './components/Quiz/Quiz'

function App() {
   return (
      <>
         <StartScreen />
         <Quiz />
      </>
   )
}

export default App
