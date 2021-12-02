import { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CommentSchema = Yup.object({
  comment: Yup.string()
    .min(3, "Must be at leaset 3 characters")
    .required("Required"),
});

const LeaveComment = () => {
  const [formErrors, setFormErrors] = useState([]);

  const handleFormSubmit = (values, { setSubmitting }) => {
    setFormErrors([]);
    // const { email, password } = values;

    // login(email, password)
    //   .catch((data) => data)
    //   .then((data) => setFormErrors(data.message))
    //   .finally(() => setSubmitting(false));
  };

  return (
    <Formik
      initialValues={{ comment: "" }}
      validationSchema={CommentSchema}
      onSubmit={handleFormSubmit}
    >
      {({ isSubmitting }) => (
        <Form style={{ padding: "40px 20px" }}>
          <div style={{ padding: "8px" }}>
            <Field
              name="comment"
              type="comment"
              placeholder="Enter your comment"
            />
            <ErrorMessage
              component="div"
              style={{ color: "red" }}
              name="comment"
            />
          </div>
          {formErrors && (
            <ul style={{ color: "red" }}>
              {formErrors.map((error) => (
                <li>{error}</li>
              ))}
            </ul>
          )}
          <button disabled={isSubmitting}>Leave a comment</button>
        </Form>
      )}
    </Formik>
  );
};

export default LeaveComment;
