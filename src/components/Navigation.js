import React from 'react';

const Navigation = (props) => {
    return (
        <div  className="py--5">
            <button onClick={props.previousPage} type="button" className="btn btn-info mr-1">Back &larr;</button>
            <button onClick={props.nextPage} type="button" className="btn btn-info">Next &rarr;</button>
        </div>
    );
};

export default Navigation;