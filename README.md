## Gatsby - Wordpress / Contact form 7 Proof of concept

### Setup

- Install wordpress, enable all of the plugins
- Navigate to the frontend directory and install the dependencies `npm install` (requires nodejs)
- Create a .env file in the frontend directory, add the graphql endpoint

```bash
WPGRAPHQL_URL = 'http://wpgatsby.test/graphql'
```

- Run `npm start` from the frontend directory
