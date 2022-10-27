# Vercel pre-build Next.js deployment example

When deploying a pre-build Next.js app to Vercel from insight a pnpm monorepo, serverless functions fail with following error stacktrace:

```sh
2022-10-27T12:17:54.580Z	undefined	ERROR	Cannot find module 'next/dist/server/next-server.js'
Require stack:
- /var/task/___next_launcher.cjs
2022-10-27T12:17:54.580Z	undefined	ERROR	Did you forget to add it to "dependencies" in `package.json`?
2022-10-27T12:17:54.820Z	undefined	ERROR	Cannot find module 'next/dist/server/next-server.js'
Require stack:
- /var/task/___next_launcher.cjs
2022-10-27T12:17:54.820Z	undefined	ERROR	Did you forget to add it to "dependencies" in `package.json`?
RequestId: d158d50e-ba20-4b31-9511-fb9a884794e4 Error: Runtime exited with error: exit status 1
Runtime.ExitError
```

Deploying the same app without the workspace setup, it works as expected.

## Steps to reproduce:

1. Create a Vercel project with following project config:

```json
{
  "framework": "nextjs",
  "devCommand": null,
  "installCommand": "",
  "buildCommand": "pnpm run build",
  "outputDirectory": null,
  "rootDirectory": null,
  "directoryListing": false,
  "nodeVersion": "16.x"
}
```

2. Add your `projectId` and `orgId` to the [project.json](./apps/web/.vercel/project.json)

3. run following commands from the root of the project:

```sh
pnpm install
export VERCEL_TOKEN=<your-vercel-token>
vercel build --token=$VERCEL_TOKEN --cwd=${PWD}/apps/web
vercel deploy --prebuilt --token=$VERCEL_TOKEN --cwd=${PWD}/apps/web
```
