import React, { Component } from 'react';

class TAQEvenform4 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Truong Anh Quan"
        }
    }
    handlegetname=()=>{
        alert(this.props.name);
        this.setState({
            name:this.props.name
        })
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>lay du lieu tu props</h2>
                <button onClick={this.handlegetname}>lay ten </button>
                <h2>wellcome to, {this.state.name}</h2>
            </div>
        );
    }
}

export default TAQEvenform4;
