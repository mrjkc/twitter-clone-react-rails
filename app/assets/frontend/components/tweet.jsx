export default class Tweet React.Component {
  render() {
    return {
      <div>
          <li className="collection-item avatar">
            <i className="material-icons circle">
            <span className="title">{this.props.name}</span>
            <p>{this.props.body}  </p>
          </li>
      </div>
    }
  }
}
