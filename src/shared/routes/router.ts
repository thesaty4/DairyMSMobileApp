export type AllRoutes =
  | 'home'
  | 'login'
  | 'signUp'
  | 'forgotPassword'
  | 'rider'
  | 'supplier'
  | 'customer';
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
  customer: {
    label: 'Customer',
    route: 'customer',
  },
  rider: {
    label: 'Rider',
    route: 'rider',
  },
  supplier: {
    label: 'Supplier',
    route: 'supplier',
  },
};

export type Routes = {
  label: string;
  route: string;
};
