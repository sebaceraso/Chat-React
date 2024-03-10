import Login from './Login';
import Logout from './Logout';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const User = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  const image = user
    ? user.photoURL
    : 'https://static.vecteezy.com/system/resources/previews/007/069/364/non_2x/3d-user-icon-in-a-minimalistic-style-user-symbol-for-your-website-design-logo-app-ui-vector.jpg';
  const name = user ? user.displayName : 'Unknown';

  return (
    <div className="right-side">
      <h1>
        <i className="fa-solid fa-cat"></i>Quick Chat
      </h1>
      <article className="card-user">
        <img src={image} alt="user photo" referrerPolicy="no-referrer" />
        <p>{name}</p>

        {user ? <Logout /> : <Login />}
      </article>
    </div>
  );
};

export default User;
