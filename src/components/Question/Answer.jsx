import Button from '../Button/Button'

const Answer = ({ answer, handleAnswerClick }) => (
   <Button styleType="answer" onClick={() => handleAnswerClick(answer)}>
      {answer.text}
   </Button>
)

export default Answer
