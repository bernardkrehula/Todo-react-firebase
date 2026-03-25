import { get, getDatabase, ref } from "firebase/database";
import app from "../config";

export const requestTasks = async () => {
  try {
    const db = getDatabase(app);
    const dbRef = ref(db, "tasks");
    const snapshot = await get(dbRef);
    return Object.values(snapshot.val());
  } catch (error) {
    throw Error;
  }
};
