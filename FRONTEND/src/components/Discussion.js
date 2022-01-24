import React, { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Post from "./Post"


function CreateArea(props) {

    const [note, setNote] = useState({
        Name: "",
        Email: "",
        Post: "",
        comment: [],
        L: 0,
        DL: 0,
        time: 0,
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {

                ...prevNote,
                [name]: value,
                time: new Date().getTime(),
            };
        });
    }



    function submitNote(event) {
        props.onAdd(note);

        setNote({
            Name: "",
            Email: "",
            Post: "",
            comment: [],
            L: 0,
            DL: 0,
            time: 0,
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note" onSubmit={submitNote}>
                <input
                    required
                    style={{ border: "1px solid rgba(0,0,0,.125)", borderRadius: "5px", margin: "5px 0px" }}
                    name="Name"
                    onChange={handleChange}
                    value={note.Name}
                    placeholder="Name"
                />

                <input
                    required
                    style={{ border: "1px solid rgba(0,0,0,.125)", borderRadius: "5px", margin: "5px 0px" }}
                    name="Email"

                    type="Email"
                    onChange={handleChange}
                    value={note.Email}
                    placeholder="Email"
                />

                <textarea
                    required
                    style={{ border: "1px solid rgba(0,0,0,.125)", borderRadius: "15px", margin: "5px 0px" }}
                    name="Post"
                    type="text"
                    onChange={handleChange}
                    value={note.Post}
                    placeholder="Write/Post Something . . . "
                    rows={3}
                />

                <button type="submit" className="D-btn">
                    <span>Post</span>
                    <FaArrowAltCircleRight style={{ marginLeft: "5px" }} />
                </button>
            </form>


            {props.Pnotes.map((noteItem, index) => {

                return (

                    <Post
                        key={index}
                        id={index}
                        Name={noteItem.Name}
                        Post={noteItem.Post}
                        Likes={noteItem.L}
                        DisLikes={noteItem.DL}
                        comment={noteItem.comment}
                        tm={noteItem.time}
                        setLikesDisLikes={props.onLDL}
                        onDelete={props.onDelete}
                        handleComment={props.commentmod}
                    />
                );
            }).reverse()}


            <div className="d-flex Loading justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

        </div>
    );
}

export default CreateArea;
