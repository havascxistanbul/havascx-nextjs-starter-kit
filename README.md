# Havas CX Istanbul Next.js Starterkit

## Requirements

- Node.js@18.4.0, yarn@1.22.19 and npm@8.12.1
- Please see the `.npmrc` and `.nvmrc` files for the versions.

## Production for Docker build and run

```bash
docker build --target application -t havas-cx-app .
docker run -p 3000:3000 havas-cx-app
```

## Storybook for Docker build and run

```bash
docker build --target storybook -t havas-cx-storybook .
docker run -p 6006:6006 havas-cx-storybook
```

### Getting started

Run the following command on your local environment to install the dependencies:

```bash
yarn install
```

Then, you can run locally in development mode with live reload:

```bash
yarn dev
```

Build:

```bash
yarn build
```

Stoybook:

```bash
yarn storybook
```

Open http://localhost:3000 with your browser to see your project.

```
├── README.md                # README file
├── public                   # Public folder containing static assets
├── locales                  # Localization Json files are kept in this folder
├── .storybook               # Storybook configuration
├── src
│   ├── components           # All Components
│   ├── layouts              # Common layout
│   ├── pages                # Next JS pages
│   ├── services             # Service integrations
│   └── shared
│       ├── hooks            # Common hooks
│       ├── styles           # Global styles
│       └── utils            # Global utilities
├── tsconfig.json            # TypeScript configuration
├── i18n.json                # Next-Translation configuration
├── next.config.js           # Next JS configuration
├── jest.config.js           # Jest configuration
└── tailwind.config.js       # Tailwind configuration
```

### Deploy to production

You can see the results locally in production mode with:

```bash
$ yarn run build
$ yarn run start
```

The generated HTML and CSS files are minified (built-in feature from Next js).

You can create an optimized production build with:

```bash
yarn run build:prod
```

### Available Scripts

```
├── dev                # NextJS Development Run
├── build              # NextJS Build
├── build:stats        # NextJS Bundle Analyze
├── build:types        # Types check and build
├── start              # NextJS Production Start
├── export             # NextJS Static Export
├── clean              # .next and out file cleaner
├── lint               # Eslint Check
├── lint:fix           # Eslint Check and Fix
├── forrmat            # Prettier Run
├── prepare            # Husky Install
├── cloc               # Package size controller
├── storybook          # Start Storybook development environment
├── build:storybook    # Build a static Storybook
└── test:unit          # Run Jest unit tests
```
