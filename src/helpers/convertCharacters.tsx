// This helper is used on the Blogs part of the site and helps to convert weird funky characters into what we expect them to be.

export default function convertCharacters(string: string): string {
  return string
    .replace(/&#8220;/gi, '"')
    .replace(/&#8217;/gi, "'")
    .replace(/&#8216;/gi, "'")
    .replace(/&#8221;/gi, '"')
    .replace(/&#8230;/gi, "...")
    .replace(/&#8211;/gi, "-");
}
