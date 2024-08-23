import React, { useState, useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

const PINK = 'rgba(255, 192, 203, 0.6)';
const BLUE = 'rgba(0, 0, 255, 0.6)';

function ContextAwareToggle({ children, eventKey, callback, setActiveKey }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => {
            if (callback) callback(eventKey);
            setActiveKey(activeEventKey === eventKey ? null : eventKey);  // Toggle the active key
        }
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <button
            type="button"
            style={{ backgroundColor: isCurrentEventKey ? PINK : BLUE }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

const AccElement = () => {
    const [activeKey, setActiveKey] = useState(null);  // No accordion is open initially

    return (
        <Accordion activeKey={activeKey} onSelect={(eventKey) => setActiveKey(eventKey)}>
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
