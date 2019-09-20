const address = window.location.hostname;

export const environment = {
  production: false,
  LOGIN_URL: `http://${address}:4225`,
  baseUrl: '',
  domain: `${address}`
};
