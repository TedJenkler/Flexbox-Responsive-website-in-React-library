import React from "react";

const Section = () => {
    return (
        <div className="boxes">
            <div className="container">
                <div className="box">
                    <h2><i className="fas.fa-arrows-alt-v"></i>Alignment & space</h2>
                    <p>
                        A more efficent way to lay out, align and distribute space among items in a container
                    </p>
                </div>
                <div className="box">
                    <h2><i className="fas.fa-arrows-alt-v"></i>Tricky Positioning</h2>
                    <p>
                        Flexbox usually solves tricky problems including how to position or dynamically resize elements on a page
                    </p>
                </div>
                <div className="box">
                    <h2><i className="fas.fa-arrows-alt-v"></i>Responsive Design</h2>
                    <p>
                        Flexbox makes building a website Layout (and making it responsive!) much, much easier
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section