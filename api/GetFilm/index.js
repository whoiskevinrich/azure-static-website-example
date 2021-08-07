var fetch = require('node-fetch');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request for Film from Managed API');

    const url = `https://api.themoviedb.org/3//movie/154?api_key=${process.env.TMDBApiKey}`;

    async function getFilm(){
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

    let film = await getFilm();

    context.log(film);

    context.res = {
      headers: { 'Content-Type': 'application/json' },
      body: { film }
    };
  };