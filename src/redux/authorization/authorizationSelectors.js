const getIsLoggedIn = state => state.authorization.isLoggedIn;

const getUsername = state => state.authorization.user.name;

const authorizationSelectors = {
  getIsLoggedIn,
  getUsername,
};

export default authorizationSelectors;
