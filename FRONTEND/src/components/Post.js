import React from "react";
import { MdThumbUp, MdThumbDown, MdOutlineModeComment } from "react-icons/md";
import { useState } from "react";
import Commentte from "./Comments";

function Note(props) {
    const [showcomments, setshowcomments] = useState(false);
    const [liked, setliked] = useState({
        Like: true,
        DisLike: true,
    });
    // function handleClick() {
    //     props.onDelete(props.id);
    // }

    // function handleComment() {
    //     props.handleComment(props.id);
    // }

    function handleperformance(event) {
        var mood = event.target.name;
        if (mood === "Likes" && liked.Like) {
            props.setLikesDisLikes(props.id, "L+", props.Likes + 1);

            setliked((prev) => {
                return {
                    ...prev,
                    Like: false,
                };
            });

            if (liked.DisLike === false) {
                props.setLikesDisLikes(props.id, "DL-", props.DisLikes - 1);
                setliked((prev) => {
                    return {
                        ...prev,
                        DisLike: true,
                    };
                });
            }
        } else if (mood === "DisLikes" && liked.DisLike) {
            props.setLikesDisLikes(props.id, "DL+", props.DisLikes + 1);
            setliked((prev) => {
                return {
                    ...prev,
                    DisLike: false,
                };
            });

            if (liked.Like === false) {
                props.setLikesDisLikes(props.id, "L-", props.Likes - 1);
                setliked((prev) => {
                    return {
                        ...prev,
                        Like: true,
                    };
                });
            }
        } else if (mood === "Comment") {
            setshowcomments(true);
        }
    }
    return (
        <div className="imp">
            <div className="note">
                <h1>{props.Name}</h1>

                <p>{props.Post}</p>
                <hr
                    style={{
                        marginTop: "40px",
                        marginBottom: "5px",
                    }}
                />
                <div className="Bottomsec">
                    <button onClick={handleperformance} name="Likes">
                        <MdThumbUp size={20} style={{ marginRight: "10px" }} /> {props.Likes}
                    </button>
                    <button onClick={handleperformance} name="DisLikes">
                        <MdThumbDown size={20} style={{ marginRight: "10px" }} /> {props.DisLikes}
                    </button>
                    <button onClick={handleperformance} name="Comment">
                        {" "}
                        <MdOutlineModeComment
                            size={20}
                            style={{ marginRight: "10px" }}
                        />{" "}
                        {props.comment.length}
                    </button>
                </div>

                <Commentte
                    display={showcomments ? "contents" : "none"}
                    handlec={props.handleComment}
                    Id={props.id}
                    list={props.comment}
                />
            </div>
        </div>
    );
}

export default Note;
