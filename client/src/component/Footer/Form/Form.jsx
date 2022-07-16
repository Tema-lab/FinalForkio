import { useField, Form, Formik } from "formik";
import * as Yup from "yup";


const TextInput = ({ label, ...props }) => {
  const { styles } = props;
  const [field] = useField(props);
  return (
    <>
      <div className="input-field">
        <label htmlFor={props.id || props.name}>
          <h5>{label}</h5>
        </label>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            {...field}
            {...props}
            placeholder="E-mail"
          />

          <button type="submit" className={styles.submitBtn}></button>
        </div>
      </div>
    </>
  );
};

export default function SubscribeForm(props) {
  const { styles } = props;
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={validationFormsSchema}
      onSubmit={(values) => {

        console.log("submitted", values);
      }}>
      <Form>
        <TextInput
          label="Підписка на розсилку"
          name="email"
          type="email"
          styles={styles}
        />
      </Form>
    </Formik>
  );
}

const validationFormsSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
});
