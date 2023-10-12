import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faChevronUp, faComments, faGift, faLineChart, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function MyProfile() {
    return (<div className="sidebar-text border d-none d-sm-inline-block d-flex flex-column justify-content-center text-center p-1">
        <img className="mx-auto d-block w-75 btn  bg-dark img-fluid rounded-circle mb-4 p-3 mt-1"
            src="img/carron-muleya.jpg" alt="Image" />
        <h1 className="font-weight-bold">Carron Muleya</h1>
        <p className="mb-4">
            A young software programmer who is passionate on reading and writting articles on whatever I
            have
            learnt throughout my skill development.
        </p>
        <div className="d-flex justify-content-center mb-2">

            <ul className=" pagination">
                <li className=" page-item">
                    <a target="_blank" rel="noreferrer" className="page-link text-dark"
                        href="https://linkedin.com/in/carron-muleya-34a530206">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li className=" page-item">
                    <a target="_blank" rel="noreferrer" href="https://github.com/carron10"
                        className="text-dark page-link ">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li className=" page-item">
                    <a href="tel:+263771013028" className="text-dark page-link">
                        <FontAwesomeIcon icon={faPhone} />
                    </a>

                </li>
                <li className=" page-item">
                    <a target="_blank" rel="noreferrer" href="https://wa.me/message/7HN4XUZZP6IKA1"
                        className="text-dark page-link">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </li>
            </ul>
        </div>
        {/* <!-- <a href="" className="btn btn-lg btn-block btn  btn-dark">Hire Me</a> --> */}
    </div>)
}

export function DisplayTopics() {
    return (<div className=" mt-2 tags sticky-top">
        <p>DISCOVER MORE OF WHAT MATTERS TO YOU</p>
        <button className="btn border rounded-0 my-1">Programming</button>
        <button className="btn border rounded-0 my-1">Programming</button>
        <button className="btn border rounded-0 my-1">Programming</button>
        <button className="btn border rounded-0 my-1">Programming</button>
    </div>)
}

export function ShowComments() {
    return (<div className="mt-1">
        <div className=" d-flex justify-content-center">
            <div>
                <a id="view_comments" href="#cc1" className="btn btn-sm p-2 px-4 border-success mr-1"><span>View
                    Comments</span> <i className=" badge badge-success">3</i></a>
            </div>
            <div>
                <a id="leave_comment" href="#comment" className="btn-sm btn p-2 px-4 border-success ml-1">Leave your
                    comment</a>
            </div>
        </div>
        <div className="d-flex justify-content-center bg-light mt-1" id="c_card" style={{ display: 'none' }}>
            <div id="comments" className="w-100 mt-2 p-0">
                <div className="comment-section p-0 mt-1" id="cc1">
                </div>
            </div>
            <div className=" m-1 p-1 w-100" id="comment">
                <div className=" text-center">
                    <h4>Leave a comment</h4>
                </div>
                <hr className="raised line" />
                <div className="p-2 bg-light">
                    <form name="comment">
                        <div className=" callback alert alert-info" style={{ display: 'none' }}></div>
                        <input style={{ display: 'none' }} name="id" value="0" onChange={() => { }} /> <label>Comments</label>
                        <textarea className="form-control rounded-0  form-control-sm" name="msg" rows="5" placeholder="Type your Comment here" required=""></textarea> <i className="small invalid-feedback">Enter your
                            message!</i> <label>Your
                                Name</label>
                        <input type="text" className=" form-control rounded-0 form-control-sm" name="uname" placeholder="Enter your name" required="" /> <i className="small invalid-feedback">Enter
                            valid username!</i> <label>Email</label>
                        <input type="email" className=" form-control rounded-0  form-control-sm" name="email" placeholder="Enter your email" required="" /> <i className="small invalid-feedback">Enter
                            valid email!</i>
                        <br /> <button name="send" className="btn btn-primary" type="submit"> Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>)
}


export function ShowLikes() {
    return (<div id="likee" className="d-flex justify-content-center">

    </div>)
}