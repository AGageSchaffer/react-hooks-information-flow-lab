import React, { useState } from "react";

function Header(prop) {

    const [isDarkMode, setIsDarkMode] = useState(false);


 return(
    <>
    <header>
    <h2>Shopster</h2>
        <button onClick={prop.onDarkModeClick}>
            {isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </header>
    </>
 )}

export default Header;