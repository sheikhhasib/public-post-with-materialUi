import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';

const useStyles = makeStyles({
    root: {
        maxWidth: 1050,
    },
    media: {
        height: 140,
    },
});




const PostDetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [comments,setComments] = useState([]);
    const [images,setImage] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(posts => setPost(posts))
    }, []);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(comments => setComments(comments))
    },[])
    useEffect(()=>{
        const url = `https://randomuser.me/api/?results=5`;
        fetch(url)
            .then(res => res.json())
            .then(img => setImage(img.results))
    },[])
    const { id, title, body } = post;
    const classes = useStyles();

    for(let i = 0; i<comments.length ;i++){
        const random = Math.floor(Math.random() * 90 + 1);
        comments[i].image = `https://randomuser.me/api/portraits/women/${random}.jpg`;
    }
    return (
        <div style={{ width: '60%', margin: 'auto' }}>
            <div style={{ marginTop: '20px' }}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {body}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <small>Post Id : {id}</small>
                    </CardActions>
                </Card>
            </div>
            <div style={{width:'80%'}}>
                {
                    comments.map(comment => <Comments comment={comment}></Comments>)
                }
            </div>
        </div>
    );
};

export default PostDetails;