
/**
 * Checks if a person is 18 years or older based on their birth date.
 * @param day Day of birth
 * @param month Month of birth (1-12)
 * @param year Year of birth
 * @returns boolean
 */
export const isAdult = (day: number, month: number, year: number): boolean => {
  if (!day || !month || !year) return false;

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  // Validate if date is valid
  if (isNaN(birthDate.getTime())) return false;

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age >= 18;
};
