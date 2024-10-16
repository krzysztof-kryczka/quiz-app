import { useState } from 'react'
import Button from '../Button/Button'
import css from './Quiz.module.css'

const questions = [
   { question: 'Pytanie do test numer 1?', answers: ['A', 'B', 'C', 'D'], isCorrect: 'A' },
   { question: 'Pytanie do test numer 2?', answers: ['A', 'B', 'C', 'D'], isCorrect: 'C' },
]

const Quiz = () => {
   const [currentQuestion, setCurrentQuestion] = useState(0)

   const handleAnswerClick = answer => {
      if (currentQuestion + 1 < questions.length) {
         setCurrentQuestion(currentQuestion + 1)
      } else {
         console.log('KONIEC!')
      }
   }

   return (
      <div className={css['container-question']}>
         <p className={css.question}>Pytanie: {questions[currentQuestion].question}</p>
         {questions[currentQuestion].answers.map((answer, index) => (
            <Button styleType="answer" key={index} onClick={() => handleAnswerClick(answer)}>
               {answer}
            </Button>
         ))}
      </div>
   )
}

export default Quiz
