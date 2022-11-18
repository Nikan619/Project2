
import React from 'react'
function PlayerScore({scorename, scorebank}) {
  return (
    <div className='entry'>
        <label> Player Name: {scorename}</label>
        <label> Total: $ {scorebank}</label>
    </div>
  )
}
export default PlayerScore

