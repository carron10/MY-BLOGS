import { useEffect, useState } from "react"
import parse, { domToReact, attributesToProps } from 'html-react-parser';
import { DisplayTopics } from "./Utils";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, faExchange } from "@fortawesome/free-solid-svg-icons";
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function submitForm(){
    alert('djjdj')
}
export function BlogDev() {
    const [blogBody, setBlogBody] = useState(null);
    let { page } = useParams();
    const options = {
        replace: (domNode) => {
            let attribs = domNode.attribs, children = domNode.children;

            if (!attribs) {
                return;
            }
            if (attribs.class != undefined) {

                var item = attribs.class,
                    matchIconSize = item.match(/(fa-([^\D])(x)[^ ]*)/g),
                    matchAnIcon = item.match(/(fa-[^\d][^ ]*)/g);

                if (matchAnIcon) {
                    var icon = matchAnIcon[0].match(/(fa-(.*))/)[2];
                    const props = attributesToProps(domNode.attribs);
                    return <FontAwesomeIcon {...props} icon={['fa', icon]} />
                }
            }
            if (attribs.id === 'main') {
                return <h1 style={{ fontSize: 42 }}>
                    {domToReact(children, options)}
                </h1>;
            }

            if (attribs.class === 'fa') {
                return (
                    <FontAwesomeIcon icon={faExchange} />
                );
            }
        }
    };
    useEffect(() => {
        axios.get('/blogs/' + page).then((txt) => {
            setBlogBody(txt.data)
        })
    
    }, [page])


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
                                            {parse(blogBody, options)}
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
    )
}