import React, { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import ComentBox from "./CommentBox";
function comments(props) {
    const [tcomment, settcomment] = useState({ content: "", value: 0 });
    function submitcomment() {
        props.handlec(tcomment.content, props.Id, tcomment.value);
        settcomment({ content: "", value: 0 });
    }
    function saveComment(event) {
        settcomment({ content: event.target.value, value: new Date().getTime() });
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
                props.list.map((note, index) => {

                    return (
                        <ComentBox descr={note.content} st={note.tm}
                            Timetoday={props.Sectoday}
                        />
                    );
                }).reverse()
            }

        </div>
    );
}

export default comments;


