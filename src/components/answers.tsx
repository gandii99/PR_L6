import React from "react";
import Table from "./table/table";

const Answers = (props: any) => {
    return (
        <Table markedAnswer={props.markedAnswer}
               checkAnswer={props.checkAnswer}
               answer={props.currentAnswer}
        >

        </Table>
    )
};

export default Answers;

