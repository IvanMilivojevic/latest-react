import React, { Component } from "react";
import PropTypes from "prop-types";
import Axios from "../../Axios/AxiosPosts";
import Post from "./Post/Post";

class PostsLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    console.log(this.props);

    Axios.get("/posts")
      .then((response) => {
        console.log(response);
        const posts = response.data.slice(0, 4);
        for (let i = 0; i < posts.length; i += 1) {
          posts[i].author = "Ivan";
        }
        this.setState({ posts });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  setFeatured = (id) => {
    this.props.history.push(`/${id}`);
  };

  render() {
    console.log(this.state.featured);
    return (
      <div>
        {this.state.posts.map((post) => {
          return <Post title={post.title} author={post.author} key={post.id} click={() => this.setFeatured(post.id)} />;
        })}
      </div>
    );
  }
}

PostsLists.propTypes = {
  history: PropTypes.object,
};

export default PostsLists;
