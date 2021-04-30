var fetch = require('fetch');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request for Pet');

    const url = `${process.env.GREYBILL_PETS_BASE_URL}/pet/1`;
    const headers = {
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': process.env.GREYBILL_PETS_API_KEY
    };

    async function getPet(){
        try{
            let result = await fetch(url, {headers: headers});
            context.log(result);
            return await result.json();
        } catch (error) {
            context.log(error);
        }
    }

    let pet = await getPet();

    context.log(pet);

    context.res = {
      body: {
        text: `w00f! ${pet.name}`
      }
    };
  };