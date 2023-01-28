import Statistics from './Statistics/Statistics';
import Profile from './Profile/Profile';
import FriendList from './FrendList/FriendList';
import Transactions from './Transactions/Transactions';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

const App = () => {
  return (
    <>
      <Profile {...user} />
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}
      <Statistics title="Upload stats" stats={data} />
      <FriendList items={friends} />
      <Transactions items={transactions} />
    </>
  );
};

export default App;
