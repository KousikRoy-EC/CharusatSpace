import React, { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import ComentBox from "./CommentBox";
function comments(props) {
    const [tcomment, settcomment] = useState("");
    function submitcomment() {
        props.handlec(tcomment, props.Id);
        settcomment("");
    }
    function saveComment(event) {
        settcomment(event.target.value);
    }

    var dis = props.display;
    return (
        <div style={{ display: dis }}>
            <div className="cssection">
                <textarea
                    name="comment"
                    className="comments"
                    required
                    value={tcomment}
                    onChange={saveComment}
                    placeholder="Comment Something . . . "
                    rows={2}
                />
                <div style={{ width: " 100%", height: "35px", marginBottom: "10px" }}>
                    <button type="submit" onClick={submitcomment}>
                        Post
                        <FaArrowAltCircleRight style={{ marginLeft: "5px" }} />
                    </button>
                </div>
            </div>
            {
                props.list.map((note, index) => {

                    return (
                        <ComentBox descr={note} />
                    );
                }).reverse()
            }

        </div>
    );
}

export default comments;


