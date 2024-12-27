import React from 'react';
const PostList = (props) => {
    const { posts } = props;
    return posts.map((post, i) => {
        return (
            <tr key={i}>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
            </tr>
        );
    })
}
export default PostList;  