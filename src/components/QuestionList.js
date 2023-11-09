import React, { useState, useEffect } from 'react';

const QuestionList = ({ questions }) => {
  return (
    <div>
      <h2>Question List</h2>
      <ul>
        {questions.map(question => (
          <li key={question.id}>{question.prompt}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
   
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:4000/questions');
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []); 

  return (
    <div>
      
      <QuestionList questions={questions} />
    </div>
  );
};

export default App;
