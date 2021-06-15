import React from "react";

const QuizScreen = ({ handleAnswer , handleNextQuestion, handleSubmit, 
    showAnswers, quizLength, page, category, correctAnswers, data: {question, answers, correct_answer}}) => {

    return(
    <div className= "">
    <div className= "">
    <div className= "">
        {page==="quiz" ? (
    <div >
        <div>
          <h2 className = "title" dangerouslySetInnerHTML={{ __html:question}}/>
        </div>

        <div>
            <h3>Question # { quizLength }</h3>
        { answers.map( (answer, idx) => {
            const bgColor = showAnswers ? answer === correct_answer ? "button is-success" : "button is-danger" : "button is-warning";
            //const textColor = showAnswers ? "text-white" : "text-purple-800";
          return(
          <button key={ idx } className= {` ${ bgColor } `}
           onClick= {() => handleAnswer(answer, category)} dangerouslySetInnerHTML={{ __html:answer}}/>
        )})}
        </div>
        
        <div>
            {showAnswers=== true ?  (
            <div>
                {quizLength === 10 ? (
                    <div>
                        <h2>Correct Answers: {correctAnswers.length}</h2>
                        <h2>Out Of: { quizLength }</h2>
                    <button className = "button is-warning " onClick={ handleSubmit }>Submit Quiz</button>
                    </div>
                ): (
                    <button className = "button is-warning " onClick={ handleNextQuestion }>Next Question</button>
                )
            }
            </div>
                
            ) : (
                <div></div>
            )}
            
        </div>
    </div>
    ) : (
        <div></div>
      )
      }
    </div>
    </div>
    </div>
    )}

export default QuizScreen;