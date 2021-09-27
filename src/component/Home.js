import React, { useContext } from  'react'
import { PostDataContext } from '../context/postContext'
import Card from './Card';

const Home = () => {
    const {post} = useContext(PostDataContext)
    return (
        <div className = "cards">
           {
            post &&   post.map((posts , index)=>{
                return(
                    <Card key = {index} posts = {posts}></Card>
                )
               })
           }
        </div>
    )
}

export default Home
