import React, { useState } from "react";
import { Link } from "react-router-dom";
function Profile() {
    const [edit, setEdit] = useState(false);
    const [firstname, setFirstName] = useState("Md");
    const [lastname, setLastName] = useState("Rimel");
    const [email, setEmail] = useState("rimel@gmail.com");
    const [address, setAddress] = useState("Kingston, 5236, United State");
    const [currentpass, setCurrentPass] = useState();
    const [newpass, setNewPass] = useState();
    console.log(edit);
    const check = () => {
        setEdit(!edit);
    };

    return (
        <div className="container">
            <div className="wrapper">
                <div className="contact-nav">
                    <div className="contact-title">
                        <div className="contact-fix">
                            <Link to={"/home"}>Home</Link>
                            &#160;/&#160;
                            <p>My Account</p>&#160;
                            <p>Wellcome User Name</p>
                        </div>
                    </div>
                    <div className="contact-wrap">
                        <form accept="" method="" className="contact-form contact-form-txt">
                            <div className="edit">
                                <h2>Edit Your Profile</h2>
                                <Link onClick={check}>
                                    <i class="bx bx-edit-alt"></i>
                                </Link>
                            </div>
                            <div className="account-group">
                                <div className="account-form">
                                    <label>First Name</label>
                                    <input
                                        className="contact-input"
                                        id="account-input"
                                        type="text"
                                        value={firstname}
                                        disabled={edit === false}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="account-form">
                                    <label>Last Name</label>
                                    <input
                                        className="contact-input"
                                        id="account-input"
                                        type={lastname}
                                        value={lastname}
                                        disabled={edit === false}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="account-group">
                                <div className="account-form">
                                    <label>Email</label>
                                    <input
                                        className="contact-input"
                                        id="account-input"
                                        type="text"
                                        value={email}
                                        disabled={edit === false}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="account-form">
                                    <label>Address</label>
                                    <input
                                        className="contact-input"
                                        id="account-input"
                                        type="text"
                                        value={address}
                                        disabled={edit === false}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="account-form">
                                <label>Password Changes</label>
                                <div className="account-pass">
                                    <input
                                        className="contact-input"
                                        id="account-input"
                                        type="text"
                                        value={currentpass}
                                        disabled={edit === false}
                                        placeholder="Current Passwod"
                                        onChange={(e) => setCurrentPass(e.target.value)}
                                    />
                                    <input
                                        className="contact-input"
                                        id="account-input"
                                        type="text"
                                        value={newpass}
                                        disabled={edit === false}
                                        placeholder="New Passwod"
                                        onChange={(e) => setNewPass(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="account-button">
                                {edit === true && (
                                    <>
                                        <button
                                            className="contact-button"
                                            id="cancel-button"
                                            type="button"
                                            onClick={() => window.location.reload()}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="contact-button"
                                            id="save-button"
                                            type="button"
                                        >
                                            Save changes
                                        </button>
                                    </>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
