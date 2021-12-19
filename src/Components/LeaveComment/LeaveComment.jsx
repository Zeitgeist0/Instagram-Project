import React, { useEffect, useState } from "react";
import "./leaveComment.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import postComment from "../../API/postComment"
const CommentSchema = Yup.object({
  comment: Yup.string()
    .min(2, "Must be at leaset 2 characters")
    .required("Please enter a comment"),
});

const LeaveComment = ({postID , updatePosts}) => {
  const [formErrors, setFormErrors] = useState([]);

  const handleFormSubmit = (values , {resetForm})  => {
    setFormErrors([]);
    const { comment : text  } = values;
    postComment(postID, text);
    updatePosts();
    resetForm();
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
          <button className="comment-button" type="submit" disabled={isSubmitting}>
            Leave a comment
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LeaveComment;
