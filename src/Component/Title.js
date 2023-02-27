import React from 'react'

function Title(props) {
  return (
    <div>
            <h1>{props.title}</h1>
            <h1>{props.description}</h1>
    </div>
  )
}

export default Title