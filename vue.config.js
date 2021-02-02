module.exports = {
  pwa: {
    manifestOptions: {
      background_color: '#fafafa',
    },
    name: 'Custom Car',
    themeColor: '#1c6bba',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5,
          },
          urlPattern: '/json/data.json',
        },
      ],
    },
  },
};
