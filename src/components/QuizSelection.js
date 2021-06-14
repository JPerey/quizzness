import React from "react";

const QuizSelection = ({handleCategoryChange, categoryMap, page}) => {

    return (
    <div>
        
            {page === "splash" ? (
                <div><h1>Please choose a quiz to take:</h1>
                {Object.keys(categoryMap).map((category, idx) =>
                <button key= { idx } onClick={() => handleCategoryChange(category)}>{category}</button>
                )}   </div>
            ): (
              <div></div>
            )}
        
        
    </div>

)
}

export default QuizSelection;