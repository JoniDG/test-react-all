import React, { useEffect, useState, useCallback } from 'react'
import { getPost } from './helpers/getPosts';
import { getUser } from './helpers/getUser';



export const Users = () => {
  
    const [user,setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const updateUser = () => {
        getUser()
            .then((newUser) => {
                setUser(newUser);
            }).catch((err) => {
                console.log(err);
            });
    }

    const updatePosts = useCallback (() => {
        getPost(user?.id)
            .then((newPosts) => {
                setPosts(newPosts);
            }).catch((err) => {
                console.log(err);
            });
    },[user.id])

    useEffect(() => {
        updateUser();
    }, [])

    useEffect(() => {
        updatePosts();
    }, [user, updatePosts])
    
    
    return (
    <div>
        <button onClick={updateUser}>Another User</button>
        <h1>{user?.name}</h1>
        <h3>{user?.email}</h3>

        <br/>
        <p>Posts - user: {user.id}</p>
        <ul>
            {
                posts?.map(post=>(
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>
    </div>
  )
}
