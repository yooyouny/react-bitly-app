import React, {useState} from "react"

const Url = (props) => {
    const [item, setItem] = useState(props.item);
    return(
        <div calssName = "Url">
            <p id = "{item.id}">{item.title}</p>
        </div>
    )
}
export default Url;
