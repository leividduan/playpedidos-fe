export default function formatDocument(document: string) {
  // Remove non-numeric characters and limit to 14 digits
  const onlyNumbers = document.replace(/\D/g, '').slice(0, 14);

  if (onlyNumbers.length <= 2) {
    // First step: Add the initial 2 digits
    return onlyNumbers;
  }
  if (onlyNumbers.length <= 5) {
    // Second step: Add the dot after the first 2 digits
    return onlyNumbers.replace(/^(\d{2})(\d{0,3})/, '$1.$2');
  }
  if (onlyNumbers.length <= 8) {
    // Third step: Add the second dot after the first 5 digits
    return onlyNumbers.replace(/^(\d{2})(\d{3})(\d{0,3})/, '$1.$2.$3');
  }
  if (onlyNumbers.length <= 12) {
    // Fourth step: Add the slash after the first 8 digits
    return onlyNumbers.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{0,4})/,
      '$1.$2.$3/$4',
    );
  }
  // Final step: Add the hyphen after the 12th digit
  return onlyNumbers.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/,
    '$1.$2.$3/$4-$5',
  );
}
