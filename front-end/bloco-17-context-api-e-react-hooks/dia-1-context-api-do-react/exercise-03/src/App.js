// src/App.js

import React, { Component } from 'react';
import Posts from './components/Posts';
import Selector from './components/Selector';
import Context from './context/Context';

class App extends Component {
  componentDidMount() {
    const { fetchPostsIfNeeded, selectedSubreddit } = this.context;
    fetchPostsIfNeeded(selectedSubreddit);
  }

  selectSubreddit(nextSubreddit) {
    const { selectedSubreddit, selectSubreddit, fetchPostsIfNeeded } = this.context;
    if (nextSubreddit !== selectedSubreddit) {
      selectSubreddit(nextSubreddit);
      fetchPostsIfNeeded(nextSubreddit);
    }
  }

  async handleRefreshClick(event) {
    event.preventDefault();

    const { refreshSubreddit, fetchPostsIfNeeded, selectedSubreddit } = this.context;
    await refreshSubreddit(selectedSubreddit);
    fetchPostsIfNeeded(selectedSubreddit);
  }

  renderLastUpdatedAt(lastUpdated) {
    return <span>{`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}</span>;
  }

  renderRefreshButton() {
    const { selectedSubreddit, subreddits } = this.context;
    const { isFetching } = subreddits[selectedSubreddit];

    return (
      <button
        type="button"
        onClick={ (event) => this.handleRefreshClick(event) }
        disabled={ isFetching }
      >
        Refresh
      </button>
    );
  }

  render() {
    const { selectedSubreddit, subreddits } = this.context;
    console.log(this.context);

    const availableSubreddits = Object.keys(subreddits);

    const {
      posts = [],
      isFetching,
      lastUpdated,
    } = subreddits[selectedSubreddit];

    const isEmpty = posts.length === 0;

    return (
      <div>
        <Selector
          value={ selectedSubreddit }
          onChange={ (nextSubreddit) => this.selectSubreddit(nextSubreddit) }
          options={ availableSubreddits }
        />
        <div>
          {lastUpdated && this.renderLastUpdatedAt(lastUpdated)}
          {this.renderRefreshButton()}
        </div>
        {isFetching && <h2>Loading...</h2>}
        {!isFetching && isEmpty && <h2>Empty.</h2>}
        {!isFetching && !isEmpty && <Posts posts={ posts } />}
      </div>
    );
  }
}

App.contextType = Context;

export default App;
