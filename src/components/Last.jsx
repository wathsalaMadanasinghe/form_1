import React from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  mobileNumberFather: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Mobile Number (Father) is required"),
  mobileNumberMother: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Mobile Number (Mother) is required"),
  residenceTel: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Residence Telephone is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  agreeToTerms: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
});

const Last = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobileNumberFather: "",
      mobileNumberMother: "",
      residenceTel: "",
      email: "",
      agreeToTerms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          textAlign: "center",
          pt: 4,
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            fullWidth
            sx={{
              mb: 2,
              width: {
                xs: "80%",
                sm: "80%",
                md: "60%",
                lg: "50%",
              },
            }}
          />
          <TextField
            label="Mobile Number (Father)"
            name="mobileNumberFather"
            value={formik.values.mobileNumberFather}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.mobileNumberFather &&
              Boolean(formik.errors.mobileNumberFather)
            }
            helperText={
              formik.touched.mobileNumberFather &&
              formik.errors.mobileNumberFather
            }
            fullWidth
            sx={{
              mb: 2,
              width: {
                xs: "80%",
                sm: "80%",
                md: "60%",
                lg: "50%",
              },
            }}
          />
          <TextField
            label="Mobile Number (Mother)"
            name="mobileNumberMother"
            value={formik.values.mobileNumberMother}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.mobileNumberMother &&
              Boolean(formik.errors.mobileNumberMother)
            }
            helperText={
              formik.touched.mobileNumberMother &&
              formik.errors.mobileNumberMother
            }
            fullWidth
            sx={{
              mb: 2,
              width: {
                xs: "80%",
                sm: "80%",
                md: "60%",
                lg: "50%",
              },
            }}
          />
          <TextField
            label="Residence Tel"
            name="residenceTel"
            value={formik.values.residenceTel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.residenceTel && Boolean(formik.errors.residenceTel)
            }
            helperText={
              formik.touched.residenceTel && formik.errors.residenceTel
            }
            fullWidth
            sx={{
              mb: 2,
              width: {
                xs: "80%",
                sm: "80%",
                md: "60%",
                lg: "50%",
              },
            }}
          />
          <TextField
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
            sx={{
              mb: 2,
              width: {
                xs: "80%",
                sm: "80%",
                md: "60%",
                lg: "50%",
              },
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formik.values.agreeToTerms}
                onChange={formik.handleChange}
                name="agreeToTerms"
                onBlur={formik.handleBlur}
                color="primary"
              />
            }
            label={
              <Typography sx={{ fontSize: "1rem" }}>
                The above terms and conditions have been read, understood,
                agreed and accepted by the parent & ASB.
              </Typography>
            }
          />
          {formik.touched.agreeToTerms && formik.errors.agreeToTerms && (
            <Typography color="error" variant="body2">
              {formik.errors.agreeToTerms}
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Last;
