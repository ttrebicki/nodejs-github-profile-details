import { argv } from 'process';

const username = argv[2];

const printError = (message) => {
    console.error(`error: ${message}`);
    process.exitCode = 1;
}

const printProfile = (data) => {
    console.log(`Name: ${data.name}`);
    console.log(`Username: ${data.login}`);
    console.log(`Profile: ${data.html_url}`);
    console.log(`Public repos: ${data.public_repos}`);
    console.log(`Followers: ${data.followers}`);
}

if (username) {
    try {
        const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, {
            headers: {
                'Accept': 'application/vnd.github+json',
                'User-Agent': 'nodejs-github-profile-details'
            }
        });
        const data = await response.json();

        if (data.message === 'Not Found') {
            printError(`Github user not found: ${username}`);
        } else {
            printProfile(data)
            process.exitCode = 0;
        }
    } catch (error) {
        printError(error);
    }
} else {
    printError('please provide a Github username');
}