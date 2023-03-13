import './App.css';
import Url from './Url';
import React, { useState, useEffect } from "react";
import { Container, List, Paper } from "@mui/material";
import AddUrl from './AddUrl';
import {call} from './service/ApiService'

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    call("/url", "GET", null)
    .then((response) => setItems(response.data));
  }, []);

  const addItem = (item) => {
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/;
    if (!urlRegex.test(item.destination)) {
      alert('Invalid destination URL format');
      return;
    }

    call("/url", "POST", item)
    .then((response) => {
      setItems([...items, response]);
    })
    .catch((error) => {
      console.log(error);
    });
   };

  const deleteItem = (item) => {
    call("/url", "DELETE", item)
    .then((response) => setItems(response.data));
  };

  let UrlItems = items && items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Url
            item={item}
            key={item.id}
            deleteItem={deleteItem}
          />
        ))}
      </List>
    </Paper>
  );

  if (items === null) {
  UrlItems = null;
}
  // 초기화 한 item props 사용해 매개변수로 넘기기 
  return (
    <div className='App'>
      <Container maxWidth="md">
        <AddUrl addItem = {addItem} />
        <div className='UrlList'> {UrlItems}</div>
      </Container>
    </div>
  );
}

export default App;
