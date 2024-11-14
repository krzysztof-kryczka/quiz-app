import css from './UserAnswerItem.module.css'

const UserAnswerItem = ({ answer, index }) => (
   <li>
      <span className={css.question}>
         Pytanie Nr {index + 1}: {answer.question}
      </span>{' '}
      <br /> Twoja odpowiedź:{' '}
      <span className={answer.isCorrect ? css['answer-correct'] : css['answer-incorrect']}>{answer.answer}</span>
   </li>
)

export default UserAnswerItem
