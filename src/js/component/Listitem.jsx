import React, { useState} from "react";


function ListItem (props) {

    function deleteMyself(e) {
        e.target.parentNode.remove()
    }

    return (
        <li className="d-flex justify-content-center">
            <h3 className="m-2" >{props.todo}</h3>
            <button className="btn btn-danger " onClick={deleteMyself}>Delete!</button>
        </li>
    )
}

export default ListItem