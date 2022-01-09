import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import { FriendList } from "./FriendList.styled";

const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </FriendList>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendsList;
