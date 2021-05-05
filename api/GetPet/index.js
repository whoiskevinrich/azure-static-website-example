var fetch = require('node-fetch');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request for Pet');

    const url = `${process.env.GREYBILL_PETS_BASE_URL}/pet/1`;
    const headers = {
        'Cache-Control': 'no-cache',
        'Ocp-Apim-Subscription-Key': process.env.GREYBILL_PETS_API_KEY
    };

    async function getPet(){
        try{
            // turn off cert issues; something off about the network
            //  https://stackoverflow.com/questions/51995925/node-fetch-request-fails-on-server-unable-to-get-local-issuer-certificate
            process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
            let result = await fetch(url, {headers: headers});
            process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;
            return await result.json();
        } catch (error) {
            context.log(error);
        }
    }

    let pet = await getPet();

    context.log(pet);

    context.res = {
      headers: { 'Content-Type': 'application/json' },
      body: { pet }
    };
  };