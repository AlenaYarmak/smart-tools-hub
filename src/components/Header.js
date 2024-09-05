import React from "react";
import ButtonPdf from "./ButtonPdf";

const Header = () => {
    return(
        <div className="header">
            <div className="container__wrap d-flex justify-content-end">
                <ButtonPdf />
            </div>
        </div>
    )
}

export default Header;