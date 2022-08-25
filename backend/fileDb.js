const fs = require("fs");
const {uniqId} = require("uniqid");
const moment = require("moment");

const fileName = "./messagesServer.json";
let data = [];

module.exports = {
  init() {
    try{
      data = JSON.parse(fs.readFileSync(fileName));
    } catch (e) {
      data = [];
    }
  },
  getItems() {
    return data;
  },
  save() {
    fs.writeFileSync(fileName, JSON.stringify(data));
  },
  addItem(item) {
    item.id = uniqId;
    item.data = moment().format('MMMM Do YYYY, h:mm:ss a');
    data.push(item);
    this.save();
    return item;
  }
};