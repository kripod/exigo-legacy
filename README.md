# exigo

TODO

## 🗺️ Roadmap

- [ ] Minimalistic demo app using [Reactstrap](https://reactstrap.github.io/)
- [ ] Responsive font sizing
- [ ] Randomize order of questions and answers
- [ ] Show only a single page of questions at once
  - [ ] Per-page timers (pages shall not be skipped/resumed)
- [ ] Individual questions without timers may be skipped
- [ ] Assessment evaluation with a customizable scoring system
  - [ ] Always shown
  - [ ] Shown only at the end
  - [ ] Shown on failure or success (based on score)
- [ ] Answer types
  - [ ] Single choice
  - [ ] Multiple choice
  - [ ] Boolean
  - [ ] Number
    - [ ] Zero-tolerance by default, but overridable per question
  - [ ] String
    - [ ] Manually checkable answers
    - [ ] Transform answers to compare by lowercase alphanumeric letters (enabled by default, but can be disabled per question)
    - [ ] Ability to check for degree of [string-similarity](https://github.com/aceakash/string-similarity) based on an overridable tolerance constant
  - [ ] Image
- [ ] Audiovisual questions
  - [ ] Image
  - [ ] Audio
  - [ ] Video
- [ ] Answer hints
  - [ ] Pre-definable hint texts
  - [ ] Penalty system to affect score negatively
  - [ ] Limit amount of hints which can be used during a test
- [ ] Create, export or load questions
  - [ ] Create and export JSON
  - [ ] Load statically
  - [ ] Load from custom file
  - [ ] Load from custom URL (e.g. [gist](https://gist.github.com/))
  - [ ] YAML file support for improved UX
- [ ] Support multiple languages
  - [ ] Guidelines for creating multilingual tests
  - [ ] Only load file of the desired language
- [ ] Ability to learn through [spaced repetition](https://ncase.me/remember/)
- [ ] Manage users through a backend
  - [ ] Authentication
  - [ ] Separate questions (frontend) from secret answers (backend)
  - [ ] Student-lecturer system

### 🛠️ Technologies

#### 🖼️ Frontend

- [ ] [Gatsby](https://www.gatsbyjs.org/)
- [ ] [TypeScript](https://www.typescriptlang.org/)
- [ ] [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [ ] [styled-compoments](https://www.styled-components.com/)

#### 🔒 Backend

- [ ] [Auth0](https://auth0.com/)
- [ ] [graphql-yoga](https://github.com/prisma/graphql-yoga)
- [ ] [Firebase](https://firebase.google.com/)

#### 🏭 Infrastructure

- [ ] [Prettier](https://prettier.io/)
- [ ] [ESLint](https://eslint.org/)
- [ ] [Jest](https://jestjs.io/)
- [ ] [Travis CI](https://travis-ci.org/)
- [ ] [Netlify](https://www.netlify.com/)
