import { AppDispatch } from "..";
import { authentication, logInError } from "./userManager";

export interface UserAuthType {
  id: number;
  name: string;
  password: string;
}

export interface UserAuthListType {
  [name: string]: UserAuthType;
}

export const sigInAction =
  (login: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      const defaultErrorMessage = `User with name ${login} already exist`;
      dispatch(authentication());
      const response = await fetch(`http://localhost:3000/userlist`);
      const result = (await response.json()) as UserAuthListType;
      console.log(1);
      if (result[login]) dispatch(logInError(defaultErrorMessage));
      else {
        try {
          console.log(2);
          const newUser = JSON.stringify({
            [login]: {
              id: Date.now(),
              name: login,
              password,
            },
          });
          const registration = await fetch(`http://localhost:3000/userlist/`, {
            headers: {
              "Content-Type": "application/json",
            },
            method: "PATCH",
            body: newUser,
          });
        } catch {
          console.log(3);
          throw new Error();
        }
      }
    } catch {
      console.log(4);
      dispatch(
        logInError(
          "Oops... some kind of server problem, please try again later"
        )
      );
    }
  };
