/**
 * Validates Mgp licence format.
 * Valid format: Mgp- followed by one or more alphanumeric characters (e.g., Mgp-1, Mgp-ABC123, Mgp-a1B2)
 */
export function validateMgpId(value: string): boolean {
  const mgpPattern = /^Mgp-[a-zA-Z0-9]+$/;
  return mgpPattern.test(value);
}

export function getMgpErrorMessage(value: string): string {
  if (!value.trim()) {
    return "Mgp licence is required";
  }
  if (!validateMgpId(value)) {
    return "Mgp licence must start with 'Mgp-' followed by letters and numbers only";
  }
  return "";
}
