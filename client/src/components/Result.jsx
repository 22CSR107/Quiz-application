import React from 'react'
import '../styles/Result.css'
import { Link } from 'react-router-dom'
export default function Result() {
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>
        <div className='result flex-center'>
          <div className='flex'>
            <span>Username</span>
            <span className='bold'>Daily Tution</span>
          </div>
          <div className='flex'>
            <span>Total Quiz points</span>
            <span className='bold'>50</span>
          </div>
          <div className='flex'>
            <span>Total Questions</span>
            <span className='bold'>5</span>
          </div>
          <div className='flex'>
            <span>Total Attempts</span>
            <span className='bold'>3</span>
          </div>
          <div className='flex'>
            <span>Quiz result</span>
            <span className='bold'>Passed</span>
          </div>
        </div>

        <div className='start'>
          <Link></Link>
        </div>
    </div>
  )
}
