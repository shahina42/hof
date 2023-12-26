import React, { Component } from 'react'

export default class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
  renderAllItem=()=>{
    const data = this.state.userData;
    const mapRows = data.map((item) => (
        <>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </>
    ));
    return mapRows;
  }

  renderUserType=()=>{
    const data = this.state.userData;
    const userTypeToFilter = 'Designer';
    const filteredData=data.filter(item=>item.user_type==userTypeToFilter)
    const mapRows = filteredData.map((item) => (
        <>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </>
    ));
    return mapRows;
  }

  renderName=()=>{
    const data = this.state.userData;
    const filteredData=data.filter(item=>item.name.toLowerCase().startsWith('j'))
    const mapRows = filteredData.map((item) => (
        <>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </>
    ));
    return mapRows;
  }

  renderAge=()=>{
    const data = this.state.userData;
    const filteredData=data.filter(item=>item.age>28 && item.age<=50)
    const mapRows = filteredData.map((item) => (
        <>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </>
    ));
    return mapRows;
  }

  renderYearsofExperience =()=>{
    const data = this.state.userData;
    const filteredData=data.filter(item=>item.user_type.toLowerCase()==='designer')
const Experience=filteredData.reduce((total,designer)=>{
    return total+designer.years
},0)
    return  Experience;
  }



  render(){
    return(
        <>
         <h1>Display all items</h1>
         <div >
            <ul>
                {this.renderAllItem()}
            </ul>
         </div>
         <h1>Display based on user type</h1>
         <div >
            <ul>
                {this.renderUserType()}
            </ul>
         </div>

         <h1>Filter all data starting with J</h1>
         <div >
            <ul>
                {this.renderName()}
            </ul>
         </div>
        
         <h1>Filter all data based on age greater than 28 and less than or equal to 50</h1>
         <div >
            <ul>
                {this.renderAge()}
            </ul>
         </div>

         <h1>Find the total years of designers</h1>
         <div >
            <ul>
                {this.renderYearsofExperience()}
            </ul>
         </div>
        </>
       
      
    )
  }
  
}

