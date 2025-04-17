import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Helmet } from 'react-helmet-async';

const AddDoctor = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        specialty: "",
        experienceYears: "",
        education: "",
        ratings: "",
        availableTimes: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"],
        bio: "",
        contact: "",
        certificates: [{ title: "", date: "", organization: "" }],
        profileImage: ""
    };


    const validationSchema = Yup.object({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().required("Password is required"),
        specialty: Yup.string().required("Specialty is required"),
        experienceYears: Yup.number().required("Experience is required"),
        education: Yup.string().required("Education is required"),
        ratings: Yup.number(),
        availableTimes: Yup.array()
            .of(Yup.string().matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format"))
            .min(1, "At least one available time is required")
            .required("Available times are required"),
        bio: Yup.string(),
        contact: Yup.string(),
        certificates: Yup.array().of(
            Yup.object().shape({
                title: Yup.string().required("Certificate title is required"),
                date: Yup.string().required("Certificate date is required"),
                organization: Yup.string().required("Issuing organization is required"),
            })
        ),
        profileImage: Yup.string().url("Invalid URL")
    });

    const onSubmit = async (values) => {
        const token = localStorage.getItem("adminToken");
        console.log(values)

        if (token) {
            try {
                await axios.post("http://localhost:3000/admin/add-doctor/", values, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                alert("Doctor has been added successfully");
            } catch (error) {
                alert(
                    "Failed to add doctor: " + (error.response ? error.response.data.message : error.message)
                );
            }
        } else {
            alert("Not authorized");
        }
    };

    return (
        <div className="container mt-5" style={{ width: "500px", marginLeft: "200px", padding: "50px" }}>
            <Helmet>
                <title>
                    Add-Doctor
                </title>
            </Helmet>
            <h2>Add Doctor</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ values }) => (
                    <Form>
                        <div className="mb-3">
                            <label>Profile Image URL</label>
                            <Field type="text" className="form-control" name="profileImage" />
                        </div>

                        <div className="mb-3">
                            <label>First Name</label>
                            <Field type="text" className="form-control" name="firstName" />
                        </div>

                        <div className="mb-3">
                            <label>Last Name</label>
                            <Field type="text" className="form-control" name="lastName" />
                        </div>

                        <div className="mb-3">
                            <label>Email</label>
                            <Field type="email" className="form-control" name="email" />
                        </div>

                        <div className="mb-3">
                            <label>Password</label>
                            <Field type="password" className="form-control" name="password" />
                        </div>

                        <div className="mb-3">
                            <label>Specialty</label>
                            <Field type="text" className="form-control" name="specialty" />
                        </div>



                        <div className="mb-3">
                            <label>Experience Years</label>
                            <Field type="number" className="form-control" name="experienceYears" />
                        </div>

                        <div className="mb-3">
                            <label>Education</label>
                            <Field type="text" className="form-control" name="education" />
                        </div>

                        <div className="mb-3">
                            <label>Ratings</label>
                            <Field type="number" className="form-control" name="ratings" />
                        </div>

                        <FieldArray name="availableTimes">
                            {({ push, remove }) => (
                                <div>
                                    <label>Available Times</label>
                                    {values.availableTimes.map((time, index) => (
                                        <div key={index} className="d-flex mb-2">
                                            <Field
                                                type="time"
                                                className="form-control me-2"
                                                name={`availableTimes.${index}`}
                                            />
                                            <button type="button" className="btn btn-danger" onClick={() => remove(index)}>Remove</button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className="btn btn-success mt-2"
                                        onClick={() => push("")}
                                    >
                                        Add Time
                                    </button>
                                </div>
                            )}
                        </FieldArray>

                        <div className="mb-3">
                            <label>Bio</label>
                            <Field as="textarea" className="form-control" name="bio" />
                        </div>

                        <div className="mb-3">
                            <label>Contact</label>
                            <Field type="text" className="form-control" name="contact" />
                        </div>

                        <FieldArray name="certificates">
                            {({ push, remove }) => (
                                <div>
                                    <label>Certificates</label>
                                    {values.certificates.map((certificate, index) => (
                                        <div key={index} className="mb-3 border p-3 rounded">
                                            <label>Title</label>
                                            <Field
                                                type="text"
                                                className="form-control mb-2"
                                                name={`certificates.${index}.title`}
                                                placeholder="Enter Certificate Title"
                                            />

                                            <label>Date</label>
                                            <Field
                                                type="date"
                                                className="form-control mb-2"
                                                name={`certificates.${index}.date`}
                                            />

                                            <label>Organization</label>
                                            <Field
                                                type="text"
                                                className="form-control mb-2"
                                                name={`certificates.${index}.organization`}
                                                placeholder="Enter Issuing Organization"
                                            />

                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => remove(index)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}

                                    <button
                                        type="button"
                                        className="btn btn-success mt-2"
                                        onClick={() => push({ title: "", date: "", organization: "" })}
                                    >
                                        Add Certificate
                                    </button>
                                </div>
                            )}
                        </FieldArray>


                        <button type="submit" className="btn btn-primary mt-3">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddDoctor;
