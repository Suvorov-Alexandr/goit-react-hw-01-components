import Profile from "./components/Profile/Profile";
import user from "./data/user.json";
import Statistics from "./components/Statistics/Statistics";
import data from "./data/data.json";
import Friendlist from "./components/FriendList/FriendList";
import friends from "./data/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";
import GlobalStyle from "./components/GlobalStyle";
import Container from "./AppContainer.styled";

function App() {
  const { username, tag, location, avatar, stats } = user;
  return (
    <>
      <Container>
        <GlobalStyle />
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <Friendlist friends={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
}

export default App;
