import PropTypes from 'prop-types';
// import user from 'path/user.json';
import css from './Profile.module.css';

/* <Profile
/>; */

// {
//   "username": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// }

export default function Profile({
  avatar = `https://cdn-icons-png.flaticon.com/512/1077/1077012.png`,
  username,
  tag,
  location,
  stats,
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
