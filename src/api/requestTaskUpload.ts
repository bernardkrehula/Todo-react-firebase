import { getDatabase, push, ref, set } from "firebase/database";
import app from "../config";

export const requestTaskUpload = (inputValue: string) => {
    const message = "data saved succesfully";
    try {
      const db = getDatabase(app);
      const newDocRef = push(ref(db, "tasks"));
      set(newDocRef, {
        taskName: inputValue,
      });
      return message;
    } catch (error) {
      throw Error;
    }
}