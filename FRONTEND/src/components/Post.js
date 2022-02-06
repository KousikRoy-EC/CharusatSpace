import React from "react";
import { MdThumbUp, MdThumbDown, MdOutlineModeComment } from "react-icons/md";
import { useState } from "react";
import Commentte from "./Comments";
import dot from "../Photos/dots.png";
import { setLDL, delNote } from "../actions/Action";

function Note(props) {
    var tm_sec = new Date().getTime();
    const [showcomments, setshowcomments] = useState(false);

    function handledel() {
        props.dispach(delNote(props.id));
    }

    function secondsToDhms(seconds) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600 * 24));
        var h = Math.floor((seconds % (3600 * 24)) / 3600);
        var m = Math.floor((seconds % 3600) / 60);
        var s = Math.floor(seconds % 60);

        var dDisplay = d > 0 ? d + " day" : " ";
        var hDisplay = h > 0 ? h + " hr" : " ";
        var mDisplay = m > 0 ? m + " min" : " ";
        var sDisplay = s > 0 ? s + " sec" : " ";

        if (d > 0) {
            return dDisplay + " ago";
        } else if (h > 0) {
            return hDisplay + " ago";
        } else if (m > 0) {
            return mDisplay + " ago";
        } else {
            return sDisplay + " ago";
        }
    }

    function handleperformance(e) {
        var mood = e.currentTarget.name;
        if (mood === "Likes") {
            if (props.SLike === true && props.SDisLike === true) {
                props.dispach(setLDL(props.id, "L+", props.Likes + 1, props.DisLikes, false));
            }
            else if (props.SDisLike === false && props.SLike === true) {
                props.dispach(setLDL(props.id, "DL-&L+", props.Likes + 1, props.DisLikes - 1, false));
            }
        }
        else if (mood === "DisLikes") {
            if (props.SLike === true && props.SDisLike === true) {
                props.dispach(setLDL(props.id, "DL+", props.Likes, props.DisLikes + 1, false));
            }
            else if (props.SLike === false && props.SDisLike === true) {
                props.dispach(setLDL(props.id, "DL+&L-", props.Likes - 1, props.DisLikes + 1, false));
            }
        }

        else if (mood === "Comment") {
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
                            <h6 style={{ marginTop: "0px" }}>
                                {secondsToDhms((tm_sec - props.tm) / 1000)}
                            </h6>
                        </span>
                    </div>
                    <div className="dropdown">
                        <button
                            className="btn Cbtn "
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img style={{ height: "18px", width: "18px" }} src={dot}></img>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <span
                                    style={{ cursor: "pointer" }}
                                    className="dropdown-item"
                                    onClick={handledel}
                                >
                                    Delete
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{ margin: "5px 10px" }}>
                    <p>{props.Post}</p>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        className="mview"
                        src={props.link}
                        style={{
                            margin: "0px 5px",
                            borderRadius: "10px",
                        }}
                    ></img>
                </div>
                <hr
                    style={{
                        marginTop: "20px",
                        marginBottom: "10px",
                    }}
                />
                <div className="Bottomsec">
                    <button
                        className="D-btn spbtn"
                        style={{
                            borderRadius: "50px",
                            color: "white",
                            backgroundColor: "#4eaefd",
                        }}
                        onClick={handleperformance}
                        name="Likes"
                    >
                        <MdThumbUp size={20} style={{ marginRight: "10px" }} />

                        {props.Likes}
                    </button>
                    <button
                        className="D-btn spbtn"
                        style={{
                            borderRadius: "50px",
                            color: "white",
                            backgroundColor: "#4eaefd",
                        }}
                        onClick={handleperformance}
                        name="DisLikes"
                    >
                        <MdThumbDown size={20} style={{ marginRight: "10px" }} />
                        {props.DisLikes}
                    </button>
                    <button
                        className="D-btn spbtn"
                        style={{
                            borderRadius: "50px",
                            color: "white",
                            backgroundColor: "#4eaefd",
                        }}
                        onClick={handleperformance}
                        name="Comment"
                    >
                        <MdOutlineModeComment size={20} style={{ marginRight: "10px" }} />
                        {props.comment.length}
                    </button>
                </div>

                <Commentte
                    display={showcomments ? "contents" : "none"}
                    dis={props.dispach}
                    Id={props.id}
                    list={props.comment}
                    Sectoday={secondsToDhms}
                />
            </div>
        </div>
    );
}

export default Note;
