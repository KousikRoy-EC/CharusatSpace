import React from "react";
import { MdThumbUp, MdThumbDown, MdOutlineModeComment } from "react-icons/md";
import { useState } from "react";
import Commentte from "./Comments";
import dot from "../Photos/dots.png";
function Note(props) {
    const [showcomments, setshowcomments] = useState(false);
    const [liked, setliked] = useState({
        Like: true,
        DisLike: true,
    });
    function handledel() {
        props.onDelete(props.id);
    }

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
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <div className="Mpost">
                        <img
                            className="Cavatar"
                            style={{ height: "48px", width: "48px", margin: "5px 10px" }}
                            src="http://bootdey.com/img/Content/user_1.jpg"
                        ></img>
                        <span style={{ display: "block" }}>
                            {" "}
                            <h6 style={{ marginBottom: "5px" }}>{props.Name}</h6>
                            <h6 style={{ marginTop: "0px" }}>1 minute ago</h6>
                        </span>
                    </div>
                    <div class="dropdown">
                        <button class="btn Cbtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img style={{ height: "18px", width: "18px" }} src={dot}></img>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><span style={{ cursor: "pointer" }} class="dropdown-item" onClick={handledel}>Delete</span></li>
                        </ul>
                    </div>

                </div>
                <div style={{ margin: "5px 10px" }}>
                    <p>{props.Post}</p>
                </div>
                <hr
                    style={{
                        marginTop: "20px",
                        marginBottom: "10px",
                    }}
                />
                <div className="Bottomsec">
                    <button onClick={handleperformance} name="Likes">
                        <MdThumbUp size={20} style={{ marginRight: "10px" }} />{" "}
                        {props.Likes}
                    </button>
                    <button onClick={handleperformance} name="DisLikes">
                        <MdThumbDown size={20} style={{ marginRight: "10px" }} />{" "}
                        {props.DisLikes}
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
