# Deploy

## Prerequisites

In order to utilize the deploy scripts, you'll need to first set up `gh-pages` and `gh-pages-dev` remotes using the following commands:

### Production (`gh-pages`)

```
<!-- git remote add gh-pages git@github.com:B-Audette/b-audette.github.io.git -->
```

When deploying to prod, the CNAME gets removed.

### Dev (`gh-pages-dev`)

```
<!-- git remote add gh-pages-dev git@github.com:B-Audette/the-paper-clips-dev.git -->
```

Once you've added these remote branches, you can now run the deploy scripts.

## Deploying

To deploy the website, simply run `npm run deploy-dev` (for the development environment) or `npm run deploy-prod` (for the production environment). This will build the website using the Quasar CLI and deploy it to GitHub Pages by doing the following:

1. Running `quasar build` to generate static web assets in the `dist/spa` directory.
2. Using [`push-dir`](https://npm.im/push-dir) to push the `dist/spa` directory on the `main` branch to the `gh-pages-dev` or `gh-pages` remotes.
