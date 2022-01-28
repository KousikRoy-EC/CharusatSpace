import react from "react"

function Attendance() {
    return (<div style={{ height: "100vh" }}>
        <div className="formbg-outer">
            <div className="formbg">
                <div className="formbg-inner padding-horizontal--48">
                    <span className="SPAN padding-bottom--15">Mark Your Attendance</span>
                    <form >
                        <div className="field padding-bottom--24">
                            <label for="ID NO">ID NO</label>
                            <input type="text" name="ID NO" />
                        </div>
                        <div className="field padding-bottom--24">
                            <div className="grid--50-50">
                                <label for="Branch">Branch</label>

                            </div>
                            <select id="BRANCH" name="BRANCH">
                                <option value="Select">Select Your Branch</option>

                                <option value="Computer Science">Computer Science</option>
                                <option value="Electronics and Communication">Electronics and Communication</option>
                                <option value="Information Technology">Information Technology</option>
                                <option value="Civil">Civil</option>
                                <option value="Mechanical">Mechanical</option>
                                <option value="Electrcal">Electrcal</option>
                            </select>

                        </div>

                        <div className="field padding-bottom--24">
                            <input type="submit" name="Attendee" value="Attendee" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>)
}


export default Attendance;