# Google Identity Platform Admin CLI

`gia` is a command line tool that provides CI/CD friendly approach to administrate [Google Identity Platform](https://developers.google.com/identity) including tenants and user accounts management.

## Install

```shell
$ npm install google-identity-admin
```

## Usage

### Authentication

In order to let `gia` authenticate to your Google project, you need to provide authentication credentials by setting the environment variable `GOOGLE_APPLICATION_CREDENTIALS`. Replace `[PATH]` with the file path of the JSON file that contains your service account key, and `[FILE_NAME]` with the filename.

```shell
$ export GOOGLE_APPLICATION_CREDENTIALS="/[PATH]/[FILE_NAME].json"
```

Alternatively, you can provide the path to service account key JSON file using `-k` or `--key-file` command line option.

### Tenant management

#### Listing existing tenants

```shell
$ gia tenant list
[
  {
    tenantId: 'test-8zsx9',
    displayName: 'test',
    emailSignInConfig: { enabled: true, passwordRequired: true }
  }
]
```
