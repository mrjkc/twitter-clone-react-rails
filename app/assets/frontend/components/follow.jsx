import React from 'react';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import { Link } from 'react-router';

let getAppState = () => {
  return { users: UserStore.getAll() };
}

export default class Follow extends React.Component {
  // set the state in the class constructor
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    UserActions.getAllUsers();
    UserStore.addChageListener(this._onChange);
  }

  componentWillUnmount() {
    UserStore.removeChageListener(this._onChange);
  }
  _onChage() {
    console.log(5, "Main._onChage");
    this.setState(getAppState());
  }
  render() {
    let users = this.state.users.map( user => {
      return (
        <li key={user.id} className="collection-item avatar">
          <img src={ user.gravatar } className="circle" />
          <span className="title">{user.name}</span>
        </li>
      )
    });
    return(
      <div>
        <h3>Who to follow </h3>
        <ul>
          { users }
        </ul>
        <Link to="/">Back</Link>
      </div>
    );
  }
}
