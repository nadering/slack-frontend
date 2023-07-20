import { useAuthenticator } from "@aws-amplify/ui-react";
import AuthView from "./auth/_auth-view";
import Workspace from "./components/workspace/_workspace";

export default function App() {
  const { route } = useAuthenticator(context => [context.route]);

  return (
    <div className="app" data-theme="light">
      { route === 'authenticated' ? <Workspace /> : <AuthView />}
    </div>
  );
}
