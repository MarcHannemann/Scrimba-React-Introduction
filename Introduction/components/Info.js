import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img src="../images/IMG_3677.JPG" className="profile--pic" />
            <h1 className="Full-name">Marc Hannemann</h1>
            <h3>Full-Stack Developer</h3>
            <h5>Homepage here</h5>
            <div className="buttons">
                <button className="btn--email">Email</button>
                <button className="btn--linkedIN">LinkedIN</button>
            </div>
        </div>
    )
}
