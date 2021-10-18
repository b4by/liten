import { createContext, useContext } from "react";
import Game from "./game";
import Modal from "./modal";

class RootStore {
  constructor() {
    this.game = new Game(this);
    this.modal = new Modal(this);
  }
}

const storeContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const store = new RootStore();
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export const useStore = () => {
  const store = useContext(storeContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};
