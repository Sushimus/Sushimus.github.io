export const ExportUtils = {
  ROMAN_NUMERALS: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],

  dexNumber: (num: number | string): string => {
    return String(num).padStart(4, '0');
  },

  isXOffset: false,
  isYOffset: false,

  nextQuadCoords: (coords: number[]): number[] => {
    let x = coords[0];
    let y = coords[1];

    let xAtRowEnd = x % (9.0 + (ExportUtils.isXOffset ? 10.0 : 0.0)) === 0.0;
    let yAtColumnEnd = y % (4.0 + (ExportUtils.isYOffset ? 5.0 : 0.0)) === 0.0;
    let paragraphEnd = xAtRowEnd && yAtColumnEnd;

    if (x === 1.0 && y === 1.0) { 
      ExportUtils.isXOffset = false; 
      ExportUtils.isYOffset = false; 
    }
    if (paragraphEnd && x === 9.0) { 
      ExportUtils.isXOffset = true; 
      ExportUtils.isYOffset = (y === 9.0); 
    }
    if (paragraphEnd && x === 19.0 && !ExportUtils.isYOffset) { 
      ExportUtils.isXOffset = false; 
      ExportUtils.isYOffset = true; 
    }

    if (paragraphEnd && (x === 9.0 || y !== 9.0)) {
      x = 1.0 + (ExportUtils.isXOffset ? 10.0 : 0.0);
      y = ExportUtils.isYOffset ? 6.0 : 1.0;
    } else if ((x + 1.0) % (10.0 + (ExportUtils.isXOffset ? 10.0 : 0.0)) === 0.0) {
      x = 1.0 + (ExportUtils.isXOffset ? 10.0 : 0.0);
      y += 1.0;
    } else {
      x += 1.0;
    }

    return [x, y];
  },

  ringStartPos: null as number[] | null,
  nextRingCoords: (coords: number[]): number[] => {
    return coords;
  },

  indexOf: <T>(arr: T[], val: T): number => {
    return arr.indexOf(val);
  },

  formatName: (name: string): string => {
    return name
      .replace(/ /g, "")
      .replace(/\./g, "")
      .replace(/-/g, "")
      .replace(/'/g, "")
      .replace(/♀/g, "f")
      .replace(/♂/g, "m")
      .replace(/:/g, "")
      .replace(/é/g, "e")
      .toLowerCase();
  },

  resetOffsets: (): void => {
    ExportUtils.isXOffset = false;
    ExportUtils.isYOffset = false;
  }
};