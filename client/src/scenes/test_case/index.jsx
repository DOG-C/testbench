import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";


const Case = () => {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const initialValues = {
    name: "",
    caseid: "",
    log: "",
    cmd: "",
    detection: "",
    behavior: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("You must input a name!"),
  });

  const handleFormSubmit = (values) => {
    axios.post("http://localhost:3001/caselist", values).then((response) => {
      navigate("/test_case");
    });
  };

  return (
    <Box m="20px">

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Test Case Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Test Case ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.caseid}
                name="caseid"
                error={!!touched.caseid && !!errors.caseid}
                helperText={touched.caseid && errors.caseid}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Test Case Log"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.log}
                name="log"
                error={!!touched.log && !!errors.log}
                helperText={touched.log && errors.log}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Test Case Command"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cmd}
                name="cmd"
                error={!!touched.cmd && !!errors.cmd}
                helperText={touched.cmd && errors.cmd}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Failure Detection"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.detection}
                name="detection"
                error={!!touched.detection && !!errors.detection}
                helperText={touched.detection && errors.detection}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Failure Behavior"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.behavior}
                name="behavior"
                error={!!touched.behavior && !!errors.behavior}
                helperText={touched.behavior && errors.behavior}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                multiline
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                rows={3}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="flex-end" mt="20px" sx={{ flexDirection: 'row' }} gap="10px">
              <Button color="secondary" variant="contained" sx={{textTransform: "none"}}>
                Cancel
              </Button>
              <Button type="submit" color="secondary" variant="contained" sx={{textTransform: "none"}}>
                Create Test Case
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


export default Case;
