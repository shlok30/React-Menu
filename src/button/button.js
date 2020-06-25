import React from 'react'

function Button(props){
    
    return(
        
            <h4 className={props.selectedCategory === props.id?'btn active':'btn'} onClick={()=>props.handleClick(props.name,props.id)} id={props.key}>{props.name}</h4>
        
    )
}

export default Button

