import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div>
                    <h1>Flexbox Crash Course</h1>
                    <p>
                        This crash course was created by Brad Traversy to help you learn the basics of flexbox.
                        Flexbox is a very important tool in CSS
                    </p>
                </div>
                <img src="grid.svg" alt="Add a image Here"/>
            </div>
        </header>
    )
}

export default Header