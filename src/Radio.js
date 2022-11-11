import React from 'react'

export default class Radio extends React.Component{
    constructor(props){
        super(props)
    }
  
    
    render(){
        return(
    <div>
    <input type="radio" name="sortby"onChange={this.props.changeSortByName}/>
    <span>Sort By Name</span>
    <input type="radio" name="sortby" onChange={this.props.changeSortByDOB}/>
    <span>Sort By DOB</span>
    </div>
    )
    }

}