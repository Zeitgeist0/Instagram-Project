import { useState } from "react";
import "./leaveComment.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CommentSchema = Yup.object({
  comment: Yup.string()
    .min(2, "Must be at leaset 2 characters")
    .required("Please enter a comment"),
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
        <Form>
          <div style={{ marginTop: "10px" }}>
            <Field
              style={{ padding: "10px" }}
              className="leave-comment"
              name="comment"
              type="comment"
              placeholder="Enter your comment"
            />
            <ErrorMessage
              component="div"
              style={{ color: "red", paddingLeft: "15px" }}
              name="comment"
            />
          </div>
          {formErrors && (
            <ul
              className="form-errors"
              style={{ color: "red", marginTop: "5px" }}
            >
              {formErrors.map((error) => (
                <li>{error}</li>
              ))}
            </ul>
          )}
          <button className="comment-button" disabled={isSubmitting}>
            Leave a comment
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LeaveComment;
