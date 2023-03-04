This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## To run Cypress tests

You will need 2 terminal windows

In the first terminal run the following command to start the app:

`npm run dev`

When the app is running locally in the port 3000 run the following command to open cypress:

`npm run cypress`

Now inside the Cypress interface choose the "E2E Testing" option and then "google chrome". Here you will find a list of tests, click the one you would like to run.

## Notes

- had to mock the request because pokemon API has a limit of 100 request per hour
- tried to get the images from the pokemon_v2_pokemonsprites field but it was not found

## Suggested improvements

- find a graphql API that has no limit of requests and a better performance in general

## What else could I do

- could create pagination based on a route param, then the users could access a specific page and send the url with the page selected. Same thing for the search query. This would imply sending more details in the graphql request, props as limit, and offset. Where for page 1 would be limit:16 and offset:0, page 2 limit:16 offset:16, ...
- more e2e tests, for example to test the pagination or search logics
- add unit tests, normally I tend to do unit tests mostly for method with complex logic(e.g. a method that is responsible to calculate a complex value and has multiple points of failure), to test app functioning I prefer end to end test.

## Design improvements

- install a UI Components Library like Chakra UI to have some components that improve UX, e.g. search bar with autofill and suggestion
