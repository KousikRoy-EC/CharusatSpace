import React, { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import ComentBox from "./CommentBox";
function comments(props) {
    const [e, sete] = useState(4);
    const [tcomment, settcomment] = useState({ content: "", value: 0 });
    function submitcomment() {
        props.handlec(tcomment.content, props.Id, tcomment.value);
        settcomment({ content: "", value: 0 });
    }
    function saveComment(event) {
        settcomment({ content: event.target.value, value: new Date().getTime() });
    }

    function loadComments() {
        sete((preve) => {
            return preve + 2;
        })


    }

    var dis = props.display;

    return (
        <div style={{ display: dis }}>

            <div className="cssection">
                <textarea
                    name="comment"
                    className="comments"

                    value={tcomment.content}
                    onChange={saveComment}
                    placeholder="Comment Something . . . "
                    rows={2}
                />
                <div style={{ width: " 100%", height: "35px", marginBottom: "10px" }}>
                    <button type="submit" className="D-btn" style={{ borderRadius: "50px", color: "white", backgroundColor: "#4eaefd" }} onClick={submitcomment}>

                        <FaArrowAltCircleRight />
                    </button>
                </div>
            </div>

            {
                props.list.slice(0).reverse().slice(0, e).map((note, index) => {

                    return (
                        <ComentBox descr={note.content} st={note.tm}
                            key={index}
                            Timetoday={props.Sectoday}
                        />
                    );
                })
            }
            <div style={{ color: "white", display: "flex", justifyContent: "flex-start" }}>
                <button onClick={loadComments} style={{
                    color: "white", width: "150px", fontWeight: "500",
                    fontSize: "16px"
                }} type="button" class="btn btn-info">Load Comments</button>
            </div>
        </div>
    );
}

export default comments;


