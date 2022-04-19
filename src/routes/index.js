import DB from "../database";
import users from './users';
import auth from './auth';
const db = DB.getInstance();

export default {
    ...auth,
    ...users
};