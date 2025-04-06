export function hexAdd(a: string, b: string): string {
    const hexRegex = /^[0-9A-F]{1,2}$/i;
    if (!hexRegex.test(a) || !hexRegex.test(b)) {
      throw new Error('Invalid hex input');
    }
  
    const decA = parseInt(a, 16);
    const decB = parseInt(b, 16);
    const result = decA + decB;
  
    if (result < 0 || result > 0xFFFF) throw new Error('Result out of bounds');
  
    return result.toString(16).toUpperCase();
  }

export function hexSubtract(a: string, b: string): string {
    const hexRegex = /^[0-9A-F]{1,2}$/i;
    if (!hexRegex.test(a) || !hexRegex.test(b)) {
      throw new Error('Invalid hex input');
    }
  
    const decA = parseInt(a, 16);
    const decB = parseInt(b, 16);
    const result = decA - decB;
  
    if (result < 0 || result > 0xFFFF) throw new Error('Result out of bounds');
  
    return result.toString(16).toUpperCase();
  }
  