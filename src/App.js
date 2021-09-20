import { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input, IconButton } from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState("");
  const [messeages, setMessage] = useState([]);
  const [userName, setUserName] = useState("");

  //usestate = variables in react
  //useEffect = run code on a condition
  useEffect(() => {
    //run once when the app component loads
    db.collection('messages')
    // .orderBy('timestap', 'desc')
    .onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [] );

  useEffect(() => {
    // const userName = prompt('please enter your name');
    setUserName(prompt('please enter a name'));
  }, []);

  const sendMessege = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      userName: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    //all the logic to send the message
    setMessage([...messeages, {userName: userName, message: input}]);
    setInput("");
  };
  // console.log(input);
  // console.log(messeages);
  return (
    <div className="App">
      <img src='https://ndassistive.org/wp-content/uploads/2020/05/Messenger-logo.png' alt='' />
      <h1 className='app__heading'>Messenger App</h1>
      <h2 className='app__headingTwo'>welcome { userName }</h2>

      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input className='app__input'
            placeholder='enter a message...'
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton style={{paddingRight: '50px'}}
            className='app__iconButton'
            variant="contained"
            color="primary"
            disabled={!input}
            type="submit"
            onClick={sendMessege}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      {/*masseages themselve*/}
      <FlipMove>
      {messeages.map(({ id, message }) => (
        <Message userName={userName} message={message} />
      ))}
      </FlipMove>
    </div>
  );
}

export default App;
