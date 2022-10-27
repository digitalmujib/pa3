import React from 'react'
import AddStudent from './AddStudent'
import RemoveStudent from './RemoveStudent'
import ChangeYear from './ChangeYear'

const Popup = (props) => {

    return (
        <div className={props.active === "" ? "popup-container" : "popup-container active"}>
            <div className={props.active === "" ? "popup" : "popup active"}>
                <i class="fa-solid fa-xmark " onClick={props.set}></i>
                
                {props.type === "add" ? <AddStudent /> : props.type === "remove" ? <RemoveStudent/> : <ChangeYear/>}

            </div>
        </div>
    )
}

export default Popup