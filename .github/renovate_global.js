module.exports = {
  secrets: {
    AUTOMATION_HUB_AUTH_TOKEN: process.env.RENOVATE_AUTOMATION_HUB_AUTH_TOKEN,
    CRC_USERNAME: process.env.RENOVATE_CRC_USERNAME,
    CRC_PASSWORD: process.env.RENOVATE_CRC_PASSWORD,
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
      ],
    },
    {
      matchDatasources: [
        'docker',
      ],
      registryUrls: [
        'docker.io',
        'ghrc.io',
        'registry.redhat.io',
      ],
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
    {
      matchHost: 'registry.redhat.io',
      username: '{{ secrets.CRC_USERNAME }}',
      password: '{{ secrets.CRC_PASSWORD }}',
    },
  ],
};
