import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 420,
    },
    media: {
      height: 300,
    },
  });

function TemplateSix(props) {
    const classes = useStyles();
    return(
        <React.Fragment>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} image={props.cardImage} title={props.cardImageTitle}/>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                            {props.cardTitle}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.cardDescription}
                        </Typography>
                    </CardContent>
                    
                </CardActionArea>
            </Card>
            
        </React.Fragment>
    )    
}

export default TemplateSix