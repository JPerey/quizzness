import React from "react";

const QuizScreen = ({ handleAnswer , handleNextQuestion, handleSubmit, 
    showAnswers, quizLength, page, category, correctAnswers, data: {question, answers}}) => {

    return(
    <div>
        {page==="quiz" ? (
    <div>
        <div>
          <h2 dangerouslySetInnerHTML={{ __html:question}}/>
        </div>

        <div>
            <h3>Question # { quizLength }</h3>
        { answers.map( (answer, idx) => {
          return(
          <button key={ idx } onClick= {() => handleAnswer(answer, category)} dangerouslySetInnerHTML={{ __html:answer}}/>
        )})}
        </div>
        
        <div>
            {showAnswers=== true ?  (
            <div>
                {quizLength === 10 ? (
                    <div>
                        <h2>Correct Answers: {correctAnswers.length}</h2>
                        <h2>Out Of: { quizLength }</h2>
                    <button onClick={ handleSubmit }>Submit Quiz</button>
                    </div>
                ): (
                    <button onClick={ handleNextQuestion }>Next Question</button>
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
    )}

export default QuizScreen;