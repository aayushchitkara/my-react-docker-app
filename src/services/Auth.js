class Auth {
  constructor() {
    this.token = null;
  }

  retriveToken = () => {
    return localStorage.getItem('Token');
  }

  storeToken = (t) => {
    localStorage.setItem('Token', t);
  }

  deleteToken = () => {
    localStorage.removeItem('Token');
  }
}

// ✅ export a single instance
const authInstance = new Auth();
export default authInstance;

