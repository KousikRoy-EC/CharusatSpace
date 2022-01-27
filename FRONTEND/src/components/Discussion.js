import React, { useState, useEffect, useRef } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Post from "./Post"


function CreateArea(props) {

    useEffect(() => {
        props.setfoot("no");
    });

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

    const [scrol, setsscrol] = useState(4);
    const [update, setupdate] = useState(0);
    function onScrolled(e) {
        var currentScrollY = e.target.scrollTop;

        if (currentScrollY - update > 100) {
            setupdate((val) => {
                return val + 1000;
            });
            setsscrol((prev) => {
                return prev + 2;
            })

        }
    }



    function loadFile(event) {
        // console.log(event.target.files[0]);

    };

    return (
        <div onScroll={onScrolled} style={{ height: "100vh", overflowY: "scroll" }}>
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
                <label className="custom-file-upload">
                    <input type="file" accept="image/*" id="myFile" name="filename" onChange={loadFile} />

                </label>
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
            }).reverse().slice(0, scrol)}


            <div className="d-flex Loading justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <div style={{ color: "black", paddingBottom: "50px" }} className="d-flex  justify-content-center">

                <span >Nothing to Show...</span>
            </div>


        </div>
    );
}

export default CreateArea;







