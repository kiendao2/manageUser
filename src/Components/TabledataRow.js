import React, { Component } from 'react';

class TabledataRow extends Component {
    permisstionShow=()=>{
        if(this.props.permisstion===1){
            return "Admin ";
        }else if(this.props.permisstion===2){
            return "Moderator";
        }else return "Normal user ";
    }
    edit3=()=>{
        this.props.edit2();
        this.props.changeEditFormStatus();
    }
    deletionButton=(idUser)=>{
        this.props.deletionButton(idUser)
    }
    render() {
        return (
            <tr>
              <td >{this.props.stt}</td>
              <td>{this.props.userName} </td>
              <td>{this.props.tel}</td>
              <td>{
                  this.permisstionShow()
                  }</td>
              <td>
                <div className="btn-group">
                  <div className="btn btn-success change " onClick={()=>this.edit3()}><i className="fa fa-edit    ">Change </i></div>
                  <div className="btn btn-danger xoa  "onClick={(idUser)=>this.deletionButton(this.props.id)}><i className="fa fa-delete   ">Delete </i></div>
                </div>
              </td>
            </tr>
        );
    }
}

export default TabledataRow;