import React from "react"
import Books from "./Books";
import Photo1 from "../Photos/MATH.jpg"
import Photo2 from "../Photos/Computer.jpg"
import Photo3 from "../Photos/Physics.jpg"

function Table(props) {
    console.log(props.category)
    return (<div className="Table-outer">
        <table className="table table-bordered">
            <thead>
                <tr>

                    <th scope="col">Cover</th>
                    <th scope="col">Title</th>
                    <th scope="col">Get Books Link</th>
                </tr>
            </thead>
            <tbody>
                <Books img={Photo1} title="Higher Engineering Mathematics" link="Go to link" />
                <Books img={Photo2} title="Introduction to Computers" link="Go to link" />
                <Books img={Photo3} title="Concepts of Modern Physics" link="Go to link" />

            </tbody>
        </table>
    </div>)
}

export default Table;