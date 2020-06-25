import React from 'react'

function ItemCard(props){
    return(
            <div className="wrapper">
                <div className="img-wrapper"><img src = {props.img} alt ="" /></div>
                <div className="details">
                    <div className="inner">
                        <h3 className="title">{props.title}</h3>
                        <p className="price">{props.price}</p>
                    </div>
                    <p>{props.desc}</p>
                </div>
                
                
            </div>
        )
}

export default ItemCard