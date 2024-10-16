import { useState } from 'react'
import './App.css'
import StartScreen from './components/StartScreen/StartScreen'
import Quiz from './components/Quiz/Quiz'

const App = () => {
   const [quizState, setQuizState] = useState('start')
   const [score, setScore] = useState(0)
   const [userAnswers, setUserAnswers] = useState([])

   const startQuiz = () => {
      setQuizState('quiz')
      setScore(0)
      setUserAnswers([])
   }

   const endQuiz = (score, answers) => {
      setScore(score)
      setUserAnswers(answers)
      setQuizState('end')
   }

   const stateComponents = {
      start: <StartScreen startQuiz={startQuiz} />,
      quiz: <Quiz endQuiz={endQuiz} />,
   }

   return <>{stateComponents[quizState]}</>
}

export default App
