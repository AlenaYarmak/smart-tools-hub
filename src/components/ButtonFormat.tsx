import React from 'react';
import Button from './Button';
import useButtonFormatController from '../controllers/ButtonFormatController';

type ButtonFormatProps = {
  mockedData: any[];
};

const ButtonFormat: React.FC<ButtonFormatProps> = ({ mockedData }) => {

  const {
    arrowStatus,
    selectedFormat,
    hovered,
    openedPosition,
    defaultPosition,
    showButtons,
    handleListClick,
    generatePdf,
    generateDocx,
    basedStyles,
    hoveredStyle,
    handleMouseEnter,
    handleMouseLeave,
  } = useButtonFormatController();

  return (
    <div className='btn-group bg-white' role='group'>
      {selectedFormat === 'PDF' && (
        <Button text='PDF' clickFunction={generatePdf} />
      )}
      {selectedFormat === 'DOC' && (
        <Button text='DOC' clickFunction={generateDocx} />
      )}
      <button
        onClick={showButtons}
        type='button'
        className='button__fs btn button-color btn-lg py-3 px-4 rounded-end'
      >
        <svg
          style={{
            transition: '0.3s',
            transform: arrowStatus ? openedPosition : defaultPosition
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
      </button>
      {arrowStatus &&
        <div className='list__buttons'>
          <ul className='list-group lh-lg'>
            <li
              className={hovered === 'DOC' ? hoveredStyle : basedStyles}
              onClick={() => handleListClick('DOC')}
              onMouseEnter={() => handleMouseEnter('DOC')}
              onMouseLeave={handleMouseLeave}>
              DOC
            </li>
            <li
              className={hovered === 'PDF' ? hoveredStyle : basedStyles}
              onClick={() => handleListClick('PDF')}
              onMouseEnter={() => handleMouseEnter('PDF')}
              onMouseLeave={handleMouseLeave}>
              PDF
            </li>
          </ul>
        </div>}
    </div>
  )
}

export default ButtonFormat;