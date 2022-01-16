import React from "react";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

function Members(props) {
    return (
        <div class="card">
            <div class="card__content">
                <h3 class="card__header">{props.NAME} </h3>
                <p class="card__info">{props.ROLE}</p>
                <a href={props.F} target="_blank">
                    <FaFacebookSquare
                        size="2em"
                        style={{ color: "white" }}
                        className="icon"
                    />
                </a>
                <a href={props.I} target="_blank">
                    <FaInstagram size="2em" style={{ color: "white" }} className="icon" />
                </a>
                <a href={props.L} target="_blank">
                    <FaLinkedin size="2em" style={{ color: "white" }} className="icon" />
                </a>
            </div>
        </div>
    );
}

export default Members;
