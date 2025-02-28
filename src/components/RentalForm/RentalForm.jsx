import module from "./RentalForm.module.css"
import toast, { Toaster } from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RentalForm = () => {

    const FormSchema = Yup.object({
        name: Yup.string()
            .required("Name is a required field")
            .min(3, "Must be at least 3 characters")
            .max(50, "Must be at most 50 characters"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is a required field"),
    });

    const onSubmit = (values) => {
        toast.success('Form successfully completed!');
        console.log(values);
    }

    return (
        <div className={module.form}>
            <Toaster
                position="top-right"
                reverseOrder={true}
            />
            <div className={module.titleDiv}>
                <h1 className={module.formTitle}>Book your car now</h1>
                <p className={module.formPar}>Stay connected! We are always ready to help you.</p>
            </div>

            <Formik
                initialValues={{ name: "", email: "", date: "", comment: "" }}
                validationSchema={FormSchema}
                onSubmit={(values, { resetForm }) => {
                    onSubmit(values);
                    resetForm();
                }}
            >
                <Form className={module.fieldForm}>
                    <label className={module.label}>
                        <Field
                            placeholder="Name*"
                            type="text"
                            name="name"
                            className={module.input}
                        />
                        <ErrorMessage className={module.error} name="name" component="span" />
                    </label>
                    <label className={module.label}>
                        <Field
                            placeholder="Email*"
                            type="email"
                            name="email"
                            className={module.input}
                        />
                        <ErrorMessage className={module.error} name="email" component="span" />
                    </label>
                    <label className={module.label}>
                        <Field
                            placeholder="Booking date"
                            type="text"
                            name="date"
                            className={module.input}
                        />
                    </label>
                    <label className={module.label}>
                        <Field
                            as="textarea"
                            placeholder="Comment"
                            name="comment"
                            className={module.textArea}
                        />
                    </label>
                    <button type="submit" className={module.btn}>
                        Send
                    </button>
                </Form>
            </Formik>
        </div >
    )
}

export default RentalForm