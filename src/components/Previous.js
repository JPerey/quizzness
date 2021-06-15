import React from "react";
import moment from "moment";

const Previous = ({ page, allQuizzes}) => {
    const format1 = "YYYY-MM-DD HH:mm";
    return(
        <div >
            {page === "previous" ? (
                <div className = "section">
                    <table>
                        <thead>
                            <tr className= " level ">
                                <th className=" column content is-medium is-offset-7">Date</th>
                                <th className=" column content is-medium is-offset-7">Category</th>
                                <th className=" column content is-medium is-offset-5">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allQuizzes.map((quiz, idx) => (
                            <tr key={ idx } className= " level ">
                                <th className=" column is-half is-offset-5 ">{ moment(quiz.createdAt.toString()).format(format1) }</th>
                                <th className=" column is-one-quarter is-offset-5">{ quiz.quizCategory }</th>
                                <th className=" column is-one-quarter is-offset-5">{ quiz.score }</th>
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