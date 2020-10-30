import React, { Component } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import styles from "./FeaturedPost.module.css";

class FeaturedPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      featuredPost: null,
    };
  }

  componentDidUpdate() {
    if (
      (this.props.postId && !this.state.featuredPost) ||
      (this.state.featuredPost && this.props.postId !== this.state.featuredPost.id)
    ) {
      Axios.get(`/posts/${this.props.postId}`).then((response) => {
        console.log(response);

        this.setState({
          featuredPost: response.data,
        });
      });
    }
  }

  render() {
    let featuredContent = <div>Please select a post</div>;

    if (this.state.featuredPost) {
      featuredContent = (
        <div>
          <div className={styles.FeaturedTitle}>{this.state.featuredPost.title}</div>
          <div>{this.state.featuredPost.body}</div>
        </div>
      );
    }

    return <div className={styles.FeaturedPost}>{featuredContent}</div>;
  }
}

FeaturedPost.propTypes = {
  postId: PropTypes.number,
};

export default FeaturedPost;
