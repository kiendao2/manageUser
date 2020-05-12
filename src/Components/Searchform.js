import React, { Component } from 'react';
import EditUser from './EditUser';

class Searchform extends Component {
    constructor(props) {
        super(props);
        this.state={
           temvalue:''
        }
    }
    getdataUserEdit=(info)=>{
      this.setState({
        userObject:info
      });
      this.props.getdataUserEdit(info)
    }
    isShowEdit=()=>{
      if(this.props.EditUserstatus===true){
        return <EditUser 
        getdataUserEdit={(info)=>this.getdataUserEdit(info)}
        EditUserObject={this.props.EditUserObject}
        changeEditFormStatus={()=>this.props.changeEditFormStatus()}/>
      }
    }
    hienthiNut=()=>{
      if(this.props.hienthiForm===true){
        return <div className="btn btn-block btn-outline-secondary" onClick={()=>this.props.thongbao()}>Dong lai </div>
      } else  {
         return <div className="btn btn-block btn-outline-info" onClick={()=>this.props.thongbao()} >Them moi  </div>
      }
    
    }
    isChange=(event)=>{
          console.log(event.target.value);
          this.setState({
              temvalue:event.target.value
          });
    }
    render() {
        return (
            
                 <div className="col-12">
                     {this.isShowEdit()}
                  
                   
        <div className="form-group">
          <div className="btn-group">
            <input type="text"  className="form-control" onChange={(event)=>this.isChange(event)} placeholder="
                            Nhap tu khoa "  style={{width: '600px'}} />
            <div className="btn btn-info" onClick={(dl)=>this.props.checkConnectProps(this.state.temvalue)}>
              Tim 
            </div>
          
          </div>
          <div className="btn-group1">
         
              {this.hienthiNut()}
          </div>
        </div>
        <hr/>
      </div>
            
        );
    }
}

export default Searchform;