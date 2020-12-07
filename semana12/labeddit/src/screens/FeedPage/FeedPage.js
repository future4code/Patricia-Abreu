import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { baseUrl } from '../../constants/constants';
import axios from 'axios';
import { LinearProgress } from '@material-ui/core';
import PostCard from '../../components/PostCard';

const FeedPage = (props) => {
    const history = useHistory();
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(localStorage.getItem("token") === null){
            history.push("/login");
        }
        },[])

    useEffect(() => {
        const axiosConfig = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }

        setIsLoading(true)
        axios.get(`${baseUrl}/posts`, axiosConfig).then((response : AxiosResponse<T> ) => {
            setPosts(response.data.posts);
            setIsLoading(false)
        })
    }, [])

    return (
    <div>
        {isLoading && <LinearProgress/>}
        {posts.map(post => {
            return (<PostCard post={post} />)
        })}
    </div>
    )
}

export default FeedPage;