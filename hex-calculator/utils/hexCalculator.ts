const HEX_REGEX = /^[0-9A-F]{1,2}$/i;

function validateInput(hex: string): void {
  if (!HEX_REGEX.test(hex)) {
    throw new Error('Invalid hex input (00-FF)');
  }
}

function validateResult(result: number): void {
  if (result < 0 || result > 0xFFFF) {
    throw new Error('Result out of bounds (0000-FFFF)');
  }
}

export function hexAdd(a: string, b: string): string {
  validateInput(a);
  validateInput(b);
  
  const decA = parseInt(a, 16);
  const decB = parseInt(b, 16);
  const result = decA + decB;
  
  validateResult(result);
  return result.toString(16).toUpperCase().padStart(4, '0');
}

export function hexSubtract(a: string, b: string): string {
  validateInput(a);
  validateInput(b);
  
  const decA = parseInt(a, 16);
  const decB = parseInt(b, 16);
  const result = decA - decB;
  
  validateResult(result);
  return result.toString(16).toUpperCase().padStart(4, '0');
}

export function hexMultiply(a: string, b: string): string {
  validateInput(a);
  validateInput(b);
  
  const decA = parseInt(a, 16);
  const decB = parseInt(b, 16);
  const result = decA * decB;
  
  validateResult(result);
  return result.toString(16).toUpperCase().padStart(4, '0');
}

export function hexDivide(a: string, b: string): string {
  validateInput(a);
  validateInput(b);
  
  const decA = parseInt(a, 16);
  const decB = parseInt(b, 16);
  
  if (decB === 0) throw new Error('Division by zero');
  
  const result = Math.floor(decA / decB);
  
  validateResult(result);
  return result.toString(16).toUpperCase().padStart(4, '0');
}