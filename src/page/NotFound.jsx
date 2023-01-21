import { ReactComponent as NotFundIllustration } from "assets/illustration/not-found.svg";
import Button from "component/button/Button";
import ThemeSwitch from "component/control/ThemeSwitch";
import styles from "page/NotFound.module.sass";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <div id={styles["not-found-page"]}>
      <div className={styles.control}>
        <ThemeSwitch className={styles.icon} />
      </div>
      <div className={styles["horizontal-stack"]}>
        <div>
          <h3>Not Found</h3>
          <h1>404</h1>
          <Button
            icon="home"
            onClick={navigateHome}
            color="var(--error)"
            onColor="var(--on-error)"
          >
            home
          </Button>
        </div>
        <div>
          <NotFundIllustration
            id={styles["not-found-illustration"]}
            height="40vh"
          />
        </div>
      </div>
    </div>
  );
}