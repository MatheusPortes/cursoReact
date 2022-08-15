import React from 'react'
import ReactSpan from '../../Components/ReactSpan/ReactSpan'
import Title from '../../Components/Title/Title'

const Home = () => {
  
  return (
    <div>
      <Title text="Home" />
      <strong>
        <p>Esta é a Home do site</p>
      </strong>
      <ReactSpan content='aula - 1'/>
    </div>
  )
}

export default Home
