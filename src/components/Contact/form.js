import React from 'react'

const FormComponent = props => {

    return(
        <form>
            <div className="form-row align-items-center">
                <div className="col-auto">
                    <label className="sr-only" for="inlineFormName">Name</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                        <div className="input-group-text">Name</div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormName" />
                    </div>
                </div>
                <div className="col-auto">
                    <label className="sr-only" for="inlineInputLastName">Last Name</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                        <div className="input-group-text">Last Name</div>
                        </div>
                        <input type="text" className="form-control" id="inlineInputLastName" />
                    </div>
                </div>
                <div className="col-auto">
                    <label className="sr-only" for="inlineInputEmail">Email</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                        <div className="input-group-text">Email</div>
                        </div>
                        <input type="text" className="form-control" id="inlineInputEmail" />
                    </div>
                </div>
                <div className="col-auto">
                    <label className="sr-only" for="inlineInputMessage">Message</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                        <div className="input-group-text">Message</div>
                        </div>
                        <textarea class="form-control is-invalid" id="inlineInputMessage" required></textarea>
                    </div>
                </div><br />
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default FormComponent