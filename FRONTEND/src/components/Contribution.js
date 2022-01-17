import react from "react"

function Contribution() {
    return (<div>
        <div class="formbg-outer">
            <div class="formbg">
                <div class="formbg-inner manual mb-5">
                    <span class="SPAN padding-bottom--15">Thanks For Your Contribution</span>
                    <form >
                        <div class="field padding-bottom--24">
                            <label for="Full Name">Full Name</label>
                            <input type="text" name="Full Name" />
                        </div>
                        <div class="field padding-bottom--24">
                            <label for="Email">Email</label>
                            <input type="text" name="Email" />
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
                        <div action="/action_page.php" className=" padding-bottom--24">
                            <input type="file" id="myFile" name="filename" />
                        </div>

                        <div class="field padding-bottom--24">
                            <input type="submit" name="submit" value="Submit" />
                        </div>
                        <div class="card-info">
                            <p>By contributing you are agreeing to our <a href="#">Terms and Conditions</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>)
}


export default Contribution;