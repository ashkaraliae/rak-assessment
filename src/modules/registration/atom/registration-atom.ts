import { atom } from "recoil";

export const defaultPersonalInfo = {
  name: "",
  email: "",
  mobileNo: "",
  addressLine1: "",
  addressLine2: "",
  addressLine3: "",
};

export const defaultOfficeInfo = {
  officeBuilding: "",
  city: "",
  landline: "",
  officeAddress1: "",
  poBox: "",
};
export const activeStepAtom = atom<number>({
  key: "activeStep",
  default: 0,
});

export const completedSteps = atom<number[]>({
  key: "completedSteps",
  default: [],
});

export const formDirectionAtom = atom<string>({
  key: "direction",
  default: "-",
});
export const personalInfoFormAtom = atom<any>({
  key: "personalInfo",
  default: defaultPersonalInfo,
});
export const officeInfoAtom = atom<any>({
  key: "officeInfo",
  default: defaultOfficeInfo,
});
