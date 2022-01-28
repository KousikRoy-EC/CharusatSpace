import react from "react";
import Members from "./Members";

function Team() {
    return (
        <div style={{ height: "100vh" }}>
            <div className="team-members">
                <Members
                    NAME="Kousik Roy"
                    ROLE="WEB DEVELOPER / WEB DESIGNER"
                    F="https://www.facebook.com/profile.php?id=100008571195584"
                    L="https://www.linkedin.com/in/kousik-roy-9a0989200/"
                    I="https://www.instagram.com/_.kaushik_roy._/"
                />
                <Members NAME="Kartik Singh" ROLE="CONTENT MANAGEMENT" F="" L="" I="" />
                {/* <Members NAME="Rohit Kumar" ROLE="PROJECT MANAGEMENT" F="" L="" I="" /> */}
            </div>
        </div>
    );
}

export default Team;
