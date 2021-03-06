import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { FaAngleDown, FaUserGraduate, FaPaperclip } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { IoHandRightOutline } from "react-icons/io5";
import { useState } from "react";


function SideNavbar(props) {

    const [state, setstate] = useState(true)
    function Toggling() {
        setstate(!state)
    }



    function Show() {
        props.setfoot("yes");
    }
    return (
        <div>
            <nav className="menu" tabIndex="0">
                <div className="smartphone-menu-trigger"></div>
                <header className="avatar">
                    <FaUserGraduate size={30} /> <h2 className="Logo">CharusatSpace</h2>
                </header>
                <ul>
                    <Link onClick={Show} className="Links" to="/">
                        <li tabIndex="0" className="icon-dashboard Opt">
                            {" "}
                            <MdOutlineHome size={30} className="Sourceicons" />
                            <span>Home</span>
                        </li>
                    </Link>
                    <Link onClick={Show} className="Links" to="/Team">
                        <li tabIndex="0" className="icon-customers Opt">
                            {" "}
                            <AiOutlineTeam size={30} className="Sourceicons" />
                            <span>Meet our team</span>
                        </li>
                    </Link>


                    <li onClick={Toggling} className="icon-settings Opt">
                        <BiBook size={30} className="Sourceicons" />
                        <span  >LearnSpace</span>
                        <FaAngleDown size={25} style={{ paddingLeft: "1rem", marginRight: "0rem" }} className="Sourceicons" />

                    </li>

                    <Link onClick={Show} className="Links " to="/CS" >
                        <li tabIndex="0" className="icon-settings Opt" style={{ display: state ? "none" : "" }}>
                            <BiBook size={30} className="Sourceicons" />
                            <span >CS/IT</span>
                        </li>
                    </Link>
                    <Link onClick={Show} className="Links " to="/EC" >
                        <li tabIndex="0" className="icon-settings Opt" style={{ display: state ? "none" : "" }}>
                            <BiBook size={30} className="Sourceicons" />
                            <span >ECE</span>
                        </li>
                    </Link>

                    <Link onClick={Show} className="Links" to="/Attendance">
                        <li tabIndex="0" className="icon-dashboard Opt">
                            {" "}
                            <IoHandRightOutline size={30} className="Sourceicons" />
                            <span>Attendance</span>
                        </li>
                    </Link>



                    <Link onClick={Show} className="Links" to="/Contribute">
                        <li tabIndex="0" className="icon-dashboard Opt">
                            <FaPaperclip size={30} className="Sourceicons" color='white' />
                            <span>Contribute</span>
                        </li>
                    </Link>


                    <Link className="Links" to="/Discussion">
                        <li tabIndex="0" className="icon-dashboard Opt">
                            {" "}
                            <VscAccount size={30} className="Sourceicons" />
                            <span>Discussion</span>
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default SideNavbar;
