import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { Authenticator } from "@aws-amplify/ui-react";
import "@adorable.css"
import "./styles/globals.scss";
import "./styles/fonts.scss";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <Authenticator.Provider>
        <App />
      </Authenticator.Provider>
    </QueryClientProvider>
  </RecoilRoot>
);
