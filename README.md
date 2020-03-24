# Welcome

This repository will be used to explore ideas and development using Gatsby and ZEIT Now.

## Prerequisites

Please make sure you have downloaded and installed the [ZEIT Now CLI](https://zeit.co/download) on your development environment - available as an `npm` package that you can install globally:

```sh
$ npm i -g now
```

## Environment variables

Gatsby already includes the popular `dotenv` module to load environment variables 🤓

Please copy `.env.sample` to `.env` and `.env.build` - replacing any values as desired. We need to have `.env.build` to inject the appropriate environment variables or secrets into our application, and `.env` to make those environment variables or secrets available at run time.

**IMPORTANT** In order for Gatsby to see environment variables in the client JavaScript, you must prefix them with `GATSBY_` (such as `GATSBY_WELCOME_MESSAGE`).
Gatsby server-side code can see any environment variable (such as `GATSBY_WELCOME_MESSAGE` and `SECRET_SERVER`)

## GraphQL

This project has been configured to have a `/api/graphql` endpoint defined as our GraphQL server.

If you are familiar with using GraphiQL to explore your GraphQL service, you can view it at [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql)

Alternatively, you can use a simple cURL command to query the GraphQL server:

```sh
$ curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "{ hello }" }' \
  http://localhost:3000/api/graphql

{"data":{"hello":"Hello. The current time is 1584332854509"}}
```

## Third party services

### ZEIT Now

#### Secrets

> To define an environment variable, you should use Now Secrets. By using Now Secrets, the data will be encrypted and stored securely, no longer directly accessible by anyone, and only exposed to deployments as environment variables.

Source: [Adding Secrets](https://zeit.co/docs/v2/build-step#adding-secrets)

TL:DR Use the following to add, remove, or rename secrets with [ZEIT Now](https://zeit.co/). Also, notice how we are adding a prefixing to each secret with `demo-` - otherwise, we risk potentially overwriting or removing an existing secret used by another projects with our [ZEIT Now](https://zeit.co/) account. 😳

```sh
# List secrets
$ now secrets ls

# Add a secret to your ZEIT Now project
$ now secrets add <secret-name> <secret-value>

# Remove a secret from your ZEIT Now project
$ now secrets rm <secret-name>

# To rename a secret in your ZEIT Now project
$ now secrets rename <secret-name> <new-name>
```

##### Example - Add a secret for GATSBY_WELCOME_MESSAGE

```sh
# Add a secret to your ZEIT Now project
$ now secrets add demo-gatsby-welcome-message "Welcome to supplying environment variables with ZEIT Now."
Now CLI 17.0.4
Success! Secret demo-gatsby-welcome-message added under therobbrennan [159ms]
```

Now that we have defined our secret, we have to modify our `now.json` file to include the secret both in the `build` process of our project as well as in the `env` our project will be running under:

```sh
  "build": {
    "env": {
      "GATSBY_WELCOME_MESSAGE": "@demo-gatsby-welcome-message"
    }
  },
  "env": {
    "GATSBY_WELCOME_MESSAGE": "@demo-gatsby-welcome-message"
  },

```

##### Example - Remove a secret for GATSBY_WELCOME_MESSAGE

```sh
# Remove a secret from your ZEIT Now project
$ now secrets rm demo-gatsby-welcome-message
Now CLI 17.0.4
The following secret will be removed permanently from therobbrennan
  demo-gatsby-welcome-message      3m ago
? Are you sure? [y/N] y
Success! Secret demo-gatsby-welcome-message under therobbrennan removed [3s]
```

##### Example - Rename a secret for GATSBY_WELCOME_MESSAGE

```sh
# To rename a secret in your ZEIT Now project
$ now secrets rename demo-gatsby-welcome-message demo-new-secret-name
```

#### Deployment

If you would like to manually deploy the project, make sure that you have signed in to [ZEIT Now](https://zeit.co/) and then (from the root directory of this project) run:

```sh
$ now
```

##### Deploy to a URL for review

If you would like to manually deploy to ZEIT Now and **NOT REPLACE THE PRODUCTION SITE**:

```sh
$ npm run deploy
```

If you would like to manually deploy to ZEIT Now and **IMMEDIATELY DEPLOY TO PRODUCTION**:

```sh
$ npm run deploy:prod
```
