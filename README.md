## Getting Started

If you are starting the project in a new computer run

```bash
npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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
- add unit tests, normally I tend to do unit tests mostly for method with complex logic(e.g. a method that is responsible to calculate a complex value and has multiple points of failure), to test app functioning I prefer end to end test. Note, I created an unit test(PokemonDetails.unit.test.tss to examplify) but didn't configurate the things to run it.

## Design improvements

- install a UI Components Library like Chakra UI to have some components that improve UX, e.g. search bar with autofill and suggestion

# Note about the PokeAPI Graphql Problem

- the API has a limit of 100 request per hour
- in some cases it's impossible to get the images from the url that is coming in the graphql responses
- in the afternoon of 3rd of March, and during the day of 4th of March the API was completly down

Due to inactivity of the proposed API to perform the test I wasn't able to test the app with the real data. Details of the problem found in the folder "graphql-api-down". To overcome this problem I mocked the PokeApi with tht Api functionality of NextJS. To stop using the mocks, the methods in "graphql/pokemons.ts" should receive the arg isMocked as false, but since it was not possible to test it I'm doing assumptions of the aspect of the response.
