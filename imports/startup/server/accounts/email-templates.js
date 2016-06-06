import { Accounts } from 'meteor/accounts-base';

// TODO: put these in settings file
const name = 'AppV';
const supportEmail = 'admin@viriyaenergy.com';
const from = `${name} ${supportEmail}`;
const emailTemplates = Accounts.emailTemplates;

emailTemplates.siteName = name;
emailTemplates.from = from;

emailTemplates.resetPassword = {
  subject() {
    return `[${name}] Reset Your Password`;
  },
  text(user, url) {
    const userEmail = user.emails[0].address;
    const urlWithoutHash = url.replace('#/', '');

    return `A password reset has been requested for the account related to this
      address (${userEmail}). To reset the password, visit the following link:
      \n\n${urlWithoutHash}\n\n If you did not request this reset, please ignore
      this email. If you feel something is wrong, please contact our support team:
      ${supportEmail}.`;
  },
};

emailTemplates.verifyEmail = {
  subject() {
    return `[${name}] Verify Your Email Address`;
  },
  text(user, url) {
    const userEmail = user.emails[0].address;
    const urlWithoutHash = url.replace('#/', '');

    return `To verify your email address (${userEmail})
      visit the following link:\n\n${urlWithoutHash}\n\n If you did not request
      this verification, please ignore this email. If you feel something is
      wrong, please contact our support team: ${supportEmail}.`;
  },
};


// TODO: HTML emails
// meteorhacks:ssr or reactrouter:react-router-ssr (https://atmospherejs.com/reactrouter/react-router-ssr)
// SSR.compileTemplate( 'htmlEmail', Assets.getText( 'html-email.html' ) );
//
// var emailData = {
//   name: "Doug Funny",
//   favoriteRestaurant: "Honker Burger",
//   bestFriend: "Skeeter Valentine"
// };
//
// Email.send({
//   to: "to.address@email.com",
//   from: "from.address@email.com",
//   subject: "Example Email",
//   html: SSR.render( 'htmlEmail', emailData )
// });
