import React, { useEffect, useRef, useState } from 'react'
import { getPost } from './helpers/getPosts'

const Card = () => {
    const [post, setPost] = useState({title: "Post 1"})
    const [loading, setLoading] = useState(true)
    const isMountedRef = useRef(true);

    const updatePost = () => {
        getPost()
            .then((data) => {
                setTimeout(() => {
                    if(isMountedRef.current) {
                        setPost(data)
                        setLoading(false)
                    }
                },2000);
            })
    }

    useEffect(() => {
        updatePost();
        return () => {
            isMountedRef.current = false;
        }
    }, [])
    
    if(loading) return <h1>Loading...</h1>


  return (
    <div>
        <h1>{post.title}</h1>
    </div>
  )
}

export default Card