import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Year = new Date().getFullYear();
function footer() {
    return (
        <div>
            <footer className="page-footer">

                <div className="col-4">
                    <p className="Copyright"> © {Year} Copyright </p>
                </div>

                <div className="col-4">
                    <a href="mailto:Charusatspace@gmail.com">
                        <MdEmail
                            size="1.5em"
                            style={{ color: "white", marginLeft: "0.5rem", marginRight: "0.5rem", marginTop: "2px" }}

                        />
                    </a><span>Charusatspace@gmail.com</span>
                </div>

                <div className="col-4" >
                    <a href="https://www.google.com/maps/place/Charotar+University+of+Science+and+Technology+(CHARUSAT)/@23.2674852,74.0929663,8z/data=!4m5!3m4!1s0x395e50c43cdea6c7:0x5074fe9e0c1c8bd!8m2!3d22.6000707!4d72.8192651" target="_blank">
                        <FaMapMarkerAlt
                            size="1.5em"
                            style={{ color: "white", marginLeft: "0.5rem", marginRight: "0.5rem" }}

                        />
                    </a><span>Charusat</span>
                </div>


            </footer >
        </div >
    );
}

export default footer;
