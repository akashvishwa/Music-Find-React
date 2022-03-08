import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { PlayArrow as PlayArrowIcon } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    color:'white',
    bgcolor: '#181818',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function VideoPlayModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [Elink,setELink]=React.useState('');

    React.useEffect(()=>{
        const vid=props.element.link.split('watch?v=')[1];
        // console.log(vid)
        const embedLink=`https://www.youtube.com/embed/${vid}`;
        // console.log(embedLink)
        setELink(embedLink)
                
    },[]);

    return (
        <div>
            <PlayArrowIcon sx={{ height: 38, width: 38, color: 'white' }} onClick={()=>{
                handleOpen()
            }} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {props.element.name}
                    </Typography>
                    <p>
                        {props.element.lyrics}🎶
                    </p>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* Player Code */}

                        <iframe width="420" height="345" src={Elink}>
                        </iframe>

                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
