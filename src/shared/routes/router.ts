export type AllRoutes = 'home' | 'login' | 'signUp' | 'forgotPassword';
export const router: Record<AllRoutes, Routes> = {
  home: {
    label: 'Home',
    route: '/',
  },
  login: {
    label: 'Login',
    route: 'login',
  },
  signUp: {
    label: 'SignUp',
    route: 'signup',
  },
  forgotPassword: {
    label: 'Forgot Password',
    route: 'forgot-password',
  },
};

export type Routes = {
  label: string;
  route: string;
};
