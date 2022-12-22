
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3300/graphql",
  documents: "app.vue",
  ignoreNoDocuments: true,
  generates: {
    ".types/gql/": {
      preset: "client",
      plugins: [],
      config: {
        useTypeImports: true
      },
    }
  }
};

export default config;
