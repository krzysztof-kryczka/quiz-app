import Question from './Question'

const QuestionList = ({ questions, currentQuestionIndex, handleAnswerClick }) => (
   <Question
      question={questions[currentQuestionIndex]}
      index={currentQuestionIndex}
      handleAnswerClick={handleAnswerClick}
   />
)

export default QuestionList
