import React from 'react';
import {BrowserRouter,Route, Link, Switch, Redirect } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import Post from './components/posts';
import Profile from './components/profile'
import PostItem from './components/postitem'


const App = () => {
  return (
    <>
      <BrowserRouter>
          <Header/>
        <div className="container">
        <Switch>
        {/* block */}
          {/* <Redirect from='profile' to='/' /> */}


          <Route path="/posts/:id"  component={PostItem}/>
          <Route path="/posts"  component={Post}/>
          <Route path="/profile"  component={Profile}/>
          <Route path="/" exact  component={Home}/>

          <Route render={()=>(
            <h3>Opps This page don't exist</h3>
          )} />


        </Switch>
        </div>
    </BrowserRouter>
    </>
  );
}

export default App;
