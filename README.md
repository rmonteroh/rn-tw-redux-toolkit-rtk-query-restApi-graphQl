# Summary (POC)
This project is an initial template where we integrate React Native with TypeScript, Tailwind CSS, Redux Toolkit, RTK Query, REST and GraphQl Api with code generation for redux-toolkit types and endpoints using graphql/codegen and its integration with RTK Query Hooks.

# Getting started: 

## Run using:
```bash
yarn
yarn graphql-codegen
yarn start
npx react-native run-ios
```

### Add redux toolkit:
```bash
yarn add @reduxjs/toolkit react-redux @types/react-redux
```

### Add graphQl:
```bash
yarn add graphql graphql-request @rtk-query/graphql-request-base-query
```

### GraphQl code generation
```bash
yarn add -D @graphql-codegen/cli @graphql-codegen/typescript-rtk-query @graphql-codegen/typescript-operations @graphql-codegen/near-operation-file-preset
npx graphql-codegen init
```
#### Reference links
- https://the-guild.dev/graphql/codegen 
- https://redux-toolkit.js.org/rtk-query/usage/code-generation#graphql
- https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-rtk-query
- https://github.com/reduxjs/redux-toolkit/tree/master/examples/query/react/graphql-codegen
