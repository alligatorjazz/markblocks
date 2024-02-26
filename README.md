oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g markblocks
$ markblocks COMMAND
running command...
$ markblocks (--version)
markblocks/0.1.2 darwin-arm64 node-v20.5.1
$ markblocks --help [COMMAND]
USAGE
  $ markblocks COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`markblocks INPUTFILE [OUTFILE]`](#markblocks-inputfile-outfile)
* [`markblocks help [COMMANDS]`](#markblocks-help-commands)

## `markblocks INPUTFILE [OUTFILE]`

Adds adds human-readable block ids to every paragraph in a Markdown document.

```
USAGE
  $ markblocks  INPUTFILE [OUTFILE] [-f] [-h] [-r] [-s]

ARGUMENTS
  INPUTFILE  The path to the markdown document.
  OUTFILE    The output file for the generated output. If not provided, markblocks will not run unless the --force flag
             is provided.

FLAGS
  -f, --force           Whether to add block ids to an existing document in the event an outFile is not provided.
  -h, --includeHeaders  By default, blockifier will not turn markdown headers into blocks. Including this option will
                        generate block ids for headers as well.
  -r, --random          Whether to use random or human-readable block ids. If enabled, the block ids will be random.
  -s, --sequential      By default, blockifier will try to generate block ids based on the document's header structure
                        (e.g. 1.0.0, 1.0.1, etc.). This option will generate ids purely based on each paragraph break.
                        No effect if --random is enabled.

DESCRIPTION
  Adds adds human-readable block ids to every paragraph in a Markdown document.

EXAMPLES
  Add block ids to an existing document.

    $ markblocks input.md output.md

  Add block ids to an existing document.

    $ markblocks input.md -f
```

_See code: [dist/index.ts](https://github.com/alligatorjazz/markblocks/blob/v0.1.2/dist/index.ts)_

## `markblocks help [COMMANDS]`

Display help for markblocks.

```
USAGE
  $ markblocks help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for markblocks.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.12/src/commands/help.ts)_
<!-- commandsstop -->
