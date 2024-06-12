module.exports = {
  packageRules: [
    {
      matchDatasources: [
        'galaxy-collection',
      ],
      registryUrls: [
        'https://console.redhat.com/api/automation-hub/v3/plugin/ansible/content/published/',
        'https://console.redhat.com/api/automation-hub/v3/plugin/ansible/content/validated/',
        'https://galaxy.ansible.com',
      ]
    },
  ],
  hostRules: [
    {
      matchHost: 'https://console.redhat.com/api/automation-hub/v3/plugin/ansible/content/published/',
      username: process.env.RENOVATE_AUTOMATION_HUB_USERNAME,
      password: process.env.RENOVATE_AUTOMATION_HUB_PASSWORD,
    },
    {
      matchHost: 'https://console.redhat.com/api/automation-hub/v3/plugin/ansible/content/validated/',
      username: process.env.RENOVATE_AUTOMATION_HUB_USERNAME,
      password: process.env.RENOVATE_AUTOMATION_HUB_PASSWORD,
    },
  ],
};
