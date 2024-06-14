module.exports = {
  secrets: {
    AUTOMATION_HUB_AUTH_TOKEN: process.env.RENOVATE_AUTOMATION_HUB_AUTH_TOKEN,
  },
  allowedHeaders: [
    'Authorization',
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
        Authorization: 'Bearer {{ secrets.AUTOMATION_HUB_AUTH_TOKEN }}',
      },
    },
    {
      matchHost: 'https://console.redhat.com/api/automation-hub/content/validated/',
      headers: {
        Authorization: 'Bearer {{ secrets.AUTOMATION_HUB_AUTH_TOKEN }}',
      },
    },
  ],
};
