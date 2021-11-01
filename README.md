# Next JS 12 boilerplate with Typescript and Material UI 5

🚀 NextJS 12 boilerplate built with Typescript, Material UI, Emotion CSS, FontAwesome, ESLint, Prettier, Husky, Lint-Staged, Jest, Cypress.

Clone this project and use it to create your own [Next.js](https://nextjs.org) project.

### Features

Developer experience first:

-   🔥 [Next.js](https://nextjs.org)
-   🎨 [Material UI 5](https://mui.com/) as base library component
-   💅 [Emotion CSS](https://emotion.sh/docs/introduction) for css styling
-   🎉 Type checking [TypeScript](https://www.typescriptlang.org)
-   ✅ Strict Mode for TypeScript and React 17
-   ✏️ Linter with [ESLint](https://eslint.org) (default NextJS)
-   🛠 Code Formatter with [Prettier](https://prettier.io)
-   🦊 Husky for Git Hooks
-   🚫 Lint-staged for running linters on Git staged files
-   ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
-   🖱️ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
-   :guardsman: Jest, Cypress, React-testing set up for unit ,integrate, e2e testing

### Philosophy

-   Minimal code
-   🚀 Production-ready

### Requirements

-   Node.js and npm

### Getting started

Run the following command on your local environment:

```
git clone https://github.com/anguyen227/nextjs-boilerplate
cd nextjs-project-name
yarn install
```

Then, you can run locally in development mode with live reload:

```
yarn dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```
.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── components               # Atomic layout components
├── cypress                  # cypress spec tests
├── pages                	 # Next JS pages
├── public                   # Public folder
├── styles               	 # PostCSS style folder with Tailwind
├── utils                	 # Utility folder
├── theme.ts          		 # material ui theme declaration
├── cypress.json          	 # cypress config
├── jest.config.js       	 # jest configuration
├── global.d.ts       		 # global typings
├── mui.d.ts       			 # overriden material ui types
└── tsconfig.json            # TypeScript configuration
```

### Deploy to production

You can see the results locally in production mode with:

```
$ yarn build
$ yarn start
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Deploy to Vercel

Deploy this Next JS Boilerplate on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fanguyen227%2Fnextjs-boilerplate)

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2020

See [LICENSE](LICENSE) for more information.
