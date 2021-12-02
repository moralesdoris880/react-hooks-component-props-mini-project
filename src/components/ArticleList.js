import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    return (
        <div>
            <main>{addPost(posts)}</main>
        </div>
    )
}

const addPost = (posts)=>{
    return (posts.map((post)=><Article title={post.title} date={post.date} preview={post.preview} />)) 

}

export default ArticleList