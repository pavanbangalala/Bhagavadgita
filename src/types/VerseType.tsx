export type TranslationType = {
  id: number;
  description: string;
  author_name: string;
  language: string;
};

export type VerseType = {
  id: number;
  chapter_number: number;
  slug: string;
  text: string;
  transliteration: string;
  word_meanings: string;
  translations: TranslationType[];
};
