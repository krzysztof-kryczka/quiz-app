import React from 'react'
import Button from '../Button/Button'
import css from './ResultScreen.module.css'

const ResultScreen = ({ score, userAnswers, startQuiz }) => {
   const passingScore = (score / userAnswers.length) * 100 >= 80
   const percentageScore = (score / userAnswers.length) * 100

   return (
      <div>
         <h2 className={passingScore ? css.pass : css.fail}>
            {passingScore ? 'Gratulacje! Quiz zaliczony' : 'Niestety. Quiz niezaliczony'}
         </h2>
         <p>
            Twój wynik to:{' '}
            <span className={passingScore ? css['pass'] : css['fail']}>{percentageScore.toFixed(2)} %</span> ({score} z{' '}
            {userAnswers.length} poprawnych odpowiedzi)
         </p>
         <ul>
            {userAnswers.map((answer, index) => (
               <li key={index}>
                  <span className={css.question}>Pytanie Nr {index + 1}: {answer.question}</span> <br /> Twoja
                  odpowiedź:{' '}
                  <span className={answer.isCorrect ? css['answer-correct'] : css['answer-incorrect']}>
                     {answer.answer}
                  </span>
               </li>
            ))}
         </ul>
         <Button styleType="end" onClick={startQuiz}>
            Powrót do startu
         </Button>
      </div>
   )
}

export default ResultScreen
