import react from "react"
import { ReactDOM } from "react"
import img1 from "../Photos/img1.png"
import img2 from "../Photos/img2.png"
import img3 from "../Photos/img3.png"
import img4 from "../Photos/img4.png"
function Home() {
    return (<div className="set" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginLeft: "60px"
    }}>
        <div className="HomeHeader">
            <p>
                CharusatSpace, the Socio-Academic Portal of Charusat, is the most frequently visited website of Charusat. We aim to make the life of every CHARUSATian simpler & turn these four years into a smoother ride!
            </p>
        </div>

        <div >
            <div className="projects">
                <span className="Pro">
                    <div className="project1"><a href=""> <img className="img" src={img1} /> </a>
                        <h4> Who are we? </h4> A bunch of curious, Studious
                        and motivated college students, who work together to build products for the problems that we face every day.
                        we design and enginered products based on new tech.
                    </div>
                </span>
                <span className="Pro">
                    <div className="project2"><a href=""> <img className="img" src={img2} /> </a>
                        <h4>What have we been upto?</h4>CharusatSpace has been the one-stop solution for students the night before exam. We're now building Notespace where you can get handwritten notes of A+ grade student just by paying a small amount.

                    </div>
                </span>
                <span className="Pro">
                    <div className="project3"><a href=""> <img className="img" src={img3} /> </a>
                        <h4> Why should you join CS?</h4>Don’t limit yourself to academia. Learn what you love, apply your skills to solve actual problems! Learn about GSOC, NQT, ICPC internships, placements and other Competitive Exams from the Charusat’s Seniors experience.


                    </div>
                </span>
                <span className="Pro">
                    <div className="project4"><a href=""> <img className="img" src={img4} /> </a>
                        <h4>Whom will you meet at CS?</h4>Students who are Proactive
                        and making big contribution in industry level in the fields of Tech, Data Science, Machine Learning, Artificial Intelligence. Everyone contributing in their own way!

                    </div>
                </span>
            </div>
        </div>

    </div >);
}


export default Home;