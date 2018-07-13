export default {
  get: (url) => new Promise((resolve, reject) => {
    if (url.endsWith("/hello")) {
      resolve(
        {
          data: {
            message: 'value',
            rocketMsg: 'rocket message',
            items: ['Home', 'Messages', 'Friends'],
            active: 'Home'
          }
        });
    } else {
      reject(
        {
          reason: 'not identified'
        }
      );
    }
  })
}
