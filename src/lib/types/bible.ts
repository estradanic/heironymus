export const books = [
	"Genesis",
	"Exodus",
	"Leviticus",
	"Numbers",
	"Deuteronomy",
	"Joshua",
	"Judges",
	"Ruth",
	"1Samuel",
	"2Samuel",
	"1Kings",
	"2Kings",
	"1Chronicles",
	"2Chronicles",
	"Ezra",
	"Nehemiah",
	"Tobit",
	"Judith",
	"Esther",
	"1Maccabees",
	"2Maccabees",
	"Job",
	"Psalms",
	"Proverbs",
	"Ecclesiastes",
	"SongOfSongs",
	"Wisdom",
	"Sirach",
	"Isaiah",
	"Jeremiah",
	"Lamentations",
	"Baruch",
	"Ezekiel",
	"Daniel",
	"Hosea",
	"Joel",
	"Amos",
	"Obadiah",
	"Jonah",
	"Micah",
	"Nahum",
	"Habakkuk",
	"Zephaniah",
	"Haggai",
	"Zecharaiah",
	"Malachi",
	"Matthew",
	"Mark",
	"Luke",
	"John",
	"Acts",
	"Romans",
	"1Corinthians",
	"2Corinthians",
	"Galatians",
	"Ephesians",
	"Phillipians",
	"Colossians",
	"1Thessalonians",
	"2Thessalonians",
	"1Timothy",
	"2Timothy",
	"Titus",
	"Philemon",
	"Hebrews",
	"James",
	"1Peter",
	"2Peter",
	"1John",
	"2John",
	"Jude",
	"Revelation"
] as const;

export type Book = (typeof books)[number];
export type Chapter = `${Book}-${number}`;
export type Verse = `${Chapter}:${number}`;

export const commentaries = ["lapide"] as const;
export type Commentary = (typeof commentaries)[number];
