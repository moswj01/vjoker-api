module.exports = ({ env }) => ({


    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1339),
    app: {
      keys: env.array('APP_KEYS'),
    },

    emitErrors: false,

     //url: env('PUBLIC_URL', 'https://seal-app-hjtag.ondigitalocean.app'),

  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
