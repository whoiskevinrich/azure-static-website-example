# Static Web App Experiment

## Goals

- ✅ Host a static javascript web application on Azure
- ✅ Read from configuration file
- ✅ Read from API Management endpoint
- ⬛ Require Authentication from Azure Active Directory


## Local Debugging

Prerequisites:
- [Azure Functions Extension (VS Code Extension)](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)
- [Live Server (VS Code Extension)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

Running Site & Backend Locally:

1. Add API Local Settings
   - Create `/api/local.settings.json`
   - Ensure file is _excluded_ from source control

      ``` json
      {
         "IsEncrypted": false,
         "Values": {
            "FUNCTIONS_WORKER_RUNTIME": "node",
            "MY_CONFIG_VALUE": "555-555-5555",
            "TMDBApiKey": "{{Placeholder}}"
         }
      }
      ```
   - Add required keys for local development, and/or configure on Azure host:
     - _MY_CONFIG_VALUE_
       - This can be any text value
       - The value is read by the [GetMessage](./api/GetMessage/index.js) Function
       - Displayed in the _How to Retrieve Host Configuration_ section of the app
     - [The MovieDB API Key](https://developers.themoviedb.org/3/getting-started/introduction)
       - Will require a valid TMDB API Key
       - The value is read by the [GetFilm](./api/GetFilm/index.js) Function
       - _TODO: Displayed in the {{section}}_
2. Start the [Static Web Apps CLI](https://github.com/Azure/static-web-apps-cli)
   - `swa start .app --port=5001 --api ./api --api-port=5005`


## References

- [Quickstart: Building your first static site in the Azure portal](https://docs.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=vanilla-javascript)
- [Set up local development for Azure Static Web Apps Preview](https://docs.microsoft.com/en-us/azure/static-web-apps/local-development)
- [Making API requests in JavaScript Azure Function](https://dzhavat.github.io/2019/07/09/making-http-requests-inside-azure-functions.html)