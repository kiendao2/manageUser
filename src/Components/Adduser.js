import React, { Component } from 'react';

class Adduser extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:"",
      name:"",
      tel:"",
      permisstion:""
    }
  }
  
  isChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    console.log(name);
    console.log(value);
    
    this.setState({
    [name]:value
    });
    // var item={};
    // item.id= this.state.id;
    // item.name=this.state.name;
    // item.tel=this.state.tel;
    // item.permisstion=this.state.permisstion;
    // console.log(item);
    
  }
  kiemtraTrangthai=()=>{
    if(this.props.hienthiForm===true){
      return    (
        <div className="col">
      <div className="card border-primary mb-3 mt-2 ">
      <div className="card-header">Them moi </div>
      <div className="card-body">
        <div className="form-group">
          <input type="text" onChange={(event)=>this.isChange(event)} name="name" className="form-control" placeholder="User name "  />
        </div>
        <div className="form-group">
          <input type="text"onChange={(event)=>this.isChange(event)} name="tel" className="form-control" placeholder="Telephone number " />
        </div>
        <select onChange={(event)=>this.isChange(event)} name="permisstion"className="custom-select">
          <option value={1}>Admin </option>
          <option value={2}>Moderate </option>
          <option value={3}>User </option>
        </select>
        <div className="form-group">
          <div className="btn btn-block btn-success" onClick={(name,permisstion,tel)=>
            this.props.add(this.state.name,this.state.permisstion,this.state.tel)}>Add new </div>
        </div>
      </div>
    </div>
    </div>
      )
    }
  }
    render() {
      console.log(this.state);
      
        return (
            
    
            <div>
            {this.kiemtraTrangthai()}
          </div>
   
        );
    }
}

export default Adduser;