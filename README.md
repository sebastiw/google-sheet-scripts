# How to use

Create a service account for developers.google.com and download the credentials.

Share the sheet with the service account.


```bash
export GCLOUD_PROJECT={project ID of your google project}
export GOOGLE_APPLICATION_CREDENTIALS=./service_account_credentials.json
node test.js <your google sheet's spreadsheet id> <sheet name of the worksheet>
```


# Kudos

Much cred to Mandeep Singh's blog article:
https://codingfundas.com/how-to-read-edit-google-sheets-using-node-js/index.html
