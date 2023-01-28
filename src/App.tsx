import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HOME_PATH, INDEX_PATH } from "constant/paths";
import Dashboard from "page/Dashboard";
import Home from "page/Home";
import ProtectedRoute from "page/ProtectedRoute";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH_DOMAIN}
        clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
        authorizationParams={{
          audience: process.env.REACT_APP_AUTH_AUDIENCE,
          redirect_uri: window.location.origin,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path={HOME_PATH} element={<Home />} />
            <Route path={INDEX_PATH} element={<ProtectedRoute />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Auth0Provider>
    </QueryClientProvider>
  );
};

export default App;
