import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import react from 'react';

class App extends react.Component {
  render(){
  return (
    <div className="App">
     {this.props.posts.map(post=>(
       <div key={post.id}>{post.name}</div>
     ))}
    </div>
  )
     }
}

const mapStateToProps=(state)=>{
  return{
    posts:state.posts
  }  
}
export default connect(mapStateToProps)(App);
