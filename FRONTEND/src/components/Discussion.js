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
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
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
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                <input
                    style={{ border: "1px solid rgba(0,0,0,.125)", borderRadius: "5px", margin: "5px 0px" }}
                    name="Name"
                    onChange={handleChange}
                    required
                    value={note.Name}
                    placeholder="Name"
                />

                <input
                    style={{ border: "1px solid rgba(0,0,0,.125)", borderRadius: "5px", margin: "5px 0px" }}
                    name="Email"
                    required
                    type="Email"
                    onChange={handleChange}
                    value={note.Email}
                    placeholder="Email"
                />

                <textarea
                    style={{ border: "1px solid rgba(0,0,0,.125)", borderRadius: "15px", margin: "5px 0px" }}
                    name="Post"
                    required
                    onChange={handleChange}
                    value={note.Post}
                    placeholder="Write/Post Something . . . "
                    rows={3}
                />

                <button type="submit" onClick={submitNote}>
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
                        setLikesDisLikes={props.onLDL}
                        onDelete={props.onDelete}
                        handleComment={props.commentmod}
                    />
                );
            }).reverse()}


            <div class="d-flex Loading justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>

        </div>
    );
}

export default CreateArea;
