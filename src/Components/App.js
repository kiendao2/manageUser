import React, { Component }  from 'react';
import './../App.css';
import Header from './Header';
import Searchform from './Searchform';
import TableData from './TableData';
import Adduser from './Adduser';
import datauser from './Data.json';
const { v4: uuidv4 } = require('uuid');
class  App extends Component {
  constructor(props){
    super(props);
    this.state={
      hienthiForm:false,
      data:[],
      searchText:'',
      EditUserstatus:false,
      EditUserObject:{}
      
    }
  }
  
  componentWillMount() {
    if(localStorage.getItem('userData')===null){
      localStorage.setItem('userData',JSON.stringify(datauser))
    }else{
      var data2=JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:data2
      });
    }
    
  }
  
  getdataUserEdit=()=>{

  }
  doitrangThai=()=>{
    this.setState({
      hienthiForm:!this.state.hienthiForm
    });
  }
  gettextSearch=(dl )=>{
    this.setState({
      searchText:dl
    
    });
    console.log("du lieu nhan dc la "+this.state.searchText)
  }
  getNewUserData=(name,permisstion,tel)=>{
     console.log(name);
     console.log(permisstion);
     console.log(tel);
      var item={};
      item.id=uuidv4();
    item.name=name;
    item.permisstion=permisstion;
    item.tel=tel;
     var items =this.state.data;
     items.push(item);
     this.setState({
       data:items
     });
     localStorage.setItem('userData',JSON.stringify(items));
    //  console.log(items);
    //  console.log(this.state.data);
     
  }
  editUser=(user)=>{
    console.log(user);
    this.setState({
      EditUserObject:user
    });
  }
  changeEditFormStatus=()=>{
    this.setState({
      EditUserstatus:!this.state.EditUserstatus
    });
  }
  getdataUserEdit=(info)=>{
    this.state.data.forEach((value,key)=>{
      if(value.id===info.id){
        value.name=info.name;
        value.tel=info.tel;
        value.permisstion=info.permisstion;
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }
  deleteIdUser=(idUser)=>{
    // console.log(idUser);
    var data1=this.state.data;
      data1=data1.filter(item=>item.id!==idUser);
      console.log(data1);
      this.setState({
        data:data1
      });
      localStorage.setItem('userData',JSON.stringify(data1));
      // data1.forEach((value,key)=>{
      //   if(value.id===idUser){

      //   }
      // })
  }
  render(){
    var kq=[];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText)!==-1){
        kq.push(item)
      }
    })
    // console.log(this.state.data)
    return (
      <div>
        <Header></Header>
        <div className="Searchform">
          <div className="container">
            <div className="row">
               <Searchform 
               getdataUserEdit={(info)=>this.getdataUserEdit(info)}
               thongbao={()=>this.doitrangThai()} 
               EditUserObject={this.state.EditUserObject}
               EditUserstatus={this.state.EditUserstatus} 
               hienthiForm={this.state.hienthiForm} 
               checkConnectProps={(dl)=>this.gettextSearch(dl)} 
               changeEditFormStatus={()=>this.changeEditFormStatus()}>
               </Searchform>
               <TableData 
               deleteIdUser={(idUser)=>this.deleteIdUser(idUser)}
               edit={(user)=>this.editUser(user)} 
               datauserProps={kq}
               changeEditFormStatus={()=>this.changeEditFormStatus()}></TableData>
               <Adduser add={(name,permisstion,tel)=>this.getNewUserData(name,permisstion,tel)} hienthiForm={this.state.hienthiForm}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
