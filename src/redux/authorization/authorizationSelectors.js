const getIsLoggedIn = state => state.authorization.isLoggedIn;
const getUserEmail = state => state.authorization.user.email;
const getIsFetchingCurrentUser = state => state.authorization.isFetchingCurrentUser;
const isCreatingUser = state => state.authorization.isCreatingUser;
const isSigningInUser = state => state.authorization.isSigningInUser;

const authorizationSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsFetchingCurrentUser,
  isCreatingUser,
  isSigningInUser,
};

export default authorizationSelectors;
