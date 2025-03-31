const CopyPopup = ({name, x, y}: {name: string, x: number, y: number}) => {
    return(
        <div 
            className={`${name} copy-popup`}
            style={{top: `${y - 20}px`, left: `${x + 20}px`}}
            >Copied!</div>
    )
}

export default CopyPopup;