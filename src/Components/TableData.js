import React, { Component } from 'react';
import TabledataRow from './TabledataRow'
class TableData extends Component {
  deletionButton=(idUser)=>{
      this.props.deleteIdUser(idUser)
    
      
  }
    mappingDataUser=()=>
        this.props.datauserProps.map((value,key)=>(<TabledataRow
        deletionButton={(idUser)=>this.deletionButton(idUser)}
        changeEditFormStatus={()=>this.props.changeEditFormStatus()} 
        edit2={(user)=>{this.props.edit(value)}} 
        userName={value.name} 
        key={key} 
        stt={key+1} 
        tel={value.tel} 
        id={value.id}
        permisstion={value.permisstion}/>))
      
    render() {
        // console.log(this.props.datauserProps)
        return (
          
                
      <div className="col">
        <table className="table table-striped table-inverse table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Name </th>
              <th>So dien thoai </th>
              <th>Quyen truy cap </th>
              <th>Thao tac</th>
            </tr>
          </thead>
          <tbody>
         {this.mappingDataUser()}
          </tbody>
        </table>
      
            </div>
        );
    }
}

export default TableData;