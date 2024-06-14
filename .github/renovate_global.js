module.exports = {
  secrets: {
    AUTOMATION_HUB_USERNAME: process.env.RENOVATE_AUTOMATION_HUB_USERNAME,
    AUTOMATION_HUB_PASSWORD: process.env.RENOVATE_AUTOMATION_HUB_PASSWORD,
    AUTOMATION_HUB_BEARER_TOKEN: process.env.RENOVATE_AUTOMATION_HUB_BEARER_TOKEN,
  },
  allowedHeaders: [
    '/Authorization:\\s+Bearer.+?/i',
  ],
  gitAuthor: 'Renovate <renovate@scheib.me>',
  packageRules: [
    {
      matchDatasources: [
        'galaxy-collection',
      ],
      registryUrls: [
        'https://console.redhat.com/api/automation-hub/content/published/',
        'https://console.redhat.com/api/automation-hub/content/validated/',
        'https://galaxy.ansible.com',
      ]
    },
  ],
  hostRules: [
    {
      matchHost: 'https://console.redhat.com/api/automation-hub/content/published/',
      headers: {
        Authorization: 'Bearer {{ secrets.AUTOMATION_HUB_BEARER_TOKEN }}',
      },
    },
    {
      matchHost: 'https://console.redhat.com/api/automation-hub/content/validated/',
      headers: {
        Authorization: 'Bearer {{ secrets.AUTOMATION_HUB_BEARER_TOKEN }}',
      },
    },
  ],
};
