import { User } from './User';
import { useGetUsersQuery } from '../../redux/service/api';

export const ContainerUser = ({ userId }) => {
  const { data: users } = useGetUsersQuery(userId);

  if (!users) {
    return null;
  }
  const user = users.find(({ id }) => id === userId);

  return <User user={user} />;
};
