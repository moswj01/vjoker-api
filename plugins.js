module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('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'),
      },
      settings: {
        defaultFrom: 'wj.vchara@gmail.com',
        defaultReplyTo: 'wj.vchara@gmail.com',
        testAddress: 'wj.vchara@gmail.com',
      },
    },
    // ...
  });
  