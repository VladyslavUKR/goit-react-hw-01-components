import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ name, avatar, isOnline }) => {
  const isActive = isOnline ? `${css.status} ${css.active}` : `${css.status}`;
  return (
    <li className={css.item}>
      <span className={isActive}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
