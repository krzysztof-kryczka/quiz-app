# Quiz APP

## Application made with React + VITE

This project is an example that was built along the React course. Every part of this project is sample code which shows how to do following:

DEMO: https://krzysztof-kryczka.github.io/quiz-app/

## Installation

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```
2. Change to the project directory:
   ```bash
   cd [repository-name]
   ```
3. Install and start dependencies:
   ```bash
   npm install
   npm run dev
   ```
   These commands install node modules and run an application along.
   The application should now be accessible in your web browser at:
   http://localhost:5173/.

# Database

## QUESTIONS structure:

file: quizQuestions.js

```json
export const QUESTIONS = [
   {
      text: Question...?',
      answers: [
         {
            text: 'Answer 1.',
            isCorrect: false,
         },
         {
            text: 'Answer 2.',
            isCorrect: true,
         },
         {
            text: 'Answer 3.',
            isCorrect: false,
         },
         { text: 'Answer 4.',
         isCorrect: false },
      ],
   },
   ...
]
```
