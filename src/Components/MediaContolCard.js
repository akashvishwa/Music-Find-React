import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import VideoPlayModal from './VideoPlayModal';


export default function MediaControlCard(props) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' , width:'400px' ,height:'200px' ,color:'white',backgroundColor:'#181818' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' ,width:'inherit' ,height:'inherit'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {props.element.name}
          </Typography>
          <Typography variant="subtitle1" color="text.white" component="div">
            {props.element.artist}
          </Typography>
          <Typography variant="subtitle1" color="text.white" component="div">
          🌠{props.element.rating} 🎶{props.element.genre}
          </Typography>
          
        </CardContent>

        {/* For the playing modal */}
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon sx={{color:'white'}} />
            ) : (
              <SkipPreviousIcon sx={{color:'white'}} />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            {/* <PlayArrowIcon sx={{ height: 38, width: 38 ,color:'white' }} /> */}
            <VideoPlayModal element={props.element} ></VideoPlayModal>
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon sx={{color:'white'}}  />
            ) : (
              <SkipNextIcon  sx={{color:'white'}}/>
            )}
          </IconButton>
        </Box>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 160 ,height:'auto'}}
        image={require('../staticItems/music3.png')}
        alt="Live from space album cover"
      />
    </Card>
  );
}
