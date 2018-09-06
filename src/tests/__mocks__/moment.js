//import { isMoment } from "../../../node_modules/moment";
const moment = require.requireActual('moment');
export default (timestamp = 0) => {
    return moment(timestamp);
};