import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  hooks: { afterOneFileWrite: ['prettier --write'] },
  schema: [
    {
      'https://rickandmortyapi.com/graphql': {
        headers: {
          'x-api-key': 'asdASDASda34sasdaSDad',
        },
      },
    },
  ],
  documents: 'src/**/*.graphql',
  generates: {
    'src/graphql/types/types.generated.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'graphql/types/types.generated.ts',
      },
      plugins: [
        'typescript-operations',
        {
          'typescript-rtk-query': {
            importBaseApiFrom: '../../graphql/api/baseApi',
            exportHooks: true,
          },
        },
      ],
    },
  },
};

export default config;
