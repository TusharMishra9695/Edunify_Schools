"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../page.module.css";
import axios from "axios";

export default function ShowSchools() {
  const [schoolList, setSchoolList] = useState("");
  useEffect(() => {
    if (!schoolList) {
      handleSchools();
    }
  }, []);
  function handleSchools() {
    axios
      .get("http://localhost:3000/api/show-school")
      .then((res) => {
        setSchoolList(res.data.result);
      })
      .catch((e) => {
        console.log(e, "some error occured");
      });
  }
  console.log("render");
  return (
    <div className={styles.school_list}>
      <div>
        <span>
          <Link href="/">Post Your School !</Link>
        </span>
        <label>Here Is The School List For You</label>
      </div>
      <div className={styles.outer_list}>
        {schoolList ? (
          schoolList.map((item, id) => {
            const { img, name, address, city } = item;
            return (
              <div className={styles.inner_list} key={id}>
                <img
                  src={
                    img ||
                    "https://previews.123rf.com/images/dualororua/dualororua1707/dualororua170700237/82718617-happy-school-children-in-front-of-school-building.jpg"
                  }
                  alt="school image"
                />
                <div className={styles.handle_text}>
                  <p>{city}</p>
                  <h3>
                    {name && name.length > 22
                      ? `${name.slice(0, 22)}...`
                      : name}
                  </h3>
                  <p>
                    {address && address.length > 22
                      ? `${address.slice(0, 22)}...`
                      : address}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h3>Loading School List ...</h3>
        )}
      </div>
    </div>
  );
}
