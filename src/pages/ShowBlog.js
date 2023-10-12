import { ShowComments, ShowLikes } from "./Utils";
import { useParams } from 'react-router-dom';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faChevronUp, faComments, faGift, faLineChart, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react'
import Alert from './Alerts';
import { DisplayTopics, MyProfile } from './Utils';
import { renderToString } from 'react-dom/server'
import parse from 'html-react-parser';
import Parse from 'parse';


const PARSE_APPLICATION_ID = 'FeSpWu9VEzKeoZOuJa7IebenDyrRtPLwutz53FwK';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'c7fE81AZQKFRguhKcYipKelKd4Qr2ycE4B1L2Dl4';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export default function Blog() {
    let { id } = useParams();
    const [show_subscribe_modal, setSubscribeModal] = useState(false);
    const [failed_to_load_blog_meta_data, setfailedtoLoadMeta] = useState(false);
    const [page_meta_data, setPageMetaData] = useState([]);
    const [blogBody, setPageBody] = useState(null);
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
    async function getBlog() {
        setfailedtoLoadMeta(false);
        const pageQuery = new Parse.Query('Page');

        pageQuery.equalTo('objectId', id)

        await pageQuery.find().then((results) => {
            var meta = [], i = 0;
            for (const object of results) {
                // object.get('content').getData()
                object.get('content').getData().then((data) => {
                    setPageBody(atob(data));
                })
                //.then((s)=>{
                //     setPageBody(s);
                // }).error((e)=>{
                //     console.log(e)
                // })
                const CommentsQuery = new Parse.Query('Comments');
                CommentsQuery.equalTo('page_url', new Parse.Object('Page', { id: object.id }))
                CommentsQuery.find().then((count) => {
                    object.set('total_comments', count.length)
                    object.set('comments', count)
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
        getBlog();
    }, [])
    return (
        <>
            <div className=" container my-3">
                <div className=" row ">
                    <div className="col blog-container">
                        <div className="text-left">
                            <div className="p-0">
                                {
                                    blogBody == null ? null :
                                        <div>
                                            {parse(blogBody)}
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3  p-2">
                        <DisplayTopics />

                    </div>
                </div>
            </div>
        </>

    );
};