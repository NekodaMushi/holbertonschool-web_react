import * as data from '../../dist/notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizeData = normalize(data.default, [notification]);

const getAllNotificationsByUser = (userId) => {
  const allNotif = normalizeData.entities.notifications;
  const allMessages = normalizeData.entities.messages;
  let list = [];
  for (let id in allNotif) {
    if (allNotif[id].author == userId)
      list.push(allMessages[allNotif[id].context])
  }
  return list;
};

const notificationsNormalizer = (data) => {
  const normalizeData = normalize(data, [notification]);
  return normalizeData.entities;
}

export { getAllNotificationsByUser, normalizeData, notificationsNormalizer } ;
