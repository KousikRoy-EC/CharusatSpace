import react from "react"
import { ReactDOM } from "react"
import img1 from "../Photos/img1.png"
import img2 from "../Photos/img2.png"
import img3 from "../Photos/img3.png"
import img4 from "../Photos/img4.png"
function Home() {
    return (<div>
        <div className="HomeHeader">
            <p>
                CharusatSpace, the Socio-Academic Portal of Charusat, is the most frequently visited website of Charusat. We aim to make the life of every CHARUSATian simpler & turn these four years into a smoother ride!
            </p>
        </div>

        <div>
            <div class="projects">
                <span className="Pro">
                    <div class="project1"><a href=""> <img className="img" src={img1} /> </a>
                        <h4> Who are we? </h4> A bunch of curious, enthusisatic and motivated college students, who work together to build solutions to problems that we face every day.
                        We build & manage products!
                    </div>
                </span>
                <span className="Pro">
                    <div class="project2"><a href=""> <img className="img" src={img2} /> </a>
                        <h4>What have we been upto?</h4>CollegeSpace has been the one-stop solution for students the night before exam. We're now building ExamSpace, LearnSpace and the ClassSpace App
                    </div>
                </span>
                <span className="Pro">
                    <div class="project3"><a href=""> <img className="img" src={img3} /> </a>
                        <h4>Whom will you meet at CS?</h4>Students who are leveraging experiential learning for leading bright careers! Tech, Product Management, Data Science
                        Everyone contributing in their own way!
                    </div>
                </span>
                <span className="Pro">
                    <div class="project4"><a href=""> <img className="img" src={img4} /> </a>
                        <h4> Why should you join CS?</h4>Learn what you love, apply your skills to solve actual problems! Learn about GSOC, international internships, placements from the CS family's experience

                    </div>
                </span>
            </div>
        </div>

    </div>);
}


export default Home;