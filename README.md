This is a starter project for using [ZenStack](https://github.com/zenstackhq/zenstack) with [Next.js](https://nextjs.org/) and [Next Auth](https://next-auth.js.org/).

It's extended from [Prisma's Next.js Starter](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nextjs-api-routes).

## Getting Started

First create a project from this starter:

```bash
npx create-next-app [project-name] --use-npm -e https://github.com/zenstackhq/nextjs-auth-starter

cd [project-name]
```

Run ZenStack generator:

```
npm run generate
```

You'll also need to bootstrap your database and create the initial migration (a local sqlite db by default):

```
npm run db:migrate -- -n init
```

Finally it's time to run your app locally:

```
npm run dev
```

## Code Structure

### Data Model

The data model is located at [/zenstack/schema.zmodel](zenstack/schema.zmodel).

### Next-Auth Integration

You can find integration with Next-Auth at [/pages/api/auth/[...nextauth].ts](pages/api/auth/[...nextauth].ts).

### Mounted Data Services

The generated RESTful data access services are mounted at: [/pages/api/zenstack/[...path].ts](pages/api/zenstack/[...path].ts).

## Learn More

To learn more about ZenStack, take a look at the following resources:

-   [ZenStack Documentation](https://github.com/zenstackhq/zenstack#readme)
