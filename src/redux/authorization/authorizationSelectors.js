const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const authorizationSelectors = {
  getIsLoggedIn,
  getUsername,
};
export default authorizationSelectors;
