import { REGEX_PATTERNS } from "../../modules/registration/constants";

/**
 * Validates a given string against the given regex
 * @param value
 * @param pattern
 * @returns
 */

export const validateRegex = (value: string, pattern: RegExp | string) => {
  if (!pattern || value) {
    return true;
  }
  const regex = typeof pattern === "string" ? new RegExp(pattern) : pattern;
  return regex.test(value);
};

/**
 * Accepts the string to be validated and the pattern against which it needs to be
 * validated. Returns true if there is a match else false.
 *
 * @param value String to validate.
 * @param pattern Regex pattern.
 * @returns true if valid else false.
 */
export const isValid = (value: string, pattern: RegExp | string) => {
  if (!pattern || !value) {
    // return true if pattern or value empty
    return true;
  }
  const regex = typeof pattern === "string" ? new RegExp(pattern) : pattern;
  return regex.test(value);
};

export const validateAddress = (value: string) =>
  validateRegex(value, REGEX_PATTERNS.NO_SPECIAL_CHARACTERS)
    ? null
    : "No special characters allowed";
