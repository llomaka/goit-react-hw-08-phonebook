const getIsLoggedIn = state => state.authorization.isLoggedIn;

const getUsername = state => state.authorization.user.name;

const getIsFetchingCurrentUser = state => state.authorization.isFetchingCurrentUser;

const authorizationSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrentUser,
};

export default authorizationSelectors;
