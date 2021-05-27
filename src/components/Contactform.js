import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const Contactsform = (props) => {
    const initialfieldvalues = {
        fullname: '',
        mobile: '',
        email: '',
        address: ''
    }

    var [values, setValues] = useState(initialfieldvalues)

    useEffect(() => {
        if (props.currentId == '')
            setValues({
                ...initialfieldvalues
            })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values);
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i class="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Full Name" name="fullname"
                    value={values.fullname}
                    onChange={handleInputChange}
                />
            </div>
            <div className="row" style={{margin:"20px"}}>
                <div className="from-group  input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i class="fas fa-phone"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Mobile" name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="from-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i class="fas fa-envelope-open"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Email" name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <textarea className="form-control" placeholder="Address" name="address"
                    value={values.address}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input type='submit' value={props.currentId == '' ? "Save" : "Update"} className="btn btn-primary btn-block" />
            </div>
        </form>
    );
}

export default Contactsform;