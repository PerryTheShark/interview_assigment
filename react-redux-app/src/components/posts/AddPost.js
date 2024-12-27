import React from 'react'
import {Form, Button, Container} from 'react-bootstrap';
const AddPost = () => {
    const handleSubmit = () => {
        alert("Hello world");
    }
    return (
        <Container>
            <h3 style={{textAlign:"center", marginTop:"50px"}}>Add Post</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>UserId</Form.Label>
                    <Form.Control type="number" placeholder="Number" required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Body</Form.Label>
                    <Form.Control type="text" placeholder="Body" required />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default AddPost;
