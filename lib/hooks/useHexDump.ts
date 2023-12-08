import { useMemo } from 'react';

function printValue(value: number): string {
  return (value >= 0x20 && value <= 0x7e) ? String.fromCharCode(value) : '.';
}

export default function useHexDump(buff: Buffer): { hex: string, ascii: string } {
  return useMemo(() => {
    let hex = '';
    let ascii = '';
    let offset = 0;

    Array.from(buff).forEach((value, index) => {
      hex += `${value.toString(16).padStart(2, '0')} `;
      ascii += printValue(value);

      if ((index + 1) % 16 === 0) {
        hex += '\n';
        ascii += '\n';
        offset += 16;
      }
    });

    if (hex !== '') {
      hex = hex.trim().padEnd(3 * 16 + 2, ' ');
      ascii = ascii.trim();
    }

    return { hex, ascii };
  }, [buff]);
}