import React from "react";
import moment from "moment";

const Previous = ({ page, allQuizzes}) => {
    const format1 = "YYYY-MM-DD HH:mm";
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
                                <th>{ moment(quiz.createdAt.toString()).format(format1) }</th>
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