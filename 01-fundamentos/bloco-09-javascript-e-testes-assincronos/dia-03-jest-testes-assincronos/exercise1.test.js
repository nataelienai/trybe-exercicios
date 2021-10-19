const fetch = require('node-fetch');
const url = 'https://api.github.com/orgs/tryber/repos';

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

describe('the getRepos function', () => {
  it('returns the repositories from the tryber organization', async () => {
    const repositories = await getRepos(url);

    expect(repositories).toContain('sd-01-week4-5-project-todo-list');
    expect(repositories).toContain('sd-01-week4-5-project-meme-generator');
  });
});
