/**
 * Cleans raw description and excerpt text from database/scraping
 * Removes literal or escaped \r\n, HTML tags, and excessive blank lines
 */
export function cleanProductDescription(text?: string): string {
  if (!text) return "";
  return text
    .replace(/\\r\\n/g, "\n")
    .replace(/\\r/g, "\n")
    .replace(/\\n/g, "\n")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/<[^>]*>/g, " ") // strip HTML tags if present in excerpts
    .replace(/&nbsp;/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s*\n\s*\n+/g, "\n\n")
    .trim();
}
