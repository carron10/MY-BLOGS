import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faChevronUp, faComments, faGift, faLineChart, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react'
import Alert from './Alerts';
import { DisplayTopics, MyProfile } from './Utils';
import { renderToString } from 'react-dom/server'
// import data from './data/web-infor.json';
import Parse from 'parse';


const PARSE_APPLICATION_ID = 'FeSpWu9VEzKeoZOuJa7IebenDyrRtPLwutz53FwK';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'c7fE81AZQKFRguhKcYipKelKd4Qr2ycE4B1L2Dl4';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export function Home() {
    const [show_subscribe_modal, setSubscribeModal] = useState(false);
    const [failed_to_load_blog_meta_data, setfailedtoLoadMeta] = useState(false);
    const [page_meta_data, setPageMetaData] = useState([]);
    var BlogSkeleton = () => {
        return (<div className=" media py-1 rounded">
            <i className="align-self-start mr-3 coloured">
                <p className="skeleton skeleton-img" style={{ width: '100%' }}></p>
            </i>
            <div className="media-body">

                <h4 className="text-c5 skeleton skeleton-text" style={{ height: '20px' }}></h4>

                <div className="m-0 skeleton skeleton-text" style={{ height: '98px' }}>
                    {failed_to_load_blog_meta_data ?
                        <div className='centered'>
                            Failed to load Blog Data
                        </div> : null}
                </div>
                <div className="d-flex mt-2">

                    <p className="m-0  mr-1  skeleton skeleton-text" style={{ height: '16px' }}>

                    </p>
                    <p className="m-0  mr-1 ml-1 skeleton skeleton-text" style={{ height: '16px' }}>

                    </p>
                    <i className="m-0  ml-1 skeleton skeleton-text" style={{ height: '16px' }}>

                    </i>
                </div>
            </div>
        </div>)
    }
    var BlogSkeleton2 = (props) => (<div className=" media my-2  col-md-4 mt-3">
        <div className="align-self-start mr-2 mt-2">
            <span className=" text-muted h3 border rounded-circle py-1 px-3 skeleton skeleton-text "
            >{props.number}</span>
        </div>
        <div className=" media-body">
            <p className=" bold h5 skeleton skeleton-text" style={{ width: "100%", height: '32px' }}>
            </p>
            <div className="d-flex">
                <p className="m-0  mr-1  skeleton skeleton-text" style={{ height: '16px' }}>

                </p>
                <p className="m-0  mr-1 ml-1 skeleton skeleton-text" style={{ height: '16px' }}>

                </p>
                <i className="m-0  ml-1 skeleton skeleton-text" style={{ height: '16px' }}>

                </i>
            </div>
        </div>
    </div>)
    async function getPages() {
        setfailedtoLoadMeta(false);
        const pageQuery = new Parse.Query('Page');
        
        pageQuery.select('title', 'short_description', 'updatedAt', 'blog_image', 'total_visits')
        pageQuery.limit(10);
        await pageQuery.find().then((results) => {
            var meta = [], i = 0;
            for (const object of results) {
                const CommentsQuery = new Parse.Query('Comments');
                CommentsQuery.equalTo('page_url', new Parse.Object('Page', { id: object.id }))
                CommentsQuery.count().then((count) => {
                    object.set('total_comments', count)
                }).catch(function (error) {
                    object.set('total_comments', 0)

                }).finally(() => {
                    meta.push(object);
                    i++;
                    if (i == results.length) {
                        setPageMetaData(meta);
                    }
                });
            }

        }).catch((error) => {
            console.log(error);
            setfailedtoLoadMeta(true);
        });
    };
    useEffect(() => {
        getPages();

    }, [])

    return (
        <>
            <div ref={BlogSkeleton} className="border-bottom py-4" style={{ backgroundColor: 'rgba(255,245,255,255)' }}>
                <div className=" container py-4  ">
                    <div className="row">
                        <div className=" my-2 col">
                            <div className=" h1" style={{ fontSize: '60px' }}>Stay connected.</div>
                            <p className="h4">Discover stories that will make your skills grow</p>
                            <button className="p-1 btn bg-dark text-white rounded-pill h5">Start reading</button>
                        </div>
                        <div className="col d-none d-sm-inline-block">
                            <img className="img-thumbnail p-0 border-0" src="/img/Most-Popular-Programming-Languages-2022.png"
                                alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="  border-bottom py-4">
                <div className="container">
                    <div className="font-weight-bold"> <FontAwesomeIcon className='me-2' icon={faLineChart} /> TRENDING POSTS</div>
                    <div className="  row">

                        <BlogSkeleton2 number={1} />
                        <BlogSkeleton2 number={2} />
                        <BlogSkeleton2 number={3} />

                    </div>
                </div>
            </div>
            <div className=" container mt-3">
                <div className=" row ">

                    <div className="col">
                        <div className=" ">
                            {
                                page_meta_data.length == 0 ? <><BlogSkeleton />
                                    <BlogSkeleton /></> :
                                    page_meta_data.map((v, i) => {
                                        return (<a key={i} href={'/blog/' + v.id}>
                                            <div className=" media py-1 rounded">
                                                <i className="align-self-start mr-3 coloured">
                                                    <img className="rounded-0" src={v.get('blog_image')} style={{ width: '130px', height: '100% !important' }} /></i>
                                                <div className="media-body">

                                                    <h4 className="text-c5">
                                                        {v.get('title')}
                                                    </h4>

                                                    <p className="m-0 d-none d-sm-inline-block">
                                                        {v.get('short_description')}

                                                    </p>
                                                    <div className="d-flex">
                                                        <small className="pr-2 text-muted">
                                                            <FontAwesomeIcon icon={faCalendarAlt} />

                                                            {v.get('updatedAt').toLocaleDateString()}
                                                        </small>
                                                        <small className="pr-2 text-muted"><FontAwesomeIcon icon={faComments} /> {v.get('total_comments')} Comments</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>)
                                    })
                            }


                            {/* <!-- Subscribe Start --> */}
                            <div className="my-1 py-5 px-4 text-center " style={{ backgroundColor: '#202C45' }}>
                                <h1 className="text-white font-weight-bold">Subscribe My Newsletter</h1>
                                <p className="text-white">Subscribe and get my latest article in your inbox</p>
                                <div className="form-inline justify-content-center">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Your Email" />
                                        <div className="input-group-append">
                                            <button onClick={
                                                () => {
                                                    setSubscribeModal(true);
                                                }
                                            } className="btn  btn-dark" type="submit">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Subscribe End --> */}
                            {
                              page_meta_data.length == 0 ? <><BlogSkeleton />
                              <BlogSkeleton /></>:null
                            }

                            {/* <a href="/How-to-build-a-web-site">
                                <div className=" media py-2 rounded">
                                    <i className="align-self-start mr-3 coloured"> <img className="rounded-0"
                                        src="/img/gema-saputera-pJaocJrXGFQ-unsplash.jpg"
                                        style={{ width: '130px', height: '100% !important' }} /></i>
                                    <div className="media-body">

                                        <h4 className="text-c5">Learn how to build a website from scratch.</h4>

                                        <p className="m-0 d-none d-sm-inline-block font-weight-light">
                                            A website is an application that runs through a web browser. This is kind of an
                                            application/system that anyone connected
                                            to the internet with an cellphone,computer or any device with a browser can access
                                            it.

                                        </p>
                                        <div className="d-flex">
                                            <small className="pr-2 text-muted"> <FontAwesomeIcon icon={faCalendarAlt} />
                                                01-Jan-2045</small>
                                            <small className="pr-2 text-muted"> <FontAwesomeIcon icon={faComments} /> 15 Comments</small>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="/how-to-read-and-write-from-excel.html">
                                <div className=" media py-2 rounded">
                                    <i className="align-self-start mr-3 coloured"> <img className="rounded-0"
                                        src="/img/gema-saputera-pJaocJrXGFQ-unsplash.jpg"
                                        style={{ width: '130px', height: '100% !important' }} /></i>
                                    <div className="media-body">

                                        <h4 className="text-c5">How to read and write data from/to excel using R.</h4>

                                        <p className="m-0 d-none d-sm-inline-block font-weight-light">
                                            Excel is a powerfull tool that is used to stored,visualise
                                            data, as well as allowing you to perform some mathematical
                                            and stastical computation.I this post you will learn
                                            how to import data from excel to R.

                                        </p>
                                        <div className="d-flex">
                                            <small className="pr-2 text-muted"><FontAwesomeIcon icon={faCalendarAlt} />
                                                01-Jan-2045</small>
                                            <small className="pr-2 text-muted"><FontAwesomeIcon icon={faComments} /> 15 Comments</small>
                                        </div>
                                    </div>
                                </div>
                            </a> */}

                        </div>
                        <div className=" text-center my-1">
                            <button className=" btn border rounded-pill">Load more stories</button>
                        </div>
                    </div>
                    <div className="col-sm-4 ">
                        <MyProfile />

                        <DisplayTopics />
                    </div>
                </div>
            </div>


            {/* Alerts */}
            <Alert message="Hi" show={show_subscribe_modal} onHide={() => { setSubscribeModal(false) }} />
        </>
    );
};
