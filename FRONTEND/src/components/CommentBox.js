import React from "react";

function commentBox(props) {
    var temp_sec = new Date().getTime();
    return (
        <div>
            <div className="container">
                <div className="row com">
                    <div className="col-12">
                        <div className="card card-white post cpost">
                            <div className="post-heading">
                                <div className="image">
                                    <img
                                        src="http://bootdey.com/img/Content/user_1.jpg"
                                        style={{
                                            height: "48px",
                                            width: "48px",
                                            margin: "5px 10px 5px 0px",
                                        }}
                                        className=" Cavatar"
                                        alt="user profile image"
                                    />
                                </div>
                                <div
                                    className="meta"
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    <div className="title h5">
                                        <b>{props.AdminName}</b>
                                    </div>
                                    <h6 className="text-muted time">
                                        {props.Timetoday((temp_sec - props.st) / 1000)}
                                    </h6>
                                </div>
                            </div>
                            <div className="post-description">
                                <p>{props.descr}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default commentBox;
