export const HOST = process.env.HOST;
export const PORT = process.env.PORT;

export const SIGNUP_ENDPOINT = `${HOST}:${PORT}/users/signup`;
export const LOGIN_ENDPOINT = `${HOST}:${PORT}/auth/login`;
export const LOGOUT_ENDPOINT = `${HOST}:${PORT}/auth/logout`;
export const OAUTH_ENDPOINT = `${HOST}:${PORT}/auth/oauth`;