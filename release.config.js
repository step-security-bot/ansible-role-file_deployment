module.exports = {
  branches: [
    {
      name: 'main',
      prerelease: false,
    },
    {
      name: 'beta',
      prerelease: true,
    },
    {
      name: 'alpha',
      prerelease: true,
    }
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/github',
      {
        "assignees": [
          "@sscheib"
        ],
        "discussionCategoryName": "Announcements"
      }
    ]
  ]
};
