import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Main.css';
export default function Main() {
    const inputRef=useRef(null)
    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>
            <ol>
                <li>You will be asked 10 questions one after another.</li>
                <li>Start your quiz</li>
            </ol>
            <form id='form'>
                <input ref={inputRef} className='' type='text' placeholder='Username*'></input>
            </form>
            <div className='start'>
                ,<Link className='btn' to={'quiz'}>Start Quiz</Link>
            </div>
        </div>
    );
}
