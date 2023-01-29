import { SxProps, Theme } from "@mui/material";

export type SXType = SxProps<Theme> | undefined;
export type StylesType = Record<string, SXType>;

export interface FormSchemaProps {
  field: string;
  label: string;
  value: string;
  placeHolder?: string;
  required?: boolean;
  validator?: (value: string) => string | null;
  type?: string;
  maxLength?: number;
}
