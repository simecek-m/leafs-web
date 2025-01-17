import { AVAILABLE_ICONS } from "constant/icons";
import { INewTag, IProfile, NewTeam, ThemedColor } from "type";
import * as yup from "yup";

export const PROFILE_SCHEMA: yup.SchemaOf<IProfile> = yup.object({
  email: yup.string().email().required(),
  firstName: yup.string().required(),
  id: yup.string().required(),
  lastName: yup.string().required(),
  picture: yup.string().required(),
  username: yup
    .string()
    .required()
    .min(4, "At least 3 characters required!")
    .matches(/^@[a-zA-Z0-9]+$/g, "Forbidden character used in username!")
    .transform((value) => `@${value}`),
});

export const COLOR_SCHEMA: yup.SchemaOf<ThemedColor> = yup.object({
  dark: yup.string().required(),
  light: yup.string().required(),
});

export const TAG_SCHEMA: yup.SchemaOf<INewTag> = yup.object({
  label: yup.string().required(),
  color: COLOR_SCHEMA,
});
export const TEAM_SCHEMA: yup.SchemaOf<NewTeam> = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  icon: yup
    .string()
    .required()
    .oneOf([...AVAILABLE_ICONS]),
  color: COLOR_SCHEMA,
});
