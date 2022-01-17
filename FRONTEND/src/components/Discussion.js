import React, { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Post from "./Post"


function CreateArea(props) {

    const [note, setNote] = useState({
        Name: "",
        Email: "",
        Post: "",
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
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                <input
                    name="Name"
                    onChange={handleChange}
                    required
                    value={note.Name}
                    placeholder="Name"
                />

                <input
                    name="Email"
                    required
                    type="Email"
                    onChange={handleChange}
                    value={note.Email}
                    placeholder="Email"
                />

                <textarea
                    name="Post"
                    required
                    onChange={handleChange}
                    value={note.Post}
                    placeholder="Write/Post Something . . . "
                    rows={3}
                />

                <button type="submit" onClick={submitNote}>
                    Post
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
