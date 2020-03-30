import React from "react";
import Dashboard from "./components/dashboard/Dashboard";

// redux imports
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Error boundary
import ErrorBoundary from "./ErrorBoundary";

const App = props => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ErrorBoundary>
          <Dashboard />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
};

export default App;
