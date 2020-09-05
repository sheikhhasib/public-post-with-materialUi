import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
export const PostContext = createContext();

function App() {
  const [posts,setPosts] = useState([]);
  return (
    <PostContext.Provider value={[posts,setPosts]}>
       <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Posts></Posts>
          </Route>
          <Route exact path="/post/:postId">
            <Header></Header>
            <PostDetails></PostDetails>
          </Route>
        </Switch>
      </Router>
    </PostContext.Provider>
  );
}

export default App;
