import React from 'react'
import { connect } from 'react-redux';
import PostList from './PostList';
import {Container, Table, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const PostContainer = (props) => {
    const {posts = []} = props;
    return (
        <div>
            <Container> 
                <div className="d-flex justify-content-between mt-5">
                    <h3 >Post List</h3>
                    <Button  variant="primary">
                        <Link to="/posts/add" style={{color:"black", textDecoration:"none"}}>Add Post</Link>
                    </Button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>UserId</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PostList posts={posts}/>
                    </tbody>
                </Table>
            </Container>
            
        </div>
    )
}
const mapStateToProps = state => {
    return {
        posts: state.posts.post
    }
}
export default connect(mapStateToProps, null)(PostContainer);
