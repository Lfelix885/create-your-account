export interface IUserAccount {
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  street: string;
  addressNumber: string;
  city: string;
  complement?: string;
  neighborhood: string;
}

export interface IAccountPackage {
  packageName: string;
  description: string;
  cards: string;
  id: string;
}

export interface ICreateAccount {
  user: IUserAccount;
  accountPackage: IAccountPackage;
}

export interface ICreateAccountResponse {
  '0': ICreateAccount;
  id: string;
}
