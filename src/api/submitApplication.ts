export default (data: any) =>
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject(data);
    }, 1000);
  });
