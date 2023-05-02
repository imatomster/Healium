// const babcoin_db = "babcoin";
// const options = "?retryWrites=true&w=majority";
// const uri =
//   "mongodb+srv://babcoin:ZeTpdfO5y2IF8an0@babcoincluster0.hnedh.mongodb.net/" +
//   babcoin_db +
//   options;
// // const uri = process.env.MONGODB_URI + "/" + babcoin_db;

// module.exports = {
//   uri: uri,
// };

const roles = ["admin", "superAdmin", "member"]; // roles that can be assigned to users;
const eventTypes = ["clubcensus", "allhands", "social", "external", "other"]; // types of events; TODO: set event types
module.exports = {
  roles: roles,
  eventTypes: eventTypes,
};
