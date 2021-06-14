import React from "react";

const Header = ({ handlePrevious, handleSplash }) => {

    return (
        <div>
            <div>Quizz-topia</div>
            <div>
                <button onClick={ handlePrevious }>Previous Quizzes</button>
                <button onClick={ handleSplash }>Create a Quiz</button>
            </div>
            

        </div>
        
    )
    }

    export default Header;