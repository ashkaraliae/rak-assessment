import { Grid, Slide } from "@mui/material";
import { isEmpty } from "lodash";
import { useRecoilState, useRecoilValue } from "recoil";
import FormRenderer from "../../shared/form/form-renderer";
import {
  validateAddress,
  validateRegex,
} from "../../shared/form/validate-util";
import { FormSchemaProps } from "../common/common-types";
import { activeStepAtom, personalInfoFormAtom } from "./atom/registration-atom";
import { REGEX_PATTERNS } from "./constants";

const validateName = (value: string) => {
  return isEmpty(value) ? "Name required" : null;
};

const validateEmail = (value: string) =>
  validateRegex(value, REGEX_PATTERNS.EMAIL_PATTERN)
    ? null
    : "Please enter valid email";

export const PERSONAL_INFO_SCHEMA: FormSchemaProps[] = [
  {
    field: "name",
    label: "Name",
    value: "",
    placeHolder: "Enter name here..",
    required: true,
    validator: validateName,
    maxLength: 50,
  },
  {
    field: "email",
    label: "Email",
    value: "",
    placeHolder: "abc@abc.com",
    validator: validateEmail,
    type: "email",
    maxLength: 50,
  },
  {
    field: "mobileNo",
    label: "Mobile",
    value: "",
    placeHolder: "05xxxxxxx",
    type: "number",
    maxLength: 10,
  },
  {
    field: "addressLine1",
    label: "Address Line 1",
    value: "",
    placeHolder: "House No/Flat No",
    maxLength: 50,
    validator: validateAddress,
  },
  {
    field: "addressLine2",
    label: "Address Line 2",
    value: "",
    placeHolder: "Enter Building name..",
    maxLength: 50,
    validator: validateAddress,
  },
  {
    field: "addressLine3",
    label: "Address Line 3",
    value: "",
    placeHolder: "Enter Land mark..",
    maxLength: 50,
    validator: validateAddress,
  },
];

const PersonalInfo = () => {
  const activeStep = useRecoilValue(activeStepAtom);
  const [personalInfoData, setPersonalInfoData] =
    useRecoilState(personalInfoFormAtom);

  const handleFormChange = (formValue: any) => {
    setPersonalInfoData(formValue);
  };
  return (
    <Slide direction="right" in={activeStep === 0} mountOnEnter unmountOnExit>
      <Grid container item>
        <FormRenderer
          formSchema={PERSONAL_INFO_SCHEMA}
          onFormStateChange={handleFormChange}
          formData={personalInfoData}
        />
      </Grid>
    </Slide>
  );
};
export default PersonalInfo;
