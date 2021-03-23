const getIsAuthenticated = state => state.auth.isAuthenticated;
const getError = state => state.auth.error;
const getUserName = state => state.auth.user.name;

export default { getIsAuthenticated, getUserName, getError };
