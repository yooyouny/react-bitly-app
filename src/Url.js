import React, {useState} from "react"
import { ListItem, ListItemText, InputBase, ListItemSecondaryAction, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';



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
    )

}
export default Url;
