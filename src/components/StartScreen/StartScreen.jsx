import Button from '../Button/Button'

const StartScreen = ({ startQuiz }) => (
   <div>
      <h1>JavaScript Quiz!</h1>
      <Button styleType="start" onClick={startQuiz}>
         Rozpocznij Quiz
      </Button>
   </div>
)

export default StartScreen
