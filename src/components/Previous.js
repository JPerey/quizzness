import React from "react";

const Previous = ({ page, allQuizzes}) => {
    return(
        <div>
            {page === "previous" ? (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Category</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allQuizzes.map((quiz, idx) => (
                            <tr key={ idx }>
                                <th>{ quiz.createdAt }</th>
                                <th>{ quiz.quizCategory }</th>
                                <th>{ quiz.score }</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ): (
                <div></div>
            )}
        </div>
    )
}

export default Previous;