import react from "react"

function Attendance() {
    return (<div>
        <div class="formbg-outer">
            <div class="formbg">
                <div class="formbg-inner padding-horizontal--48">
                    <span class="SPAN padding-bottom--15">Mark Your Attendance</span>
                    <form >
                        <div class="field padding-bottom--24">
                            <label for="ID NO">ID NO</label>
                            <input type="text" name="ID NO" />
                        </div>
                        <div class="field padding-bottom--24">
                            <div class="grid--50-50">
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

                        <div class="field padding-bottom--24">
                            <input type="submit" name="Attendee" value="Attendee" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>)
}


export default Attendance;