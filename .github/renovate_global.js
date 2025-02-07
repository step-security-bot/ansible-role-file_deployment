module.exports = {
  secrets: {
    AUTOMATION_HUB_AUTH_TOKEN: process.env.RENOVATE_AUTOMATION_HUB_AUTH_TOKEN,
    CRC_USERNAME: process.env.RENOVATE_CRC_USERNAME,
    CRC_PASSWORD: process.env.RENOVATE_CRC_PASSWORD,
    GHCR_USERNAME: process.env.RENOVATE_GHCR_USERNAME,
    GHCR_TOKEN: process.env.RENOVATE_GHCR_TOKEN,
  },
  allowedHeaders: [
    'Authorization',
  ],
  gitAuthor: 'Renovate <renovate@scheib.me>',
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
    {
      matchHost: 'ghcr.io',
      username: '{{ secrets.GHCR_USERNAME }}',
      password: '{{ secrets.GHCR_TOKEN }}',
    },
  ],
};
