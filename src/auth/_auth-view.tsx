import { Amplify, I18n } from "aws-amplify";
import { Authenticator, translations } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import AwsConfig from "./settings/aws-config";
import AwsKoVocabularies from "./translations/aws-ko";

Amplify.configure(AwsConfig);
I18n.putVocabularies(translations);
I18n.setLanguage("ko");
I18n.putVocabulariesForLanguage("ko", AwsKoVocabularies);

export default function AuthView() {
  return (
    <Authenticator
      initialState="signIn"
      signUpAttributes={["email"]}
      socialProviders={["google"]}
      variation="modal"
      formFields={{
        signUp: {
          username: {
            order: 1,
          },
          email: {
            order: 2,
          },
          password: {
            order: 3,
          },
          confirm_password: {
            order: 4,
          },
        },
      }}
    >
    </Authenticator>
  );
}
