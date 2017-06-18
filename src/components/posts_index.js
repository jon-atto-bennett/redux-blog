import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostsIndex extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }
  render () {
    return (
      <div>
        Posts Index
      </div>
    )
  }
}

// By passing in action creator connect is taking care of mapStateToProps
// so no need for seperate function
export default connect(null, { fetchPosts })(PostsIndex)
