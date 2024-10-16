import { useState } from 'react'
import { QUESTIONS } from '../../quizQuestions'
import QuestionList from '../Question/QuestionList'

const Quiz = ({ endQuiz }) => {
   const [currentQuestion, setCurrentQuestion] = useState(0)
   const [userAnswers, setUserAnswers] = useState([])
   const [score, setScore] = useState(0)

   const handleAnswerClick = answer => {
      const updatedAnswers = [
         ...userAnswers,
         { question: QUESTIONS[currentQuestion].text, answer: answer.text, isCorrect: answer.isCorrect },
      ]

      setUserAnswers(updatedAnswers)

      if (answer.isCorrect) {
         setScore(score + 1)
      }

      if (currentQuestion + 1 < QUESTIONS.length) {
         setCurrentQuestion(currentQuestion + 1)
      } else {
         endQuiz(score + (answer.isCorrect ? 1 : 0), updatedAnswers)
      }
   }

   return (
      <QuestionList
         questions={QUESTIONS}
         currentQuestionIndex={currentQuestion}
         handleAnswerClick={handleAnswerClick}
      />
   )
}

export default Quiz
