import React from "react";

const QuizScreen = ({ handleAnswer , handleNextQuestion, handleSubmit, 
    showAnswers, quizLength, score, page, data: {question, correct_answer, answers}}) => {

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
          <button key={ idx } onClick= {() => handleAnswer(answer)} dangerouslySetInnerHTML={{ __html:answer}}/>
        )})}
        </div>
        
        <div>
            {showAnswers=== true ?  (
            <div>
                {quizLength === 10 ? (
                    <div>
                        <p>Quiz finished! Your score is { score }</p>
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