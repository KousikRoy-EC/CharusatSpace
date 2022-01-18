import React from "react"
import { FaArrowAltCircleRight } from "react-icons/fa";
function comments(props) {
    var dis = props.display;
    return (<div style={{ display: dis }}><textarea
        name="Post"
        className="comments"
        required
        placeholder="Comment Something . . . "
        rows={2}
    />
        <button type="submit" >
            Post
            <FaArrowAltCircleRight style={{ marginLeft: "5px" }} />
        </button>
    </div>)
}

export default comments;