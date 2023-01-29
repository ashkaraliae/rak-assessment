import { Grid, Slide } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import FormRenderer from "../../shared/form/form-renderer";
import {
  activeStepAtom,
  formDirectionAtom,
  officeInfoAtom,
} from "./atom/registration-atom";

export const OFFICE_INFO_SCHEMA = [
  {
    field: "officeBuilding",
    label: "Building Name",
    value: "",
    placeHolder: "Enter building name",
  },
  {
    field: "city",
    label: "City/Area",
    value: "",
    placeHolder: "Enter City/Area",
  },
  {
    field: "landline",
    label: "Landline Number",
    value: "",
    placeHolder: "05xxxxx",
  },
  {
    field: "officeAddress1",
    label: "Address Line 1",
    value: "",
    placeHolder: "Enter address line1",
  },
  {
    field: "officeAddress2",
    label: "Address Line 2",
    value: "",
    placeHolder: "Enter Landmark.",
  },
  {
    field: "poBox",
    label: "PO Box Number",
    value: "",
    placeHolder: "Enter PO Box number.",
  },
];

const OfficeInfo = () => {
  const activeStep = useRecoilValue(activeStepAtom);
  const formDirection = useRecoilValue(formDirectionAtom);
  const [officeInfoData, setOfficeInfoData] = useRecoilState(officeInfoAtom);

  const handleFormChange = (values: any) => {
    setOfficeInfoData(values);
  };
  return (
    <Slide
      direction={formDirection === "-" ? "left" : "right"}
      in={activeStep === 1}
      mountOnEnter
      unmountOnExit
    >
      <Grid container item>
        <FormRenderer
          formSchema={OFFICE_INFO_SCHEMA}
          onFormStateChange={handleFormChange}
          formData={officeInfoData}
        />
      </Grid>
    </Slide>
  );
};
export default OfficeInfo;
