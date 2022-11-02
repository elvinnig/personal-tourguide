import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./Question.css";
 
const Question = ({ title, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

const handClick = () => {
  setShowAnswer(!showAnswer);
};

  const handleClick = () => {
      setShowAnswer(!showAnswer);
  };

  return (
    <div className = "lata question" >
      <div className='question-title --flex-between'>
        <h4>{title}</h4>

        <button className='question-icon' onClick={handleClick}>
          {showAnswer ? ( 
            <AiOutlineMinus color = "red" />
          ) : (
            <AiOutlinePlus color = "#1f93ff" />
            )}
            </button>
        </div>
        <div className='question-answer'>
          {showAnswer && <p className='--text-m --py'>
          {answer}</p>}
        </div>
    </div>
  );
};

export default Question;