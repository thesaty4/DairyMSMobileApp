import {RadioItem} from '../../shared/components/view/RadioGroup';
import {UserType} from '../../shared/components/view/UserTypes';

export const userTypes: RadioItem[] = [
  {
    key: 'customer',
    label: 'Customer',
    value: UserType.customer,
    imgPath: require('../../../assets/icons/customers.png'),
  },
  {
    key: 'rider',
    label: 'Rider',
    value: UserType.rider,
    imgPath: require('../../../assets/icons/rider.png'),
  },
  {
    key: 'supplier',
    label: 'Supplier',
    value: UserType.supplier,
    imgPath: require('../../../assets/icons/supplier.png'),
  },
];

export const defaultForm = {
  email: '',
  name: '',
  password: '',
  confirmPass: '',
  userType: UserType.customer,
  mobile: '',
  gender: '',
  firstNameError: null,
  lastNameError: null,
  genderError: null,
  mobileError: null,
  emailError: null,
  passwordError: null,
  confirmPassError: null,
};
