export default {
  get: (url) => new Promise((resolve, reject) => {
    if (url.endsWith("/hello")) {
      resolve(
        {
          data: {
            message: 'value'
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
