import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export function FriendListItem({ name, avatar, status }) {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${status && css.isOnline}`}>
        {status}
      </span>
      <img
        className={css.avatar}
        src={avatar}
        alt={`Avatar ${name}`}
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
