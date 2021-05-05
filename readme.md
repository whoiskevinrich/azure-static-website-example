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
   - Add required keys for local development, and/or configure on Azure host:
     - "Values:GREYBILL_PETS_API_KEY"
     - "Values:GREYBILL_PETS_BASE_URL"
2. Start Azure Function Emulator
   - Press `F5` in Visual Studio Code
3. Start Live Server
   - Press `Ctrl+Shift+P`
   - Select `Live Server: Open with Live Server`


## References

- [Quickstart: Building your first static site in the Azure portal](https://docs.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=vanilla-javascript)
- [Set up local development for Azure Static Web Apps Preview](https://docs.microsoft.com/en-us/azure/static-web-apps/local-development)
- [Making API requests in JavaScript Azure Function](https://dzhavat.github.io/2019/07/09/making-http-requests-inside-azure-functions.html)