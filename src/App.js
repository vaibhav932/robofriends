import React, { Component } from 'react';
import {robots} from './robots';
import CardArray from './CardArray';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App  extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ""
        }
    }
 

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
        
        
    }
    searchChange = (event) => {
        this.setState({searchField: event.target.value})
    }
    render(){
        const filterRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());    
        })
        if(this.state.robots.length===0){
           return <h1>Loading</h1>
        }
        else{
        return(
            <div className='tc'>
                <h2>RoboFriends</h2>
                <SearchBox searchChange={this.searchChange}/>
                <hr/>
                <Scroll>
                <CardArray robots={filterRobots}/>
                </Scroll>
            </div>
        )
        }
    }
    
}
export default App;