import React from 'react'
import ReactSpan from '../../Components/ReactSpan/ReactSpan'

const Home = () => {
  return (
    <div>
      <h1 style={{ color: 'green' }}>Home</h1>
      <strong>
        <p>Esta é a Home do site</p>
      </strong>
      <ReactSpan content='aula - 1'/>
    </div>
  )
}

export default Home
