import { Button, Grid } from "@mui/material";
import { isEmpty } from "lodash";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { FormSchemaProps } from "../../modules/common/common-types";
import {
  activeStepAtom,
  formDirectionAtom,
} from "../../modules/registration/atom/registration-atom";
import { FormLabelText } from "./form-components";
import FormInput from "./form-input";

interface FormRendererProps {
  formSchema: FormSchemaProps[];
  formData?: any;
  onFormStateChange: (formValues: any) => void;
}

const FormRenderer = ({
  formSchema,
  onFormStateChange,
  formData,
}: FormRendererProps) => {
  const [errors, setErrors] = useState<any>({});
  const [formTouched, setFormTouched] = useState<any>({});
  const [activeStep, setActiveStep] = useRecoilState(activeStepAtom);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formDirection, setFormDirection] = useRecoilState(formDirectionAtom);

  const handleChange = (field: string, validator: any) => (event: any) => {
    const val = event.target.value;
    onFormStateChange({ ...formData, [field]: val });
    setFormTouched({ ...formTouched, [field]: true });
    setErrors({ ...errors, [field]: validator(val) });
  };

  const handleNext = () => {
    setFormDirection("-");
    setActiveStep((activeStep) => activeStep + 1);
  };
  const handleGoBack = () => {
    setFormDirection("+");
    setActiveStep((activeStep) => activeStep - 1);
  };

  return (
    <Grid container direction="column" spacing={4}>
      {formSchema.map((formItem, index) => (
        <Grid
          key={index}
          container
          item
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={2}>
            <FormLabelText label={formItem.label} />
          </Grid>
          <Grid item xs={4}>
            <FormInput
              label={formItem.label}
              value={formData[formItem.field]}
              fullWidth
              placeholder={formItem.placeHolder}
              onChange={handleChange(formItem.field, formItem.validator)}
              inputProps={{ maxLength: formItem.maxLength }}
              helperText={
                formTouched[formItem.field] && !isEmpty(errors[formItem.field])
                  ? errors[formItem.field]
                  : ""
              }
              error={formTouched[formItem.field] && !!errors[formItem.field]}
              required
            />
          </Grid>
        </Grid>
      ))}
      <Grid
        container
        item
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        {activeStep > 0 && (
          <Grid item>
            <Button variant="outlined" onClick={handleGoBack}>
              Back
            </Button>
          </Grid>
        )}
        <Grid item>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={
              activeStep < 2 &&
              Object.values(formData).some((item) => item === "")
            }
          >
            {activeStep < 2 ? "Next" : "Submit"}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormRenderer;
