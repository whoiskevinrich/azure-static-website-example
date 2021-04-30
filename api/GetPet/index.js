module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request for Pet');
    context.res = {
      body: {
        text: `w00f!`
      }
    };
  };