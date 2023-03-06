import './App.css';
import Url from './Url';
import React, { useState } from "react";
import { Container, List, Paper } from "@mui/material";
import AddUrl from './AddUrl';

function App() {
  const [items, setItems] = useState([
    {
      id: "0",
      destination: "Hello.com",
      newUrl: "",
      active: true
    },
    {
      id: "1",
      destination: "World.com",
      newUrl: "",
      active: true
    },
  ]);

  const addItem = (item) => {
    item.id = "" + items.length;
    item.active = false;
    //레퍼런스를 기준으로 랜더링 되기 때문에 업데이트는 setItems에서 새 배열 추가로 
    setItems([...items, item]);
    console.log("items: ", items)
  };

  let UrlItems = items.length > 0 && (
    <Paper stype={{margin: 16}}>
      <List>
        {items.map((item) => (
          <Url item={item} key={item.id} />
        ))}
      </List>
    </Paper>
  );
  // 초기화 한 item props 사용해 매개변수로 넘기기 
  return (
    <div className='App'>
      <Container maxWidth="md">
        <AddUrl addItem = {addItem} />
        <div className='UrlList'>{UrlItems}</div>
      </Container>
    </div>
  );
}

export default App;
