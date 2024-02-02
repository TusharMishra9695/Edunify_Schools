import Link from "next/link";
import styles from "../page.module.css";
import { school_list } from "../utils/content";

export default function ShowSchools() {
  return (
    <div className={styles.school_list}>
      <div>
        <span>
          <Link href="/">Post Your School !</Link>
        </span>
        <label>Here Is The School List For You</label>
      </div>
      <div className={styles.outer_list}>
        {school_list.map((item, id) => {
          const { img, name, address, city } = item;
          return (
            <div className={styles.inner_list}>
              <img src={img} alt="school image" />
              <div className={styles.handle_text}>
                <p>{city}</p>
                <h3> {name}</h3>
                <p>{address}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
