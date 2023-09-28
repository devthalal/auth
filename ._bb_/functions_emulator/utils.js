import path from "path";

const getBlock = (url) => {
  const blocks = {
  "auth_be_login": {
    "name": "auth_be_login",
    "type": "function",
    "directory": "/app/preview/auth_be_login",
    "middlewares": [],
    "relativeDirectory": "auth_be_login"
  },
  "auth_be_reset_password": {
    "name": "auth_be_reset_password",
    "type": "function",
    "directory": "/app/preview/auth_be_reset_password",
    "middlewares": [],
    "relativeDirectory": "auth_be_reset_password"
  },
  "auth_be_verify_email": {
    "name": "auth_be_verify_email",
    "type": "function",
    "directory": "/app/preview/auth_be_verify_email",
    "middlewares": [],
    "relativeDirectory": "auth_be_verify_email"
  },
  "auth_be_send_otp_for_verification": {
    "name": "auth_be_send_otp_for_verification",
    "type": "function",
    "directory": "/app/preview/auth_be_send_otp_for_verification",
    "middlewares": [],
    "relativeDirectory": "auth_be_send_otp_for_verification"
  },
  "auth_be_verify_otp": {
    "name": "auth_be_verify_otp",
    "type": "function",
    "directory": "/app/preview/auth_be_verify_otp",
    "middlewares": [],
    "relativeDirectory": "auth_be_verify_otp"
  },
  "auth_be_forgot_password": {
    "name": "auth_be_forgot_password",
    "type": "function",
    "directory": "/app/preview/auth_be_forgot_password",
    "middlewares": [],
    "relativeDirectory": "auth_be_forgot_password"
  },
  "auth_be_signup": {
    "name": "auth_be_signup",
    "type": "function",
    "directory": "/app/preview/auth_be_signup",
    "middlewares": [],
    "relativeDirectory": "auth_be_signup"
  },
  "auth_be_resend_email_otp": {
    "name": "auth_be_resend_email_otp",
    "type": "function",
    "directory": "/app/preview/auth_be_resend_email_otp",
    "middlewares": [],
    "relativeDirectory": "auth_be_resend_email_otp"
  }
};

  const block = blocks[url];
  const route = block && path.join(block.directory, "index.js");

  return { route, block };
};

const getFunctionEntryPaths=()=>{
  const blocks = {
  "auth_be_login": {
    "name": "auth_be_login",
    "type": "function",
    "directory": "/app/preview/auth_be_login",
    "middlewares": [],
    "relativeDirectory": "auth_be_login"
  },
  "auth_be_reset_password": {
    "name": "auth_be_reset_password",
    "type": "function",
    "directory": "/app/preview/auth_be_reset_password",
    "middlewares": [],
    "relativeDirectory": "auth_be_reset_password"
  },
  "auth_be_verify_email": {
    "name": "auth_be_verify_email",
    "type": "function",
    "directory": "/app/preview/auth_be_verify_email",
    "middlewares": [],
    "relativeDirectory": "auth_be_verify_email"
  },
  "auth_be_send_otp_for_verification": {
    "name": "auth_be_send_otp_for_verification",
    "type": "function",
    "directory": "/app/preview/auth_be_send_otp_for_verification",
    "middlewares": [],
    "relativeDirectory": "auth_be_send_otp_for_verification"
  },
  "auth_be_verify_otp": {
    "name": "auth_be_verify_otp",
    "type": "function",
    "directory": "/app/preview/auth_be_verify_otp",
    "middlewares": [],
    "relativeDirectory": "auth_be_verify_otp"
  },
  "auth_be_forgot_password": {
    "name": "auth_be_forgot_password",
    "type": "function",
    "directory": "/app/preview/auth_be_forgot_password",
    "middlewares": [],
    "relativeDirectory": "auth_be_forgot_password"
  },
  "auth_be_signup": {
    "name": "auth_be_signup",
    "type": "function",
    "directory": "/app/preview/auth_be_signup",
    "middlewares": [],
    "relativeDirectory": "auth_be_signup"
  },
  "auth_be_resend_email_otp": {
    "name": "auth_be_resend_email_otp",
    "type": "function",
    "directory": "/app/preview/auth_be_resend_email_otp",
    "middlewares": [],
    "relativeDirectory": "auth_be_resend_email_otp"
  }
};
  const functionEntryPaths=Object.keys(blocks).map(blockName=>{
    const block=blocks[""+blockName]
   return path.join(block["directory"], "index.js")})

  
  return functionEntryPaths
}



const getMiddlewareBlock = (url) => {
  const blocks = {};

  const block = blocks[url];
  const route = block && path.join(block.directory, "index.js");

  return { route, block };
};

export { getBlock, getMiddlewareBlock,getFunctionEntryPaths };