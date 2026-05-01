import { useNavigate } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";

import theme from "../../theme";
import maintenanceImage from "../../assets/image/maintainence.png";

import Button from "../../shared/components/Button";

function Maintenance() {
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
          src={maintenanceImage}
          alt="Under Maintenance"
          style={{
            width: "100%",
            height: "auto",
          }}
        />

        <h2
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: theme.colors.textPrimary,
          }}
        >
          We are Under Maintenance
        </h2>

        <p
          style={{
            margin: "0 0 28px",
            fontSize: "14px",
            color: theme.colors.textSecondary,
            lineHeight: "1.6",
            maxWidth: "360px",
          }}
        >
          Sorry for any inconvenience caused, we have almost done 
 Will get back soon!
        </p>

        <Button
          onClick={() => navigate("/dashboard")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 24px",
          }}
        >
          <FiArrowLeftCircle size={18} />
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
}

export default Maintenance;