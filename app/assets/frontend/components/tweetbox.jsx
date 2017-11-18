import TweetActions from "../actions/TweetActions";

export default class TweetBox extends React.Component {

  sendTweet() {
    event.preventDefault();
    //this.props.sendTweet(this.refs.tweetTextArea.value);
    TweetActions.sendTweet(this.refs.tweetTextArea.value);
    this.refs.tweetTextArea.value = '';
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.sendTweet}>
          <div className="input-field">
            <textarea ref="tweetTextArea" className="materialize-textarea" />
            <label>wasup</label>
            <button type="submit" className="btn right">Tweet</button>
          </div>
        </form>
      </div>
    )
  }
}
