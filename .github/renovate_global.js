module.exports = {
  secrets: {
    AUTOMATION_HUB_USERNAME: process.env.RENOVATE_AUTOMATION_HUB_USERNAME,
    AUTOMATION_HUB_PASSWORD: process.env.RENOVATE_AUTOMATION_HUB_PASSWORD,
  },
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
      username: '{{ secrets.AUTOMATION_HUB_USERNAME }}',
      password: '{{ secrets.AUTOMATION_HUB_PASSWORD }}',
    },
    {
      matchHost: 'https://console.redhat.com/api/automation-hub/content/validated/',
      username: '{{ secrets.AUTOMATION_HUB_USERNAME }}',
      password: '{{ secrets.AUTOMATION_HUB_PASSWORD }}',
    },
  ],
};
