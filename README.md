This is a starter project for using [ZenStack](https://github.com/zenstackhq/zenstack) with [Next.js](https://nextjs.org/) and [Next Auth](https://next-auth.js.org/)

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

## Learn More

To learn more about ZenStack, take a look at the following resources:

-   [ZenStack Documentation](https://github.com/zenstackhq/zenstack#readme)
