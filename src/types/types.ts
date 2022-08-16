export type HelpMessageParamType = {
  processName: "Log in" | "Sign up";
};

export interface AuthButtonParamType extends HelpMessageParamType {
  name: string;
  password: string;
};

export interface InputPasswordParamType {
  password: string;
  setPassword: (password: React.SetStateAction<string>) => void;
};

export type ErrorAlertParamType = {
  error: string;
};

export interface InputNameParamType {
  name: string;
  setName: (name: React.SetStateAction<string>) => void;
};

export interface UserAuthType {
  id: number;
  name: string;
  password: string;
};

export interface UserAuthListType {
  [name: string]: UserAuthType;
};

export interface UserType {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
};

export interface AuthManagerStateType {
  isLoading: boolean;
  isAuth: boolean;
  error: string;
  currentUser: string
};

export interface ContactType {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
};

export interface ContactsListManagerStateType {
  contacts: ContactType[]
};

export interface FilterType {
  field: "name" | "phoneNumber" | "email";
  filtredContacts: ContactType[];
};;

export type ClientsListParamType = {
  contacts: ContactType[];
};

export type ContactChangeFormParamType = {
  id: number
}