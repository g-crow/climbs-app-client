const dev = {
  STRIPE_KEY: "pk_test_bkilKUbMjA4atuJiJJVhO0NB00QOQILxtX",
  s3: {
    REGION: "us-east-2",
    BUCKET: "climbs-app-api-dev-serverlessdeploymentbucket-g2gqakv2up2"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://ah9guh2gqh.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_2i03sIrqA",
    APP_CLIENT_ID: "urmokuer3dvj8ib5ofuksinoj",
    IDENTITY_POOL_ID: "us-east-2:fc968b25-949e-487b-9737-e1fe51b9eb40"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_bkilKUbMjA4atuJiJJVhO0NB00QOQILxtX",
  s3: {
    REGION: "us-east-2",
    BUCKET: "climbs-app-api-prod-serverlessdeploymentbucket-pwkk9nd7pmje"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://4m9akrmuag.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_kcfvqX0FB",
    APP_CLIENT_ID: "mj398m0mel5pr681s4n903dlk",
    IDENTITY_POOL_ID: "us-east-2:c1fc1286-3d9e-4593-b0cd-5ffdbc0505b3"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
