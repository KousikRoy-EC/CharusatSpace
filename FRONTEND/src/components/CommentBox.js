import React from 'react';



function commentBox(props) {
    return (<div>
        <div class="container">
            <div class="row com">
                <div class="col-12">
                    <div class="card card-white post cpost">
                        <div class="post-heading">
                            <div class="image">
                                <img src="http://bootdey.com/img/Content/user_1.jpg" style={{ height: "48px", width: "48px", margin: "5px 10px 5px 0px" }} class=" Cavatar" alt="user profile image" />
                            </div>
                            <div class="meta" style={{
                                marginTop: "10px"
                            }}>
                                <div class="title h5">
                                    <b>Ryan Haywood</b>

                                </div>
                                <h6 class="text-muted time">1 minute ago</h6>
                            </div>
                        </div>
                        <div class="post-description">
                            <p>{props.descr}</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>)
}

export default commentBox;