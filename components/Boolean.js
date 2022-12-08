import React from 'react'
import { useState ,useEffect} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Boolean({
  question,
  updateSurveyContext,
  index,
  deleteQuestion,
  name: questionName = "",
})
 {
    const[name,setName] = useState(question.elements[0].name || "");
   

    useEffect(() => {
        updateSurveyContext(index, {
          elements: [
            {
              type: "boolean",
              name,             
            },
          ],
        });
      },[name])
  return (
    <div className="container">
     <div className="question-container">
       <h2>Question {index + 1} - boolean type </h2>

       <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Please enter the question"
          value={questionName}
        />
    
          <button
              type="button"
              onClick={() => {
                deleteQuestion(index);
              }}
            >
              <DeleteIcon />      
          </button>
          
                   

     </div>
    </div>
  )
}