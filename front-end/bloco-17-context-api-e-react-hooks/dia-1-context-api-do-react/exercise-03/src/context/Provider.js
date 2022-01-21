import React from 'react';
import Context from './Context';
import { getPostsBySubreddit } from '../services/redditAPI';

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSubreddit: 'reactjs',
      subreddits: {
        frontend: {
          shouldRefresh: false,
          isFetching: false,
        },
        reactjs: {
          shouldRefresh: false,
          isFetching: false,
        }
      }
    };

    this.selectSubreddit = this.selectSubreddit.bind(this);
    this.refreshSubreddit = this.refreshSubreddit.bind(this);
    this.requestPosts = this.requestPosts.bind(this);
    this.receivePostsSuccess = this.receivePostsSuccess.bind(this);
    this.receivePostsFailure = this.receivePostsFailure.bind(this);
    this.fetchPosts = this.fetchPosts.bind(this);
    this.shouldFetchPosts = this.shouldFetchPosts.bind(this);
    this.fetchPostsIfNeeded = this.fetchPostsIfNeeded.bind(this);
  }

  selectSubreddit(subredditName) {
    this.setState({ selectedSubreddit: subredditName });
  }

  refreshSubreddit(subredditName) {
    this.setState((state) => ({
      subreddits: {
        ...state.subreddits,
        [subredditName]: {
          ...state.subreddits[subredditName],
          shouldRefresh: true,
        }
      }
    }));
  }

  requestPosts(subredditName) {
    this.setState((state) => ({
      subreddits: {
        ...state.subreddits,
        [subredditName]: {
          ...state.subreddits[subredditName],
          shouldRefresh: false,
          isFetching: true,
        }
      }
    }));
  }

  receivePostsSuccess(subredditName, posts) {
    const receivedAt = Date.now();

    this.setState((state) => ({
      subreddits: {
        ...state.subreddits,
        [subredditName]: {
          ...state.subreddits[subredditName],
          shouldRefresh: false,
          isFetching: false,
          lastUpdated: receivedAt,
          posts,
        }
      }
    }));
  }

  receivePostsFailure(subredditName, error) {
    this.setState((state) => ({
      subreddits: {
        ...state.subreddits,
        [subredditName]: {
          ...state.subreddits[subredditName],
          shouldRefresh: false,
          isFetching: false,
          posts: [],
          error,
        }
      }
    }));
  }

  fetchPosts(subredditName) {
    this.requestPosts(subredditName);

    return getPostsBySubreddit(subredditName).then(
      (json) => {
        const posts = json.data.children.map((child) => child.data);
        return this.receivePostsSuccess(subredditName, posts);
      },
      (error) => this.receivePostsFailure(subredditName, error.message),
    );
  }

  shouldFetchPosts(subredditName) {
    const { subreddits } = this.state;
    const subreddit = subreddits[subredditName];

    if (!subreddit.posts) return true;
    if (subreddit.isFetching) return false;
    return subreddit.shouldRefresh;
  }

  fetchPostsIfNeeded(subredditName) {
    this.shouldFetchPosts(subredditName) && this.fetchPosts(subredditName);
  }

  render() {
    const context = {
      ...this.state,
      selectSubreddit: this.selectSubreddit,
      refreshSubreddit: this.refreshSubreddit,
      requestPosts: this.requestPosts,
      receivePostsSuccess: this.receivePostsSuccess,
      receivePostsFailure: this.receivePostsFailure,
      fetchPosts: this.fetchPosts,
      shouldFetchPosts: this.shouldFetchPosts,
      fetchPostsIfNeeded: this.fetchPostsIfNeeded,
    };

    const { children } = this.props;

    return (
      <Context.Provider value={ context }>
        {children}
      </Context.Provider>
    );
  }
}

export default Provider;
