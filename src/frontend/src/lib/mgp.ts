/**
 * Validates MGP ID format.
 * Valid format: mgp- followed by one or more digits (e.g., mgp-1, mgp-12345)
 */
export function validateMgpId(value: string): boolean {
  const mgpPattern = /^mgp-\d+$/;
  return mgpPattern.test(value);
}

export function getMgpErrorMessage(value: string): string {
  if (!value.trim()) {
    return "MGP ID is required";
  }
  if (!validateMgpId(value)) {
    return "MGP ID must start with 'mgp-' followed by digits only";
  }
  return "";
}
