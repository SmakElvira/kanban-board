import React from 'react';
import '../App.css';
import UserOpen from './user-menu.png';
import UserClose from './user-menu-up.png';

import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.openUser = this.openUser.bind(this);
    this.closeUser = this.closeUser.bind(this);
    this.state = {user: true};
  }

  openUser() {
      this.setState({user: false})
  }
  
  closeUser() {
    this.setState({user: true})
  }

  render() {
    let user = this.state.user;
    let image;

    if (user) {
      image = <OpenUserInfoButton onClick={this.openUser} />
    } else {
      image = <CloseUserInfoButton onClick={this.closeUser} />
    }
  


    return (
      <>
        <NavLink to='/' className="App">
          Awesome Kanban Board
          <UserInfo user={user} />
          {image}
          {/* <img src={UserOpen} className='img' onClick={openUser}/>
          <img src={UserClose} className='imgUp' onClick={closeUser}/> */}
        </NavLink>
      </>
    )
  }
}

function OpenUserInfo(props) {
  return 
} 

function CloseUserInfo(props) {
  return 
}

function UserInfo(props) {
  let user = props.user
  
  if(user) {
    return <OpenUserInfo />;
  }
  return <CloseUserInfo />;
}

function OpenUserInfoButton(props) {
  return (
    // <button onClick={props.onClick}>
    <>
      <button onClick={props.onClick} style={{backgroundColor: '#0067A3', border: '0'}}>
        <img src={UserOpen} className='img' />
      </button>
    </>
  )
}

function CloseUserInfoButton(props) {
  return (
    <div style={{zIndex: '1', display: 'flex', alignItems: 'end', flexDirection: 'column', marginTop: '65px'}}>
      <button onClick={props.onClick} style={{backgroundColor: '#0067A3', border: '0', marginRight: '6px'}}>
        <img src={UserClose} className='imgUp' style={{marginRight: '-7px'}} />
      </button>
      <div style={{backgroundColor: 'white', marginTop: '5px', width: '134px', height: '60px', zIndex: '10', borderRadius: '5px'}}>
        <p style={{color: 'black', fontSize: '14px', paddingLeft: '7px', paddingTop: '8px', margin: '0 auto'}}>Profile</p>
        <p style={{color: 'black', fontSize: '14px', paddingLeft: '7px', paddingTop: '8px', margin: '0 auto'}}>Log Out</p>
      </div>
    </div>
  )
}

export default Header;
