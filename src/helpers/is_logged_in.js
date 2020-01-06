import store from 'store';
//for more info/usage on store, see https://www.npmjs.com/package/store

export default () => !!store.get('loggedIn');