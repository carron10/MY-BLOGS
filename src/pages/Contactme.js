import { faEnvelope, faMapMarkedAlt, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DisplayTopics } from "./Utils";
export const ContactMe = () => {
    return (

        <>
            <div className=" container my-3">
                <div className=" row ">
                    <div className="col blog-container">
                        <div className="text-left">
                            <div className="p-0">
                                <div className="container bg-white pt-5">
                                    <div className="row px-3 pb-2">
                                        <div className="col-sm-4 text-center mb-3">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="mb-3 text-primary" />
                                            <h4 className="font-weight-bold">Address</h4>
                                            <p>123 Street, New York, USA</p>
                                        </div>
                                        <div className="col-sm-4 text-center mb-3">
                                            <FontAwesomeIcon icon={faPhoneAlt} size="2x" className="mb-3 text-primary" />
                                            <h4 className="font-weight-bold">Phone</h4>
                                            <p>+012 345 6789</p>
                                        </div>
                                        <div className="col-sm-4 text-center mb-3">
                                            <FontAwesomeIcon icon={faEnvelope} size="2x" className="mb-3 text-primary" />
                                            <h4 className="font-weight-bold">Email</h4>
                                            <p>info@example.com</p>
                                        </div>
                                    </div>
                                    <div className="col-md-12 pb-5">
                                        <div className="contact-form">
                                            <div id="success"></div>
                                            <form name="sentMessage" id="contactForm" action="/api/contact" novalidate="novalidate">
                                                <div className="control-group">
                                                    <input type="text" className="form-control rounded-0" id="name" placeholder="Your Name" required="required"
                                                        data-validation-required-message="Please enter your name" />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                                <div className="control-group">
                                                    <input type="email" className="form-control rounded-0" id="email" placeholder="Your Email" required="required"
                                                        data-validation-required-message="Please enter your email" />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                                <div className="control-group">
                                                    <input type="text" className="form-control rounded-0" id="subject" placeholder="Subject" required="required"
                                                        data-validation-required-message="Please enter a subject" />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                                <div className="control-group">
                                                    <textarea className="form-control rounded-0" rows="8" id="message" placeholder="Message" required="required"
                                                        data-validation-required-message="Please enter your message"></textarea>
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                                <div>
                                                    <button className="btn btn-primary" type="submit" id="sendMessageButton">Send
                                                        Message
                                                    </button>
                                                    <script>
                                                        alert("Hello World")
                                                    </script>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3  p-2">
                        <DisplayTopics />

                    </div>
                </div>
            </div>
        </>
    )


}