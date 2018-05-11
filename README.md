# React Material Component Library

A React component library for Material Components Web

[![Build Status](https://semaphoreci.com/api/v1/juliancoleman/orchestra/branches/master/badge.svg)](https://semaphoreci.com/juliancoleman/orchestra)
[![Maintainability](https://api.codeclimate.com/v1/badges/0181111b648a435f22a9/maintainability)](https://codeclimate.com/github/juliancoleman/react-material-component-library/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/0181111b648a435f22a9/test_coverage)](https://codeclimate.com/github/juliancoleman/react-material-component-library/test_coverage)
[![codecov](https://codecov.io/gh/juliancoleman/react-material-component-library/branch/develop/graph/badge.svg)](https://codecov.io/gh/juliancoleman/react-material-component-library)

# Creation guidelines

A few guidelines I'll be following while building this.
The purpose of this guideline is to provide an accurate
representation of the project and its architecture.

The goal of these guidelines is to provide a discretionary
path, as well as to adequately document the moving parts so
that if I need to exchange one piece for another, its
consequences are readily known as to what functionality I
will need to replace or lose altogether. All moving parts
are easily exchangeable for other alternatives. The idea
then is to be completely decoupled from everything other
than the original scope of the library, which is Material
Design and its componentized child, Material Components Web.


## Architecture
- `lerna` (whether this becomes a mono-repo or not)
  - manage multiple packages within a single repo
  - uniform and independent releases across multiple packages
  - single command for upping semver, running release, and publishing to npm
- `lerna-changelog` (for those extra fancy release logs)
  - uses Github issue and PR labels
  - displays a list of all PRs merged for a tag range on each tagged release
- must **not** use Webpack or Rollup (subject to change)
  - In the past, these have slowed to a screeching halt when building
    - sometimes taking upwards of 2-5 minutes to build
  - TypeScript has its own internal build process for JavaScript output types
  - subject to change if we absolutely need this resource
- may use Babel if necessary
  - for experiemental ES syntax, etc.

## Branches
- `master` (production)
- `develop` (staging)
- `epic`
  - `feature/my-feature` [2]
  - `fix/rfc-2616-headers` [1]
  - `docs/component-readme` [2]
  - `style/round-button-corners` (pertaining to UI only) [2]
  - `refactor/var-to-const` [1]
  - `test/component` [2]
  - `chore/scss-compile-script` [2]

## Testing
- Jest
  - snapshot tests
  - TDD
  - BDD
- Enzyme
  - `enzyme-adapter-react-16`
  - DOM tree
  - component constructor testing
- Cypress
  - e2e

## Build
- first-class TypeScript
  - must adhere to the [barrel pattern](https://basarat.gitbooks.io/typescript/docs/tips/barrel.html)
- es-module
- commonjs
- umd

## Style (UI)
- can only be styled with material-components-web's internal SCSS
- can be styled with a theming engine (TODO)
- must be styled purely with CSS where required (components not belonging to MWC)
  - SCSS and Stylus variables become obsolete with modularity
  - components should be atomic (their most basic forms)

## Component
- must adhere to the [framework integration guidelines](https://github.com/material-components/material-components-web/blob/master/docs/integrating-into-frameworks.md)
- [should have exactly 0 default props](https://www.linkedin.com/feed/update/urn:li:activity:6397460521431429120)
  - _"Explicit over implicit is a good rule of thumb."_ &mdash; One Talented Boi
- atomic components should hoist props
- should be stateless
- should be pure
- should not use unsafe React LCMs
