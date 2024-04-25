import { useCurrentUser } from '../../contexts/user';
import { Button } from '../Button/Button';

export const UseButtons = ({ className }) => {
  const { user, login, logout } = useCurrentUser();
  const isAuthorized = !!user;
  return (
    <div>
      <Button
        className={className}
        onClick={() => (isAuthorized ? logout() : login('Irina'))}
      >
        {isAuthorized ? 'Irina / logout' : 'login'}
      </Button>
    </div>
  );
};
