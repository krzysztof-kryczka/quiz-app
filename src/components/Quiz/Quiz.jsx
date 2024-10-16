import { useState } from 'react'
import Button from '../Button/Button'
import css from './Quiz.module.css'
import { QUESTIONS } from '../../quizQuestions'

const Quiz = () => {
   const [currentQuestion, setCurrentQuestion] = useState(0)

   const handleAnswerClick = answer => {
      if (currentQuestion + 1 < QUESTIONS.length) {
         setCurrentQuestion(currentQuestion + 1)
      } else {
         console.log('KONIEC!')
      }
   }

   return (
      <div className={css['container-question']}>
         <p className={css.question}>
            Pytanie {currentQuestion + 1}: {QUESTIONS[currentQuestion].text}
         </p>
         {QUESTIONS[currentQuestion].answers.map((answer, index) => (
            <Button styleType="answer" key={index} onClick={() => handleAnswerClick(answer)}>
               {answer.text}
            </Button>
         ))}
      </div>
   )
}

export default Quiz
