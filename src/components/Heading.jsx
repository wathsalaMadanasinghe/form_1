import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Typography, Box, TextField } from "@mui/material";
import * as Yup from "yup";

const validationSchema = Yup.object({
  date: Yup.string().required("Date is required"),
  name: Yup.string().required("Name is required"),
  relation: Yup.string().required("Relation is required"),
  student: Yup.string().required("Student name is required"),
  regNo: Yup.string().required("Registration number is required"),
  grade: Yup.string().required("Grade is required"),
});

const Heading = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          textAlign: "center",
          px: 10,
          pt: 4,
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textTransform: "uppercase",
            color: "black",
            fontWeight: "bold",
            fontSize: { xs: "1rem", md: "1.5rem ", xl: "2rem" },
            borderBottom: "2px solid",
            py: 3,
          }}
        >
          AGREEMENT FOR PROVIDING TRANSPORTATION FOR STUDENTS OF DELHI PRIVATE
          SCHOOL – JEBEL ALI
        </Typography>

        <Formik
          initialValues={{
            date: "",
            name: "",
            relation: "",
            student: "",
            regNo: "",
            grade: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  mb: 2,
                  mt: 4,
                  textAlign: "justify",
                  fontSize: { xs: "0.75rem", md: "1rem ", xl: "1.5rem" },
                }}
              >
                This agreement is made on the
                <Field
                  as={TextField}
                  name="date"
                  size="small"
                  variant="standard"
                  sx={{
                    mx: 0.5,
                    my: 0.5,

                    width: "calc(10% - 2px)",
                    "& input": {
                      fontSize: { xs: "0.6rem", md: "0.8rem ", xl: "1.2rem" }, // Adjust the font size as needed
                      textAlign: "center",
                    },
                  }}
                  placeholder=""
                  error={touched.date && Boolean(errors.date)}
                  helperText={<ErrorMessage name="date" />}
                />
                between AL SARAYA BUSES RENTAL LLC (Hereafter referred to as
                ASB), P.O BOX 37978, Dubai, UAE and Mr/ Mrs.
                <Field
                  as={TextField}
                  variant="standard"
                  name="name"
                  size="small"
                  sx={{
                    mx: 1,
                    my: 1,

                    width: "calc(20% - 2px)",
                    "& input": {
                      fontSize: { xs: "0.6rem", md: "0.8rem ", xl: "1.2rem" }, // Adjust the font size as needed
                      textAlign: "center",
                    },
                  }}
                  placeholder=""
                  error={touched.name && Boolean(errors.name)}
                  helperText={<ErrorMessage name="name" />}
                />
                Father / Mother (Hereafter referred to as PARENT) Of
                <Field
                  as={TextField}
                  variant="standard"
                  name="student"
                  size="small"
                  sx={{
                    mx: 1,
                    my: 1,

                    width: "calc(20% - 2px)",
                    "& input": {
                      fontSize: { xs: "0.6rem", md: "0.8rem ", xl: "1.2rem" }, // Adjust the font size as needed
                      textAlign: "center",
                    },
                  }}
                  placeholder=""
                  error={touched.student && Boolean(errors.student)}
                  helperText={<ErrorMessage name="student" />}
                />
                (student) Reg-No
                <Field
                  as={TextField}
                  variant="standard"
                  name="regNo"
                  size="small"
                  sx={{
                    mx: 1,
                    my: 1,

                    width: "calc(10% - 2px)",
                    "& input": {
                      fontSize: { xs: "0.6rem", md: "0.8rem ", xl: "1.2rem" }, // Adjust the font size as needed
                      textAlign: "center",
                    },
                  }}
                  placeholder=""
                  error={touched.regNo && Boolean(errors.regNo)}
                  helperText={<ErrorMessage name="regNo" />}
                />
                Grade
                <Field
                  as={TextField}
                  variant="standard"
                  name="grade"
                  size="small"
                  sx={{
                    mx: 1,
                    my: 1,

                    width: "calc(5% - 2px)",
                    "& input": {
                      fontSize: { xs: "0.6rem", md: "0.8rem ", xl: "1.2rem" }, // Adjust the font size as needed
                      textAlign: "center",
                    },
                  }}
                  placeholder=""
                  error={touched.grade && Boolean(errors.grade)}
                  helperText={<ErrorMessage name="grade" />}
                />
                of DPS- JEBEL ALI (Hereinafter referred to as SCHOOL).
              </Typography>
            </Form>
          )}
        </Formik>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            textAlign: "left",
            color: "black",
            fontWeight: "bold",
            fontSize: { xs: "0.9rem", md: "1.2rem ", xl: "1.5rem" },
            py: 3,
          }}
        >
          The terms and conditions of this agreement will be effective from the
          first day of transport use to last day of transport use in the
          respective school:
        </Typography>
      </Box>
    </Container>
  );
};

export default Heading;
