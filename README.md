# ic-azle-react-ts-template
 Template for front-to-back IC project in Typescript

## Prerequisites

1. DFX
2. Rust
3. cmake (often on macos)

### DFX
Install the DFX client:
```bash
sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```

### Rust (Rustup)
Here's a simple way to install Rust
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Cmake
On our machines, we needed to install cmake as well. We did this using homebrew on macos:

```bash
brew install cmake
```

## Installation
We are fans of the `yarn` package manager and will reference it for the purpose of this tutorial.
```bash
yarn
```
That's it - your dependent `node_modules` get installed across the whole system. 

## Try it out

First, make sure `dfx` is running from the context of this repository directory, ideally in its own terminal window
```bash
dfx start
```

First, launch the backend
```bash
yarn rebuild:backend
yarn deploy:local backend
```

Second, you can start the frontend using the React hot server
```bash
yarn start
```

## Managing frontend

Manage the react dependencies and setup in the `/react` subdirectory. Typescript source files are in the `react/src` subdirectory.

## Managing backend

The backend is written in TS to introduce one to [Azle](https://github.com/demergentlabs/azle). Walk through the code and the Azle documentation to get a sense of how it works. 


## Thank you

We are grateful to the DFINITY foundation, the SUPERNOVA hackathon, helpful people on the DFINITY dev discord, and especially to Jordan Last for getting us through some of the tough parts of making our project work on IC and on Azle. We hope this template makes that journey easier for you too! 

Happy building! 