import React from 'react'

const Test = () => { 
  const hours= new Date().getHours()

  let timeDay;

  if(hours < 12){
    timeDay= 'morning'
  }else if(hours >=12 && hours < 18){
    timeDay= 'afternoon'
  }
  else{
    timeDay= 'evening'
  }
  return (
    <div>
      <p>Good {timeDay}</p>
    </div>
  )
}

export default Test
