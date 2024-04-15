import { useSelector } from 'react-redux';
import { selectUsersById } from '../../redux/entities/users/selector';

export const User = ({ userId }) => {
  const user = useSelector((state) => selectUsersById(state, userId));

  if (!user) {
    return null;
  }

  return <div>{user.name}</div>;
};
