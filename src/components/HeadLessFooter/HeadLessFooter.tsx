import styles from "./HeadLessFooter.module.css";
import { Link } from "react-router-dom";

export default function HeadLessFooter() {
  return (
    <div className={styles.container}>
        <div className={styles.item}><Link className={styles.link} to="/">Home</Link></div>
        <div className={styles.item}><Link className={styles.link} to="/theme">Themes</Link></div>
        <div className={styles.item}><Link className={styles.link} to="/headless">Headless</Link></div>
    </div>
  )
}
