import * as data from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const getAllNotificationsByUser = (userId) => {
  let list = [];
  (data.default).forEach(author => {
    if (author.author.id === userId)
      list.push(author.context);
  })
  return (list);
};

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizeData = normalize(data.default, [notification]);

export { getAllNotificationsByUser, normalizeData } ;
