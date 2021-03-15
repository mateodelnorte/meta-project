[![Build Status](https://travis-ci.com/mateodelnorte/meta-project.svg?branch=master)](https://travis-ci.com/mateodelnorte/meta-project)

# meta-project

project plugin for [meta](https://github.com/mateodelnorte/meta)

## Usage

```
  Usage: meta project [<options>] <command>


  Commands:

    create      create and initialize a new child repository
    import      import an existing child repository via git clone
    migrate     migrate from a monorepo to a metarepo
    help <cmd>  display help for <cmd>

  Options:

    -h, --help  output usage information

```

## Creating a new project

To create a new project, use `meta project create <folder> <repo url>`

```
meta project create new-dir git@github.com/org/repo
```

## Import an existing project

To import an existing project, use `meta project import <folder> [<repo url>]`

```
meta project import projects/example git@github.com/your-org/example
```

To import existing project which is already checked out at `<folder>`, `<repo-url>` can be omitted

```
meta project import projects/example
```

## Migrate a Monorepo to a metarepo and keep your git history intact.

'meta project migrate' helps you move from a monorepo to a meta repo by moving directories from
your existing repo into separate child repos, with git history intact. These are then referenced in
your '.meta' file and cloned, making the operation transparent to your codebase.

For example, given the following monorepo structure:

```
- monorepo-base
  - project-a
  - project-b
  - project-c
```

Create git repos for `project-a`, `project-b`, and `project-c`, then run:

```
cd monorepo-base
meta init
meta project migrate project-a git@github.com/yourorg/project-a
meta project migrate project-b git@github.com/yourorg/project-b
meta project migrate project-c git@github.com/yourorg/project-c
```

This will keep the git history of each subproject in tact, using some git magic:

- Explanation: https://help.github.com/en/articles/splitting-a-subfolder-out-into-a-new-repository
- Implementation: https://github.com/mateodelnorte/meta-project/blob/master/lib/splitSubtree.js

## How it works

A) Migrate will first create a copy of your project in a temporary directory and replace the remote
'origin' with the provided <childRepoUrl>

B) It will split the history from <destFolder> and push to the provided <childRepo>:
https://help.github.com/en/articles/splitting-a-subfolder-out-into-a-new-repository

C) Next <destFolder> is removed from your monorepo, and then cloned back into the same location.

In the eyes of the monorepo, the only thing that has changed is the .meta file, however, <destFolder>
now also has it's own distinct history.

## Migration Phase

If you need the monorepos structure to stay in tact for any extended duration, such as supporting legacy CI
systems, you can stop here.

While in this 'migration' phase, you need to commit to the child directory's git history as well as the
monorepo's git history. These commits can literally be made twice by cd-ing around or both can be made
at once using 'meta git commit'.

## Finishing the Migration

When the monorepo no longer needs to be maintained you can simply add the migrated project to your '.gitignore'.

This will cause changes to only be tracked in the child repo, rather than both, such as during the migration phase.
