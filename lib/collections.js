import { Mongo } from 'meteor/mongo';

const Articles = new Mongo.Collection('articles');
const Contacts = new Mongo.Collection('contacts');

export { Articles, Contacts };
