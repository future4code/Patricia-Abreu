import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CommentIcon from '@material-ui/icons/Comment';
import Button from '@material-ui/core/Button';

const PostCard = (props) => {

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar>
          </Avatar>
                }
                title={props.post.title}
                subheader={props.post.username}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.post.text}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    <ArrowDownwardIcon />
                </IconButton>
                <p>{props.post.votesCount}</p>
                <IconButton >
                    <ArrowUpwardIcon />
                </IconButton>
                <Button
                variant="contained"
                startIcon={<CommentIcon />}
                >
                Comentar
                </Button>
            </CardActions>
        </Card >
    )
}

export default PostCard;