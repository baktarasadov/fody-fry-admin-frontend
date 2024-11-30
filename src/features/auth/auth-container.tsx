import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { AUTH_ELEMENT } from "./component/element";
import { IFormLogin } from "./auth.type";
import { loginFormValidationSchema } from "./schema/auth-validation-schema";
import { useFormik } from "formik";

const AuthContainer = () => {
  const theme = useTheme();
  const { Title, SubTitle, Email, Password, LoginButton } = AUTH_ELEMENT;
  const providers = [{ id: "credentials", name: "Email and Password" }];

  const onSubmit = async (values: IFormLogin) => {};

  const formik = useFormik<IFormLogin>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormValidationSchema,
    onSubmit,
  });

  return (
    <>
      <div>
        <AppProvider theme={theme}>
          <SignInPage
            // signIn={formik.handleSubmit}
            onSubmit={formik.handleSubmit}
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

export default AuthContainer;
