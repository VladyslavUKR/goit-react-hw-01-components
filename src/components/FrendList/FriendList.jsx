import FriendListItem from './FirendListItem/FriendListItem';
import PropTypes from 'prop-types';
import css from './friendList.module.css';

const FriendList = ({ items }) => {
  const friend = items.map(item => (
    <FriendListItem
      key={item.id}
      avatar={item.avatar}
      name={item.name}
      isOnline={item.isOnline}
    />
  ));
  return <ul className={css.friendList}>{friend}</ul>;
};

export default FriendList;

FriendList.defaultProps = {
  items: [],
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
