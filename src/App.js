import './App.css';
import Url from './Url';
import React, {useState} from "react"

function App() {
  const [items, setItems] = useState([
    {
      id: "0",
      title: "Hello.com"
    },
    {
      id: "1",
      title: "World.com"
    },
  ]);

  let UrlItems = items.length > 0 && items.map((item) => <Url item={item} key={item.id} />);
  // 초기화 한 item props 사용해 매개변수로 넘기기 
  return (
    <div className='App'>
      {UrlItems}
    </div>
  );
}

export default App;
