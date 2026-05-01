import { useState, useEffect } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaLinkedin,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Button from "../../shared/components/Button";
import logo from "../../assets/image/logo2.png";
import bg from "../../assets/image/ComingSoon.jpg";
import theme from "../../theme";

const TARGET = new Date();
TARGET.setDate(TARGET.getDate() + 54);
TARGET.setHours(TARGET.getHours() + 10);
TARGET.setMinutes(TARGET.getMinutes() + 47);

interface TimeLeft {
  days: number;
  hrs: number;
  min: number;
  sec: number;
}

function useCountdown(target: Date): TimeLeft {
  const calc = (): TimeLeft => {
    const diff = Math.max(0, target.getTime() - Date.now());
    const s = Math.floor(diff / 1000);
    return {
      days: Math.floor(s / 86400),
      hrs: Math.floor((s % 86400) / 3600),
      min: Math.floor((s % 3600) / 60),
      sec: s % 60,
    };
  };
  const [left, setLeft] = useState<TimeLeft>(calc);
  useEffect(() => {
    const id = setInterval(() => setLeft(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return left;
}

function CountUnit({ value, label }: { value: number; label: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
      }}
    >
      <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "clamp(52px, 10vw, 72px)",
    height: "clamp(52px, 10vw, 72px)",
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: "5px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  }}
>
  <span
    style={{
      fontFamily: theme.typography.fontFamily.primary,
      fontSize: "clamp(20px, 4vw, 32px)",
      fontWeight: 700,
      color: theme.colors.secondary,
      lineHeight: 1,
    }}
  >
    {String(value).padStart(2, "0")}
  </span>
</div>

  
     <span
  style={{
    fontFamily: theme.typography.fontFamily.primary,
    fontSize: "clamp(9px, 1.5vw, 11px)",
    fontWeight: 400,
    color: theme.colors.secondary,
    letterSpacing: "0.4px",
  }}
>
  {label}
</span>
    </div>
  );
}
function Sep() {
  return (
    <span
      style={{
        fontFamily: theme.typography.fontFamily.primary,
        fontSize: "clamp(18px, 3.5vw, 28px)",
        fontWeight: 700,
        color: theme.colors.secondary,
        lineHeight: 1,
        marginTop: "clamp(14px, 2.8vw, 22px)",
        alignSelf: "flex-start",
      }}
    >
      :
    </span>
  );
}

function SocialIcon({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "32px",
        height: "32px",
        borderRadius: "6px",
        backgroundColor: theme.colors.secondary,
        color: "#ffffff",
        textDecoration: "none",
        transition: "opacity 0.2s",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {children}
    </a>
  );
}
export default function ComingSoon() {
  const { days, hrs, min, sec } = useCountdown(TARGET);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px 16px",
        boxSizing: "border-box",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >

      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.38)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "700px",
          backgroundColor: "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRadius: "10px",
          boxShadow: "0 8px 48px rgba(0, 0, 0, 0.22)",
          padding: "30px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          textAlign: "center",
        }}
      >
        <img
          src={logo}
          alt="DreamsPOS"
          style={{
            height: "70px",
            width: "auto",
            objectFit: "contain",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: theme.typography.fontFamily.primary,
              fontSize: "20px",
              fontWeight: 600,
              color: theme.colors.textSecondary,
            }}
          >
            Our Website is
          </p>

          <h1
            style={{
              margin: 0,
              fontFamily: theme.typography.fontFamily.primary,
              fontSize: "45px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
            }}
          >
            <span style={{ color: theme.colors.primary }}>COMING </span>
            <span style={{ color: theme.colors.secondary }}>SOON</span>
          </h1>

          <p
            style={{
              margin: 0,
              fontFamily: theme.typography.fontFamily.primary,
              fontSize: "13px",
              color: theme.colors.textSecondary,
              lineHeight: 1.65,
              maxWidth: "300px",
            }}
          >
            Please check back later. We are working hard to get everything just
            right.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "5px",
            color:theme.colors.secondary
          }}
        >
          <CountUnit value={days} label="Days" />
          <Sep />
          <CountUnit value={hrs} label="Hrs" />
          <Sep />
          <CountUnit value={min} label="Min" />
          <Sep />
          <CountUnit value={sec} label="Sec" />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: theme.typography.fontFamily.primary,
              fontSize: "13px",
              fontWeight: 600,
              color: theme.colors.textPrimary,
            }}
          >
            Subscribe to get notified!
          </p>

          {subscribed ? (
            <div
              style={{
                width: "100%",
                padding: "12px 16px",
                backgroundColor: "#EAFBF1",
                borderRadius: "8px",
                color: "#16a34a",
                fontFamily: theme.typography.fontFamily.primary,
                fontSize: "14px",
                fontWeight: 500,
                boxSizing: "border-box",
                textAlign: "center",
              }}
            >
              🎉 You're on the list! We'll notify you when we launch.
            </div>
          ) : (
            <div style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  border: `1px solid ${
                    error ? theme.colors.error : theme.colors.border
                  }`,
                  borderRadius: "5px",
                  backgroundColor: theme.colors.white,
                  boxSizing: "border-box",
                  padding: "8px 8px 8px 14px",
                }}
              >
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    fontFamily: theme.typography.fontFamily.primary,
                    fontSize: "14px",
                    color: theme.colors.textPrimary,
                    backgroundColor: "transparent",
                    minWidth: 0,
                  }}
                />
                <Button
                  size="md"
                  onClick={handleSubscribe}
                  style={{
                    borderRadius: "5px",
                    border: "none",
                    padding: "0 20px",
                    flexShrink: 0,
                    minHeight: "38px",
                  }}
                >
                  Subscribe
                </Button>
              </div>

              {error && (
                <p
                  style={{
                    margin: "6px 0 0",
                    fontFamily: theme.typography.fontFamily.primary,
                    fontSize: "12px",
                    color: theme.colors.error,
                    textAlign: "left",
                  }}
                >
                  {error}
                </p>
              )}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
            <SocialIcon href="https://facebook.com"><FaFacebookF size={16} /></SocialIcon>
            <SocialIcon href="https://www.instagram.com/"><FaInstagram size={16} /></SocialIcon>
            <SocialIcon href="https://www.twitter.com/"><FaTwitter size={16} /></SocialIcon>
            <SocialIcon href="https://www.pinterest.com/"><FaPinterestP size={16} /></SocialIcon>
            <SocialIcon href="https://www.linkedin.com/"><FaLinkedin size={16} /></SocialIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
         