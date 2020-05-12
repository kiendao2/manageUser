import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.EditUserObject.id,
            name:this.props.EditUserObject.name,
            tel:this.props.EditUserObject.tel,
            permisstion:this.props.EditUserObject.permisstion
        }
    }
    
    isChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({
            [name]:value
        });
    }
    saveButton=()=>{
        var info={}
        info.id=this.state.id;
        info.name=this.state.name;
        info.tel=this.state.tel;
        info.permisstion=this.state.permisstion;
        this.props.getdataUserEdit(info);
        this.props.changeEditFormStatus()
    }
    render() {
        return (
            <div>
                 <div className="col">
      <div className="card border-primary mb-3 mt-2 ">
      <div className="card-header">Sua thong tin ca nhan  </div>
      <div className="card-body">
        <div className="form-group">
          <input defaultValue={this.props.EditUserObject.name}
          type="text" onChange={(event)=>this.isChange(event)} name="name" className="form-control" placeholder="User name "  />
        </div>
        <div className="form-group">
          <input defaultValue={this.props.EditUserObject.tel}
           type="text"onChange={(event)=>this.isChange(event)} name="tel" className="form-control" placeholder="Telephone number " />
        </div>
        <select defaultValue={this.props.EditUserObject.permisstion} onChange={(event)=>this.isChange(event)}
        name="permisstion"className="custom-select">
          <option value={1}>Admin </option>
          <option value={2}>Moderate </option>
          <option value={3}>User </option>
        </select>
        <div className="form-group">
          <div className="btn btn-block btn-success" onClick={()=>this.saveButton()}>Luu </div>
        </div>
      </div>
    </div>
    </div>
            </div>
        );
    }
}

export default EditUser;