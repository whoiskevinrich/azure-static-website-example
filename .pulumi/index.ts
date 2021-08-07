import * as pulumi from "@pulumi/pulumi";
import * as resources from "@pulumi/azure-native/resources";
import * as storage from "@pulumi/azure-native/storage";
import * as web from "@pulumi/azure-native/web";

let config = new pulumi.Config();
let repositoryUrl = config.require("repositoryUrl");
let repositoryToken = config.requireSecret("repositoryToken");

console.log(`Static Site Repository URL: ${repositoryUrl}`);

// Create an Azure Resource Group
const resourceGroup = new resources.ResourceGroup("resourceGroup", {
    tags: { "purpose" : "investigation" },
    location: "westus2",
    resourceGroupName: "azure-static-webapp-rg"
});


// Create site
const site = new web.StaticSite("staticSite", {
    resourceGroupName: resourceGroup.name,
    location: resourceGroup.location,
    name: "azure-web-app-demo-site",
    sku: { name: "Free", tier: "Basic" },
    buildProperties: { apiLocation: "api", appLocation: "app" },
    repositoryUrl: repositoryUrl,
    repositoryToken: repositoryToken,
    branch: "main"
});


// // Create an Azure resource (Storage Account)
// const storageAccount = new storage.StorageAccount("sa", {
//     resourceGroupName: resourceGroup.name,
//     sku: {
//         name: storage.SkuName.Standard_LRS,
//     },
//     kind: storage.Kind.StorageV2,
// });

// Export the primary key of the Storage Account
// const storageAccountKeys = pulumi.all([resourceGroup.name, storageAccount.name]).apply(([resourceGroupName, accountName]) =>
//     storage.listStorageAccountKeys({ resourceGroupName, accountName }));
// export const primaryStorageKey = storageAccountKeys.keys[0].value;
