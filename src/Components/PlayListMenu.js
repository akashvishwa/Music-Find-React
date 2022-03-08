import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AddModal from './AddModal';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'inherit',
  color:'white',
};

export default function PlayListMenu( props) {

    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            
            <ListItem button>
                <AddModal AddSong={props.AddSong}/>
            </ListItem>
            <Divider light />
            <label style={{textAlign:'center',display:'block'}}>SORT</label>
            <ListItem button divider>
                <ListItemText primary="NAME" onClick={props.sortByName}/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="ARTIST" onClick={props.sortByArtist} />
            </ListItem>
            
            <ListItem button>
                <ListItemText primary="RATING" onClick={props.sortByRating} />
            </ListItem>
            <ListItem button>
                <ListItemText primary="GENRE" onClick={props.sortByGenre} />
            </ListItem>
        </List>
    );

}
