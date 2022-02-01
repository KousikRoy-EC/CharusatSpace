import React, { useState } from "react";
import {
    FaArrowAltCircleRight,
    FaUser,
    FaRegEnvelope,

} from "react-icons/fa";
import ComentBox from "./CommentBox";
import { HandlingComments } from '../actions/Action';

function comments(props) {
    const [e, sete] = useState(4);
    const [OPTshow, setOPTshow] = useState(false);
    const [tcomment, settcomment] = useState({ Name: "", Email: "", content: "", value: 0 });

    function submitcomment(event) {

        props.dis(HandlingComments(tcomment, props.Id));
        settcomment({ Name: "", Email: "", content: "", value: 0 });
        event.preventDefault();
    }
    function showOpt() {
        setOPTshow(true);
    }
    function saveComment(event) {

        const { name, value } = event.target;

        settcomment((prevComment) => {
            return {

                ...prevComment,
                [name]: value,
                value: new Date().getTime()
            };
        });
    }

    function loadComments() {
        sete((preve) => {
            return preve + 2;
        });
    }

    var dis = props.display;

    return (
        <div style={{ display: dis }}>
            <form onSubmit={submitcomment}>
                <div
                    style={{
                        display: OPTshow ? "block" : "none",

                        marginTop: "10px",
                    }}
                >
                    <div>
                        <FaUser size={20} style={{ marginRight: "10px" }} />
                        <input
                            required
                            className="comInput"
                            onChange={saveComment}
                            style={{
                                paddingLeft: "5px",
                                width: " 50%",
                                outline: "none",
                                height: " 30px",
                                border: "1px solid rgba(0,0,0,.125)",
                                borderRadius: "5px",
                                margin: "5px 0px",
                            }}
                            name="Name"
                            value={tcomment.Name}
                            placeholder="Name*"
                        />
                    </div>

                    <div>
                        <FaRegEnvelope size={20} style={{ marginRight: "10px" }} />
                        <input
                            className="comInput"
                            required

                            onChange={saveComment}
                            style={{
                                paddingLeft: "5px",
                                width: " 50%",
                                outline: "none",
                                height: " 30px",
                                border: "1px solid rgba(0,0,0,.125)",
                                borderRadius: "5px",
                                margin: "5px 0px",
                            }}
                            name="Email"
                            value={tcomment.Email}
                            type="Email"
                            placeholder="Email*"
                        />
                    </div>
                </div>

                <div className="cssection">
                    <textarea
                        name="content"
                        className="comments"
                        onClick={showOpt}
                        value={tcomment.content}
                        onChange={saveComment}
                        placeholder="Comment Something . . . "
                        rows={2}
                    />

                    <div style={{ width: " 100%", height: "35px", marginBottom: "10px" }}>
                        <button
                            type="submit"
                            className="D-btn"
                            style={{
                                borderRadius: "50px",
                                color: "white",
                                backgroundColor: "#4eaefd",
                            }}

                        >
                            <FaArrowAltCircleRight />
                        </button>
                    </div>
                </div>
            </form>

            {props.list
                .slice(0)
                .reverse()
                .slice(0, e)
                .map((note, index) => {
                    return (
                        <ComentBox
                            AdminName={note.name}
                            descr={note.content}
                            st={note.tm}
                            key={index}
                            Timetoday={props.Sectoday}
                        />
                    );
                })}
            <div
                style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "flex-start",
                }}
            >
                <button
                    onClick={loadComments}
                    style={{
                        color: "white",
                        width: "150px",
                        fontWeight: "500",
                        fontSize: "16px",
                    }}
                    type="button"
                    className="btn btn-info"
                >
                    Load Comments
                </button>
            </div>
        </div>
    );
}

export default comments;
