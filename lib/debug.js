exports.debug = (title, obj, status) => {
  const seperator = '\n===================================\n';
  const output = seperator + title + seperator;


  if (process.env.DEBUG) {
    console.log(output, obj, status);
  }
};
