import user from 'path/user.json';
import data from 'path/data.json';

import FriendList from './FriendList/FriendList';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        title="Upload stats"
        label={data[0].label}
        percentage={data[0].percentage}
      />
      <Statistics
        title="Upload stats"
        label={data[1].label}
        percentage={data[1].percentage}
      />

      <FriendList />
      <TransactionHistory />
    </div>
  );
};
