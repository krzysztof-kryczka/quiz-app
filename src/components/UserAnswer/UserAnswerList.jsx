import UserAnswerItem from './UserAnswerItem'

const UserAnswerList = ({ userAnswers }) => (
   <ul>
      {userAnswers.map((answer, index) => (
         <UserAnswerItem key={index} answer={answer} index={index} />
      ))}
   </ul>
)

export default UserAnswerList
