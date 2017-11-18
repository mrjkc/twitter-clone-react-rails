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
    addTweet(tweetToAdd) {
      // mockTweets.unshift({...})
      let newTweetsList = this.state.tweetsList;
      newTweetsList.unshift({ id: Date.now() , name: 'Guest', body: tweetToAdd });

      this.setState({ tweetsList: newTweetsList })
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
    React.render(
        <Main />,
        document.getElementById('react')
    );
};
$(documentReady);
