import * as data from '../../../../notifications.json';

const getAllNotificationsByUser = (userId) => {
  let list = [];
  Object.values(data).forEach(author => {
    if(author.author) {
      if (author.author.id === userId)
        list.push(author.context);
    }
  })
  return (list);
};

export default getAllNotificationsByUser;
