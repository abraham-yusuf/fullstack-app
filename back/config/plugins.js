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
          host: env('SMTP_HOST', 'smtp.mailgun.org'),
          port: env('SMTP_PORT', 587),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: env('EMAIL_ADDRESS_FROM'),
          defaultReplyTo: env('EMAIL_ADDRESS_REPLY'),
        },
      },
      upload: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    };
  };
  