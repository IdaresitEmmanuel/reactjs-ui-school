import { Link } from "react-router-dom";
import styles from "./home.module.css";

interface Route {
  name: string;
  href: string;
}

const routes: Route[] = Array.from({ length: 8 }, (_, index) => ({
  name: (index + 1).toString(),
  href: `/p${index + 1}`,
}));

export default function Home() {
  return (
    <div className={styles.container}>
      {routes.map((route, index) => (
        <Link to={route.href} className={styles.item}>
          <div key={index} className={styles.item_title}>
            <div className={styles.item_title_box}>
              <p className={styles.index}>{route.name}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
