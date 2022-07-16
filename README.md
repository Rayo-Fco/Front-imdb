# Front-imdb

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#directory">Directory</a></li>
    <li><a href="#environments">Environments</a></li>
  </ol>
</details>

## About The Project

Front-end created for the top 250 movies imdb
### Built With


* [TypeScript](https://www.typescriptlang.org/)
* [React.js (V18)](https://reactjs.org/) 
* [Material UI (V5)](https://mui.com/material-ui/getting-started/overview/) 
* [Redux](https://es.redux.js.org/)
* [Sagas](https://redux-saga.js.org/)
* [WebPack (V5)](https://webpack.js.org/)
* [JestJS](https://jestjs.io/)

## Getting Started

To get a local copy up and running follow these simple example steps.
### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
  
* commitizen
  ```sh
  npm install commitizen -g 
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Rayo-Fco/Front-imdb.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create the file `.env.development` in the root
   ```sh
    API_KEY = 'ENTER YOU API KEY IMDB'
   ```

### Directory 
```
├── src
│   ├── actions
│   │   └── filmsAction.ts 
│   ├── components
│   │   ├── Layout
│   │   │     ├── index.tsx
│   │   │     └── styles.tsx
│   │   ├── MovieCard
│   │   │     ├── index.tsx
│   │   │     └── styles.tsx
│   │   ├── SkeletonMovieCard
│   │   │     ├── index.tsx
│   │   │     └── styles.tsx
│   ├── config
│   │   └── test-utils.tsx
│   ├── interfaces
│   │   └── filmsInterface.ts 
│   ├── page
│   │   └── Home
│   │        ├── index.tsx
│   │        └── styles.tsx
│   ├── reducer
│   │   └── filmsReducer.ts
│   ├── router.ts 
│   │   └──MainRouter.tsx
│   ├── sagas
│   │   └── filmsSaga.ts
│   ├── selectors
│   │   └── filmsSelectors.ts
│   ├── services
│   │   └── filmsService.ts
│   ├── store
│   │   ├── rootReducer.ts
│   │   ├── rootSagas.ts
│   │   └── store.ts
│   └─── types
│       └── filmsType.ts
├──.eslintrc.json
├── package.json
├── tsconfig.json
└── README.md
```

## Environments

* [Local](http://localhost:4000)