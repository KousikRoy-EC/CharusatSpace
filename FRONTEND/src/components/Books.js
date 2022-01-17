import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

function Books(props) {
    return (
        <tr height="200px" >
            <td ><img className="Bookimg" src={props.img} /></td>
            <td >{props.title}</td>
            <td><button type="button" class="Lbtn btn btn-success">Go to Link <FaLongArrowAltUp /> </button></td>
        </tr>)
}

export default Books;