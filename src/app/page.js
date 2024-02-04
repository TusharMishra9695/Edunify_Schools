"use client";
import styles from "./page.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";

export default function Home() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  async function onSubmit(item) {
    let formData = { ...item, image: item.image[0].name };
    // const options = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // };

    // const result = await fetch("api/add-school", options)
    //   .then((res) => {
    //     console.log(res, "res");
    //     if (res.ok) {
    //       alert("School Registered Successfully !");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
    // console.log(result, "reulshdijh");
    axios
      .post("api/add-school", formData)
      .then((res) => {
        if (res.data.success) {
          alert("School Registered Successfully !");
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }
  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.description}>
            <p>Enter Your School Data In The Given Form</p>
          </div>
          <div className={styles.detail}>
            <p>School Image</p>
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: true })}
            />
            {errors.image && <span>This field is required*</span>}
          </div>
          <div className={styles.detail}>
            <p>School Name</p>
            <input
              type="text"
              {...register("name", {
                required: "This field is required*",
                maxLength: {
                  value: 30,
                  message: "Max 30 words allowed",
                },
                minLength: {
                  value: 2,
                  message: "Enter correct name ",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => <span>{message}</span>}
            />
          </div>
          <div className={styles.detail}>
            <p>School Address</p>
            <input
              type="text"
              {...register("address", {
                required: "This field is required*",
                maxLength: {
                  value: 40,
                  message: "Max 40 words allowed",
                },
                minLength: {
                  value: 10,
                  message: "Enter correct address",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="address"
              render={({ message }) => <span>{message}</span>}
            />
          </div>{" "}
          <div className={styles.detail}>
            <p>City</p>
            <input
              type="text"
              {...register("city", {
                required: "This field is required*",
                maxLength: {
                  value: 20,
                  message: "Max 20 words allowed",
                },
                minLength: {
                  value: 3,
                  message: "Enter correct city!",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="city"
              render={({ message }) => <span>{message}</span>}
            />
          </div>{" "}
          <div className={styles.detail}>
            <p>State </p>
            <input
              type="text"
              {...register("state", {
                required: "This field is required*",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="state"
              render={({ message }) => <span>{message}</span>}
            />
          </div>
          <div className={styles.detail}>
            <p>Contact Number</p>
            <input
              type="number"
              {...register("contact", {
                required: "This field is required*",
                maxLength: {
                  value: 10,
                  message: "Max 10 numbers allowed ",
                },
                minLength: {
                  value: 10,
                  message: "Enter correct number",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="contact"
              render={({ message }) => <span>{message}</span>}
            />
          </div>
          <div className={styles.detail}>
            <p>Email</p>
            <input
              type="email"
              {...register("email", {
                required: "This field is required*",
                maxLength: {
                  value: 35,
                  message: "Max 35 word allowed",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <span>{message}</span>}
            />
          </div>
          <input type="submit" className={styles.input_submit} />
        </form>
      </div>
      <div>
        <Link href="/showSchools">
          <p className={styles.checkout}>Check Out School List</p>
        </Link>
      </div>
    </main>
  );
}
