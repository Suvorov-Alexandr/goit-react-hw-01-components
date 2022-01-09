import PropTypes from "prop-types";
import { Item, StatusOnline, StatusOffline, Name } from "./FriendList.styled";

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Item>
      {isOnline ? (
        <StatusOnline></StatusOnline>
      ) : (
        <StatusOffline></StatusOffline>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendListItem;
