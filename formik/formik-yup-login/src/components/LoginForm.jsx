import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Невірний формат email')
            .required('Обов’язкове поле'),
        password: Yup.string()
            .min(6, 'Мінімум 6 символів')
            .required('Обов’язкове поле'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: 'red' }}>{formik.errors.email}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="password">Пароль:</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div style={{ color: 'red' }}>{formik.errors.password}</div>
                ) : null}
            </div>

            <button type="submit">Увійти</button>
        </form>
    );
};

export default LoginForm;