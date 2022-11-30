import user from 'path/user.json';
import data from 'path/data.json';

//import FriendList from './FriendList/FriendList';
import Profile from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { StatItem } from './Statistics/StatItem/StatItem';
//import TransactionHistory from './TransactionHistory/TransactionHistory';

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

      <Statistics title="Upload stats">
        {data.map(item => (
          <StatItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </Statistics>

      {/* <FriendList />
      <TransactionHistory /> */}
    </div>
  );
};
