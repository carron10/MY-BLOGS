import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faCalendarAlt, faChevronUp, faComments, faGift, faLineChart, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, CloseButton, Collapse } from 'react-bootstrap';

export function MyProfile() {
    return (<div className="sidebar-text border d-none d-sm-inline-block d-flex flex-column justify-content-center text-center p-1">
        <img className="mx-auto d-block w-75 btn  bg-dark img-fluid rounded-circle mb-4 p-3 mt-1"
            src="img/carron-muleya.jpg" alt="Image" />
        <h4 className="font-weight-bold">Carron Muleya</h4>
        <p className="mb-4">
            A young software programmer with passion for learning and sharing knowledge through
            written articles. Always eager to explore new ideas and technologies, Carron aims to make a
            positive impact on the tech community by sharing their insights and experiences. Whether you're a
            beginner or an experienced developer, Carron's articles are sure to provide valuable information and inspirtation.
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
        <button className="btn border rounded-0 my-1 mx-1">Programming</button>
        <button className="btn border rounded-0 my-1 mx-1">Data Analytic</button>
        <button className="btn border rounded-0 my-1 mx-1">Web Development</button>
        <button className="btn border rounded-0 my-1 mx-1">Github</button>
    </div>)
}


export function ShowComments(props) {
    var total_comments = props.comments != null ? props.comments.length : 0;
    var getComments = () => {

    }
    return (
        <section>
            <ShowLikes />
            <button type="button" className="btn-close" aria-label="Close">

            </button>
            <div className=" mt-1">

                <div className=" d-flex justify-content-center">
                    <div>
                        <a id="view_comments" href="#cc1" className="btn btn-sm border-dark p-2 px-4 mr-1 v"><span>Hide Comments</span> <i className=" badge badge-success">23</i></a>
                    </div>
                    <div>
                        <a id="leave_comment" href="#comment" className="btn-sm btn border-dark p-2 px-4 ml-1 v">Leave Comment</a>
                    </div>
                </div>


                <div className="d-flex justify-content-center bg-light mt-1" id="c_card" >
                    <div id="comments" className="w-100 mt-2 p-0 v">
                        <div className="comment-section p-0 mt-1" id="cc1">
                            <div className="media">
                                <i className="p-1 bg-light mt-1 mr-1  align-self-start r1 fa fa-user-circle fa-2x"></i>
                                <div className="media-body rounded-0 my-1">
                                    <div className="replying p-1 m-0">
                                        <p><b>carron</b><br />
                                            <b className="fa fa-calendar small"><i> 30/Dec/2022 Fri 18:52</i></b><br />
                                            <i className="fa fa-comment fg-green"></i>Boss hurini
                                        </p>
                                        <div className="text-left m-0 p-0">
                                            <a className="btn btn-sm text-white btn-succes pr-2 bg-success" data-toggle="collapse" href="#n8" role="button" aria-expanded="false" aria-controls="comm"><b>Reply</b></a>
                                        </div>
                                    </div>
                                    <div className="bg-white p-2 m-0 collapse" id="n8" data-parent="#comments">
                                        <p className=" text-center">Reply to <b>carron</b></p>
                                        <hr className="l-2" />
                                        <form name="comment" className="needs-validation" noValidate={true}>
                                            <div className=" callback alert alert-info" style={{ display: 'none' }}></div><input style={{ display: 'none' }} name="id" defaultValue="8" />                        <label>Comments</label>
                                            <textarea className="form-control form-control-sm" name="msg" rows="5" placeholder="Enter your Comment here" required=""></textarea>
                                            <i className="small invalid-feedback">Please enter your message!</i>                        <label>Your Name</label>
                                            <input type="text" className=" form-control form-control-sm" name="uname" placeholder="Enter your username" required="" /><i className="small invalid-feedback">Enter valid username!</i>                        <label>Email</label>
                                            <input type="email" className=" form-control form-control-sm" name="email" placeholder="Enter your Email" required="" />
                                            <i className="small invalid-feedback">Enter valid Email!</i><br />                        <button name="send" className="btn btn-sm btn-success" type="submit">Send</button>
                                        </form>
                                    </div>
                                </div>
                            </div><div className="media">
                                <div className="media-body rounded-0 my-1">
                                    <div className="replying p-1 m-0">
                                        <p><b>chatsfly</b> Replied to <b>carron</b><br />
                                            <b className="fa fa-calendar small"><i> Fri 30/Dec/2022 Fri 18:53</i></b><br />
                                            <i className="fa fa-comment fg-green"></i>Ndi grand warimin fhedzi
                                        </p>
                                        <div className="text-left m-0 p-0">
                                            <a className="btn btn-sm text-white btn-succes pr-2 bg-success" data-toggle="collapse" href="#n9" role="button" aria-expanded="false" aria-controls="comm"><b>Reply</b></a>
                                        </div>
                                    </div>
                                    <div className="bg-white p-2 m-0 collapse" id="n9" data-parent="#comments">
                                        <p className=" text-center">Reply to <b>chatsfly</b></p>
                                        <hr className="l-2" />
                                        <form name="comment" className="needs-validation" noValidate={true}>
                                            <div className=" callback alert alert-info" style={{ display: 'none' }}>
                                            </div><input style={{ display: 'none' }} name="id" defaultValue="9" />
                                            <label>Comments</label>
                                            <textarea className="form-control form-control-sm" name="msg" rows="5" placeholder="Enter your Comment here" required=""></textarea>
                                            <i className="small invalid-feedback">Please enter your message!</i>                        <label>Your Name</label>
                                            <input type="text" className=" form-control form-control-sm" name="uname" placeholder="Enter your username" required="" /><i className="small invalid-feedback">Enter valid username!</i>                        <label>Email</label>
                                            <input type="email" className=" form-control form-control-sm" name="email" placeholder="Enter your Email" required="" />
                                            <i className="small invalid-feedback">Enter valid Email!</i><br />                        <button name="send" className="btn btn-sm btn-success" type="submit">Send</button>
                                        </form>
                                    </div>
                                </div>
                                <i className="p-1 bg-light mt-1 ml-1  align-self-start r1 fa fa-user-circle fa-2x"></i>
                            </div>
                        </div>
                    </div>
                    <div className=" m-1 p-1 w-100" id="comment" style={{ display: 'none' }}>
                        <div className=" text-center">
                            <h4>Leave a comment</h4>
                        </div>
                        <hr className="raised line" />
                        <div className="p-2 bg-light">
                            <form name="comment">
                                <div className=" callback alert alert-info" style={{ display: 'none' }}></div>
                                <input style={{ display: 'none' }} name="id" defaultValue="0" /> <label>Comments</label> <textarea className="form-control form-control-sm" name="msg" rows="5" placeholder="Type your Comment here" required=""></textarea> <i className="small invalid-feedback">Enter your message!</i> <label>Your Name</label>
                                <input type="text" className=" form-control form-control-sm" name="uname" placeholder="Enter your name" required="" /> <i className="small invalid-feedback">Enter valid username!</i> <label>Email</label>
                                <input type="email" className=" form-control form-control-sm" name="email" placeholder="Enter your email" required="" /> <i className="small invalid-feedback">Enter valid email!</i>
                                <br /> <button name="send" className="btn btn-primary" type="submit"> Send </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export function ShowLikes() {
    return (<div id="likee" className="d-flex justify-content-center">
        <div>
            <h6 className="text-center"><b>How is this page?</b></h6>
            <div className="d-flex justify-content-between">
                <div>
                    <button className="btn btn-outline-secondary  mr-1    l p-1" id="1">
                        <img src="/img/like.svg" />
                        <span className="small">14</span>
                    </button>
                </div>
                <div>
                    <button className="btn btn-outline-secondary  l p-1" id="0">
                        <img src="/img/dislike.svg" />
                        <span className="small">1</span>
                    </button>
                </div>
            </div>
        </div>
    </div>)
}

export const BlogNavBar = () => (<nav className="navbar navbar-expand-md border-bottom  py-3 small" style={{ backgroundColor: 'rgba(255,245,255,255)' }}>
    <a className="navbar-brand font-weight-bold" href="/">CHATSFLY</a>
    {/* <!-- <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse">
  <span className="navbar-toggler-icon a"></span>
  <span className="navbar-toggler-icon b"></span>
  <span className="navbar-toggler-icon c"></span>
</button> --> */}
    <div className=" d-sm-none">
        <a href='search' className="nav-link">
            <FontAwesomeIcon icon={faSearch} />
        </a>
    </div>
    <div className="collapse navbar-collapse text-center d-none d-sm-inline-block" id="collapse">
        <ul className=" nav navbar-nav ml-auto ml-auto pr-2">
            <li className=" nav-item">
                <a href='/search' className="nav-link">
                    <FontAwesomeIcon icon={faSearch} />
                </a>

            </li>
            <li className=" nav-item">
                <a className="nav-link" href="/about">
                    About
                </a>
            </li>
            <li className=" nav-item">
                <a className="nav-link"  href="/contact">
                    Contact
                </a>
            </li>
        </ul>
    </div>
</nav>)
export const BlogFooter = () => {
    return (<>
        <div className=" text-center container-fluid border-top py-4">
            <div className=" text-muted">
                <span className=" px-1"><a className=" text-muted" href='/'>Home</a></span>
                <span className=" px-1"><a className=" text-muted" href='/privacy'>Privacy</a></span>
                <span className=" px-1"><a className=" text-muted" href='/about'>About</a></span>
                <span className=" px-1"><a className=" text-muted" href='/contact'>Contact</a></span>
            </div>
        </div>
        <div className="mx-3" style={{ position: 'fixed', right: 0, bottom: '90px' }}>
            <button id="go_up" className=" border-0 p-0">
                <FontAwesomeIcon icon={faChevronUp} className="text-white p-2" style={{ backgroundColor: '#0069d9' }} />
            </button>
        </div></>)
}