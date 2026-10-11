import { bib } from '../lib/literature.mjs';

export function GET() {
  return new Response(bib(), { headers: { 'Content-Type': 'application/x-bibtex; charset=utf-8' } });
}
