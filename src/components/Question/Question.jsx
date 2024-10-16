import Answer from './Answer'
import css from './Question.module.css'

const Question = ({ question, index, handleAnswerClick }) => (
   <div className={css['container-question']}>
      <p className={css.question}>
         Pytanie {index + 1}: {question.text}
      </p>
      {question.answers.map((answer, index) => (
         <Answer key={index} answer={answer} handleAnswerClick={handleAnswerClick} />
      ))}
   </div>
)

export default Question
