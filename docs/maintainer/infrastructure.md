---
title: 'Infrastructure'
---

<a id="infrastructure"></a>

<a id="id1"></a>

# Infrastructure

This page gives an overview of the Conda-forge infrastructure, that is, an account of the various pieces maintained by the Conda-forge contributors as well as third-party providers that collectively form the basis for the operation of Conda-forge.

We start with the different Github [repositories](#repositories) maintained by Conda-forge itself, then describe the administrative commands available for use in those repositories, the [Admin web services](#admin-web-services), followed by [the CI services](#ci-build-services), i.e. the third-party providers used for building and maintaining packages together.
After that, we turn to a description of some aspects of the build environment for packages in [Compilers and Runtimes](#compilers-and-runtimes), together with [details about the upload to the package server](#output-validation-and-feedstock-tokens).

Finally, we see how the process of building a package interacts with the different parts of the infrastructure in [Package building](#package-building).

<a id="repositories"></a>

## Repositories

<a id="staging-area-for-recipes"></a>

### Staging area for recipes

[conda-forge/staged-recipes](https://github.com/conda-forge/staged-recipes) is the entry point for new packages to join the conda-forge package collection.
You can find the detailed guide for submitting new package recipes in [The staging process](adding_pkgs.md#creating-recipes).

<a id="smithy"></a>

### Smithy

Smithy contains maintenance code for conda-forge, which is used by the `conda-smithy` command line tool and the [Admin web services](#dev-admservice). Smithy lives in the repository [conda-forge/conda-smithy](https://github.com/conda-forge/conda-smithy).

`conda-forge/conda-smithy` is the right repository to report bugs for

- The rerendering process
- The recipe linter
- [CI](../glossary.md#term-CI) support utils

`conda-smithy` also contains the command line tool that you should use if you rerender manually from the command line (see [Rerendering feedstocks](updating_pkgs.md#dev-update-rerender)).

Smithy can be used beyond conda-forge's purposes. For example, it can be used to set up self-hosted Azure agents <azure-config> for non-conda-forge infrastructures.
(You could also consider using [Azure virtual machine scale set agents](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/scale-set-agents?view=azure-devops),
which could be less expensive to run than permanently active agents.)

<a id="web-services"></a>

### Web services

The Heroku app providing the conda-forge web services lives in [conda-forge/conda-forge-webservices](https://github.com/conda-forge/conda-forge-webservices).
Please note that the code logic provided by the app is in the `Smithy` repository.

Bugs or suggestions regarding the service functionality should therefore be opened in `conda-forge/conda-smithy`'s [bug tracker](https://github.com/conda-forge/conda-smithy/issues).

<a id="conda-forge-pinning"></a>

### conda-forge pinning

Package-wide dependency pins are defined in [conda_build_config.yaml](https://github.com/conda-forge/conda-forge-pinning-feedstock/blob/master/recipe/conda_build_config.yaml) in the [conda-forge/conda-forge-pinning-feedstock](https://github.com/conda-forge/conda-forge-pinning-feedstock).

For more information on conda-forge wide package pins, please refer to [Globally pinned packages](pinning_deps.md#globally-pinned-packages).

Please open a [PR](../glossary.md#term-PR) and/or an issue there, if you think a pin needs to be advanced. For more information on updating globally pinned packages, please refer to [Updating package pins](pinning_deps.md#update-pins).

<a id="documentation"></a>

### Documentation

The documentation website lives in [conda-forge/conda-forge.github.io](https://github.com/conda-forge/conda-forge.github.io/), and is automatically deployed to our [online version](https://conda-forge.org/).

The documentation is built with Docusaurus and the sources files are located in the [`docs/`](https://github.com/conda-forge/conda-forge.github.io/tree/main/docs) directory of the repository.

If you found any typo error, unclear explanations or new topics that can be covered, you can suggest changes to the documentation. For more details, please refer to [Improve the documentation](../user/contributing.md#improve-docs).

<a id="dev-admservice"></a>

<a id="admin-web-services"></a>

## Admin web services

conda-forge is running a webservice on Heroku called [conda-forge-webservices](https://github.com/conda-forge/conda-forge-webservices).

The following services are run by default on a feedstock:

- It will lint the recipes in the PRs and report back whether the recipe is in excellent condition or not.
- When maintainers are added to a recipe, each of the maintainers will be added to the team and given push access to the feedstock.

The webservice also listens to issues and PR comments, so that you can ask for the following services to be done:

<a id="conda-forge-admin-please-rerender"></a>

### @conda-forge-admin, please rerender

Entering the above phrase in a PR of a feedstock will rerender the feedstock and push the changes to your PR.
Make sure to tick the `Allow edits from maintainers` button located at the bottom of the right side bar of
the PR. If you enter this phrase in the comment for an issue, the bot will create a new pull request, with the requested
re-rendering being completed.

<a id="conda-forge-admin-please-add-noarch-python"></a>

### @conda-forge-admin, please add noarch: python

Entering the above phrase in a PR or an issue of a feedstock will add `noarch: python` to the build and rerender the feedstock
for you.

<a id="conda-forge-admin-please-lint"></a>

### @conda-forge-admin, please lint

Entering the above phrase in a PR of a feedstock will lint the PR again.

<a id="conda-forge-admin-please-update-team"></a>

### @conda-forge-admin, please update team

Entering the above phrase in an issue will update the team for the feedstock. This is usually done automatically.

<a id="conda-forge-admin-please-restart-ci"></a>

### @conda-forge-admin, please restart ci

Entering this command in the PR of a feedstock or staged-recipes will close and then open the PR, causing
all of the CI builds to restart.

<a id="cfa-please-ping-team"></a>

<a id="conda-forge-admin-please-ping-team"></a>

### @conda-forge-admin, please ping team

Entering this command in the PR of a feedstock or staged-recipes will have the admin bot @-mention the team
associated with the repo. This command can be useful for people who are not yet members of conda-forge and
so cannot @-mention the `staged-recipes` team for PR reviews.

<a id="cfa-please-ping-cf-team"></a>

<a id="conda-forge-admin-please-ping-conda-forge-team"></a>

### @conda-forge-admin, please ping conda-forge/<team>

Entering this command in the PR of a feedstock or staged-recipes will have the admin bot @-mention the respective team.
This command can be useful for people who are not yet members of conda-forge and
so cannot @-mention someone due to the general GitHub limitations.

<a id="conda-forge-admin-please-rerun-bot"></a>

### @conda-forge-admin, please rerun bot

Entering this command in a PR comment will add the `bot-rerun` label to that PR. This label will cause
the `auto-tick` bot that issues migration and version updates to close the current PR and reissue it.
Adding this label to non-bot issued PRs will have no effect.

<a id="conda-forge-admin-please-add-bot-automerge"></a>

### @conda-forge-admin, please add bot automerge

Entering this command in the title or comment of an issue will instruct the admin bot to
open a PR enabling the automatic merging of passing PRs from the `auto-tick`
bot. This functionality is currently experimental. You can find more details
[here](#automerge).
Please open issue on `regro/cf-scripts` for any feedback, bugs, and/or questions!

<a id="conda-forge-admin-please-remove-bot-automerge"></a>

### @conda-forge-admin, please remove bot automerge

Entering this command in the title or comment of an issue will instruct the admin bot to
open a PR to disable automerge, undoing the `please add bot automerge` command.

<a id="cfa-please-add-user"></a>

<a id="conda-forge-admin-please-add-user-username"></a>

### @conda-forge-admin, please add user @username

Entering the above phrase in the title of an issue on a feedstock will make a PR
that adds the given user to the feedstock. A maintainer or member of `core` can then merge
this PR to add the user. Please do not modify this PR or adjust the commit message. This
PR is designed to skip building the package.

<a id="conda-forge-admin-please-update-version"></a>

### @conda-forge-admin, please update version

Entering the above phrase in the title of an issue on a feedstock will request the bot
to check if there are any new versions available. If there are, it will open a PR with
with the needed changes. Note that the bot might start by opening a PR with only partial
changes. The rest of the contents will be added in a subsequent commit after a few minutes.

<a id="ci-build-services"></a>

## CI build services

Here we describe common issues with the CI Services that conda-forge builds.

<a id="azure-pipelines"></a>

### Azure Pipelines

Azure is used to build packages for OSX, Linux (x86_64, native), Linux (ARMv8, emulated) and Linux (IBM Power8+, emulated).
The build queue on Azure is substantially larger than on all the other providers.
Azure builds have a maximum duration of 6 hours.

To see all builds on Azure, visit [https://dev.azure.com/conda-forge/feedstock-builds/_build](https://dev.azure.com/conda-forge/feedstock-builds/_build).

<a id="restarting-builds"></a>

#### Restarting builds

Presently Azure does not sync GitHub users. In order to restart a build you can restart it from the GitHub checks interface.
If that doesn't work, a close/open will kick off a new build. You can also use the web services command `@conda-forge-admin, please restart ci`.

<a id="using-azure-for-everything"></a>

#### Using Azure for *everything*

Azure is the default provider for Linux and OSX.  To use Azure for everything, add the following to `conda-forge.yml` in the root
of the feedstock.

```yaml
provider:
  win: azure
```

:::note

Presently Azure has some issues building libraries using cmake on Windows. Azure does not have a VS2008 installation, so building
certain very old packages that require VC9 will fail.

:::

<a id="travisci-ibm-power-8-arm"></a>

### TravisCI (IBM Power 8+, ARM)

TravisCI is used to build packages for IBM Power 8+ and ARM. After merging a staged-recipes pull request, it might be necessary to
force sync your repositories in TravisCI to see the reload and cancel buttons. To do this please visit [https://app.travis-ci.com/account/repositories](https://app.travis-ci.com/account/repositories)
and click the "Sync accounts" button.

<a id="enabling-travis"></a>

#### Enabling Travis

TravisCI should only be needed to build recipes on OSX, if there is a strange failure on Azure.

Enable a build by adding the following to `conda-forge.yml` in the root of the feedstock.

```yaml
provider:
  osx: travis
```

For IBM Power 8+ and/or ARM builds, add the name of your feedstock to the list [here](https://github.com/conda-forge/conda-forge-pinning-feedstock/blob/master/recipe/migrations/arch_rebuild.txt)
via a pull request.

<a id="github-actions"></a>

### GitHub Actions

We use GitHub actions to rerender feedstocks and also run our pull request automerge service. We do not currently support builds on
GitHub Actions.

<a id="automerge"></a>

<a id="id2"></a>

#### Automerge

The automerge service uses the GitHub action in this [repo](https://github.com/conda-forge/automerge-action). This action runs out of a
Docker [container](https://hub.docker.com/repository/docker/condaforge/automerge-action) on the `prod` tag. See the
repo [README.md](https://github.com/conda-forge/automerge-action#) for more details. PRs are automatically merged if they satisfy either
of the two following sets of conditions:

1. are from the `regro-cf-autotick-bot`, have `[bot-automerge]` in the title, all statuses are passing, and the feedstock allows automerge
2. have the `automerge` label and all statuses are passing.

For PRs from the `regro-cf-autotick-bot`, it can be useful to remove the `[bot-automerge]` slug from the PR title if you are making
edits to the PR.

<a id="rerendering"></a>

#### Rerendering

The rerendering service is triggered by the Heroku app. It uses the GitHub action in this [repo](https://github.com/conda-forge/webservices-dispatch-action).
This action runs out of a Docker [container](https://hub.docker.com/repository/docker/condaforge/webservices-dispatch-action) on the `prod` tag. See the
repo [README.md](https://github.com/conda-forge/webservices-dispatch-action) for more details.

<a id="skipping-ci-builds"></a>

### Skipping CI builds

To skip a CI build for a given commit, put `[ci skip] ***NO_CI***` in the commit message.

:::note[Related links]
- **Abort builds with [skip ci]/etc** [(conda-forge.github.io/#629)](https://github.com/conda-forge/conda-forge.github.io/issues/629)
- **Skip CI requests** [(staged-recipes/#1148)](https://github.com/conda-forge/staged-recipes/issues/1148)

:::

<a id="third-party-use-of-our-ci-services"></a>

### Third-party Use of Our CI Services

Due to its stature in the open-source community, conda-forge has enhanced access to certain CI services. This access is a community
resource entrusted to conda-forge for use in building packages. We thus cannot support third-party or "off-label" CI jobs in our
feedstocks on any of our CI services. If we find such use, we will politely ask the maintainers to rectify the situation. We may
take more serious actions, including archiving feedstocks or removing maintainers from the organization, if the situation cannot be rectified.

<a id="compilers-and-runtimes"></a>

## Compilers and Runtimes

conda-forge builds and maintains its own set of compilers for various languages
and/or systems (e.g., `C`, `FORTRAN`, `C++`, `CUDA`, etc.). These are used
in all of our CI builds to build both core dependencies (e.g., `Python`) and maintainer-contributed
packages. While we do not have any formal policies or promises of support for these
compilers, we have historically maintained them according to the following (non-binding)
principles.

* The authoritative source of the current compilers and versions for various languages
  and platforms is the [conda_build_config.yaml](https://github.com/conda-forge/conda-forge-pinning-feedstock/blob/master/recipe/conda_build_config.yaml)
  in the [conda-forge/conda-forge-pinning-feedstock](https://github.com/conda-forge/conda-forge-pinning-feedstock)
  as described in [Globally pinned packages](pinning_deps.md#globally-pinned-packages).
* We provide no support of any kind in terms of the long-term stability of these pinnings.
* We upgrade them in an ad-hoc manner on a periodic basis as we have the time and energy to do so.
  Note that because of the way we enforce runtime constraints, these compiler upgrades will not break
  existing packages. However, if you are using the compilers outside of `conda`, then you may find issues.
* We generally provide notice in the form of an announcement when a compiler is going to be upgraded.
  Note that these changes take a bit of time to complete, so you will generally have time
  to prepare should you need to.
* Some of the criteria we think about when considering a compiler migration include:
  - the degree of disruption to the ecosystem,
  - the amount of work for the `core` team,
  - the amount of time it will cost our (volunteer) feedstock maintainers.

We do use some unofficial names for our compiler stack internally. Note however that
the existence of these names does not imply any level of support or stability for the compilers
that form the given stack.

* Our current compiler stack is referred to internally as `comp7`.
* The previous compiler stack based in part on the various `toolchain_*` packages
  was sometimes referred to as `comp4`. On linux the `toolchain_*` compilers were
  GCC 4.8.2 as packaged in the devtoolset-2 software collection. On osx, we use clang from
  Apple's Xcode in the `toolchain_*` packages.

<a id="centos-sysroot-for-linux-platforms"></a>

### CentOS `sysroot` for `linux-*` Platforms

We currently repackage the `sysroot` from the appropriate version of CentOS for use
with our compilers. These `sysroot` files are available in the `sysroot_linux-*` packages.
These packages have version numbers that match the version of `glibc` they package. These
versions are `2.12` for CentOS 6 and `2.17` for CentOS 7.

For `gcc`/`gxx`/`gfortran` versions prior to `8.4.0` on `ppc64le` and `7.5.0`
on `aarch64`/`x86_64`, we had been building our own versions of `glibc`. This practice
is now deprecated in favor of the CentOS-based `sysroots`. Additionally, as of the same
compiler versions above, we have removed the `cos*` part of the `sysroot` path. The new
`sysroot` path has in it simply `conda` as opposed to `conda_cos6` or `conda_cos7`.

<a id="output-validation"></a>

<a id="output-validation-and-feedstock-tokens"></a>

## Output Validation and Feedstock Tokens

As of writing, `anaconda.org` does not support generating API tokens that are scoped
to allow uploads for some packages but not others. In order to secure feedstock uploads,
so that, e.g., the maintainers of the `numpy` feedstock cannot push a `python` package,
we use a package staging process and issue secret tokens, unique to each feedback. This process
works as follows.

1. When a CI job on a feedstock is building packages to be uploaded to `anaconda.org`, it
   first uploads them to a staging channel, `cf-staging`.
2. Then the feedback CI job makes an API call to our admin webservices server with its secret token
   and some information about the package it is trying to upload.
3. The webservices server validates the secret token, the integrity of the package, and
   that the package is allowed for the given feedstock.
4. If all of the validation passes, the package is then copied to the `conda-forge`
   channel.

We attempt to report errors in this process to users via comments on commits/issues in the feedstocks.
Note however that sometimes these fail. If you think you are having trouble with uploads, make
sure `conda_forge_output_validation: true` is set in your `conda-forge.yml` and rerender
your feedstock with the latest version of `conda-smithy`. Finally, new packages that are added to
feedstocks are registered automatically and once uploaded successfully, no other feedstock
will be able to upload packages with the same name.

Sometimes, however, it might make better sense to generate a package from a different
feedstock, say, due to package renaming or re-structuring. In this case, you may need
to add the new feedstock to the [feedstock-outputs](https://github.com/conda-forge/feedstock-outputs) map.
If this is not done, then the output validation process will block the package from being
uploaded from the new feedstock, by design.
Once this is done correctly and the package is uploaded,
you can then request the conda-forge core devs to archive the old feedstock.


<a id="package-building"></a>

## Package building

<!-- TODO: Discuss infrastructure elements first and link to them from the user/life-cycle document -->

1. Initial submission to `staged-recipes`
2. Feedstock changes:
   - A. Repository initialization
   - B. Automated maintenance updates
   - C. PRs submitted by users
3. Package building
4. Package validation and publication
5. Post-publication:
   - A. Repodata patch
   - B. Mark a package as broken
6. Feedstock operations
   - Archive a feedstock
   - Regenerate tokens

### 1. Initial submission to staged-recipes

The `conda-forge/staged-recipes` repository uses several pieces of infrastructure.

On pull requests:

- Package building pipelines. These are slightly different than the ones running in feedstocks (they are not automatically generated by `conda-smithy`, but they do use the same underlying components).
- The linter is provided by `conda-smithy recipe-lint`, run by `@conda-forge-linter`.
- Auto-labeling logic, run by Github Actions workflows.

On pushes to `main`:

- Create and initialize the new feedstocks.

Authenticated services involved:

- Github, with permissions for:
  - Repository creation
- Azure Pipelines
- Travis CI
- Other CI providers?

### 2. Feedstock changes

A feedstock can receive changes for several reasons.

Pushes to `main` or other branches:

- The automated initialization commits follow approval in `staged-recipes`. These are generated by `conda-smithy`.
- Automated maintenance commits triggered from `admin-migrations`.
- Rerender requests are handled by instances of `conda-forge/webservices-dispatch-action` and triggered by the admin web service.

Automatic pull requests can be opened by...

- `@conda-forge-linter`, responding to some issues with titles like `@conda-forge-admin, please...`.
- `@regro-cf-autotick-bot`, handling migrations and new versions being available.

...and closed by:

- `conda-forge/automerge-action`, if labeled adequately.

On an open pull request:

- The building pipelines (more [below](#package-building)).
- The linter is provided by `conda-smithy recipe-lint`, run by `@conda-forge-linter`.
- The `@conda-forge-admin, please...` command comments, answered by `@conda-forge-linter`.

On issues:

- `@conda-forge-admin, please...` command issues, handled by `@conda-forge-linter`.

:::tip
See [the Addendum below](#operations-on-feedstocks) for more information about operations on feedstocks.
These include operations on feedstock metadata and/or contents.
:::

### 3. Package building {#package-building}

The pipelines that build conda packages are used for both pull requests and push events in `main` and other branches. The only difference is that the packages built during a pull request are not uploaded to the staging channel. Maintaining these up-to-date across all feedstocks involves several repositories:

- `conda-smithy` is in charge of generating the CI pipelines themselves, together with the supporting scripts and configuration files. These pipelines and scripts can rely on code and data defined in the repositories below.
- `conda-forge-ci-setup-feedstock` provides the code needed to prepare and homogenize the CI runners across providers. It also does some checks before the artifacts are uploaded to `cf-staging`.
- `conda-forge-pinning-feedstock` defines which versions are supported for a number of runtimes and libraries, as well as the compilers used for certain languages and platforms.
- `docker-images` builds the standardized container images for Linux runners.
  This repository has additional authentication needs for Docker Hub, Quay.io.

The pipelines can run on several CI providers supported by `conda-smithy`, including:

- Azure DevOps Pipelines
- Drone.io
- Travis CI
- Circle CI

Registration of hooks and triggers is also done by the `conda-smithy` app.

:::tip
`conda-smithy` supports more CI providers. Check [the repo][conda-smithy] for more details.
:::

Authenticated services involved:

- Anaconda.org uploads to `cf-staging`

### 4. Package validation and publication

Once built on `main` (or other branches), the conda packages are uploaded to an intermediary channel named `cf-staging`.
From there, the packages are downloaded by the validation server and, if successful, copied over to `conda-forge` itself.

- The validation logic is defined at `conda-forge/artifact-validation`
- If problematic, the results of the validation are posted as issues in the same repo.
- This logic runs at `conda-forge/conda-forge-webservices`.
  This web app also copies the artifacts from `cf-staging` to `conda-forge`.
- Part of the validation includes checking for cross-package clobbering.
  The list of authorized feedstocks per package name is maintained at `conda-forge/feedstock-outputs`.
- Some further analysis might be performed _after_ publication.

Authenticated services involved:

- Anaconda.org uploads to `conda-forge`
- The `conda-forge-webservices` app deployment itself (currently at Heroku)
- (?) Post new issues to `conda-forge/artifact-validation`

### 5. Post-publication

Once uploaded to anaconda.org/conda-forge, packages are not immediately available to CLI clients.
They have to be replicated in the Content Distribution Network (CDN).
This step usually takes less than 15 minutes.

After CDN replication, most packages available on anaconda.org/conda-forge won't suffer any further modifications.
However, in some cases, maintainers might need to perform some actions on the published packages:

- A. Patching their repodata
- B. Marking them as broken

#### 5A. Repodata patch

The metadata for `conda` packages is initially contained in each package archive (under `info/`).
`conda index` iterates over the published `conda` packages, extracts the metadata and consolidates all the found JSON blobs into a single JSON file: `repodata.json`.
This is the metadata file that the CLI clients download initially to _solve_ the environment.

Since the metadata is external to the files, some details can be modified without rebuilding packages,
which simplifies some maintenance tasks notably.

<!-- FIXME: Confirm the accuracy of this paragraph -->

Repodata patches are created in `conda-forge/conda-forge-repodata-patches-feedstock`,
which generates (and uploads) a regular `conda` package as a result:
[`conda-forge-repodata-patches`](https://anaconda.org/conda-forge/conda-forge-repodata-patches/files).
Each of these timestamped packages contains the patch instructions for each channel subdir on conda-forge.
The Anaconda infrastructure takes the JSON files from these packages and applies them on top of the vanilla `repodata.json`.

Since this operates as a regular feedstock for package publication,
there are no further infrastructural details to cover.

#### 5B. Mark a package as broken

Sometimes a package is faulty in ways that a repodata patch cannot amend (e.g. bad binary).
In these cases, conda-forge does not remove packages from Anaconda.org.
Instead, it marks them with the `broken` label, which has a special meaning:
packages labeled as such will be removed from the repodata via automated patches.

The main repository handling this is `conda-forge/admin-requests`, which features different
Github Actions workflows running every 15 minutes.

For this task, the Github Action workflow needs access to:

- Anaconda.org, to add (or remove) labels
- Github, to modify and commit the input files after success
