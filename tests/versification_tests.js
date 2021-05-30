
module.exports.tests = function() {
  var fs = require('fs');

  var filename = './core/versification.js';
  console.log('Loading '+filename);
  eval(fs.readFileSync(filename)+'');
  console.log('SUCCESS!');

  for(var abrev in OT){
    console.log('Testing ' + abrev);
    new RegExp(OT[abrev].regex);
  }
  count=0;
  for(var abrev in NT){
    console.log('Testing ' + abrev);
    new RegExp(NT[abrev].regex);
  }

  console.log('Done!');

  book_test = function(test_case, expected_result) {
    var parts = getBook(test_case, true);
    if (parts[1] !== expected_result)
      return 'getBook() failure for ' + test_case + '. Got ' + parts[1] + ' expected: ' + expected_result;
    if (!(new RegExp(parts[0][parts[1]]['regex'])).test(test_case))
      return 'regex failure for ' + test_case;
    return '';
  };

  var tests = {
    'Gen.':['Genesis','GENESIS','Gen.','GEN.','GN.','Gn.'],
    'Exo.':['Exodus','EXODUS','Exo.','EXO.','Exod.','EXOD.','Ex.','EX.'],
    'Lev.':['Leviticus','LEVITICUS','Lev.','LEV.','Lv.','LV.'],
    'Num.':['Numbers','NUMBERS','Num.','NUM.','NM.','Nm.'],
    'Deut.':['Deuteronomy','DEUTERONOMY','Deut.','DEUT.','Dt.','DT.'],
    'Josh.':['Joshua','JOSHUA','Josh.','JOSH.','Jo.','JO.'],
    'Judg.':['Judges','JUDGES','Judg.','JUDG.','Jds.','JDS.'],
    'Ruth':['Ruth','RUTH','Ru.','RU.'],
    '1 Sam.':['1 Samuel','1 SAMUEL','1 Sam.','1 SAM.','1 Sm.','1 SM.'],
    '2 Sam.':['2 Samuel','2 SAMUEL','2 Sam.','2 SAM.','2 Sm.','2 SM.'],
    '1 Kings':['1 Kings','1 KINGS','1 Kgs.','1 KGS.'],
    '2 Kings':['2 Kings','2 KINGS','2 Kgs.','2 KGS.'],
    '1 Chron.':['1 Chronicles','1 CHRONICLES','1 Chron.','1 CHRON.','1 Chr.','1 CHR.'],
    '2 Chron.':['2 Chronicles','2 CHRONICLES','2 Chron.','2 CHRON.','2 Chr.','2 CHR.'],
    'Ezra':['Ezra','EZRA','Ezr.','EZR.'],
    'Neh.':['Nehemiah','NEHEMIAH','Neh.','NEH.'],
    'Esth.':['Esther','ESTHER','Esth.','ESTH.','Est.','EST.'],
    'Job':['Job','JOB','Jb.','JB.'],
    'Psa.':['Psalms','PSALMS','Psalm','PSALM','Psa.','PSA.','Pss.','PSS.'],
    'Prov.':['Proverbs','PROVERBS','Prov.','PROV.','Prv.','PRV.'],
    'Eccl.':['Ecclesiastes','ECCLESIASTES','Eccles.','ECCLES.','Eccl.','ECCL.'],
    'S.S.':['Song of Songs', 'SONG OF SONGS','Song of Solomon','SONG OF SOLOMON','Song of Sol.','SONG OF SOL.','Sg.','SG.','S.S.'],
    'Isa.':['Isaiah','ISAIAH','Isa.','ISA.','Is.','IS.'],
    'Jer.':['Jeremiah','JEREMIAH','Jer.','JER.'],
    'Lam.':['Lamentations','LAMENTATIONS','Lam.','LAM.'],
    'Ezek.':['Ezekiel','EZEKIEL','Ezek.','EZEK.','Ez.','EZ.'],
    'Dan.':['Daniel','DANIEL','Dan.','DAN.','Dn.','DN.'],
    'Hosea':['Hosea','HOSEA','Hos.','HOS.'],
    'Joel':['Joel','JOEL','Jl.','JL.'],
    'Amos':['Amos','AMOS','Am.','AM.'],
    'Oba.':['Obadiah','OBADIAH','Obad.','OBAD.','Oba.','OBA.'],
    'Jonah':['Jonah','JONAH','Jon.','JON.'],
    'Micah':['Micah','MICAH','Mic.','MIC.'],
    'Nahum':['Nahum','NAHUM','Nah.','NAH.','Na.','NA.'],
    'Hab.':['Habakkuk','HABAKKUK','Hab.','HAB.','Hb.','HB.'],
    'Zeph.':['Zephaniah','ZEPHANIAH','Zeph.','ZEPH.'],
    'Hag.':['Haggai','HAGGAI','Hag.','HAG.'],
    'Zech.':['Zechariah','ZECHARIAH','Zech.','ZECH.'],
    'Mal.':['Malachi','MALACHI','Mal.','MAL.'],

    'Matt.':['Matthew','MATTHEW','Matt.','MATT.','Mt.','MT.'],
    'Mark':['Mark','MARK','Mk.','MK.'],
    'Luke':['Luke','LUKE','Lk.','LK.'],
    'John':['John','JOHN','Jn.','JN.'],
    'Acts':['Acts','ACTS'],
    'Rom.':['Romans','ROMANS','Rom.','ROM.'],
    '1 Cor.':['1 Corinthians','1 CORINTHIANS','1 Cor.','1 COR.'],
    '2 Cor.':['2 Corinthians','2 CORINTHIANS','2 Cor.','2 COR.'],
    'Gal.':['Galatians','GALATIANS','Gal.','GAL.'],
    'Eph.':['Ephesians','EPHESIANS','Eph.','EPH.'],
    'Phil.':['Philippians','PHILIPPIANS','Phil.','PHIL.'],
    'Col.':['Colossians','COLOSSIANS','Col.','COL.'],
    '1 Thes.':['1 Thessalonians','1 THESSALONIANS','1 Thess.','1 THESS.','1 Thes.','1 THES.'],
    '2 Thes.':['2 Thessalonians','2 THESSALONIANS','2 Thess.','2 THESS.','2 Thes.','2 THES.'],
    '1 Tim.':['1 Timothy','1 TIMOTHY','1 Tim.','1 TIM.'],
    '2 Tim.':['2 Timothy','2 TIMOTHY','2 Tim.','2 TIM.'],
    'Titus':['Titus','TITUS','Ti.','TI.'],
    'Philem.':['Philemon','PHILEMON','Philem.','PHILEM.','Philm.','PHILM.'],
    'Heb.':['Hebrews','HEBREWS','Heb.','HEB.'],
    'James':['James','JAMES','Jas.','JAS.'],
    '1 Pet.':['1 Peter','1 PETER','1 Pet.','1 PET.','1 Pt.','1 PT.'],
    '2 Pet.':['2 Peter','2 PETER','2 Pet.','2 PET.','2 Pt.','2 PT.'],
    '1 John':['1 John','1 JOHN','1 Jn.','1 JN.','First John','FIRST JOHN','I John','I JOHN'],
    '2 John':['2 John','2 JOHN','2 Jn.','2 JN.','Second John','SECOND JOHN','II John','II JOHN'],
    '3 John':['3 John','3 JOHN','3 Jn.','3 JN.','Third John','THIRD JOHN','III John','III JOHN'],
    'Jude':['Jude','JUDE'],
    'Rev.':['Revelation','REVELATION','Rev.','REV.','Rv.','RV.']
  };

  for (var abrev in tests) {
    var cases = tests[abrev];
    cases.forEach((test) => {
      var msg;
      if ((msg = book_test(test, abrev))) {
        console.log('FAILURE:', msg);
        throw msg;
      } else {
        console.log('SUCCESS:', abrev, test);
      }
    });
  }
};
