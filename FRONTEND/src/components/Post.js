import React from "react";
import { MdThumbUp, MdThumbDown, MdOutlineModeComment } from "react-icons/md";
import { useState } from "react";
import Commentte from "./Comments";

function Note(props) {
    const [Likes, setLikes] = useState(10);
    const [DisLikes, setDisLikes] = useState(2);
    const [Comment, setComment] = useState(20);
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
            setLikes(Likes + 1);
            setliked((prev) => {
                return {
                    ...prev,
                    Like: false,
                };
            });

            if (liked.DisLike === false) {
                setDisLikes(DisLikes - 1);
                setliked((prev) => {
                    return {
                        ...prev,
                        DisLike: true,
                    };
                });
            }
        } else if (mood === "DisLikes" && liked.DisLike) {
            setDisLikes(DisLikes + 1);

            setliked((prev) => {
                return {
                    ...prev,
                    DisLike: false,
                };
            });

            if (liked.Like === false) {
                setLikes(Likes - 1);

                setliked((prev) => {
                    return {
                        ...prev,
                        Like: true,
                    };
                });
            }
        } else if (mood === "Comment") {
            setComment(Comment + 1);
            setshowcomments(true);
        }
    }
    return (
        <div className="imp">
            <div className="note">
                <h1>{props.Name}</h1>
                <h1>{props.Email}</h1>
                <p>{props.Post}</p>
                <hr
                    style={{
                        marginTop: "40px",
                        marginBottom: "5px",
                    }}
                />
                <div className="Bottomsec">
                    <button onClick={handleperformance} name="Likes">
                        <MdThumbUp size={20} style={{ marginRight: "10px" }} /> {Likes}
                    </button>
                    <button onClick={handleperformance} name="DisLikes">
                        <MdThumbDown size={20} style={{ marginRight: "10px" }} /> {DisLikes}
                    </button>
                    <button onClick={handleperformance} name="Comment">
                        {" "}
                        <MdOutlineModeComment
                            size={20}
                            style={{ marginRight: "10px" }}
                        />{" "}
                        {Comment}
                    </button>
                </div>

                <Commentte display={showcomments ? "contents" : "none"} handlec={props.handleComment} Id={props.id} />


            </div>
        </div>
    );
}

export default Note;
