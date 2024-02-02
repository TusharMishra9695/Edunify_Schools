"use client";
import styles from "./page.module.css";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import Select from "react-select";
import { options, facilities } from "./utils/content";
import { ErrorMessage } from "@hookform/error-message";

export default function Home() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.description}>
            <p>Enter Your School Data In The Given Form</p>
          </div>
          <div className={styles.detail}>
            <p>School Image</p>
            <input type="file" {...register("image", { required: true })} />
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
            <p>Contact Number</p>
            <input
              type="number"
              {...register("contact", {
                required: "This field is required*",
                maxLength: {
                  value: 10,
                  message: "Enter correct number",
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
          <div className={styles.detail} style={{ marginBottom: "15px" }}>
            <p>Type of School</p>
            <Controller
              name="options"
              control={control}
              render={({ field: { onChange } }) => (
                <Select
                  options={options}
                  onChange={(val) => onChange(val.value)}
                />
              )}
              rules={{ required: true }}
            />
            {errors.options && <span>This field is required*</span>}
          </div>
          <div className={styles.detail} style={{ marginBottom: "15px" }}>
            <p>Facilities and Amenities</p>
            <Controller
              name="facilities"
              control={control}
              render={({ field: { onChange } }) => (
                <Select
                  options={facilities}
                  isMulti
                  onChange={(val) => onChange(val)}
                />
              )}
              rules={{ required: true }}
            />
            {errors.facilities && <span>This field is required*</span>}
          </div>
          <div className={styles.detail}>
            <p>Tuition fees in (₹)</p>
            <input
              type="number"
              {...register("fees", {
                required: "This  is required.",
                maxLength: {
                  value: 8,
                  message: "Max upto 9cr allowed",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="fees"
              render={({ message }) => <span>{message}</span>}
            />
          </div>
          <div className={styles.detail}>
            <p>Social Media Links </p>
            <input
              type="text"
              {...register("social_links", {
                required: "This field is required*",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="social_links"
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
