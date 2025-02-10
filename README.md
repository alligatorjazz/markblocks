markblocks
=================

Convert markdown scripts into storyboards.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/markblocks.svg)](https://npmjs.org/package/markblocks)
[![Downloads/week](https://img.shields.io/npm/dw/markblocks.svg)](https://npmjs.org/package/markblocks)


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
markblocks/0.0.0 darwin-arm64 node-v20.5.1
$ markblocks --help [COMMAND]
USAGE
  $ markblocks COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`markblocks hello PERSON`](#markblocks-hello-person)
* [`markblocks hello world`](#markblocks-hello-world)
* [`markblocks help [COMMAND]`](#markblocks-help-command)
* [`markblocks plugins`](#markblocks-plugins)
* [`markblocks plugins add PLUGIN`](#markblocks-plugins-add-plugin)
* [`markblocks plugins:inspect PLUGIN...`](#markblocks-pluginsinspect-plugin)
* [`markblocks plugins install PLUGIN`](#markblocks-plugins-install-plugin)
* [`markblocks plugins link PATH`](#markblocks-plugins-link-path)
* [`markblocks plugins remove [PLUGIN]`](#markblocks-plugins-remove-plugin)
* [`markblocks plugins reset`](#markblocks-plugins-reset)
* [`markblocks plugins uninstall [PLUGIN]`](#markblocks-plugins-uninstall-plugin)
* [`markblocks plugins unlink [PLUGIN]`](#markblocks-plugins-unlink-plugin)
* [`markblocks plugins update`](#markblocks-plugins-update)

## `markblocks hello PERSON`

Say hello

```
USAGE
  $ markblocks hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ markblocks hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/alligatorjazz/markblocks/blob/v0.0.0/src/commands/hello/index.ts)_

## `markblocks hello world`

Say hello world

```
USAGE
  $ markblocks hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ markblocks hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/alligatorjazz/markblocks/blob/v0.0.0/src/commands/hello/world.ts)_

## `markblocks help [COMMAND]`

Display help for markblocks.

```
USAGE
  $ markblocks help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for markblocks.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.25/src/commands/help.ts)_

## `markblocks plugins`

List installed plugins.

```
USAGE
  $ markblocks plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ markblocks plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/index.ts)_

## `markblocks plugins add PLUGIN`

Installs a plugin into markblocks.

```
USAGE
  $ markblocks plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into markblocks.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the MARKBLOCKS_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the MARKBLOCKS_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ markblocks plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ markblocks plugins add myplugin

  Install a plugin from a github url.

    $ markblocks plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ markblocks plugins add someuser/someplugin
```

## `markblocks plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ markblocks plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ markblocks plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/inspect.ts)_

## `markblocks plugins install PLUGIN`

Installs a plugin into markblocks.

```
USAGE
  $ markblocks plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into markblocks.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the MARKBLOCKS_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the MARKBLOCKS_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ markblocks plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ markblocks plugins install myplugin

  Install a plugin from a github url.

    $ markblocks plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ markblocks plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/install.ts)_

## `markblocks plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ markblocks plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ markblocks plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/link.ts)_

## `markblocks plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ markblocks plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ markblocks plugins unlink
  $ markblocks plugins remove

EXAMPLES
  $ markblocks plugins remove myplugin
```

## `markblocks plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ markblocks plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/reset.ts)_

## `markblocks plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ markblocks plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ markblocks plugins unlink
  $ markblocks plugins remove

EXAMPLES
  $ markblocks plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/uninstall.ts)_

## `markblocks plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ markblocks plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ markblocks plugins unlink
  $ markblocks plugins remove

EXAMPLES
  $ markblocks plugins unlink myplugin
```

## `markblocks plugins update`

Update installed plugins.

```
USAGE
  $ markblocks plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/update.ts)_
<!-- commandsstop -->
