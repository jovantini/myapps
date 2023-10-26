import React from "react";
import posts from "./Post.module.css"


const Post = (props) => {

    return (
        <div className={posts.item}>
            <img src="https://android-obzor.com/wp-content/uploads/2022/03/55-3.jpg" alt="аватарка" />
            {props.message}
            <span>Like {props.likeCount}</span>
            
        </div>
    )
}

export default Post