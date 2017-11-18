import TweetBox from "./components/TweetBox";
import TweetList from "./components/TweetList";

// design to get tweets from datasource
//let mockTweets = [
//  { id: 1, name: "samer buna", body: 'My #First Tweet' },
//  { id: 2, name: "samer buna", body: 'My #Second Tweet' },
//  { id: 3, name: "samer buna", body: 'My #Third Tweet' }
//]

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = { tweetsList: [] }
    }
    formattedTweets(tweetsList) {
      let formattedList = tweetsList.map(tweet => {
        tweet.formattedDate = moment(tweet.created_at).fromNow();
        return tweet;
      })
      return {
        tweetsList: formattedList
      }
    }
    addTweet(tweetToAdd) {
      $.post("/tweets", { body: tweetToAdd })
      .success(savedTweet => {
        // mockTweets.unshift({...})
        let newTweetsList = this.state.tweetsList;
        newTweetsList.unshift(savedTweet);
        this.setState(this.formattedTweets(newTweetsList))
      })
      .error(error => console.log(error))
    }
    componentDidMount() {
      $.ajax("/tweets")
      .success(data => this.setState(this.formattedTweets(newTweetsList)))
      .error(error => console.log(error))
    }
    render() {
        return (
          <div className="container">
            <TweetBox sendTweet={this.addTweet.bind(this)}/>
            <TweetList tweets={mockTweets} />
          </div>
        );
    }
}
let documentReady = () => {
    let reactNode = document.getElementById('react');
    if(reactNode) {
      React.render(
          <Main />,
          reactNode
      );
    }
};
$(documentReady);
