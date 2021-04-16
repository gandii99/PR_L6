import React from "react";

const Question = (props: any) => {
    return(
        <div>
            <p>Question:
                {props.currentIndex}/{props.allQuestions}</p>
            <p>{props.currentQuestions}</p>
        </div>
    )
};

export default Question;