import React from 'react';

const EditExpensePage = (props) => {
    return (
        <div>
            Edit the expense with the if of {props.match.params.id}
        </div>
    );
};

export default EditExpensePage;
