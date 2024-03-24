import React from 'react'
import './Quiz.css'

const Quiz = () => {
    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            <h2>Which device</h2>
            <ul>
                <li>MOdern</li>
                <li>dfag</li>
                <li>dfegehr</li>
                <li>imee</li>
            </ul>
            <button>Next</button>
            <div className="index">
                1 of 5 questions
            </div>
        </div>
    )
}

export default Quiz;