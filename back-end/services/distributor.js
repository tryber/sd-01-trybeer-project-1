const connectionPromise = valueQuery =>
  new Promise((resolve, reject) => {
    conn.query(valueQuery, (err, result) => {
      if (err) reject(err);
      resolve(result[0] || result);
    });
  });

module.exports = { connectionPromise };
