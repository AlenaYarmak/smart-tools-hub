import React, { useState, useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

const openedPosition = 'rotate(0)';
const defaultPosition = 'rotate(-90deg)';

function ContextAwareToggle({ children, eventKey, callback, setActiveKey }) {
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
        <div onClick={decoratedOnClick}>
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
        </div>
    );
}

const AccElement = () => {
    const [activeKey, setActiveKey] = useState([]);  // Multiple accordion items can be open

    return (
        <Accordion alwaysOpen={true} activeKey={activeKey}>
            <Card>
                <Card.Header>
                    <ContextAwareToggle eventKey="0" setActiveKey={setActiveKey}>Click me!</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I am the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <ContextAwareToggle eventKey="1" setActiveKey={setActiveKey}>Click me!</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I am another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default AccElement;
