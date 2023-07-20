import { Amplify, I18n } from "aws-amplify";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator, translations } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import AwsConfig from "./auth/aws-config";
import AwsKrVoca from "./translations/aws-ko";

Amplify.configure(AwsConfig);
I18n.putVocabularies(translations);
I18n.setLanguage("ko");
I18n.putVocabulariesForLanguage("ko", AwsKrVoca);

export function App({ signOut, user }: WithAuthenticatorProps) {
  return (
    <div>
      <p>Welcome {user?.username}</p>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default withAuthenticator(App);
