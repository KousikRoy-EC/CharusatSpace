import react from "react";
import { MdOutlineHome } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { FaBookReader, FaUserGraduate } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";

function SideNavbar() {
    return (
        <div>
            <nav class="menu" tabindex="0">
                <div class="smartphone-menu-trigger"></div>
                <header class="avatar">
                    <FaUserGraduate size={30} /> <h2 className="Logo">CharusatSpace</h2>
                </header>
                <ul>
                    <li tabindex="0" class="icon-dashboard Opt">
                        {" "}
                        <MdOutlineHome size={30} className="Sourceicons" />
                        <span>Home</span>
                    </li>
                    <li tabindex="0" class="icon-customers Opt">
                        {" "}
                        <AiOutlineTeam size={30} className="Sourceicons" />
                        <span>Meet our team</span>
                    </li>
                    <li tabindex="0" class="icon-users Opt">
                        <FaBookReader size={30} className="Sourceicons" />
                        <span>ExamSpace</span>
                    </li>
                    <li tabindex="0" class="icon-settings Opt">
                        <BiBook size={30} className="Sourceicons" />
                        <span>LearnSpace</span>
                    </li>
                    <li tabindex="0" class="icon-dashboard Opt">
                        {" "}
                        <VscAccount size={30} className="Sourceicons" />
                        <span>Alumni</span>
                    </li>
                </ul>
            </nav>


        </div>
    );
}

export default SideNavbar;
