import {useEffect, useState} from"react"


function NumberToBoard( {values, handleDecClick, handleIncClick} ) {

          <td style={{border: "3px solid rgb(0, 0, 0)"}}>
          <button onClick={(event) =>handleIncClick(values)}>+</button>
           {values[0]}
           <button onClick={(event) =>handleDecClick(values)}>-</button> 
           {values[1]}
           <br></br>
           </td>

}

export default NumberToBoard