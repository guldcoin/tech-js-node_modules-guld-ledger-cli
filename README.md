# guld-ledger-cli

[![source](https://img.shields.io/badge/source-bitbucket-blue.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-ledger-cli) [![issues](https://img.shields.io/badge/issues-bitbucket-yellow.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-ledger-cli/issues) [![documentation](https://img.shields.io/badge/docs-guld.tech-green.svg)](https://guld.tech/cli/guld-ledger-cli.html)

[![node package manager](https://img.shields.io/npm/v/guld-ledger-cli.svg)](https://www.npmjs.com/package/guld-ledger-cli) [![travis-ci](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-ledger-cli.svg)](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-ledger-cli?branch=guld) [![lgtm](https://img.shields.io/lgtm/grade/javascript/b/guld/tech-js-node_modules-guld-ledger-cli.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/b/guld/tech-js-node_modules-guld-ledger-cli/context:javascript) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-guld-ledger-cli/status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-guld-ledger-cli) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-guld-ledger-cli/dev-status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-guld-ledger-cli?type=dev)

Guld ledger extras.

### Install

##### Node

```sh
npm i -g guld-ledger-cli
```

### Usage

##### CLI

```sh
guld-ledger --help

  Usage: guld-ledger [options] [command]

  Guld ledger extras.

  Options:

    -V, --version                           output the version number
    -u --user <name>                        The user name to run as.
    -h, --help                              output usage information

  Commands:

    balance|bal [account] [...subaccounts]  Reports the current balance of all accounts matching the query.
    cache [path]                            Cache all ledger files found (recursively) in the given path or $HOME/ledger.

```

### License

MIT Copyright isysd
