function printValue(value: number): string {
    return (value >= 0x20 && value <= 0x7e) ? String.fromCharCode(value) : '.';
  }
  
  export function hexDump(buff: Buffer): string {
    let output = '';
    let lineHex = '';
    let lineAscii = '';
    let offset = 0;
  
    Array.from(buff).forEach((value, index) => {
      lineHex += `${value.toString(16).padStart(2, '0')} `;
      lineAscii += printValue(value);
  
      if ((index + 1) % 16 === 0) {
        output += `${offset.toString(16).padStart(8, '0')} | ${lineHex.trim()} | ${lineAscii}\n`;
        lineHex = '';
        lineAscii = '';
        offset += 16;
      }
    });
  
    if (lineHex !== '') {
      output += `${offset.toString(16).padStart(8, '0')} | ${lineHex.trim().padEnd(3 * 16 + 2, ' ')} | ${lineAscii}\n`;
    }
  
    return output;
  }