import React from 'react'
import Button from '../Button/Button'
import UserAnswerList from '../UserAnswer/UserAnswerList'
import UserScoreSummary from '../UserAnswer/UserScoreSummary'

const ResultScreen = ({ score, userAnswers, startQuiz }) => {
   const passingScore = (score / userAnswers.length) * 100 >= 80
   const percentageScore = (score / userAnswers.length) * 100

   return (
      <div>
         <UserScoreSummary
            passingScore={passingScore}
            percentageScore={percentageScore}
            score={score}
            totalQuestions={userAnswers.length}
         />
         <UserAnswerList userAnswers={userAnswers} />
         <Button styleType="end" onClick={startQuiz}>
            Powrót do startu
         </Button>
      </div>
   )
}

export default ResultScreen
