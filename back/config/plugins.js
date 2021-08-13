module.exports = ({ env }) => {
    return {
      'zeasy-image-api': {
        providerOptions: {
          unsplash: {
            appName: env('UNSPLASH_APP_NAME'),
            accessKey: env('UNSPLASH_ACCESS_KEY'),
          },
          giphy: {
            accessKey: env('GIPHY_API_KEY'),
          },
        },
      },
      email: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.example.com'),
          port: env('SMTP_PORT', 587),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'hello@example.com',
          defaultReplyTo: 'hello@example.com',
        },
      },
    };
  };
  