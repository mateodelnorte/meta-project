[![Build Status](https://travis-ci.com/mateodelnorte/meta-project.svg?branch=master)](https://travis-ci.com/mateodelnorte/meta-project)

# meta-project

project plugin for [meta](https://github.com/mateodelnorte/meta)

## Usage

```
  Usage: meta project [options] [command]


  Commands:

    create      create and initialize a new child repository
    import      import an existing child repository via git clone
    migrate     migrate from a monorepo to a metarepo
    help [cmd]  display help for [cmd]

  Options:

    -h, --help  output usage information

```

```
  usage:

    meta project create <destFolder> <childRepoUrl>
    meta project import <destFolder> <childRepoUrl>
    meta project migrate <destFolder> <childRepoUrl>
```
