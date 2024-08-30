import React, { useState, useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

const openedPosition = 'rotate(0)';
const defaultPosition = 'rotate(-90deg)';

function ContextAwareToggle({ children, eventKey, callback, setActiveKey, title }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => {
            if (callback) callback(eventKey);
            setActiveKey(prevActiveKey => 
                prevActiveKey.includes(eventKey) 
                    ? prevActiveKey.filter(key => key !== eventKey) 
                    : [...prevActiveKey, eventKey]
            );
        }
    );

    const isCurrentEventKey = activeEventKey.includes(eventKey);

    return (
        <div onClick={decoratedOnClick} className='d-flex align-items-center'>
            <svg
                style={{
                    transition: '0.3s',
                    transform: isCurrentEventKey ? openedPosition : defaultPosition
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-down"
                viewBox="0 0 16 16"
            >
                <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
            </svg>
            <p className='m-0 ps-2 title--fs'>{title}</p>
        </div>
    );
}


const text = 'Name of card';

const AccElement = ({ subtitle, description, title }) => {
    const [activeKey, setActiveKey] = useState([]);  // Multiple accordion items can be open

    return (
        <Accordion className='mb-5' alwaysOpen={true} activeKey={activeKey} >
            <Card className='py-3 border-0 rounded-5 background-color'>
                <Card.Header className='border-0 p-2 mx-auto background-color'  style={{width: '98%'}}>
                    <ContextAwareToggle eventKey="0" setActiveKey={setActiveKey} title={title}></ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0" className='rounded-5'>
                    <Card.Body className='px-3 py-4 mx-3 my-2 rounded-5 secondary-color'>
                        <Card.Subtitle className='subtitle subtitle--spacing'>{subtitle}</Card.Subtitle>
                        <Card.Text className='text'>{description}</Card.Text>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default AccElement;
