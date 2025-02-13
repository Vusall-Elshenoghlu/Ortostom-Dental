import React from 'react';
import { useFormik, FieldArray } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddDoctor = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            specialty: '',
            profileImage: '',
            experienceYears: '',
            education: '',
            ratings: '',
            certificates: [{ title: '', date: '', organization: '' }],
            availableTimes: '',
            bio: '',
            contact: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
            specialty: Yup.string().required('Required'),
            experienceYears: Yup.number().required('Required'),
            certificates: Yup.array().of(
                Yup.object({
                    title: Yup.string().required('Required'),
                    date: Yup.date().required('Required'),
                    organization: Yup.string().required('Required')
                })
            ),
            availableTimes: Yup.string().required('Required'),
            bio: Yup.string(),
            contact: Yup.string()
        }),
        onSubmit: values => {
            axios.post("http://localhost:3000/admin/add-doctor/",values)
            .then(() => {
                alert("Doctor has added successfully");
              })
              .catch(() => alert("Added failed"));
        }
    });

    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ height: '90vh' }}>
            <form className="row g-3 w-100" onSubmit={formik.handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className={`form-control ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : ''}`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="invalid-feedback">{formik.errors.firstName}</div>
                    ) : null}
                </div>

                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className={`form-control ${formik.touched.lastName && formik.errors.lastName ? 'is-invalid' : ''}`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="invalid-feedback">{formik.errors.lastName}</div>
                    ) : null}
                </div>

                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="invalid-feedback">{formik.errors.email}</div>
                    ) : null}
                </div>

                <div className="col-md-6">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className="invalid-feedback">{formik.errors.password}</div>
                    ) : null}
                </div>

                <div className="col-md-6">
                    <label htmlFor="specialty" className="form-label">Specialty</label>
                    <input
                        id="specialty"
                        name="specialty"
                        type="text"
                        className={`form-control ${formik.touched.specialty && formik.errors.specialty ? 'is-invalid' : ''}`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.specialty}
                    />
                    {formik.touched.specialty && formik.errors.specialty ? (
                        <div className="invalid-feedback">{formik.errors.specialty}</div>
                    ) : null}
                </div>

                <div className="col-md-6">
                    <label htmlFor="experienceYears" className="form-label">Experience Years</label>
                    <input
                        id="experienceYears"
                        name="experienceYears"
                        type="number"
                        className={`form-control ${formik.touched.experienceYears && formik.errors.experienceYears ? 'is-invalid' : ''}`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.experienceYears}
                    />
                    {formik.touched.experienceYears && formik.errors.experienceYears ? (
                        <div className="invalid-feedback">{formik.errors.experienceYears}</div>
                    ) : null}
                </div>

                <div className="col-md-6">
                    <label htmlFor="education" className="form-label">Education</label>
                    <input
                        id="education"
                        name="education"
                        type="text"
                        className={`form-control ${formik.touched.education && formik.errors.education ? 'is-invalid' : ''}`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.education}
                    />
                    {formik.touched.education && formik.errors.education ? (
                        <div className="invalid-feedback">{formik.errors.education}</div>
                    ) : null}
                </div>

                <div className="col-md-6">
                    <label htmlFor="bio" className="form-label">Bio</label>
                    <textarea
                        id="bio"
                        name="bio"
                        className={`form-control ${formik.touched.bio && formik.errors.bio ? 'is-invalid' : ''}`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.bio}
                    />
                    {formik.touched.bio && formik.errors.bio ? (
                        <div className="invalid-feedback">{formik.errors.bio}</div>
                    ) : null}
                </div>

                <div className="col-md-6">
                    <label htmlFor="contact" className="form-label">Contact</label>
                    <input
                        id="contact"
                        name="contact"
                        type="text"
                        className={`form-control ${formik.touched.contact && formik.errors.contact ? 'is-invalid' : ''}`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contact}
                    />
                    {formik.touched.contact && formik.errors.contact ? (
                        <div className="invalid-feedback">{formik.errors.contact}</div>
                    ) : null}
                </div>

                <div className="col-12">
                    <label htmlFor="certificates" className="form-label">Certificates</label>
                    <FieldArray
                        name="certificates"
                        render={arrayHelpers => (
                            <div>
                                {formik.values.certificates.map((certificate, index) => (
                                    <div key={index} className="row g-3">
                                        <div className="col-md-4">
                                            <input
                                                name={`certificates.${index}.title`}
                                                type="text"
                                                className={`form-control ${formik.touched.certificates?.[index]?.title && formik.errors.certificates?.[index]?.title ? 'is-invalid' : ''}`}
                                                placeholder="Certificate Title"
                                                value={certificate.title}
                                                onChange={formik.handleChange}
                                            />
                                            {formik.touched.certificates?.[index]?.title && formik.errors.certificates?.[index]?.title && (
                                                <div className="invalid-feedback">{formik.errors.certificates[index].title}</div>
                                            )}
                                        </div>
                                        <div className="col-md-4">
                                            <input
                                                name={`certificates.${index}.date`}
                                                type="date"
                                                className={`form-control ${formik.touched.certificates?.[index]?.date && formik.errors.certificates?.[index]?.date ? 'is-invalid' : ''}`}
                                                value={certificate.date}
                                                onChange={formik.handleChange}
                                            />
                                            {formik.touched.certificates?.[index]?.date && formik.errors.certificates?.[index]?.date && (
                                                <div className="invalid-feedback">{formik.errors.certificates[index].date}</div>
                                            )}
                                        </div>
                                        <div className="col-md-4">
                                            <input
                                                name={`certificates.${index}.organization`} 
                                                type="text"
                                                className={`form-control ${formik.touched.certificates?.[index]?.organization && formik.errors.certificates?.[index]?.organization ? 'is-invalid' : ''}`}
                                                placeholder="Organization"
                                                value={certificate.organization}
                                                onChange={formik.handleChange}
                                            />
                                            {formik.touched.certificates?.[index]?.organization && formik.errors.certificates?.[index]?.organization && (
                                                <div className="invalid-feedback">{formik.errors.certificates[index].organization}</div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                <button type="button" className="btn btn-outline-secondary mt-2" onClick={() => arrayHelpers.push({ title: '', date: '', organization: '' })}>
                                    Add Certificate
                                </button>
                            </div>
                        )}
                    />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;
