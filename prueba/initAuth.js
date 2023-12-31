import { init } from "next-firebase-auth";

const initAuth = () => {
  init({
    authPageURL: "/auth",
    appPageURL: "/",
    loginAPIEndpoint: "/api/login",
    logoutAPIEndpoint: "/api/logout",
    onLoginRequestError: (err) => {
      console.error(err);
    },
    onLogoutRequestError: (err) => {
      console.error(err);
    },
    firebaseAdminInitConfig: {
      credential: {
        projectId: "next-auth-d6e19",
        clientEmail:
          "firebase-adminsdk-y72z2@next-auth-d6e19.iam.gserviceaccount.com",
        // The private key must not be accessible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
    },
    // Use application default credentials (takes precedence over firebaseAdminInitConfig if set)
    // useFirebaseAdminDefaultCredential: true,
    firebaseClientInitConfig: {
      apiKey: "AIzaSyCtXkxqrWQZaY1oye3ce8g9qsrdD1NcF2Y",
      authDomain: "next-auth-d6e19.firebaseapp.com",
      projectId: "next-auth-d6e19",
    },
    // tenantId: 'example-tenant-id', // Optional, only necessary in multi-tenant configuration
    cookies: {
      name: "prueba-app", // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err);
    },
    onTokenRefreshError: (err) => {
      console.error(err);
    },
  });
};

export default initAuth;
