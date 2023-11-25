import { User } from "../types/user"
import firebase from "../utils/firebase";
import { Actions, SomeActions } from "../types/store";


export const saveUserinDB = async (users: User): Promise<Actions> => {
    await firebase.saveUserinDB(users)
    return{
        action: SomeActions.SAVE_USER ,
        payload: users,
    }
}