import { getDatabase, ref, remove } from "firebase/database";
import app from "../config";

export const requestTaskDelete = async(id: string) => {
    const message = "task deleted succesfully";
    try {
      const db = getDatabase(app);
      const dbRef = ref(db, `tasks/${id}`)
      await remove(dbRef);
      return message;
    } catch (error) {
      throw Error;
    }
}