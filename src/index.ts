import { mapping } from "./mapping.json";

class Converter {
  private readonly mapping: Record<string, string>;

  constructor() {
    this.mapping = mapping;
  }

  convert(...args: string[]): string {
    const str = args.filter((arg) => /^[a-zA-Z ]*$/.test(arg)).join(" ");

    return Array.from(str)
      .map((char) => char.toLowerCase())
      .map((char) => (char === " " ? char : this.mapping[char]))
      .join("")
      .trim();
  }

  random(...args: number[]): string {
    const possibles = Object.keys(this.mapping).join("");

    return args
      .map((arg) =>
        Array.from(
          { length: arg },
          () =>
            this.mapping[
              possibles.charAt(Math.floor(Math.random() * possibles.length))
            ]
        ).join("")
      )
      .join(" ")
      .trim();
  }

  getMapping(): Record<string, string> {
    return this.mapping;
  }
}

export default Converter;
