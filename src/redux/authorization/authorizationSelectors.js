const getIsLoggedIn = state => state.authorization.isLoggedIn;
const getUsername = state => state.authorization.user.name;
const getIsFetchingCurrentUser = state => state.authorization.isFetchingCurrentUser;
const isCreatingUser = state => state.authorization.isCreatingUser;
const isSigningInUser = state => state.authorization.isSigningInUser;

const authorizationSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrentUser,
  isCreatingUser,
  isSigningInUser,
};

export default authorizationSelectors;
