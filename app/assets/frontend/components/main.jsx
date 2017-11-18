import TweetBox from "./components/TweetBox";
import TweetList from "./components/TweetList";

// design to get tweets from datasource
let mockTweets = [
  { id: 1, name: "samer buna", body: 'My #First Tweet' },
  { id: 2, name: "samer buna", body: 'My #Second Tweet' },
  { id: 3, name: "samer buna", body: 'My #Third Tweet' }
]

class Main extends React.Component {
    render() {
        return (
          <div className="container">
            <TweetBox />
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
