import React from "react";
import mPost from "./MyPost.module.css"
import Post from "./Post/Post";
//import addPost from "./../../../Scripts/addPost.js"

const MyPost = (props) => {
   
    let postElements = props.post.map(p => <Post message={p.message} likeCount={p.likeCount} />)

    let newPostElement = React.createRef();

    const addPost1 = () => {
        let text = newPostElement.current.value;
        
        props.addPost(text)
    
    }
    
    return (
        <div>
            My post
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost1}>Add post</button>
                </div>
            </div>

            <div>
                <div className={mPost.item}>
                    {postElements}
                </div>
            </div>
        </div>
    )
}

export default MyPost