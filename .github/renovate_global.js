module.exports = {
  secrets: {
    AUTOMATION_HUB_TOKEN: process.env.RENOVATE_AUTOMATION_HUB_TOKEN,
  },
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
      token: process.env.RENOVATE_AUTOMATION_HUB_TOKEN,
    },
    {
      matchHost: 'https://console.redhat.com/api/automation-hub/content/validated/',
      token: process.env.RENOVATE_AUTOMATION_HUB_TOKEN,
    },
  ],
};
