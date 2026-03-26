import { get, getDatabase, ref } from "firebase/database";
import app from "../config";

export const requestTasks = async () => {
  try {
    const db = getDatabase(app);
    const dbRef = ref(db, "tasks");
    const snapshot = await get(dbRef);
    if(!snapshot.exists()) return []
    return Object.entries(snapshot.val()).map(([id, value]) => ({
      id,
      ...(value as { taskName: string }),
    }));
  } catch (error) {
    throw Error;
  }
};
