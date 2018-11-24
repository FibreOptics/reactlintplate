import React, { Component } from 'react';
import TopNavBar from '../../Components/TopNavbar';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../redux/actions/postActions'

class Lobby extends Component {
/*  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/testitem')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }
*/ 

  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    //const { list } = this.state;
    const list = this.props.posts;
    return (
      <div className="App">
        <TopNavBar/>
        <h1>List of Items</h1>
        {list.length ? 
        (<div>
            {/* Render the list of items */}
            {list.map((item,i) => {
              return(
                <div  key={i}>
                  <li>
                    {i}:{item}
                  </li>
                </div>
              );
            })}
        </div>) 
       :(<div>
            <h2>No List Items Found</h2>
         </div>)
      }
      </div>
    );
  }
}

Lobby.propTypes = {
  fetchPosts:PropTypes.func.isRequired,
  posts:PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  //statename same as in rootReduc(index) posts
  //getting items same in the postReduc
  posts: state.posts.items 
});

export default connect(mapStateToProps,{fetchPosts})(Lobby);