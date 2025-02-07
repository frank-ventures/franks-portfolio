export default function convertCharacters(string: string): string {
  return string
    .replace(/&#8220;/gi, '"')
    .replace(/&#8217;/gi, "'")
    .replace(/&#8216;/gi, "'")
    .replace(/&#8221;/gi, '"')
    .replace(/&#8230;/gi, "...")
    .replace(/&#8211;/gi, "-");
}
