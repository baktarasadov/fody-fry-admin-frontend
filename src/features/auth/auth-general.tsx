import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { AUTH_ELEMENT } from "./component/element";

const AuthGeneral = () => {
  const theme = useTheme();
  const { Title, SubTitle, Email, Password, LoginButton } = AUTH_ELEMENT;
  const providers = [{ id: "credentials", name: "Email and Password" }];

  return (
    <>
      <div>
        <AppProvider theme={theme}>
          <SignInPage
            signIn={(provider, formData) =>
              alert(
                `Logging in with "${provider.name}" and credentials: ${formData.get("email")}, ${formData.get("password")}`
              )
            }
            slots={{
              title: Title,
              subtitle: SubTitle,
              emailField: Email,
              passwordField: Password,
              submitButton: LoginButton,
            }}
            providers={providers}
          />
        </AppProvider>
      </div>
    </>
  );
};

export default AuthGeneral;
