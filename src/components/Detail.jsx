import React from 'react'

const Detail = (props) => {
    const {District, Name, Baseline} = props.data.data;
  return (
    <div>
        District: {District} <br/>
        Name: {Name} <br/>
        Baseline: {Baseline}
    </div>
  )
}

export default Detail