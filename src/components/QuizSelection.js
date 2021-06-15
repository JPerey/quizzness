import React from "react";

const QuizSelection = ({handleCategoryChange, categoryMap, page}) => {

    return (
    <div>{page === "splash" ? (
      <div><h1 className = "title">Please choose a quiz to take:</h1>
      <div className="columns is-multiline">
        
            {Object.keys(categoryMap).map((category, idx) =>

            <button className = "column button is-ghost is-warning " key= { idx } onClick={() => handleCategoryChange(category)}>{category}</button>

            )}   </div>    
      </div>
            ): (
              <div></div>
            
        
        
    )}
    </div>

)
}

export default QuizSelection;