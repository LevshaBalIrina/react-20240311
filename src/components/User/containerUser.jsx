import { useSelector } from 'react-redux';
import { User } from './User';
import { selectUsersById } from '../../redux/entities/users/selector';

export const ContainerUser = ({ userId }) => {
    const user = useSelector((state) => selectUsersById(state, userId));
  return <User user={user} />;
};
 