import React from "react";
import prof from "./Profile.module.css"
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
   
    return (
        <div className={prof.content}>

            <ProfileInfo />
            <MyPost post={props.post}
                    addPost={props.addPost}
                    updateNewPostText = {props.updateNewPostText}
                    newPostText = {props.newPostText}/>
        </div>


    )
}

export default Profile