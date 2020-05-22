# catlab-ui

> Catalyst Lab React Design System UI Components

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/adef4937-19ae-42b3-83f9-9324494768d6/deploy-status)](https://app.netlify.com/sites/sharp-mccarthy-d0cc08/deploys)

# Onboarding
## Set Up
Storybook runs through docker & docker-compose
1. `git checkout develop`
1. `docker-compose run www yarn install`
1. `docker-compose up`
1. go to `http://localhost:3000`

## Updating
1. `git checkout develop`
1. `git pull`
1. `docker-compose run www yarn install`
1. `docker-compose up`
1. go to `http://localhost:3000`

## Publishing
Standard, __strict__ semver is followed. A change is considered backwards incompatible if the components affected are no longer the 'same' visually, even if the props & type signatures are all the same.

Branching is standard git flow

Steps to publish a new build:
1. create release or hotfix branch
1. bump the version number in the `package.json` & commit
1. run `yarn run build` & commit
1. finish hotfix/release branch & `git push origin develop master --tags`

## Usage
1. Add font CDN link to header
   ```
   <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,700;1,800;1,900&display=swap" rel="stylesheet">
   ```
1. Do more stuff

# Netlify storybook URL
[https://design-system.uppley.education/](https://design-system.uppley.education/)
[https://design-system.edumap.education/](https://design-system.edumap.education/)
