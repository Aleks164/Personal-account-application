import { AppDispatch } from "..";
import {
  addUser,
  deleteUser,
  authentication,
  logInSucsess,
  logInError,
  logOut,
} from "./userManager";

export interface UserAuthType {
  id: number;
  name: string;
  password: string;
}

export interface UserAuthListType {
  [name: string]: UserAuthType;
}

//Content-Type: application/json
export const logInAction =
  (login: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      const defaultErrorMessage = `User with name ${login} is not registered`;
      const wrongPasswordMessage = `You entered an invalid password`;
      dispatch(authentication());
      const response = await fetch(`http://localhost:3000/userlist`);
      let result = (await response.json()) as UserAuthListType;
      console.log(result);
      if (result[login]) {
        if (result[login].password === password) dispatch(logInSucsess());
        else dispatch(logInError(wrongPasswordMessage));
      } else dispatch(logInError(defaultErrorMessage));
    } catch {
      dispatch(
        logInError(
          "Oops... some kind of server problem, please try again later"
        )
      );
    }
  };
