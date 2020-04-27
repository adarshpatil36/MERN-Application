import React, { Component } from 'react'
import Data from './Data';
import { Button, Input } from 'semantic-ui-react';

export class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state={
            searchValue: null,
            data: null
        }
    }
    onSearchHandleListener = (e) =>{
        console.log(e.target.value)
        if(e.charCode === 13){
            this.fetchData(e);
        }
        this.setState({searchValue:e.target.value})
    }
    fetchData = (e) =>{
        if(this.state) {
        let searchValue = e.type === 'click' ? this.state.searchValue : e.target.value;
        fetch(`http://localhost:8080/api/search?location=${searchValue}`)
        .then(res => res.json())
        .then(data=> this.setState({data:data}))
        .catch(err => console.log("Error fetching data"))
        }
    }
    render() {
        return (
            <div>
                {/* <input type="search" onChange = {this.onSearchHandleListener}></input> */}
                <Input
                    icon={{ name: 'search', circular: true, link: true }}
                    placeholder='Search By Location...'
                    onKeyPress = {this.onSearchHandleListener}
                    onBlur= {this.onSearchHandleListener}
                />
                <Button onClick={this.fetchData} style={{margin:'20px'}}>Search</Button>
                {this.state.data && <Data data={this.state.data}/>}
            </div>
        )
    }
}

export default SearchBar
