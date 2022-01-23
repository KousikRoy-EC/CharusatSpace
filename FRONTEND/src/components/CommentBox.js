import React from 'react';



function commentBox(props) {
    return (<div>
        <div class="container">
            <div class="row com">
                <div class="col-12">
                    <div class="card card-white post cpost">
                        <div class="post-heading">
                            <div class="float-left image">
                                <img src="http://bootdey.com/img/Content/user_1.jpg" class="img-circle avatar Cavatar" alt="user profile image" />
                            </div>
                            <div class="float-left meta">
                                <div class="title h5">
                                    <a href="#"><b>Ryan Haywood</b></a>

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