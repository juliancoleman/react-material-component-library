# Contributing

First of all, I want to personally say thank you for taking
the time to contribute!

Below, you'll find a set of guidelines for contributing to
this project and its packages. These are mostly guidelines,
not rules. These are here for responsibility,
accountability, and consistency. Use your best judgment and
feel free to propose changes to this document in a pull
request.

### Table of Contents

> [Preface](#preface)
>
> [Contributing](#contributing)
> >
> > [Reporting bugs](#reporting-bugs)
> >
> > [Suggesting enhancements](#suggesting-enhancements)
> >
> > [Submitting a PR](#submitting-a-pr)
> >
>
> [Styleguides](#styleguides)
> > [Git](#git)
> >
> > [Typescript](#typescript)
> >
> > [Editor config](#editor-config)
> >
> > [React best practices](#react-best-practices)
> >
> > [Specs](#specs)
> >
> > >
> > > [Jest](#jest)
> > >
> > > [Enzyme](#enzyme)
> > >
> > > [Cypress](#cypress)
> > >
> >
>

# Preface

Thank you for your contribution! By participating, the
following guidelines must be understood:

- Upon the merge of your PR, the branch will be deleted.
This is to keep the branches organized.

- Upon the merge of your PR, you then relinquish all
creative ownership of the code within the context of this
project. Identical code in other projects are not of
concern.

The relinquishing of ownership of code is due to the fact
that the primary maintainer of this project must take full
reponsibility of all code in the repo. As the maintainer, I
want to guarantee that the code being merged in is of good
quality and repute, adhering to the styleguide. It is my
responsibility to ensure that any use of this project in
the wild is not faced with failed tests, or lack thereof,
because of poorly written contributions. This is also to
make sure the project is as maintainable as possible, and
meets a certain standard of quality.

Thank you for understanding.

A final word&mdash;I insist that rather than take the
documentation step-by-step, all documentation contained in
this repo should be read in full prior to initial
contribution, or read in full again following a reprimand
of broken code of conduct in order to reconcile and rebuild
trust in contributing to the project. If I had a dollar for
every time I've filled out a long official form, only to
realize I'd filled out the part that says _"Do not fill this out,"_
well, I'd have a lot of money. There is no learning without
failure, so press on with confidence as an engineer.

# Contributing

### Reporting bugs

I want to be abundantly clear about the openness of this
project towards contributions. If you feel like you've
found a bug that is within your power to fix, please do!
However, please be sure to search issues and pull requests
in advance to verify that an issue of the same type doesn't
already exist.

Please be sure to read the issue template in full prior to
submitting an issue, and please also be able to reliably
reproduce the issue.

### Suggesting enhancements

Suggesting enhancements will follow the same flow as issues.
Be sure to check if an open issue or PR exists for the
request.

In addition to following the issue flow, please provide
additional context:

- step-by-step description
- specific examples of the suggested enhancement
- describe the current behavior and explain which behavior you expect to see instead and _why_
- explain why this enhancement would be useful for the project
- list some other resources where this enhancement exists
- specify the version of the project you're currently using
- specify the name and version of the browser you're using

### Submitting a PR

When submitting a PR, please read the PR template in full
in order to fully understand the process. In addition, be
sure to read this document in full as well.

Key points to remember are:

- tag every issue and PR with at least one changelog label
- adhere to the karma commit message styleguide
- do not include issue numbers in the PR title
  - this will exist in the PR body in the form of `fixes #123` or `closes #456`
- include screenshots and animated GIFs in your PR whenever possible
- write tests!!!
  - use the [Jest](#jest) example below to get started
  - the more, the merrier!
  - leaving the demo `describe` block in your test file will earn you a rejection
- contributions with missing types will be automatically rejected

# Styleguides

### Git

Commit and PRs are grouped by label. These labels can be
found in the `lerna.json` at the project's root. These
groupings correllate with a specific type of commit that
adheres to the [karma commit message convention](http://karma-runner.github.io/2.0/dev/git-commit-msg.html).

Some general rules to follow when naming commit messages
and Pull Requests.

- make it simple and concise
  - the name will appear on the auto-gen release docs
  - simpler navigation through Git history
- format messages properly
- the first line must not exceed 70 characters
  - automatically enforced by VSCode
- use predefined type values
  - feat
  - fix
  - docs
  - style
    - because this is a UI component library, `style` will refer to CSS instead of code style.
  - refactor
  - test
  - chore
- use imperative-present tense
- reference issues


### Typescript

This project is linted entirely with the [Airbnb TSLint config](https://github.com/progre/tslint-config-airbnb).
All Typescript must adhere to this style.

More will be added...

### Editor config

Editor Config is a general file format manager. You can
install the proper `editorconfig` extension for your
favorite text editor. An Editor Config may handle certain
things like:

- line-ending marks
- insert final newline
- trimming trailing whitespace
- charset
- indent-style
- indent-size

### React best practices

- Each `tsx` file should export exactly one React component.
  - use `export default`
- Make components reusable
  - "Dumb" components (just UI, no API calls inside).
  - API wrappers
- Functional components are forbidden
  - Conversion hassle
  - Messy diffs
  - Minor signal-to-noise differences
  - Inconsistency
    - classes use `this.props`, functions just use `props`
    - classes use a render function, functions do not
    - classes tend to destructure at the top of render, but functions tend to destructure the arguments list
    - classes can use `PropTypes`, functions would need default arguments
  - Classes are familiar to OO developers
  - No performance benefits... yet.
  - Yet another design decision
- When creating `types`, concatenate `state` or `props` to the name of the component

```ts
import { Component } from "react";

interface MyComponentProps {
  // props inherited from parent
}

interface MyComponentState {
  // state local to component
}

export default class extends Component<MyComponentProps, MyComponentState> {
  // ...
}
```

- do not use the bind syntax
  - prefer arrow syntax
  - prefer state assignment
- arrow functions in render are forbidden
- render return types
  - returning an array should be of type `React.ReactNode`
  - returning a single element should be of type `React.ReactElement<T>` where `T` is the type of Node

### Specs

- Include thoughtfully-worded, well-structured `Jest` specs
  - spec file lives next to component as `MyComponent.spec.ts`
- treat `describe` as a noun or situation
- treat `it` as a statement about state or how an operation changes state
  - refrain from using _**"if"**_ inside of `it` blocks

There is considerable overlap across these three tools. For
example,

#### Jest

Use Jest to test a function's input and output. A function
should always be denoted with a leading `#`.

```ts
import myFunction from "./path/to/myFunction.ts";

describe("#myFunction", () => {
  it("returns something specific", () => {
    const result = myFunction(someInput);

    expect(result).toBe(someOutput);
  });
});
```

Jest also can take snapshots of React components with the
`react-test-renderer` package

```tsx
import React from "react";
import renderer from "react-test-renderer";

import Link from "./Link.tsx";

test("Link changes the class when hovered", () => {
  const component = renderer.create(<Link page="http://www.facebook.com">Facebook</Link>);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
```

#### Enzyme

TODO

#### Cypress

TODO
