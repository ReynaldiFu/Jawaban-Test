import axios from 'axios';
import { Component } from 'react';
import './App.css';
import Ccard from "./Component/Card";

class App extends Component {
  state={
    i:[]
  }
  test(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=> {
      let i=[];
      for(let [id,data] of Object.entries(res.data)){
        i.push({
            userid: data.userId,
            id: data.id,
            title: data.title,
            body: data.body,
        });
        this.setState({i});
    }
  })
  }

  componentDidMount(){
    this.test();
  }
  render(){
    return (
      <div className="App">
        {this.state.i.map(x=>(
          <Ccard userid={x.userid} id={x.id} title={x.title} body={x.body}/>
        ))}
      </div>
    );
  }
}

export default App;
