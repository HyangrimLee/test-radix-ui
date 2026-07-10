import styles from "./OrderedList.module.css";
import { Link } from "react-router-dom";

interface OrderedListProps {   
    listStyle?: "decimal" | "bullet" | "none";
    items?: { 
        content: string; 
        url?: string; 
        target?: "_blank" | "_self" | "_parent" | "_top";
    }[];
}

export default function OrderedList(props: OrderedListProps) {
  return (
    <div className={styles.Wrapper}>
        {props.items?.map((item, index) => (
            <div key={index} className={styles.Item}>
                {props.listStyle === "decimal" && <span className={styles.Number}>{index + 1}.</span>}
                {props.listStyle === "bullet" && <span className={styles.Bullet}>•</span>}
                {item.url ? (
                    <Link to={item.url} target={item.target} className={styles.Link}>{item.content}</Link>
                ) : (
                    <span>{item.content}</span>
                )}  
            </div>
        ))}
    </div>
  )
}
