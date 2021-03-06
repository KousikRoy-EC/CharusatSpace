import React from "react";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

function Members(props) {
    return (
        <div className="card">
            <div className="card__content">
                <h3 className="card__header">{props.NAME} </h3>
                <p className="card__info">{props.ROLE}</p>
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
