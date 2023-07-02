import * as React from 'react';

export default function CommentSection() {
    return (
        <div>
            <h1>Comment Section</h1>
            <form className="comment-form">
                <div className="comment-form-input">
                    <input className="short-input" type="email" placeholder="Your Email" />
                    <input className="long-input" type="text" placeholder="Your Comment" />
                    <button className="comment-button" type="submit">Submit</button></div>

            </form>

        </div>
    );
}