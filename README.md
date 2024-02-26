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
$ npm install -g blockify
$ blockify COMMAND
running command...
$ blockify (--version)
blockify/0.1.0 darwin-arm64 node-v20.5.1
$ blockify --help [COMMAND]
USAGE
  $ blockify COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`blockify help [COMMANDS]`](#blockify-help-commands)
* [`blockify plugins`](#blockify-plugins)
* [`blockify plugins:install PLUGIN...`](#blockify-pluginsinstall-plugin)
* [`blockify plugins:inspect PLUGIN...`](#blockify-pluginsinspect-plugin)
* [`blockify plugins:install PLUGIN...`](#blockify-pluginsinstall-plugin-1)
* [`blockify plugins:link PLUGIN`](#blockify-pluginslink-plugin)
* [`blockify plugins:uninstall PLUGIN...`](#blockify-pluginsuninstall-plugin)
* [`blockify plugins reset`](#blockify-plugins-reset)
* [`blockify plugins:uninstall PLUGIN...`](#blockify-pluginsuninstall-plugin-1)
* [`blockify plugins:uninstall PLUGIN...`](#blockify-pluginsuninstall-plugin-2)
* [`blockify plugins update`](#blockify-plugins-update)

## `blockify help [COMMANDS]`

Display help for blockify.

```
USAGE
  $ blockify help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for blockify.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.12/src/commands/help.ts)_

## `blockify plugins`

List installed plugins.

```
USAGE
  $ blockify plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ blockify plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/index.ts)_

## `blockify plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ blockify plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ blockify plugins add

EXAMPLES
  $ blockify plugins add myplugin 

  $ blockify plugins add https://github.com/someuser/someplugin

  $ blockify plugins add someuser/someplugin
```

## `blockify plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ blockify plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ blockify plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/inspect.ts)_

## `blockify plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ blockify plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ blockify plugins add

EXAMPLES
  $ blockify plugins install myplugin 

  $ blockify plugins install https://github.com/someuser/someplugin

  $ blockify plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/install.ts)_

## `blockify plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ blockify plugins link PLUGIN

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
  $ blockify plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/link.ts)_

## `blockify plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ blockify plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ blockify plugins unlink
  $ blockify plugins remove

EXAMPLES
  $ blockify plugins remove myplugin
```

## `blockify plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ blockify plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/reset.ts)_

## `blockify plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ blockify plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ blockify plugins unlink
  $ blockify plugins remove

EXAMPLES
  $ blockify plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/uninstall.ts)_

## `blockify plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ blockify plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ blockify plugins unlink
  $ blockify plugins remove

EXAMPLES
  $ blockify plugins unlink myplugin
```

## `blockify plugins update`

Update installed plugins.

```
USAGE
  $ blockify plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/update.ts)_
<!-- commandsstop -->
