import React, {useState} from "react"
import { Box, ListItem, ListItemText, InputBase, ListItemSecondaryAction, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import './App.css'



const Url = (props) => {
    const [item, setItem] = useState(props.item);
    const deleteItem = props.deleteItem;

    const deleteEventHandler = () => {
        deleteItem(item);
    };

    const onInputChange = (e) => {
        setItem(e.target.value)
    }

    return(
        <Box sx={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
        <ListItem>
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label": "naked"}}
                    type="text"
                    id = {item.id}
                    name = {item.id}
                    value = {item.newUrl}
                    multiline = {true}
                    fullWidth = {true}
                />
                <InputBase
                    inputProps={{"aria-label": "naked"}}
                    type="text"
                    id = {item.id}
                    name = {item.id}
                    value = {item.destination}
                    multiline = {true}
                    fullWidth = {true}
                />
            </ListItemText>

            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Url" onClick={deleteEventHandler}>
                    <RemoveCircleOutlineIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        </Box>
    )

}
export default Url;
