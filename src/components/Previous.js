import React from "react";

const Previous = ({ page, }) => {
    return(
        <div>
            {page === "previous" ? (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Category</th>
                                <th>Details</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            
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