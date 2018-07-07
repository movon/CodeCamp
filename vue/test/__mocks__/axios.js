export default {
  get: (url) => new Promise(resolve => {
    if (url.endsWith("/hello")) {
      resolve(
        {
          data: {
            message: 'value'
          }
        });
    } else {
      resolve(
        {
          data: 'value'
        }
      );
    }
  })
}
