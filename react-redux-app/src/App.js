import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPosts } from './store/actions';
import PostContainer from './components/posts/PostContainer';
import AddPost from './components/posts/AddPost';

function App(props) {
    useEffect(() => {
      props.getAllPosts();
    }, [props]);
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/posts" render={() => <PostContainer />}/>
            <Route path="/posts/add" render={() => <AddPost />}/>
            <Redirect to="/posts" />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

const mapDispatchToProps = {
  getAllPosts
}

export default connect(null, mapDispatchToProps)(App);
