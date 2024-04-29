import { Redirect } from "react-router";

const RedirectLogin: React.FC = () => {
  return (
    <Redirect to="/login" />
  );
};

export default RedirectLogin;
