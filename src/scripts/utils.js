/**
 * @type { (input: string) => string }
 * @description get all uppercase characters and numbers from input to create a shortcut string
 * if input does not contain characters or numbers or shortcut has less than 3 chars
 * then return 5 first characters
 */

export const createShourtcut = (inputString) => {
  const matches = inputString.match(/[A-Z0-9]/g);
  if (matches) {
    const res = matches.join('');
    if (res.length > 3) return res;
  } 
  return inputString.substring(0, 5);
}