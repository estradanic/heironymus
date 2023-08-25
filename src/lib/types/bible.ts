export const books = [
	"Genesis",
	"Exodus",
	"Leviticus",
	"Numbers",
	"Deuteronomy",
	"Joshua",
	"Judges",
	"Ruth",
	"1_Samuel",
	"2_Samuel",
	"1_Kings",
	"2_Kings",
	"1_Chronicles",
	"2_Chronicles",
	"Ezra",
	"Nehemiah",
	"Tobit",
	"Judith",
	"Esther",
	"1_Maccabees",
	"2_Maccabees",
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
	"1_Corinthians",
	"2_Corinthians",
	"Galatians",
	"Ephesians",
	"Phillipians",
	"Colossians",
	"1_Thessalonians",
	"2_Thessalonians",
	"1_Timothy",
	"2_Timothy",
	"Titus",
	"Philemon",
	"Hebrews",
	"James",
	"1_Peter",
	"2_Peter",
	"1_John",
	"2_John",
	"Jude",
	"Revelation"
] as const;

export type Book = (typeof books)[number];
export type Chapter = `${Book}:${number}`;
export type Verse = `${Chapter}:${number}`;

export const commentaries = ["lapide"] as const;
export type Commentary = (typeof commentaries)[number];