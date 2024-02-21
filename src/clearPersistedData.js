import { persistor } from "./store"; // Adjust the path accordingly

const clearPersistedData = async () => {
  try {
    await persistor.purge(); // This clears the persisted data in your Redux store
  } catch (error) {
    // console.error("Error clearing persisted data:", error);
  }
};

export default clearPersistedData;
