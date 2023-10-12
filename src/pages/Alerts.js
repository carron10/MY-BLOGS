import React from 'react';
import { Modal } from 'react-bootstrap';
export default function Alert(props){
    
    return(       <Modal className='rounded-0' show={props.show} onHide={() => {
        props.onHide()
    }
    } >
        <Modal.Header closeButton className='p-1 bg-primary rounded-0 text-white'>
           {props.header==null?"Notification":props.header}
        
        </Modal.Header>

        <Modal.Body>
            {props.message}
        </Modal.Body>
        {
            props.footer!=null?
            <Modal.Footer>
                {props.footer}
            </Modal.Footer>:null
        }
    </Modal>)
}