//The MIT License (MIT)
//
//Copyright (c) 2020 RcVCite
//
//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:
//
//The above copyright notice and this permission notice shall be included in
//all copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//THE SOFTWARE.

var rcvcite_versification = {
  "version": "201707151130"
};

var OT;
var NT;
var getBook;
var getBookRegex;

(function(){

OT = {
  "Gen.": {
    "name": "Genesis",
    "long_name": "GENESIS",
    "index": "01",
    "verses": [
      31,
      25,
      24,
      26,
      32,
      22,
      24,
      22,
      29,
      32,
      32,
      20,
      18,
      24,
      21,
      16,
      27,
      33,
      38,
      18,
      34,
      24,
      20,
      67,
      34,
      35,
      46,
      22,
      35,
      43,
      55,
      32,
      20,
      31,
      29,
      43,
      36,
      30,
      23,
      23,
      57,
      38,
      34,
      34,
      28,
      34,
      31,
      22,
      33,
      26
    ]
  },
  "Exo.": {
    "name": "Exodus",
    "long_name": "EXODUS",
    "index": "02",
    "verses": [
      22,
      25,
      22,
      31,
      23,
      30,
      25,
      32,
      35,
      29,
      10,
      51,
      22,
      31,
      27,
      36,
      16,
      27,
      25,
      26,
      36,
      31,
      33,
      18,
      40,
      37,
      21,
      43,
      46,
      38,
      18,
      35,
      23,
      35,
      35,
      38,
      29,
      31,
      43,
      38
    ]
  },
  "Lev.": {
    "name": "Leviticus",
    "long_name": "LEVITICUS",
    "index": "03",
    "verses": [
      17,
      16,
      17,
      35,
      19,
      30,
      38,
      36,
      24,
      20,
      47,
      8,
      59,
      57,
      33,
      34,
      16,
      30,
      37,
      27,
      24,
      33,
      44,
      23,
      55,
      46,
      34
    ]
  },
  "Num.": {
    "name": "Numbers",
    "long_name": "NUMBERS",
    "index": "04",
    "verses": [
      54,
      34,
      51,
      49,
      31,
      27,
      89,
      26,
      23,
      36,
      35,
      16,
      33,
      45,
      41,
      50,
      13,
      32,
      22,
      29,
      35,
      41,
      30,
      25,
      18,
      65,
      23,
      31,
      40,
      16,
      54,
      42,
      56,
      29,
      34,
      13
    ]
  },
  "Deut.": {
    "name": "Deuteronomy",
    "long_name": "DEUTERONOMY",
    "index": "05",
    "verses": [
      46,
      37,
      29,
      49,
      33,
      25,
      26,
      20,
      29,
      22,
      32,
      32,
      18,
      29,
      23,
      22,
      20,
      22,
      21,
      20,
      23,
      30,
      25,
      22,
      19,
      19,
      26,
      68,
      29,
      20,
      30,
      52,
      29,
      12
    ]
  },
  "Josh.": {
    "name": "Joshua",
    "long_name": "JOSHUA",
    "index": "06",
    "verses": [
      18,
      24,
      17,
      24,
      15,
      27,
      26,
      35,
      27,
      43,
      23,
      24,
      33,
      15,
      63,
      10,
      18,
      28,
      51,
      9,
      45,
      34,
      16,
      33
    ]
  },
  "Judg.": {
    "name": "Judges",
    "long_name": "JUDGES",
    "index": "07",
    "verses": [
      36,
      23,
      31,
      24,
      31,
      40,
      25,
      35,
      57,
      18,
      40,
      15,
      25,
      20,
      20,
      31,
      13,
      31,
      30,
      48,
      25
    ]
  },
  "Ruth": {
    "name": "Ruth",
    "long_name": "RUTH",
    "index": "08",
    "verses": [
      22,
      23,
      18,
      22
    ]
  },
  "1 Sam.": {
    "name": "1 Samuel",
    "long_name": "FIRST SAMUEL",
    "index": "09",
    "verses": [
      28,
      36,
      21,
      22,
      12,
      21,
      17,
      22,
      27,
      27,
      15,
      25,
      23,
      52,
      35,
      23,
      58,
      30,
      24,
      42,
      15,
      23,
      29,
      22,
      44,
      25,
      12,
      25,
      11,
      31,
      13
    ]
  },
  "2 Sam.": {
    "name": "2 Samuel",
    "long_name": "SECOND SAMUEL",
    "index": "10",
    "verses": [
      27,
      32,
      39,
      12,
      25,
      23,
      29,
      18,
      13,
      19,
      27,
      31,
      39,
      33,
      37,
      23,
      29,
      33,
      43,
      26,
      22,
      51,
      39,
      25
    ]
  },
  "1 Kings": {
    "name": "1 Kings",
    "long_name": "FIRST KINGS",
    "index": "11",
    "verses": [
      53,
      46,
      28,
      34,
      18,
      38,
      51,
      66,
      28,
      29,
      43,
      33,
      34,
      31,
      34,
      34,
      24,
      46,
      21,
      43,
      29,
      53
    ]
  },
  "2 Kings": {
    "name": "2 Kings",
    "long_name": "SECOND KINGS",
    "index": "12",
    "verses": [
      18,
      25,
      27,
      44,
      27,
      33,
      20,
      29,
      37,
      36,
      21,
      21,
      25,
      29,
      38,
      20,
      41,
      37,
      37,
      21,
      26,
      20,
      37,
      20,
      30
    ]
  },
  "1 Chron.": {
    "name": "1 Chronicles",
    "long_name": "FIRST CHRONICLES",
    "index": "13",
    "verses": [
      54,
      55,
      24,
      43,
      26,
      81,
      40,
      40,
      44,
      14,
      47,
      40,
      14,
      17,
      29,
      43,
      27,
      17,
      19,
      8,
      30,
      19,
      32,
      31,
      31,
      32,
      34,
      21,
      30
    ]
  },
  "2 Chron.": {
    "name": "2 Chronicles",
    "long_name": "SECOND CHRONICLES",
    "index": "14",
    "verses": [
      17,
      18,
      17,
      22,
      14,
      42,
      22,
      18,
      31,
      19,
      23,
      16,
      22,
      15,
      19,
      14,
      19,
      34,
      11,
      37,
      20,
      12,
      21,
      27,
      28,
      23,
      9,
      27,
      36,
      27,
      21,
      33,
      25,
      33,
      27,
      23
    ]
  },
  "Ezra": {
    "name": "Ezra",
    "long_name": "EZRA",
    "index": "15",
    "verses": [
      11,
      70,
      13,
      24,
      17,
      22,
      28,
      36,
      15,
      44
    ]
  },
  "Neh.": {
    "name": "Nehemiah",
    "long_name": "NEHEMIAH",
    "index": "16",
    "verses": [
      11,
      20,
      32,
      23,
      19,
      19,
      73,
      18,
      38,
      39,
      36,
      47,
      31
    ]
  },
  "Esth.": {
    "name": "Esther",
    "long_name": "ESTHER",
    "index": "17",
    "verses": [
      22,
      23,
      15,
      17,
      14,
      14,
      10,
      17,
      32,
      3
    ]
  },
  "Job": {
    "name": "Job",
    "long_name": "JOB",
    "index": "18",
    "verses": [
      22,
      13,
      26,
      21,
      27,
      30,
      21,
      22,
      35,
      22,
      20,
      25,
      28,
      22,
      35,
      22,
      16,
      21,
      29,
      29,
      34,
      30,
      17,
      25,
      6,
      14,
      23,
      28,
      25,
      31,
      40,
      22,
      33,
      37,
      16,
      33,
      24,
      41,
      30,
      24,
      34,
      17
    ]
  },
  "Psa.": {
    "name": "Psalms",
    "long_name": "PSALMS",
    "index": "19",
    "verses": [
      6,
      12,
      8,
      8,
      12,
      10,
      17,
      9,
      20,
      18,
      7,
      8,
      6,
      7,
      5,
      11,
      15,
      50,
      14,
      9,
      13,
      31,
      6,
      10,
      22,
      12,
      14,
      9,
      11,
      12,
      24,
      11,
      22,
      22,
      28,
      12,
      40,
      22,
      13,
      17,
      13,
      11,
      5,
      26,
      17,
      11,
      9,
      14,
      20,
      23,
      19,
      9,
      6,
      7,
      23,
      13,
      11,
      11,
      17,
      12,
      8,
      12,
      11,
      10,
      13,
      20,
      7,
      35,
      36,
      5,
      24,
      20,
      28,
      23,
      10,
      12,
      20,
      72,
      13,
      19,
      16,
      8,
      18,
      12,
      13,
      17,
      7,
      18,
      52,
      17,
      16,
      15,
      5,
      23,
      11,
      13,
      12,
      9,
      9,
      5,
      8,
      28,
      22,
      35,
      45,
      48,
      43,
      13,
      31,
      7,
      10,
      10,
      9,
      8,
      18,
      19,
      2,
      29,
      176,
      7,
      8,
      9,
      4,
      8,
      5,
      6,
      5,
      6,
      8,
      8,
      3,
      18,
      3,
      3,
      21,
      26,
      9,
      8,
      24,
      13,
      10,
      7,
      12,
      15,
      21,
      10,
      20,
      14,
      9,
      6
    ]
  },
  "Prov.": {
    "name": "Proverbs",
    "long_name": "PROVERBS",
    "index": "20",
    "verses": [
      33,
      22,
      35,
      27,
      23,
      35,
      27,
      36,
      18,
      32,
      31,
      28,
      25,
      35,
      33,
      33,
      28,
      24,
      29,
      30,
      31,
      29,
      35,
      34,
      28,
      28,
      27,
      28,
      27,
      33,
      31
    ]
  },
  "Eccl.": {
    "name": "Ecclesiastes",
    "long_name": "ECCLESIASTES",
    "index": "21",
    "verses": [
      18,
      26,
      22,
      16,
      20,
      12,
      29,
      17,
      18,
      20,
      10,
      14
    ]
  },
  "S.S.": {
    "name": "Song of Songs",
    "long_name": "SONG OF SONGS",
    "index": "22",
    "verses": [
      17,
      17,
      11,
      16,
      16,
      13,
      13,
      14
    ]
  },
  "Isa.": {
    "name": "Isaiah",
    "long_name": "ISAIAH",
    "index": "23",
    "verses": [
      31,
      22,
      26,
      6,
      30,
      13,
      25,
      22,
      21,
      34,
      16,
      6,
      22,
      32,
      9,
      14,
      14,
      7,
      25,
      6,
      17,
      25,
      18,
      23,
      12,
      21,
      13,
      29,
      24,
      33,
      9,
      20,
      24,
      17,
      10,
      22,
      38,
      22,
      8,
      31,
      29,
      25,
      28,
      28,
      25,
      13,
      15,
      22,
      26,
      11,
      23,
      15,
      12,
      17,
      13,
      12,
      21,
      14,
      21,
      22,
      11,
      12,
      19,
      12,
      25,
      24
    ]
  },
  "Jer.": {
    "name": "Jeremiah",
    "long_name": "JEREMIAH",
    "index": "24",
    "verses": [
      19,
      37,
      25,
      31,
      31,
      30,
      34,
      22,
      26,
      25,
      23,
      17,
      27,
      22,
      21,
      21,
      27,
      23,
      15,
      18,
      14,
      30,
      40,
      10,
      38,
      24,
      22,
      17,
      32,
      24,
      40,
      44,
      26,
      22,
      19,
      32,
      21,
      28,
      18,
      16,
      18,
      22,
      13,
      30,
      5,
      28,
      7,
      47,
      39,
      46,
      64,
      34
    ]
  },
  "Lam.": {
    "name": "Lamentations",
    "long_name": "LAMENTATIONS",
    "index": "25",
    "verses": [
      22,
      22,
      66,
      22,
      22
    ]
  },
  "Ezek.": {
    "name": "Ezekiel",
    "long_name": "EZEKIEL",
    "index": "26",
    "verses": [
      28,
      10,
      27,
      17,
      17,
      14,
      27,
      18,
      11,
      22,
      25,
      28,
      23,
      23,
      8,
      63,
      24,
      32,
      14,
      49,
      32,
      31,
      49,
      27,
      17,
      21,
      36,
      26,
      21,
      26,
      18,
      32,
      33,
      31,
      15,
      38,
      28,
      23,
      29,
      49,
      26,
      20,
      27,
      31,
      25,
      24,
      23,
      35
    ]
  },
  "Dan.": {
    "name": "Daniel",
    "long_name": "DANIEL",
    "index": "27",
    "verses": [
      21,
      49,
      30,
      37,
      31,
      28,
      28,
      27,
      27,
      21,
      45,
      13
    ]
  },
  "Hosea": {
    "name": "Hosea",
    "long_name": "HOSEA",
    "index": "28",
    "verses": [
      11,
      23,
      5,
      19,
      15,
      11,
      16,
      14,
      17,
      15,
      12,
      14,
      16,
      9
    ]
  },
  "Joel": {
    "name": "Joel",
    "long_name": "JOEL",
    "index": "29",
    "verses": [
      20,
      32,
      21
    ]
  },
  "Amos": {
    "name": "Amos",
    "long_name": "AMOS",
    "index": "30",
    "verses": [
      15,
      16,
      15,
      13,
      27,
      14,
      17,
      14,
      15
    ]
  },
  "Oba.": {
    "name": "Obadiah",
    "long_name": "OBADIAH",
    "index": "31",
    "verses": [
      21
    ]
  },
  "Jonah": {
    "name": "Jonah",
    "long_name": "JONAH",
    "index": "32",
    "verses": [
      17,
      10,
      10,
      11
    ]
  },
  "Micah": {
    "name": "Micah",
    "long_name": "MICAH",
    "index": "33",
    "verses": [
      16,
      13,
      12,
      13,
      15,
      16,
      20
    ]
  },
  "Nahum": {
    "name": "Nahum",
    "long_name": "NAHUM",
    "index": "34",
    "verses": [
      15,
      13,
      19
    ]
  },
  "Hab.": {
    "name": "Habakkuk",
    "long_name": "HABAKKUK",
    "index": "35",
    "verses": [
      17,
      20,
      19
    ]
  },
  "Zeph.": {
    "name": "Zephaniah",
    "long_name": "ZEPHANIAH",
    "index": "36",
    "verses": [
      18,
      15,
      20
    ]
  },
  "Hag.": {
    "name": "Haggai",
    "long_name": "HAGGAI",
    "index": "37",
    "verses": [
      15,
      23
    ]
  },
  "Zech.": {
    "name": "Zechariah",
    "long_name": "ZECHARIAH",
    "index": "38",
    "verses": [
      21,
      13,
      10,
      14,
      11,
      15,
      14,
      23,
      17,
      12,
      17,
      14,
      9,
      21
    ]
  },
  "Mal.": {
    "name": "Malachi",
    "long_name": "MALACHI",
    "index": "39",
    "verses": [
      14,
      17,
      18,
      6
    ]
  }
};

NT = {
  "Matt.": {
    "name": "Matthew",
    "long_name": "THE GOSPEL ACCORDING TO MATTHEW",
    "index": "40",
    "verses": [
      25,
      23,
      17,
      25,
      48,
      34,
      29,
      34,
      38,
      42,
      30,
      50,
      58,
      36,
      39,
      28,
      27,
      35,
      30,
      34,
      46,
      46,
      39,
      51,
      46,
      75,
      66,
      20
    ]
  },
  "Mark": {
    "name": "Mark",
    "long_name": "THE GOSPEL ACCORDING TO MARK",
    "index": "41",
    "verses": [
      45,
      28,
      35,
      41,
      43,
      56,
      37,
      38,
      50,
      52,
      33,
      44,
      37,
      72,
      47,
      20
    ]
  },
  "Luke": {
    "name": "Luke",
    "long_name": "THE GOSPEL ACCORDING TO LUKE",
    "index": "42",
    "verses": [
      80,
      52,
      38,
      44,
      39,
      49,
      50,
      56,
      62,
      42,
      54,
      59,
      35,
      35,
      32,
      31,
      37,
      43,
      48,
      47,
      38,
      71,
      56,
      53
    ]
  },
  "John": {
    "name": "John",
    "long_name": "THE GOSPEL ACCORDING TO JOHN",
    "index": "43",
    "verses": [
      51,
      25,
      36,
      54,
      47,
      71,
      53,
      59,
      41,
      42,
      57,
      50,
      38,
      31,
      27,
      33,
      26,
      40,
      42,
      31,
      25
    ]
  },
  "Acts": {
    "name": "Acts",
    "long_name": "THE ACTS OF THE APOSTLES",
    "index": "44",
    "verses": [
      26,
      47,
      26,
      37,
      42,
      15,
      60,
      40,
      43,
      48,
      30,
      25,
      52,
      28,
      41,
      40,
      34,
      28,
      41,
      38,
      40,
      30,
      35,
      27,
      27,
      32,
      44,
      31
    ]
  },
  "Rom.": {
    "name": "Romans",
    "long_name": "THE EPISTLE OF PAUL TO THE ROMANS",
    "index": "45",
    "verses": [
      32,
      29,
      31,
      25,
      21,
      23,
      25,
      39,
      33,
      21,
      36,
      21,
      14,
      23,
      33,
      27
    ]
  },
  "1 Cor.": {
    "name": "1 Corinthians",
    "long_name": "THE FIRST EPISTLE OF PAUL TO THE CORINTHIANS",
    "index": "46",
    "verses": [
      31,
      16,
      23,
      21,
      13,
      20,
      40,
      13,
      27,
      33,
      34,
      31,
      13,
      40,
      58,
      24
    ]
  },
  "2 Cor.": {
    "name": "2 Corinthians",
    "long_name": "THE SECOND EPISTLE OF PAUL TO THE CORINTHIANS",
    "index": "47",
    "verses": [
      24,
      17,
      18,
      18,
      21,
      18,
      16,
      24,
      15,
      18,
      33,
      21,
      14
    ]
  },
  "Gal.": {
    "name": "Galatians",
    "long_name": "THE EPISTLE OF PAUL TO THE GALATIANS",
    "index": "48",
    "verses": [
      24,
      21,
      29,
      31,
      26,
      18
    ]
  },
  "Eph.": {
    "name": "Ephesians",
    "long_name": "THE EPISTLE OF PAUL TO THE EPHESIANS",
    "index": "49",
    "verses": [
      23,
      22,
      21,
      32,
      33,
      24
    ]
  },
  "Phil.": {
    "name": "Philippians",
    "long_name": "THE EPISTLE OF PAUL TO THE PHILIPPIANS",
    "index": "50",
    "verses": [
      30,
      30,
      21,
      23
    ]
  },
  "Col.": {
    "name": "Colossians",
    "long_name": "THE EPISTLE OF PAUL TO THE COLOSSIANS",
    "index": "51",
    "verses": [
      29,
      23,
      25,
      18
    ]
  },
  "1 Thes.": {
    "name": "1 Thessalonians",
    "long_name": "THE FIRST EPISTLE OF PAUL TO THE THESSALONIANS",
    "index": "52",
    "verses": [
      10,
      20,
      13,
      18,
      28
    ]
  },
  "2 Thes.": {
    "name": "2 Thessalonians",
    "long_name": "THE SECOND EPISTLE OF PAUL TO THE THESSALONIANS",
    "index": "53",
    "verses": [
      12,
      17,
      18
    ]
  },
  "1 Tim.": {
    "name": "1 Timothy",
    "long_name": "THE FIRST EPISTLE OF PAUL TO TIMOTHY",
    "index": "54",
    "verses": [
      20,
      15,
      16,
      16,
      25,
      21
    ]
  },
  "2 Tim.": {
    "name": "2 Timothy",
    "long_name": "THE SECOND EPISTLE OF PAUL TO TIMOTHY",
    "index": "55",
    "verses": [
      18,
      26,
      17,
      22
    ]
  },
  "Titus": {
    "name": "Titus",
    "long_name": "THE EPISTLE OF PAUL TO TITUS",
    "index": "56",
    "verses": [
      16,
      15,
      15
    ]
  },
  "Philem.": {
    "name": "Philemon",
    "long_name": "THE EPISTLE OF PAUL TO PHILEMON",
    "index": "57",
    "verses": [
      25
    ]
  },
  "Heb.": {
    "name": "Hebrews",
    "long_name": "THE EPISTLE TO THE HEBREWS",
    "index": "58",
    "verses": [
      14,
      18,
      19,
      16,
      14,
      20,
      28,
      13,
      28,
      39,
      40,
      29,
      25
    ]
  },
  "James": {
    "name": "James",
    "long_name": "THE EPISTLE OF JAMES",
    "index": "59",
    "verses": [
      27,
      26,
      18,
      17,
      20
    ]
  },
  "1 Pet.": {
    "name": "1 Peter",
    "long_name": "THE FIRST EPISTLE OF PETER",
    "index": "60",
    "verses": [
      25,
      25,
      22,
      19,
      14
    ]
  },
  "2 Pet.": {
    "name": "2 Peter",
    "long_name": "THE SECOND EPISTLE OF PETER",
    "index": "61",
    "verses": [
      21,
      22,
      18
    ]
  },
  "1 John": {
    "name": "1 John",
    "long_name": "THE FIRST EPISTLE OF JOHN",
    "index": "62",
    "verses": [
      10,
      29,
      24,
      21,
      21
    ]
  },
  "2 John": {
    "name": "2 John",
    "long_name": "THE SECOND EPISTLE OF JOHN",
    "index": "63",
    "verses": [
      13
    ]
  },
  "3 John": {
    "name": "3 John",
    "long_name": "THE THIRD EPISTLE OF JOHN",
    "index": "64",
    "verses": [
      14
    ]
  },
  "Jude": {
    "name": "Jude",
    "long_name": "THE EPISTLE OF JUDE",
    "index": "65",
    "verses": [
      25
    ]
  },
  "Rev.": {
    "name": "Revelation",
    "long_name": "REVELATION",
    "index": "66",
    "verses": [
      20,
      29,
      22,
      11,
      14,
      17,
      17,
      13,
      21,
      11,
      19,
      18,
      18,
      20,
      8,
      21,
      18,
      24,
      21,
      15,
      27,
      21
    ]
  }
};

getBook = function(name, parts){
  parts = (typeof parts === 'undefined' || !parts) ? false : true;
  name = name.replace(/\s+/g, ' ').replace(/\. (.)/g, '.$1');
  
  var result;
  switch (String(name)) {
    case "GN.":
    case "Gn.":
    case "GEN.":
    case "Gen.":
    case "GENESIS":
    case "Genesis":
      result = [OT, "Gen."];
      break;

    case "EX.":
    case "Ex.":
    case "EXO.":
    case "Exo.":
    case "EXOD.":
    case "Exod.":
    case "EXODUS":
    case "Exodus":
      result = [OT, "Exo."];
      break;

    case "LV.":
    case "Lv.":
    case "LEV.":
    case "Lev.":
    case "LEVITICUS":
    case "Leviticus":
      result = [OT, "Lev."];
      break;

    case "NM.":
    case "Nm.":
    case "NUM.":
    case "Num.":
    case "NUMBERS":
    case "Numbers":
      result = [OT, "Num."];
      break;

    case "DT.":
    case "Dt.":
    case "DEUT.":
    case "Deut.":
    case "DUETERONOMY":
    case "Deuteronomy":
      result = [OT, "Deut."];
      break;

    case "JO.":
    case "Jo.":
    case "JOSH.":
    case "Josh.":
    case "JOSHUA":
    case "Joshua":
      result = [OT, "Josh."];
      break;

    case "JDS.":
    case "Jds.":
    case "JUDG.":
    case "Judg.":
    case "JUDGES":
    case "Judges":
      result = [OT, "Judg."];
      break;

    case "RU.":
    case "Ru.":
    case "RUTH":
    case "Ruth":
      result = [OT, "Ruth"];
      break;

    case "1 SM.":
    case "1 Sm.":
    case "1 SAM.":
    case "1 Sam.":
    case "1 SAMUEL":
    case "1 Samuel":
    case "i SM.":
    case "i Sm.":
    case "i SAM.":
    case "i Sam.":
    case "i SAMUEL":
    case "i Samuel":
    case "I SM.":
    case "I Sm.":
    case "I SAM.":
    case "I Sam.":
    case "I SAMUEL":
    case "I Samuel":
    case "FIRST SM.":
    case "FIRST Sm.":
    case "FIRST SAM.":
    case "FIRST Sam.":
    case "FIRST SAMUEL":
    case "FIRST Samuel":
    case "First SM.":
    case "First Sm.":
    case "First SAM.":
    case "First Sam.":
    case "First SAMUEL":
    case "First Samuel":
    case "first SM.":
    case "first Sm.":
    case "first SAM.":
    case "first Sam.":
    case "first SAMUEL":
    case "first Samuel":
      result = [OT, "1 Sam."];
      break;

    case "2 SM.":
    case "2 Sm.":
    case "2 SAM.":
    case "2 Sam.":
    case "2 SAMUEL":
    case "2 Samuel":
    case "ii SM.":
    case "ii Sm.":
    case "ii SAM.":
    case "ii Sam.":
    case "ii SAMUEL":
    case "ii Samuel":
    case "II SM.":
    case "II Sm.":
    case "II SAM.":
    case "II Sam.":
    case "II SAMUEL":
    case "II Samuel":
    case "SECOND SM.":
    case "SECOND Sm.":
    case "SECOND SAM.":
    case "SECOND Sam.":
    case "SECOND SAMUEL":
    case "SECOND Samuel":
    case "Second SM.":
    case "Second Sm.":
    case "Second SAM.":
    case "Second Sam.":
    case "Second SAMUEL":
    case "Second Samuel":
    case "second SM.":
    case "second Sm.":
    case "second SAM.":
    case "second Sam.":
    case "second SAMUEL":
    case "second Samuel":
      result = [OT, "2 Sam."];
      break;

    case "1 KGS.":
    case "1 Kgs.":
    case "1 KINGS":
    case "1 Kings":
    case "i KGS.":
    case "i Kgs.":
    case "i KINGS":
    case "i Kings":
    case "I KGS.":
    case "I Kgs.":
    case "I KINGS":
    case "I Kings":
    case "FIRST KGS.":
    case "FIRST Kgs.":
    case "FIRST KINGS":
    case "FIRST Kings":
    case "First KGS.":
    case "First Kgs.":
    case "First KINGS":
    case "First Kings":
    case "first KGS.":
    case "first Kgs.":
    case "first KINGS":
    case "first Kings":
      result = [OT, "1 Kings"];
      break;

    case "2 KGS.":
    case "2 Kgs.":
    case "2 KINGS":
    case "2 Kings":
    case "ii KGS.":
    case "ii Kgs.":
    case "ii KINGS":
    case "ii Kings":
    case "II KGS.":
    case "II Kgs.":
    case "II KINGS":
    case "II Kings":
    case "SECOND KGS.":
    case "SECOND Kgs.":
    case "SECOND KINGS":
    case "SECOND Kings":
    case "Second KGS.":
    case "Second Kgs.":
    case "Second KINGS":
    case "Second Kings":
    case "second KGS.":
    case "second Kgs.":
    case "second KINGS":
    case "second Kings":
      result = [OT, "2 Kings"];
      break;

    case "1 CHR.":
    case "1 Chr.":
    case "1 CHRON.":
    case "1 Chron.":
    case "1 CHRONICLES":
    case "1 Chronicles":
    case "i CHR.":
    case "i Chr.":
    case "i CHRON.":
    case "i Chron.":
    case "i CHRONICLES":
    case "i Chronicles":
    case "I CHR.":
    case "I Chr.":
    case "I CHRON.":
    case "I Chron.":
    case "I CHRONICLES":
    case "I Chronicles":
    case "FIRST CHR.":
    case "FIRST Chr.":
    case "FIRST CHRON.":
    case "FIRST Chron.":
    case "FIRST CHRONICLES":
    case "FIRST Chronicles":
    case "First CHR.":
    case "First Chr.":
    case "First CHRON.":
    case "First Chron.":
    case "First CHRONICLES":
    case "First Chronicles":
    case "first CHR.":
    case "first Chr.":
    case "first CHRON.":
    case "first Chron.":
    case "first CHRONICLES":
    case "first Chronicles":
      result = [OT, "1 Chron."];
      break;

    case "2 CHR.":
    case "2 Chr.":
    case "2 CHRON.":
    case "2 Chron.":
    case "2 CHRONICLES":
    case "2 Chronicles":
    case "ii CHR.":
    case "ii Chr.":
    case "ii CHRON.":
    case "ii Chron.":
    case "ii CHRONICLES":
    case "ii Chronicles":
    case "II CHR.":
    case "II Chr.":
    case "II CHRON.":
    case "II Chron.":
    case "II CHRONICLES":
    case "II Chronicles":
    case "SECOND CHR.":
    case "SECOND Chr.":
    case "SECOND CHRON.":
    case "SECOND Chron.":
    case "SECOND CHRONICLES":
    case "SECOND Chronicles":
    case "Second CHR.":
    case "Second Chr.":
    case "Second CHRON.":
    case "Second Chron.":
    case "Second CHRONICLES":
    case "Second Chronicles":
    case "second CHR.":
    case "second Chr.":
    case "second CHRON.":
    case "second Chron.":
    case "second CHRONICLES":
    case "second Chronicles":
      result = [OT, "2 Chron."];
      break;

    case "EZR.":
    case "Ezr.":
    case "EZRA":
    case "Ezra":
      result = [OT, "Ezra"];
      break;

    case "NEH.":
    case "Neh.":
    case "NEHEMIAH":
    case "Nehemiah":
      result = [OT, "Neh."];
      break;

    case "EST.":
    case "Est.":
    case "ESTH.":
    case "Esth.":
    case "ESTHER":
    case "Esther":
      result = [OT, "Esth."];
      break;

    case "JB.":
    case "Jb.":
    case "JOB":
    case "Job":
      result = [OT, "Job"];
      break;

    case "PS.":
    case "Ps.":
    case "PSS.":
    case "Pss.":
    case "PSA.":
    case "Psa.":
    case "PSALM":
    case "Psalm":
    case "PSALMS":
    case "Psalms":
      result = [OT, "Psa."];
      break;

    case "PRV.":
    case "Prv.":
    case "PROV.":
    case "Prov.":
    case "PROVERBS":
    case "Proverbs":
      result = [OT, "Prov."];
      break;

    case "ECCL.":
    case "Eccl.":
    case "ECCLES.":
    case "Eccles.":
    case "ECCLESIASTES":
    case "Ecclesiastes":
      result = [OT, "Eccl."];
      break;

    case "SONG OF SOLOMON":
    case "SONG OF SONGS":
    case "SONG OF SOL.":
    case "Song of Solomon":
    case "Song of Songs":
    case "Song of Sol.":
    case "SG.":
    case "Sg.":
    case "S.S.":
      result = [OT, "S.S."];
      break;

    case "IS.":
    case "Is.":
    case "ISA.":
    case "Isa.":
    case "ISAIAH":
    case "Isaiah":
      result = [OT, "Isa."];
      break;

    case "JER.":
    case "Jer.":
    case "JEREMIAH":
    case "Jeremiah":
      result = [OT, "Jer."];
      break;

    case "LAM.":
    case "Lam.":
    case "LAMENTATIONS":
    case "Lamentations":
      result = [OT, "Lam."];
      break;

    case "EZ.":
    case "Ez.":
    case "EZEK.":
    case "Ezek.":
    case "EZEKIEL":
    case "Ezekiel":
      result = [OT, "Ezek."];
      break;

    case "DN.":
    case "Dn.":
    case "DAN.":
    case "Dan.":
    case "DANIEL":
    case "Daniel":
      result = [OT, "Dan."];
      break;

    case "HOS.":
    case "Hos.":
    case "HOSEA":
    case "Hosea":
      result = [OT, "Hosea"];
      break;

    case "JL.":
    case "Jl.":
    case "JOEL":
    case "Joel":
      result = [OT, "Joel"];
      break;

    case "AM.":
    case "Am.":
    case "AMOS":
    case "Amos":
      result = [OT, "Amos"];
      break;

    case "OB.":
    case "Ob.":
    case "OBA.":
    case "Oba.":
    case "OBAD.":
    case "Obad.":
    case "OBADIAH":
    case "Obadiah":
      result = [OT, "Oba."];
      break;

    case "JON.":
    case "Jon.":
    case "JONAH":
    case "Jonah":
      result = [OT, "Jonah"];
      break;

    case "MIC.":
    case "Mic.":
    case "MICAH":
    case "Micah":
      result = [OT, "Micah"];
      break;

    case "NAH.":
    case "Nah.":
    case "NAHUM":
    case "Nahum":
      result = [OT, "Nahum"];
      break;

    case "HB.":
    case "Hb.":
    case "HAB.":
    case "Hab.":
    case "HABAKKUK, Habakkuk":
      result = [OT, "Hab."];
      break;

    case "ZEPH.":
    case "Zeph.":
    case "ZEPHANIAH":
    case "Zephaniah":
      result = [OT, "Zeph."];
      break;

    case "HG.":
    case "Hg.":
    case "HAG.":
    case "Hag.":
    case "HAGGAI":
    case "Haggai":
      result = [OT, "Hag."];
      break;

    case "ZECH.":
    case "Zech.":
    case "ZECHARIAH":
    case "Zechariah":
      result = [OT, "Zech."];
      break;

    case "MAL.":
    case "Mal.":
    case "MALACHI":
    case "Malachi":
      result = [OT, "Mal."];
      break;

    case "MT.":
    case "Mt.":
    case "MATT.":
    case "Matt.":
    case "MATTHEW":
    case "Matthew":
      result = [NT, "Matt."];
      break;

    case "MK.":
    case "Mk.":
    case "MARK":
    case "Mark":
      result = [NT, "Mark"];
      break;

    case "LK.":
    case "Lk.":
    case "LUKE":
    case "Luke":
      result = [NT, "Luke"];
      break;

    case "JN.":
    case "Jn.":
    case "JOHN":
    case "John":
      result = [NT, "John"];
      break;

    case "ACTS":
    case "Acts":
      result = [NT, "Acts"];
      break;

    case "ROM.":
    case "Rom.":
    case "ROMANS":
    case "Romans":
      result = [NT, "Rom."];
      break;

    case "1 COR.":
    case "1 Cor.":
    case "1 CORINTHIANS":
    case "1 Corinthians":
    case "i COR.":
    case "i Cor.":
    case "i CORINTHIANS":
    case "i Corinthians":
    case "I COR.":
    case "I Cor.":
    case "I CORINTHIANS":
    case "I Corinthians":
    case "FIRST COR.":
    case "FIRST Cor.":
    case "FIRST CORINTHIANS":
    case "FIRST Corinthians":
    case "First COR.":
    case "First Cor.":
    case "First CORINTHIANS":
    case "First Corinthians":
    case "first COR.":
    case "first Cor.":
    case "first CORINTHIANS":
    case "first Corinthians":
      result = [NT, "1 Cor."];
      break;

    case "2 COR.":
    case "2 Cor.":
    case "2 CORINTHIANS":
    case "2 Corinthians":
    case "ii COR.":
    case "ii Cor.":
    case "ii CORINTHIANS":
    case "ii Corinthians":
    case "II COR.":
    case "II Cor.":
    case "II CORINTHIANS":
    case "II Corinthians":
    case "SECOND COR.":
    case "SECOND Cor.":
    case "SECOND CORINTHIANS":
    case "SECOND Corinthians":
    case "Second COR.":
    case "Second Cor.":
    case "Second CORINTHIANS":
    case "Second Corinthians":
    case "second COR.":
    case "second Cor.":
    case "second CORINTHIANS":
    case "second Corinthians":
      result = [NT, "2 Cor."];
      break;

    case "GAL.":
    case "Gal.":
    case "GALATIANS":
    case "Galatians":
      result = [NT, "Gal."];
      break;

    case "EPH.":
    case "Eph.":
    case "EPHESIANS":
    case "Ephesians":
      result = [NT, "Eph."];
      break;

    case "PHIL.":
    case "Phil.":
    case "PHILIPPIANS":
    case "Philippians":
      result = [NT, "Phil."];
      break;

    case "COL.":
    case "Col.":
    case "COLOSSIANS":
    case "Colossians":
      result = [NT, "Col."];
      break;

    case "1 THES.":
    case "1 Thes.":
    case "1 THESS.":
    case "1 Thess.":
    case "1 THESSALONIANS":
    case "1 Thessalonians":
    case "i THES.":
    case "i Thes.":
    case "i THESS.":
    case "i Thess.":
    case "i THESSALONIANS":
    case "i Thessalonians":
    case "I THES.":
    case "I Thes.":
    case "I THESS.":
    case "I Thess.":
    case "I THESSALONIANS":
    case "I Thessalonians":
    case "FIRST THES.":
    case "FIRST Thes.":
    case "FIRST THESS.":
    case "FIRST Thess.":
    case "FIRST THESSALONIANS":
    case "FIRST Thessalonians":
    case "First THES.":
    case "First Thes.":
    case "First THESS.":
    case "First Thess.":
    case "First THESSALONIANS":
    case "First Thessalonians":
    case "first THES.":
    case "first Thes.":
    case "first THESS.":
    case "first Thess.":
    case "first THESSALONIANS":
    case "first Thessalonians":
      result = [NT, "1 Thes."];
      break;

    case "2 THES.":
    case "2 Thes.":
    case "2 THESS.":
    case "2 Thess.":
    case "2 THESSALONIANS":
    case "2 Thessalonians":
    case "ii THES.":
    case "ii Thes.":
    case "ii THESS.":
    case "ii Thess.":
    case "ii THESSALONIANS":
    case "ii Thessalonians":
    case "II THES.":
    case "II Thes.":
    case "II THESS.":
    case "II Thess.":
    case "II THESSALONIANS":
    case "II Thessalonians":
    case "SECOND THES.":
    case "SECOND Thes.":
    case "SECOND THESS.":
    case "SECOND Thess.":
    case "SECOND THESSALONIANS":
    case "SECOND Thessalonians":
    case "Second THES.":
    case "Second Thes.":
    case "Second THESS.":
    case "Second Thess.":
    case "Second THESSALONIANS":
    case "Second Thessalonians":
    case "second THES.":
    case "second Thes.":
    case "second THESS.":
    case "second Thess.":
    case "second THESSALONIANS":
    case "second Thessalonians":
      result = [NT, "2 Thes."];
      break;

    case "1 TM.":
    case "1 Tm.":
    case "1 TIM.":
    case "1 Tim.":
    case "1 TIMOTHY":
    case "1 Timothy":
    case "i TM.":
    case "i Tm.":
    case "i TIM.":
    case "i Tim.":
    case "i TIMOTHY":
    case "i Timothy":
    case "I TM.":
    case "I Tm.":
    case "I TIM.":
    case "I Tim.":
    case "I TIMOTHY":
    case "I Timothy":
    case "FIRST TM.":
    case "FIRST Tm.":
    case "FIRST TIM.":
    case "FIRST Tim.":
    case "FIRST TIMOTHY":
    case "FIRST Timothy":
    case "First TM.":
    case "First Tm.":
    case "First TIM.":
    case "First Tim.":
    case "First TIMOTHY":
    case "First Timothy":
    case "first TM.":
    case "first Tm.":
    case "first TIM.":
    case "first Tim.":
    case "first TIMOTHY":
    case "first Timothy":
      result = [NT, "1 Tim."];
      break;

    case "2 TM.":
    case "2 Tm.":
    case "2 TIM.":
    case "2 Tim.":
    case "2 TIMOTHY":
    case "2 Timothy":
    case "ii TM.":
    case "ii Tm.":
    case "ii TIM.":
    case "ii Tim.":
    case "ii TIMOTHY":
    case "ii Timothy":
    case "II TM.":
    case "II Tm.":
    case "II TIM.":
    case "II Tim.":
    case "II TIMOTHY":
    case "II Timothy":
    case "SECOND TM.":
    case "SECOND Tm.":
    case "SECOND TIM.":
    case "SECOND Tim.":
    case "SECOND TIMOTHY":
    case "SECOND Timothy":
    case "Second TM.":
    case "Second Tm.":
    case "Second TIM.":
    case "Second Tim.":
    case "Second TIMOTHY":
    case "Second Timothy":
    case "second TM.":
    case "second Tm.":
    case "second TIM.":
    case "second Tim.":
    case "second TIMOTHY":
    case "second Timothy":
      result = [NT, "2 Tim."];
      break;

    case "TI.":
    case "Ti.":
    case "TITUS":
    case "Titus":
      result = [NT, "Titus"];
      break;

    case "PHILM.":
    case "Philm.":
    case "PHILEM.":
    case "Philem.":
    case "PHILEMON":
    case "Philemon":
      result = [NT, "Philem."];
      break;

    case "HEB.":
    case "Heb.":
    case "HEBREWS":
    case "Hebrews":
      result = [NT, "Heb."];
      break;

    case "JA.":
    case "Ja.":
    case "JAS.":
    case "Jas.":
    case "JAMES":
    case "James":
      result = [NT, "James"];
      break;

    case "1 PT.":
    case "1 Pt.":
    case "1 PET.":
    case "1 Pet.":
    case "1 PETER":
    case "1 Peter":
    case "i PT.":
    case "i Pt.":
    case "i PET.":
    case "i Pet.":
    case "i PETER":
    case "i Peter":
    case "I PT.":
    case "I Pt.":
    case "I PET.":
    case "I Pet.":
    case "I PETER":
    case "I Peter":
    case "FIRST PT.":
    case "FIRST Pt.":
    case "FIRST PET.":
    case "FIRST Pet.":
    case "FIRST PETER":
    case "FIRST Peter":
    case "First PT.":
    case "First Pt.":
    case "First PET.":
    case "First Pet.":
    case "First PETER":
    case "First Peter":
    case "first PT.":
    case "first Pt.":
    case "first PET.":
    case "first Pet.":
    case "first PETER":
    case "first Peter":
      result = [NT, "1 Pet."];
      break;

    case "2 PT.":
    case "2 Pt.":
    case "2 PET.":
    case "2 Pet.":
    case "2 PETER":
    case "2 Peter":
    case "ii PT.":
    case "ii Pt.":
    case "ii PET.":
    case "ii Pet.":
    case "ii PETER":
    case "ii Peter":
    case "II PT.":
    case "II Pt.":
    case "II PET.":
    case "II Pet.":
    case "II PETER":
    case "II Peter":
    case "SECOND PT.":
    case "SECOND Pt.":
    case "SECOND PET.":
    case "SECOND Pet.":
    case "SECOND PETER":
    case "SECOND Peter":
    case "Second PT.":
    case "Second Pt.":
    case "Second PET.":
    case "Second Pet.":
    case "Second PETER":
    case "Second Peter":
    case "second PT.":
    case "second Pt.":
    case "second PET.":
    case "second Pet.":
    case "second PETER":
    case "second Peter":
      result = [NT, "2 Pet."];
      break;

    case "1 JN.":
    case "1 Jn.":
    case "1 JOHN":
    case "1 John":
    case "i JN.":
    case "i Jn.":
    case "i JOHN":
    case "i John":
    case "I JN.":
    case "I Jn.":
    case "I JOHN":
    case "I John":
    case "FIRST JN.":
    case "FIRST Jn.":
    case "FIRST JOHN":
    case "FIRST John":
    case "First JN.":
    case "First Jn.":
    case "First JOHN":
    case "First John":
    case "first JN.":
    case "first Jn.":
    case "first JOHN":
    case "first John":
      result = [NT, "1 John"];
      break;

    case "2 JN.":
    case "2 Jn.":
    case "2 JOHN":
    case "2 John":
    case "ii JN.":
    case "ii Jn.":
    case "ii JOHN":
    case "ii John":
    case "II JN.":
    case "II Jn.":
    case "II JOHN":
    case "II John":
    case "SECOND JN.":
    case "SECOND Jn.":
    case "SECOND JOHN":
    case "SECOND John":
    case "Second JN.":
    case "Second Jn.":
    case "Second JOHN":
    case "Second John":
    case "second JN.":
    case "second Jn.":
    case "second JOHN":
    case "second John":
      result = [NT, "2 John"];
      break;

    case "3 JN.":
    case "3 Jn.":
    case "3 JOHN":
    case "3 John":
    case "iii JN.":
    case "iii Jn.":
    case "iii JOHN":
    case "iii John":
    case "III JN.":
    case "III Jn.":
    case "III JOHN":
    case "III John":
    case "THIRD JN.":
    case "THIRD Jn.":
    case "THIRD JOHN":
    case "THIRD John":
    case "Third JN.":
    case "Third Jn.":
    case "Third JOHN":
    case "Third John":
    case "third JN.":
    case "third Jn.":
    case "third JOHN":
    case "third John":
      result = [NT, "3 John"];
      break;

    case "JUDE":
    case "Jude":
      result = [NT, "Jude"];
      break;

    case "RV.":
    case "Rv.":
    case "REV.":
    case "Rev.":
    case "REVELATION":
    case "Revelation":
      result = [NT, "Rev."];
      break;

    default:
      throw `unknown name: '${name}'`;
  }
  return parts ? result : result[0][result[1]];
};

getBookRegex = function(options) {
  return new RegExp(
      "(^|[^a-z0-9])((?:G(?:N\\.|n\\.|EN(?:\\.|ESIS)|en(?:\\.|esis)|AL(?:\\.|ATIANS)|al(?:\\.|atians))|E(?:X(?:\\.|O(?:\\.|D(?:\\.|US)))|x(?:\\.|o(?:\\.|d(?:\\.|us)))|ST(?:\\.|H(?:\\.|ER))|st(?:\\.|h(?:\\.|er))|CCL(?:\\.|ES(?:\\.|IASTES))|ccl(?:\\.|es(?:\\.|iastes))|Z(?:R(?:\\.|A)|\\.|EK(?:\\.|IEL))|z(?:r(?:\\.|a)|\\.|ek(?:\\.|iel))|PH(?:\\.|ESIANS)|ph(?:\\.|esians))|L(?:V\\.|v\\.|EV(?:\\.|ITICUS)|ev(?:\\.|iticus)|AM(?:\\.|ENTATIONS)|am(?:\\.|entations)|K\\.|k\\.|UKE|uke)|N(?:M\\.|m\\.|UM(?:\\.|BERS)|um(?:\\.|bers)|EH(?:\\.|EMIAH)|eh(?:\\.|emiah)|AH(?:\\.|UM)|ah(?:\\.|um))|D(?:T\\.|t\\.|EUT\\.|UETERONOMY|eut(?:\\.|eronomy)|N\\.|n\\.|AN(?:\\.|IEL)|an(?:\\.|iel))|J(?:O(?:\\.|SH(?:\\.|UA)|B|EL|N(?:\\.|AH)|HN)|o(?:\\.|sh(?:\\.|ua)|b|el|n(?:\\.|ah)|hn)|DS\\.|ds\\.|B\\.|b\\.|ER(?:\\.|EMIAH)|er(?:\\.|emiah)|L\\.|l\\.|N\\.|n\\.|A(?:\\.|S\\.|MES)|a(?:\\.|s\\.|mes)|UD(?:G(?:\\.|ES)|E)|ud(?:g(?:\\.|es)|e))|R(?:U(?:\\.|TH)|u(?:\\.|th)|OM(?:\\.|ANS)|om(?:\\.|ans)|V\\.|v\\.|EV(?:\\.|ELATION)|ev(?:\\.|elation))|F(?:IRST\\s+(?:S(?:M\\.|m\\.|AM(?:\\.|UEL)|am(?:\\.|uel))|K(?:GS\\.|gs\\.|INGS|ings)|C(?:HR(?:\\.|ON(?:\\.|ICLES))|hr(?:\\.|on(?:\\.|icles))|OR(?:\\.|INTHIANS)|or(?:\\.|inthians))|T(?:HES(?:\\.|S(?:\\.|ALONIANS))|hes(?:\\.|s(?:\\.|alonians))|M\\.|m\\.|IM(?:\\.|OTHY)|im(?:\\.|othy))|P(?:T\\.|t\\.|ET(?:\\.|ER)|et(?:\\.|er))|J(?:N\\.|n\\.|OHN|ohn))|irst\\s+(?:S(?:M\\.|m\\.|AM(?:\\.|UEL)|am(?:\\.|uel))|K(?:GS\\.|gs\\.|INGS|ings)|C(?:HR(?:\\.|ON(?:\\.|ICLES))|hr(?:\\.|on(?:\\.|icles))|OR(?:\\.|INTHIANS)|or(?:\\.|inthians))|T(?:HES(?:\\.|S(?:\\.|ALONIANS))|hes(?:\\.|s(?:\\.|alonians))|M\\.|m\\.|IM(?:\\.|OTHY)|im(?:\\.|othy))|P(?:T\\.|t\\.|ET(?:\\.|ER)|et(?:\\.|er))|J(?:N\\.|n\\.|OHN|ohn)))|i(?:\\s+(?:S(?:M\\.|m\\.|AM(?:\\.|UEL)|am(?:\\.|uel))|K(?:GS\\.|gs\\.|INGS|ings)|C(?:HR(?:\\.|ON(?:\\.|ICLES))|hr(?:\\.|on(?:\\.|icles))|OR(?:\\.|INTHIANS)|or(?:\\.|inthians))|T(?:HES(?:\\.|S(?:\\.|ALONIANS))|hes(?:\\.|s(?:\\.|alonians))|M\\.|m\\.|IM(?:\\.|OTHY)|im(?:\\.|othy))|P(?:T\\.|t\\.|ET(?:\\.|ER)|et(?:\\.|er))|J(?:N\\.|n\\.|OHN|ohn))|i(?:\\s+(?:S(?:M\\.|m\\.|AM(?:\\.|UEL)|am(?:\\.|uel))|K(?:GS\\.|gs\\.|INGS|ings)|C(?:HR(?:\\.|ON(?:\\.|ICLES))|hr(?:\\.|on(?:\\.|icles))|OR(?:\\.|INTHIANS)|or(?:\\.|inthians))|T(?:HES(?:\\.|S(?:\\.|ALONIANS))|hes(?:\\.|s(?:\\.|alonians))|M\\.|m\\.|IM(?:\\.|OTHY)|im(?:\\.|othy))|P(?:T\\.|t\\.|ET(?:\\.|ER)|et(?:\\.|er))|J(?:N\\.|n\\.|OHN|ohn))|i\\s+J(?:N\\.|n\\.|OHN|ohn)))|I(?:\\s+(?:S(?:M\\.|m\\.|AM(?:\\.|UEL)|am(?:\\.|uel))|K(?:GS\\.|gs\\.|INGS|ings)|C(?:HR(?:\\.|ON(?:\\.|ICLES))|hr(?:\\.|on(?:\\.|icles))|OR(?:\\.|INTHIANS)|or(?:\\.|inthians))|T(?:HES(?:\\.|S(?:\\.|ALONIANS))|hes(?:\\.|s(?:\\.|alonians))|M\\.|m\\.|IM(?:\\.|OTHY)|im(?:\\.|othy))|P(?:T\\.|t\\.|ET(?:\\.|ER)|et(?:\\.|er))|J(?:N\\.|n\\.|OHN|ohn))|S(?:\\.|A(?:\\.|IAH))|s(?:\\.|a(?:\\.|iah))|I(?:\\s+(?:S(?:M\\.|m\\.|AM(?:\\.|UEL)|am(?:\\.|uel))|K(?:GS\\.|gs\\.|INGS|ings)|C(?:HR(?:\\.|ON(?:\\.|ICLES))|hr(?:\\.|on(?:\\.|icles))|OR(?:\\.|INTHIANS)|or(?:\\.|inthians))|T(?:HES(?:\\.|S(?:\\.|ALONIANS))|hes(?:\\.|s(?:\\.|alonians))|M\\.|m\\.|IM(?:\\.|OTHY)|im(?:\\.|othy))|P(?:T\\.|t\\.|ET(?:\\.|ER)|et(?:\\.|er))|J(?:N\\.|n\\.|OHN|ohn))|I\\s+J(?:N\\.|n\\.|OHN|ohn)))|S(?:ECOND\\s+(?:S(?:M\\.|m\\.|AM(?:\\.|UEL)|am(?:\\.|uel))|K(?:GS\\.|gs\\.|INGS|ings)|C(?:HR(?:\\.|ON(?:\\.|ICLES))|hr(?:\\.|on(?:\\.|icles))|OR(?:\\.|INTHIANS)|or(?:\\.|inthians))|T(?:HES(?:\\.|S(?:\\.|ALONIANS))|hes(?:\\.|s(?:\\.|alonians))|M\\.|m\\.|IM(?:\\.|OTHY)|im(?:\\.|othy))|P(?:T\\.|t\\.|ET(?:\\.|ER)|et(?:\\.|er))|J(?:N\\.|n\\.|OHN|ohn))|econd\\s+(?:S(?:M\\.|m\\.|AM(?:\\.|UEL)|am(?:\\.|uel))|K(?:GS\\.|gs\\.|INGS|ings)|C(?:HR(?:\\.|ON(?:\\.|ICLES))|hr(?:\\.|on(?:\\.|icles))|OR(?:\\.|INTHIANS)|or(?:\\.|inthians))|T(?:HES(?:\\.|S(?:\\.|ALONIANS))|hes(?:\\.|s(?:\\.|alonians))|M\\.|m\\.|IM(?:\\.|OTHY)|im(?:\\.|othy))|P(?:T\\.|t\\.|ET(?:\\.|ER)|et(?:\\.|er))|J(?:N\\.|n\\.|OHN|ohn))|ONG\\s+OF SO(?:NGS|L(?:OMON|\\.))|ong\\s+of So(?:ngs|l(?:omon|\\.))|G\\.|g\\.|\\.\\s*S\\.)|1\\s+(?:S(?:M\\.|m\\.|AM(?:\\.|UEL)|am(?:\\.|uel))|K(?:GS\\.|gs\\.|INGS|ings)|C(?:HR(?:\\.|ON(?:\\.|ICLES))|hr(?:\\.|on(?:\\.|icles))|OR(?:\\.|INTHIANS)|or(?:\\.|inthians))|T(?:HES(?:\\.|S(?:\\.|ALONIANS))|hes(?:\\.|s(?:\\.|alonians))|M\\.|m\\.|IM(?:\\.|OTHY)|im(?:\\.|othy))|P(?:T\\.|t\\.|ET(?:\\.|ER)|et(?:\\.|er))|J(?:N\\.|n\\.|OHN|ohn))|first\\s+(?:S(?:M\\.|m\\.|AM(?:\\.|UEL)|am(?:\\.|uel))|K(?:GS\\.|gs\\.|INGS|ings)|C(?:HR(?:\\.|ON(?:\\.|ICLES))|hr(?:\\.|on(?:\\.|icles))|OR(?:\\.|INTHIANS)|or(?:\\.|inthians))|T(?:HES(?:\\.|S(?:\\.|ALONIANS))|hes(?:\\.|s(?:\\.|alonians))|M\\.|m\\.|IM(?:\\.|OTHY)|im(?:\\.|othy))|P(?:T\\.|t\\.|ET(?:\\.|ER)|et(?:\\.|er))|J(?:N\\.|n\\.|OHN|ohn))|2\\s+(?:S(?:M\\.|m\\.|AM(?:\\.|UEL)|am(?:\\.|uel))|K(?:GS\\.|gs\\.|INGS|ings)|C(?:HR(?:\\.|ON(?:\\.|ICLES))|hr(?:\\.|on(?:\\.|icles))|OR(?:\\.|INTHIANS)|or(?:\\.|inthians))|T(?:HES(?:\\.|S(?:\\.|ALONIANS))|hes(?:\\.|s(?:\\.|alonians))|M\\.|m\\.|IM(?:\\.|OTHY)|im(?:\\.|othy))|P(?:T\\.|t\\.|ET(?:\\.|ER)|et(?:\\.|er))|J(?:N\\.|n\\.|OHN|ohn))|second\\s+(?:S(?:M\\.|m\\.|AM(?:\\.|UEL)|am(?:\\.|uel))|K(?:GS\\.|gs\\.|INGS|ings)|C(?:HR(?:\\.|ON(?:\\.|ICLES))|hr(?:\\.|on(?:\\.|icles))|OR(?:\\.|INTHIANS)|or(?:\\.|inthians))|T(?:HES(?:\\.|S(?:\\.|ALONIANS))|hes(?:\\.|s(?:\\.|alonians))|M\\.|m\\.|IM(?:\\.|OTHY)|im(?:\\.|othy))|P(?:T\\.|t\\.|ET(?:\\.|ER)|et(?:\\.|er))|J(?:N\\.|n\\.|OHN|ohn))|P(?:S(?:\\.|S\\.|A(?:\\.|LM(?:|S)))|s(?:\\.|s\\.|a(?:\\.|lm(?:|s)))|R(?:V\\.|OV(?:\\.|ERBS))|r(?:v\\.|ov(?:\\.|erbs))|HIL(?:\\.|IPPIANS|M\\.|EM(?:\\.|ON))|hil(?:\\.|ippians|m\\.|em(?:\\.|on)))|H(?:OS(?:\\.|EA)|os(?:\\.|ea)|B\\.|b\\.|G\\.|g\\.|A(?:B(?:\\.|AKKUK,\\s+Habakkuk)|G(?:\\.|GAI))|a(?:b\\.|g(?:\\.|gai))|EB(?:\\.|REWS)|eb(?:\\.|rews))|A(?:M(?:\\.|OS)|m(?:\\.|os)|CTS|cts)|O(?:B(?:\\.|A(?:\\.|D(?:\\.|IAH)))|b(?:\\.|a(?:\\.|d(?:\\.|iah))))|M(?:IC(?:\\.|AH)|ic(?:\\.|ah)|T\\.|t\\.|A(?:L(?:\\.|ACHI)|TT(?:\\.|HEW)|RK)|a(?:l(?:\\.|achi)|tt(?:\\.|hew)|rk)|K\\.|k\\.)|Z(?:E(?:PH(?:\\.|ANIAH)|CH(?:\\.|ARIAH))|e(?:ph(?:\\.|aniah)|ch(?:\\.|ariah)))|C(?:OL(?:\\.|OSSIANS)|ol(?:\\.|ossians))|T(?:I(?:\\.|TUS)|i(?:\\.|tus)|HIRD\\s+J(?:N\\.|n\\.|OHN|ohn)|hird\\s+J(?:N\\.|n\\.|OHN|ohn))|3\\s+J(?:N\\.|n\\.|OHN|ohn)|third\\s+J(?:N\\.|n\\.|OHN|ohn)))(?![a-z])",
      options);
};

})();
