# Storybook: Polis
[![Build and Publish Storybook to GitHub Pages](https://github.com/CivicTechTO/polis-storybook/actions/workflows/deploy-github-pages.yml/badge.svg)](https://github.com/CivicTechTO/polis-storybook/actions/workflows/deploy-github-pages.yml)

![image](https://github.com/user-attachments/assets/ad68bdc0-9db2-44e1-979f-706c84e86bef)

The **purpose** of this Storybook component environment is to allow more lightweight and inclusive development of the Polis UI by both designers and developers, with particular intention toward improving accessibility. A secondary goal is to allow for more rapid iteration on the experience of interacting with Polis.

We automatically deploy the most recent version on GitHub Pages:  
https://civictechto.github.io/polis-storybook/

## Goals
- Display all React components in Storybook.
    - Any React components within Polis' client apps: `admin`, `participation` & `report`.
    - Only React components, not legacy BackboneJS views.
- Make minimal changes to upstream Polis codebase to get Storybook working. ([diff][polis-diff])
- Allow any frontend designer with NodeJS installed to work on Polis UI locally within minutes.
- Avoid forcing contributors to set up and run Docker.

## Development

Requirements:
- :white_check_mark: NodeJS v18 (tested on v18.17.1)
- :white_check_mark: Git
- :x: Docker (not needed)

```
git checkout https://github.com/CivicTechTO/polis-storybook
cd polis-storybook

git submodule init
git submodule update

npm install
npm run storybook
```

A browser window will open automatically: http://localhost:6006

## Technologies Used

- [**Storybook.**][storybook] A frontend workshop for building UI components and pages in isolation.
- **React.**
- [**GitHub Pages.**][github-pages]
- [**GitHub Actions.**][github-actions]
- [**BackboneJS.**][backbone] (legacy) A lightweight MVC framework for structuring JS apps.
- [**Handlebones.**][handlebones] (legacy) A tiny Backbone + Handlebars view framework.

## License

GNU Affero General Public License v3.0 (See [LICENSE](./LICENSE))

<!-- Links -->
   [polis-diff]: https://github.com/compdemocracy/polis/compare/edge...patcon:polis:storybook-prep
   [storybook]: https://storybook.js.org/
   [github-actions]: https://github.com/features/actions
   [github-pages]: https://pages.github.com/
   [backbone]: https://backbonejs.org/
   [handlebones]: https://github.com/FormidableLabs/handlebones
