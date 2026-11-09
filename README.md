# GitHub profile details (Node.js)

Small command-line script that looks up a GitHub username with the [GitHub REST API](https://docs.github.com/en/rest/users/users#get-a-user) and prints a few profile fields to the terminal.

## What it does

Given a GitHub username, the script:

1. Calls `GET https://api.github.com/users/{username}` with GitHub-recommended `Accept` and `User-Agent` headers (no API token required for public profiles).
2. If the user exists, prints:
   - Display name
   - Login
   - Profile URL
   - Public repository count
   - Follower count
3. If the user does not exist, prints an error and exits with code `1`.
4. On network or other failures, prints the error and exits with code `1`.
5. If no username is passed on the command line, prints an error and exits with code `1`.

## Requirements

- [Node.js](https://nodejs.org/) **18 or newer** (uses native `fetch` and ES modules with top-level `await`).

Check your version:

```bash
node -v
```

## Setup

No npm dependencies are required. From the project root:

```bash
npm install
```

This only validates `package.json`; there is nothing extra to download unless you add dependencies later.

## Usage

Pass the GitHub username as the first argument after the script (or after `--` when using npm):

```bash
node index.js octocat
```

or:

```bash
npm start -- octocat
```

Example output for a valid user:

```text
Name: The Octocat
Username: octocat
Profile: https://github.com/octocat
Public repos: 8
Followers: 10000
```

If you omit the username:

```bash
node index.js
```

```text
error: please provide a Github username
```

## API limits

Unauthenticated requests to the GitHub API are rate-limited (see [GitHub rate limits](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting)). For occasional CLI use this is usually enough.
