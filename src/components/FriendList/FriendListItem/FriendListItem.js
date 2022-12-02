import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export function FriendListItem({ name, avatar, status }) {
  return (
    <li className={css.item}>
      <span className={css.status}>{status}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
