import css from './UserAnswerItem.module.css'

const UserScoreSummary = ({ passingScore, percentageScore, score, totalQuestions }) => (
   <>
      <h2 className={passingScore ? css.pass : css.fail}>
         {passingScore ? 'Gratulacje! Quiz zaliczony' : 'Niestety. Quiz niezaliczony'}
      </h2>
      <p>
         Twój wynik to: <span className={passingScore ? css.pass : css.fail}>{percentageScore.toFixed(2)}%</span> (
         {score} z {totalQuestions} poprawnych odpowiedzi)
      </p>
   </>
)

export default UserScoreSummary
