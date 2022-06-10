import { useAuth0 } from "@auth0/auth0-react";
import Button from "component/button/Button";
import FlexibleContent from "component/layout/FlexibleContent";
import styles from "page/HomePage.module.sass";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div id={styles.layout}>
      <LoginSidePanel />
      <FlexibleContent>Content</FlexibleContent>
    </div>
  );
}

function LoginSidePanel() {
  const { loginWithRedirect } = useAuth0();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id={styles["login-side-panel"]}
    >
      <h1>to-do</h1>
      <div>
        Create your own tasks, organize them into lists and don’t forget to
        finish them ever again.
      </div>
      <Button onClick={loginWithRedirect}>Login</Button>
    </motion.div>
  );
}