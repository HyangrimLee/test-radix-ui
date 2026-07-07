import styles from "./PageTitle.module.css";

interface PageTitleProps {
  title?: string;
  info?: string;
}

export default function PageTitle({ title, info }: PageTitleProps) {
  const isContainerEmpty = (!title || title.trim() === "") && (!info || info.trim() === "");

  return (
    <div className={`${styles.container} ${isContainerEmpty ? styles.containerEmpty : ""}`}>
      <div className={styles.content}>{title}</div>
      {info && <div className={styles.info}>{info}</div>}
    </div>
  )
}
