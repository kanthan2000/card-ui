import Card from '@mui/material/Card'
import { CardActionArea, CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';

const Singlecard = (props) => {
    return (
        <>
        <Card >
       <CardActionArea>
         <CardMedia>
           <img src={props.img} style={{height: "140" , backgroundPosition:"cover"}}/>
         </CardMedia>
         <CardContent>
         <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.words}
          </Typography>
         </CardContent>
       </CardActionArea>
       <CardActions>
       <Button size="small" color="primary">
          Share
        </Button>
       </CardActions>
     </Card>
    
        </>
    )
}
export default Singlecard;