import { Container } from 'unstated';
import store from 'store';
import { IS_AUTH_KEY, TOKEN_KEY, USER_DATA_KEY } from '../utils/constants';

class AuthContainer extends Container {
  state = {
    isAuth: store.get(IS_AUTH_KEY),
    userData: store.get(USER_DATA_KEY),
    token: store.get(TOKEN_KEY),
  };

  logIn = async (userData, token) => {
    store.set(USER_DATA_KEY, userData);
    store.set(TOKEN_KEY, token);
    store.set(IS_AUTH_KEY, true);

    await this.setState(s => {
      return {
				...s,
				isAuth: true,
				userData,
				token,
			};
    });
  };

  logOut = async () => {
    store.remove(USER_DATA_KEY);
    store.remove(TOKEN_KEY);
    store.set(IS_AUTH_KEY, false);

    await this.setState(s => {
      return {
				...s,
				isAuth: false,
				userData: {},
				token: '',
			};
    });
  };

  getUserData = () => {
    return store.get(USER_DATA_KEY, this.state.userData);
  };

  setUserData = (userData) => {
    store.set(USER_DATA_KEY, userData);
  };

  isLoggedIn = () => {
    return this.state.isAuth && store.get(IS_AUTH_KEY);
  };
}

export default AuthContainer;
