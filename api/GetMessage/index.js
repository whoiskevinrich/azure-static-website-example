module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request for Message');
    context.res = {
      body: {
        text: `Greetings, Program! ${process.env.PHONE_NUMBER}`
      }
    };
  };