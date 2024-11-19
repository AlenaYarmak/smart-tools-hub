import React, { useState, useContext, useEffect, forwardRef } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import mockData from '../assets/data/mockData.json';

const openedPosition = 'rotate(0)';
const defaultPosition = 'rotate(-90deg)';

function ContextAwareToggle({ children, eventKey, callback, setActiveKey, title }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => {
      if (callback) callback(eventKey);
      setActiveKey((prevActiveKey) =>
        prevActiveKey.includes(eventKey)
          ? prevActiveKey.filter((key) => key !== eventKey)
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
          transform: isCurrentEventKey ? openedPosition : defaultPosition,
        }}
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        className='bi bi-caret-down'
        viewBox='0 0 16 16'
      >
        <path d='M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659' />
      </svg>
      <p className='m-0 ps-2 title--fs'>{title}</p>
    </div>
  );
}

function DeleteSection({ handleDelete, className }) {
  return (
    <svg onClick={handleDelete} xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className={`bi bi-trash delete__btn ${className}`} viewBox='0 0 16 16'>
      <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z'/>
      <path d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z'/>
    </svg>
  )
}

// AccElement Component with forwardRef to receive the ref
const AccElement = forwardRef(({ subtitle, description, title, index, onDelete }, ref) => {
  const [visible, setVisible] = useState(false);
  let classNameIcon = visible ? 'display-block' : 'display-none';
  const accordionArrayLength = mockData.length;

  // Function to generate array of strings
  function generateStringArray(n) {
    return Array.from({ length: n }, (_, i) => i.toString());
  }

  const sessionStorageKey = `accordionState-${index}`;

  const getInitialState = () => {
    const savedState = sessionStorage.getItem(sessionStorageKey);
    return savedState ? JSON.parse(savedState) : generateStringArray(accordionArrayLength);
  };

  const [activeKey, setActiveKey] = useState(getInitialState);

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(activeKey));
  }, [activeKey, sessionStorageKey]);

  return (
    <Accordion
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={ref} 
      className='mb-5' 
      alwaysOpen={true} 
      activeKey={activeKey}>
      <Card className='py-3 border-0 rounded-4 background-color'>
        <Card.Header className='border-0 p-2 mx-auto background-color d-flex justify-content-between' style={{ width: '98%' }}>
          <ContextAwareToggle eventKey='0' setActiveKey={setActiveKey} title={title} />
          <DeleteSection 
            handleDelete={onDelete}
            className={classNameIcon} />
        </Card.Header>
        <Accordion.Collapse eventKey='0' className='rounded-5'>
          <Card.Body className='px-3 py-4 mx-3 my-2 rounded-5 secondary-color'>
            <Card.Subtitle className='subtitle subtitle--spacing'>{subtitle}</Card.Subtitle>
            <Card.Text className='text'>{description}</Card.Text>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
});

export default AccElement;
