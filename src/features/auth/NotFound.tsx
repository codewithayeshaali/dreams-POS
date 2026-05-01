import { useNavigate } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";

import theme from "../../theme";
import errorImage from "../../assets/image/error404.png";

import Button from "../../shared/components/Button";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: theme.colors.bgBody,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: "20px",
        boxSizing: "border-box",
        fontFamily: theme.typography.fontFamily.primary,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "675px",
          width: "100%",
        }}
      >
        <img
          src={errorImage}
          alt="404 Error"
          style={{
            width: "100%",
            maxWidth: "675px",
          }}
        />

        <h2
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: theme.colors.textPrimary,
          }}
        >
          Oops, something went wrong
        </h2>

        <p
          style={{
            margin: "0 0 28px",
            fontSize: "14px",
            color: theme.colors.textSecondary,
            lineHeight: "1.6",
            maxWidth: "340px",
          }}
        >
          Error 404 Page not found. Sorry the page you looking for doesn’t exist
          or has been moved{" "}
        </p>

        <Button onClick={() => navigate("/dashboard")} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", }} > <FiArrowLeftCircle size={18} /> Back to Dashboard </Button> </div>
    </div>
  );
}

export default NotFound;
