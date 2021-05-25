//The MIT License (MIT)
//
//Copyright (c) 2013-2014 RcVCite
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

//version 201707151130

var OT;
var NT;
var getBook;
var getBookRegex;

(function(){

//note: 1 jn and 2 jn need to be checked before jn
//heuristic hash functions for looking up book name after regex filter
//they are written to be consistent with the regular expressions for each book
getBook = function(name,parts){
  parts=(typeof parts==='undefined' || !parts)?false:true;
  name=name.replace('.','').toUpperCase();
  switch(name.charAt(0)){
    case '1': //First
      return getBook123(name.replace(/^1\s*/,''),1,parts);
    case '2': //Second
      return getBook123(name.replace(/^2\s*/,''),2,parts);
    case '3': //3 John NT[24]
      return parts?[NT,'3 John']:NT['3 John'];//getBook123(name.replace(/[^\s]+\s+/,''),3);
    case 'A':
      if(name.charAt(1)==='C')//Acts NT[4]
        return parts?[NT,'Acts']:NT['Acts'];
      else //Amos OT[29]
        return parts?[OT,'Amos']:OT['Amos'];
    case 'C': //Colossians NT[11]
      return parts?[NT,'Col.']:NT['Col.'];
    case 'D':
      if(name.charAt(2)==='N'||name.charAt(1)==='N')//Daniel OT[26]
        return parts?[OT,'Dan.']:OT['Dan.'];
      else //Deuteronomy OT[4]
        return parts?[OT,'Deut.']:OT['Deut.'];
    case 'E':
      switch(name.charAt(1)){
        case 'C': //Ecclesiastes OT[20]
          return parts?[OT,'Eccl.']:OT['Eccl.'];
        case 'P': //Ephesians NT[9]
          return parts?[NT,'Eph.']:NT['Eph.'];
        case 'S': //Esther OT[16]
          return parts?[OT,'Esth.']:OT['Esth.'];
        case 'X': //Exodus OT[1]
          return parts?[OT,'Exo.']:OT['Exo.'];
        case 'Z':
          if(name.charAt(2)==='R')//Ezra OT[14]
            return parts?[OT,'Ezra']:OT['Ezra'];
          else //Ezekiel OT[25]
            return parts?[OT,'Ezek.']:OT['Ezek.'];
      }
    case 'F': //First
      return getBook123(name.replace(/[^\s]+\s+/,''),1,parts);
    case 'G':
      if(name.charAt(1)==='A')//Galatians NT[8]
        return parts?[NT,'Gal.']:NT['Gal.'];
      else //Genesis OT[0]
        return parts?[OT,'Gen.']:OT['Gen.'];
    case 'H':
      if(name.charAt(1)==='E')//Hebrews NT[18]
        return parts?[NT,'Heb.']:NT['Heb.'];
      else if(name.charAt(1)==='O')//Hosea OT[27]
        return parts?[OT,'Hosea']:OT['Hosea'];
      else if(name.charAt(2)==='B'||name.charAt(1)==='B')//Habakkuk OT[34]
        return parts?[OT,'Hab.']:OT['Hab.'];
      else //Haggai OT[36]
        return parts?[OT,'Hag.']:OT['Hag.'];
    case 'I':
      if (name.charAt(1)==='S') //Isaiah OT[22]
        return parts?[OT,'Isa.']:OT['Isa.'];
      else if(name.charAt(1)==='I') { //Roman Numeral
        if(name.charAt(2)==='I') {
          return parts?[NT,'3 John']:NT['3 John'];
        } else {
          return getBook123(name.replace(/^II\s*/,''),2,parts);
        }
      } else
        return getBook123(name.replace(/^I\s*/,''),1,parts);
    case 'J':
      switch(name.charAt(1)){
        case 'A': //James NT[19]
          return parts?[NT,'James']:NT['James'];
        case 'B': //Jb\\. Job OT[17]
          return parts?[OT,'Job']:OT['Job'];
        case 'D': //Jds\\. Judges OT[6]
          return parts?[OT,'Judg.']:OT['Judg.'];
        case 'E': //Jeremiah OT[23]
          return parts?[OT,'Jer.']:OT['Jer.'];
        case 'L': //Jl\\. Joel OT[29]
          return parts?[OT,'Joel']:OT['Joel'];
        case 'N': //Jn\\. John NT[3]
          return parts?[NT,'John']:NT['John'];
        case 'O':
          switch(name.charAt(2)){
            case 'B': //Job OT[17]
              return parts?[OT,'Job']:OT['Job'];
            case 'E': //Joel OT[29]
              return parts?[OT,'Joel']:OT['Joel'];
            case 'H': //John NT[3]
              return parts?[NT,'John']:NT['John'];
            case 'N': //Jonah OT[31]
              return parts?[OT,'Jonah']:OT['Jonah'];
            default: //Joshua OT[5]
              return parts?[OT,'Josh.']:OT['Josh.'];
          }
        case 'U':
          if(name.charAt(3)==='E')//Jude NT[25]
            return parts?[NT,'Jude']:NT['Jude'];
          else //Judges OT[6]
            return parts?[OT,'Judg.']:OT['Judg.'];
      }
    case 'L':
      if(name.charAt(1)==='A')//Lamentations OT[24]
        return parts?[OT,'Lam.']:OT['Lam.'];
      else if(name.charAt(2)==='K'||name.charAt(1)==='K')//Luke NT[2]
        return parts?[NT,'Luke']:NT['Luke'];
      else //Leviticus OT[2]
        return parts?[OT,'Lev.']:OT['Lev.'];
    case 'M':
      if(name.charAt(1)==='I')//Micah OT[32]
        return parts?[OT,'Micah']:OT['Micah'];
      else if(name.charAt(2)==='L')//Malachi OT[38]
        return parts?[OT,'Mal.']:OT['Mal.'];
      else if(name.charAt(2)==='T'||name.charAt(1)==='T')//Matthew NT[0]
        return parts?[NT,'Matt.']:NT['Matt.'];
      else //Mark NT[1]
        return parts?[NT,'Mark']:NT['Mark'];
    case 'N':
      if(name.charAt(1)==='E')//Nehemiah OT[15]
        return parts?[OT,'Neh.']:OT['Neh.'];
      else if(name.charAt(1)==='A')//Nahum OT[33]
        return parts?[OT,'Nahum']:OT['Nahum'];
      else //Numbers OT[3]
        return parts?[OT,'Num.']:OT['Num.'];
    case 'O': //Obadiah OT[30]
      return parts?[OT,'Oba.']:OT['Oba.'];
    case 'P':
      if(name.charAt(1)==='H'){
        if(name.charAt(5)==='M'||name.charAt(4)==='M')//Philemon NT[17]
          return parts?[NT,'Philem.']:NT['Philem.'];
        else //Philippians NT[10]
          return parts?[NT,'Phil.']:NT['Phil.'];
      } else if(name.charAt(1)==='R')//Proverbs OT[19]
        return parts?[OT,'Prov.']:OT['Prov.'];
      else //Psalms OT[18]
        return parts?[OT,'Psa.']:OT['Psa.'];
    case 'R':
      if(name.charAt(1)==='O') //Romans NT[5]
        return parts?[NT,'Rom.']:NT['Rom.'];
      else if(name.charAt(1)==='U') //Ruth OT[7]
        return parts?[OT,'Ruth']:OT['Ruth'];
      else //Revelation NT[26]
        return parts?[NT,'Rev.']:NT['Rev.'];
    case 'S':
      if(name.charAt(1)==='E')//Second
        return getBook123(name.replace(/^Second\s*/i,''),2,parts);
      else //Song of Songs OT[21]
        return parts?[OT,'S.S.']:OT['S.S.'];
    case 'T':
      if(name.charAt(1)==='H') //Third John NT[24]
        return parts?[NT,'3 John']:NT['3 John'];//getBook123(name.replace(/[^\s]+\s+/,''),3);
      else //Titus NT[16]
        return parts?[NT,'Titus']:NT['Titus'];
    case 'Z':
      if(name.charAt(2)==='C') //Zechariah OT[37]
        return parts?[OT,'Zech.']:OT['Zech.'];
      else //Zephaniah OT[35]
        return parts?[OT,'Zeph.']:OT['Zeph.'];
  }
};

function getBook123(name,number,parts){
  parts=(typeof parts==='undefined' || !parts)?false:true;
  name.replace('.','');
  name.toUpperCase();
  switch(name.charAt(0)){
    case 'C':
      if(name.charAt(1)==='H'){//Chronicles OT[12,13]
        return parts?[OT,number+' Chron.']:OT[number+' Chron.'];
      } else { //Corinthians NT[6,7]
        return parts?[NT,number+' Cor.']:NT[number+' Cor.'];
      }
    case 'J': //John NT[22,23,24]
      return parts?[NT,number+' John']:NT[number+' John'];
    case 'K': //Kings OT[10,11]
      return parts?[OT,number+' Kings']:OT[number+' Kings'];
    case 'P': //Peter NT[20,21]
      return parts?[NT,number+' Pet.']:NT[number+' Pet.'];
    case 'S': //Samuel OT[8,9]
      return parts?[OT,number+' Sam.']:OT[number+' Sam.'];
    case 'T': //Thessolonains NT[12,13],Timothy NT[14,15]
      if(name.charAt(1)==='H')
        return parts?[NT,number+' Thes.']:NT[number+' Thes.'];
      else
        return parts?[NT,number+' Tim.']:NT[number+' Tim.'];
  }
}

//fix order issues with regular expression
getBookRegex = function(options){
  var layer1=[], layer2=[], layer3=[];
  var count=0;
  for(var abrev in OT){
    switch(count){
      case 21: //S.S. -> pSS., theSSolonians
      //case 22: //Isaiah -> genesIS
      //case 25: //Ezekiel -> EZra
      case 29: //Amos -> lAMentations, jAMes
      //case 30: //Obadiah -> jOB
      //case 32: //Michah -> jereMIah, neheMIah
      //case 33: //Nahum -> joNA
        layer2.push(OT[abrev].regex);
        break;
      case 5: //Joshua -> JOhn -> 1 JOHN
        layer3.push(OT[abrev].regex);
        break;
      default:
        layer1.push(OT[abrev].regex);
        break;
    }
    count++;
  }
  count=0;
  for(var abrev in NT){
    switch(count){
      case 3: //John -> 1 JOHN
      //case 9: //Ephesians -> zEPH
      case 10: //Philipians -> PHILemon
      case 16: //Titus -> revelaTIon
        layer2.push(NT[abrev].regex);
        break;
      default:
        layer1.push(NT[abrev].regex);
        break;
    }
    count++;
  }
  var str="(^|[^a-z0-9])("+layer1.join('|')+'|'+layer2.join('|')+'|'+layer3.join('|')+")(?![a-z])";
  return new RegExp(str,options);
};

var firstToken = '(?:1|[iI]|FIRST|[Ff]irst)\\s*';
var secondToken = '(?:2|[iI]{2}|SECOND|[Ss]econd)\\s*';
var thirdToken = '(?:3|[iI]{3}|THIRD|[Tt]hird)\\s*';

OT={
'Gen.':{'name':'Genesis',
'long_name':'GENESIS',
'regex':'GEN(?:ESIS|\\.)|Gen(?:esis|\\.)|G[Nn]\\.',
'index':'01',
'verses':[31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,34,24,20,67,34,35,46,22,35,43,55,32,20,31,29,43,36,30,23,23,57,38,34,34,28,34,31,22,33,26]},
'Exo.':{'name':'Exodus',
'long_name':'EXODUS',
'regex':'EX(?:ODUS|OD?\\.|\\.)|Ex(?:odus|od?\\.|\\.)',
'index':'02',
'verses':[22,25,22,31,23,30,25,32,35,29,10,51,22,31,27,36,16,27,25,26,36,31,33,18,40,37,21,43,46,38,18,35,23,35,35,38,29,31,43,38]},
'Lev.':{'name':'Leviticus',
'long_name':'LEVITICUS',
'regex':'LEV(?:ITICUS|\\.)|Lev(?:iticus|\\.)|L[Vv]\\.',
'index':'03',
'verses':[17,16,17,35,19,30,38,36,24,20,47,8,59,57,33,34,16,30,37,27,24,33,44,23,55,46,34]},
'Num.':{'name':'Numbers',
'long_name':'NUMBERS',
'regex':'NUM(?:BERS|\\.)|Num(?:bers|\\.)|N[Mm]\\.',
'index':'04',
'verses':[54,34,51,49,31,27,89,26,23,36,35,16,33,45,41,50,13,32,22,29,35,41,30,25,18,65,23,31,40,16,54,42,56,29,34,13]},
'Deut.':{'name':'Deuteronomy',
'long_name':'DEUTERONOMY',
'regex':'DEUT(?:ERONOMY|\\.)|Deut(?:eronomy|\\.)|D[Tt]\\.',
'index':'05',
'verses':[46,37,29,49,33,25,26,20,29,22,32,32,18,29,23,22,20,22,21,20,23,30,25,22,19,19,26,68,29,20,30,52,29,12]},
'Josh.':{'name':'Joshua',
'long_name':'JOSHUA',
'regex':'JOSH(?:UA|\\.)|Josh(?:ua|\\.)|J[Oo]\\.',
'index':'06',
'verses':[18,24,17,24,15,27,26,35,27,43,23,24,33,15,63,10,18,28,51,9,45,34,16,33]},
'Judg.':{'name':'Judges',
'long_name':'JUDGES',
'regex':'JUDG(?:ES|\\.)|Judg(?:es|\\.)|JDS\\.|Jds\\.',
'index':'07',
'verses':[36,23,31,24,31,40,25,35,57,18,40,15,25,20,20,31,13,31,30,48,25]},
'Ruth':{'name':'Ruth',
'long_name':'RUTH',
'regex':'R(?:UTH|uth|[Uu]\\.)',
'index':'08',
'verses':[22,23,18,22]},
'1 Sam.':{'name':'1 Samuel',
'long_name':'FIRST SAMUEL',
'regex':firstToken+'S(?:AM(?:UEL|\\.)|am(?:uel|\\.)|[Mm]|AM|am)',
'index':'09',
'verses':[28,36,21,22,12,21,17,22,27,27,15,25,23,52,35,23,58,30,24,42,15,23,29,22,44,25,12,25,11,31,13]},
'2 Sam.':{'name':'2 Samuel',
'long_name':'SECOND SAMUEL',
'regex':secondToken+'S(?:AM(?:UEL|\\.)|am(?:uel|\\.)|[Mm]|AM|am)',
'index':'10',
'verses':[27,32,39,12,25,23,29,18,13,19,27,31,39,33,37,23,29,33,43,26,22,51,39,25]},
'1 Kings':{'name':'1 Kings',
'long_name':'FIRST KINGS',
'regex':firstToken+'K(?:INGS|ings|GS\\.|gs\\.)',
'index':'11',
'verses':[53,46,28,34,18,38,51,66,28,29,43,33,34,31,34,34,24,46,21,43,29,53]},
'2 Kings':{'name':'2 Kings',
'long_name':'SECOND KINGS',
'regex':secondToken+'K(?:INGS|ings|GS\\.|gs\\.)',
'index':'12',
'verses':[18,25,27,44,27,33,20,29,37,36,21,21,25,29,38,20,41,37,37,21,26,20,37,20,30]},
'1 Chron.':{'name':'1 Chronicles',
'long_name':'FIRST CHRONICLES',
'regex':firstToken+'C(?:HRON(?:ICLES|\\.)|hron(?:icles|\\.)|HR\\.|hr\\.)',
'index':'13',
'verses':[54,55,24,43,26,81,40,40,44,14,47,40,14,17,29,43,27,17,19,8,30,19,32,31,31,32,34,21,30]},
'2 Chron.':{'name':'2 Chronicles',
'long_name':'SECOND CHRONICLES',
'regex':secondToken+'C(?:HRON(?:ICLES|\\.)|hron(?:icles|\\.)|HR\\.|hr\\.)',
'index':'14',
'verses':[17,18,17,22,14,42,22,18,31,19,23,16,22,15,19,14,19,34,11,37,20,12,21,27,28,23,9,27,36,27,21,33,25,33,27,23]},
'Ezra':{'name':'Ezra',
'long_name':'EZRA',
'regex':'EZR[A.]|Ezr[a.]',
'index':'15',
'verses':[11,70,13,24,17,22,28,36,15,44]},
'Neh.':{'name':'Nehemiah',
'long_name':'NEHEMIAH',
'regex':'NEH(?:EMIAH|\\.)|Neh(?:emiah|\\.)',
'index':'16',
'verses':[11,20,32,23,19,19,73,18,38,39,36,47,31]},
'Esth.':{'name':'Esther',
'long_name':'ESTHER',
'regex':'EST(?:HER|H?\\.)|Est(?:her|h?\\.)',
'index':'17',
'verses':[22,23,15,17,14,14,10,17,32,3]},
'Job':{'name':'Job',
'long_name':'JOB',
'regex':'J(?:OB|ob|[Bb]\\.)',
'index':'18',
'verses':[22,13,26,21,27,30,21,22,35,22,20,25,28,22,35,22,16,21,29,29,34,30,17,25,6,14,23,28,25,31,40,22,33,37,16,33,24,41,30,24,34,17]},
'Psa.':{'name':'Psalms',
'long_name':'PSALMS',
'regex':'P(?:SALMS?|salms?|S[AS]\\.|s[as]\\.)',
'index':'19',
'verses':[6,12,8,8,12,10,17,9,20,18,7,8,6,7,5,11,15,50,14,9,13,31,6,10,22,12,14,9,11,12,24,11,22,22,28,12,40,22,13,17,13,11,5,26,17,11,9,14,20,23,19,9,6,7,23,13,11,11,17,12,8,12,11,10,13,20,7,35,36,5,24,20,28,23,10,12,20,72,13,19,16,8,18,12,13,17,7,18,52,17,16,15,5,23,11,13,12,9,9,5,8,28,22,35,45,48,43,13,31,7,10,10,9,8,18,19,2,29,176,7,8,9,4,8,5,6,5,6,8,8,3,18,3,3,21,26,9,8,24,13,10,7,12,15,21,10,20,14,9,6]},
'Prov.':{'name':'Proverbs',
'long_name':'PROVERBS',
'regex':'PR(?:OV(?:ERBS|\\.)|V\\.)|Pr(?:ov(?:erbs|\\.)|v\\.)',
'index':'20',
'verses':[33,22,35,27,23,35,27,36,18,32,31,28,25,35,33,33,28,24,29,30,31,29,35,34,28,28,27,28,27,33,31]},
'Eccl.':{'name':'Ecclesiastes',
'long_name':'ECCLESIASTES',
'regex':'ECCL(?:ESIASTES|ES\\.|\\.)|Eccl(?:esiastes|es\\.|\\.)',
'index':'21',
'verses':[18,26,22,16,20,12,29,17,18,20,10,14]},
'S.S.':{'name':'Song of Songs',
'long_name':'SONG OF SONGS',
'regex':'SONG\\s+OF\\s+(?:SOLOMON|SONGS|SOL\\.)|Song\\s+of\\s+(?:Solomon|Songs|Sol\\.)|S[Gg]\\.|S\\.\\s*S\\.',
'index':'22',
'verses':[17,17,11,16,16,13,13,14]},
'Isa.':{'name':'Isaiah',
'long_name':'ISAIAH',
'regex':'ISA(?:IAH|\\.)|Isa(?:iah|\\.)|I[Ss]\\.',
'index':'23',
'verses':[31,22,26,6,30,13,25,22,21,34,16,6,22,32,9,14,14,7,25,6,17,25,18,23,12,21,13,29,24,33,9,20,24,17,10,22,38,22,8,31,29,25,28,28,25,13,15,22,26,11,23,15,12,17,13,12,21,14,21,22,11,12,19,12,25,24]},
'Jer.':{'name':'Jeremiah',
'long_name':'JEREMIAH',
'regex':'JER(?:EMIAH|\\.)|Jer(?:emiah|\\.)',
'index':'24',
'verses':[19,37,25,31,31,30,34,22,26,25,23,17,27,22,21,21,27,23,15,18,14,30,40,10,38,24,22,17,32,24,40,44,26,22,19,32,21,28,18,16,18,22,13,30,5,28,7,47,39,46,64,34]},
'Lam.':{'name':'Lamentations',
'long_name':'LAMENTATIONS',
'regex':'LAM(?:ENTATIONS|\\.)|Lam(?:entations|\\.)',
'index':'25',
'verses':[22,22,66,22,22]},
'Ezek.':{'name':'Ezekiel',
'long_name':'EZEKIEL',
'regex':'EZ(?:EKIEL|EK\\.|\\.)|Ez(?:ekiel|ek\\.|\\.)',
'index':'26',
'verses':[28,10,27,17,17,14,27,18,11,22,25,28,23,23,8,63,24,32,14,49,32,31,49,27,17,21,36,26,21,26,18,32,33,31,15,38,28,23,29,49,26,20,27,31,25,24,23,35]},
'Dan.':{'name':'Daniel',
'long_name':'DANIEL',
'regex':'DAN(?:IEL|\\.)|Dan(?:iel|\\.)|D[Nn]\\.',
'index':'27',
'verses':[21,49,30,37,31,28,28,27,27,21,45,13]},
'Hosea':{'name':'Hosea',
'long_name':'HOSEA',
'regex':'HOS(?:EA|\\.)|Hos(?:ea|\\.)',
'index':'28',
'verses':[11,23,5,19,15,11,16,14,17,15,12,14,16,9]},
'Joel':{'name':'Joel',
'long_name':'JOEL',
'regex':'JOEL|Joel|J[Ll]\\.',
'index':'29',
'verses':[20,32,21]},
'Amos':{'name':'Amos',
'long_name':'AMOS',
'regex':'AMOS|Amos|A[Mm]\\.',
'index':'30',
'verses':[15,16,15,13,27,14,17,14,15]},
'Oba.':{'name':'Obadiah',
'long_name':'OBADIAH',
'regex':'OB(?:ADIAH|AD?\\.|\\.)|Ob(?:adiah|ad?\\.|\\.)',
'index':'31',
'verses':[21]},
'Jonah':{'name':'Jonah',
'long_name':'JONAH',
'regex':'JON(?:AH|\\.)|Jon(?:ah|\\.)',
'index':'32',
'verses':[17,10,10,11]},
'Micah':{'name':'Micah',
'long_name':'MICAH',
'regex':'MIC(?:AH|\\.)|Mic(?:ah|\\.)',
'index':'33',
'verses':[16,13,12,13,15,16,20]},
'Nahum':{'name':'Nahum',
'long_name':'NAHUM',
'regex':'NA(?:HUM|H?\\.)|Na(?:hum|h?\\.)',
'index':'34',
'verses':[15,13,19]},
'Hab.':{'name':'Habakkuk',
'long_name':'HABAKKUK',
'regex':'HAB(?:AKKUK|\\.)|Hab(?:akkuk|\\.)|H[Bb]\\.',
'index':'35',
'verses':[17,20,19]},
'Zeph.':{'name':'Zephaniah',
'long_name':'ZEPHANIAH',
'regex':'ZEPH(?:ANIAH|\\.)|Zeph(?:aniah|\\.)',
'index':'36',
'verses':[18,15,20]},
'Hag.':{'name':'Haggai',
'long_name':'HAGGAI',
'regex':'HAG(?:GAI|\\.)|Hag(?:gai|\\.)|H[Gg]\\.',
'index':'37',
'verses':[15,23]},
'Zech.':{'name':'Zechariah',
'long_name':'ZECHARIAH',
'regex':'ZECH(?:ARIAH|\\.)|Zech(?:ariah|\\.)',
'index':'38',
'verses':[21,13,10,14,11,15,14,23,17,12,17,14,9,21]},
'Mal.':{'name':'Malachi',
'long_name':'MALACHI',
'regex':'MAL(?:ACHI|\\.)|Mal(?:achi|\\.)',
'index':'39',
'verses':[14,17,18,6]}
};
NT={
'Matt.':{'name':'Matthew',
'long_name':'THE GOSPEL ACCORDING TO MATTHEW',
'regex':'MATT(?:HEW|\\.)|Matt(?:hew|\\.)|M[Tt]\\.',
'index':'40',
'verses':[25,23,17,25,48,34,29,34,38,42,30,50,58,36,39,28,27,35,30,34,46,46,39,51,46,75,66,20]},
'Mark':{'name':'Mark',
'long_name':'THE GOSPEL ACCORDING TO MARK',
'regex':'M(?:ARK|ark|[Kk]\\.)',
'index':'41',
'verses':[45,28,35,41,43,56,37,38,50,52,33,44,37,72,47,20]},
'Luke':{'name':'Luke',
'long_name':'THE GOSPEL ACCORDING TO LUKE',
'regex':'L(?:UKE|uke|[Kk]\\.)',
'index':'42',
'verses':[80,52,38,44,39,49,50,56,62,42,54,59,35,35,32,31,37,43,48,47,38,71,56,53]},
'John':{'name':'John',
'long_name':'THE GOSPEL ACCORDING TO JOHN',
'regex':'J(?:OHN|ohn|[Nn]\\.)',
'index':'43',
'verses':[51,25,36,54,47,71,53,59,41,42,57,50,38,31,27,33,26,40,42,31,25]},
'Acts':{'name':'Acts',
'long_name':'THE ACTS OF THE APOSTLES',
'regex':'A(?:CTS|cts)',
'index':'44',
'verses':[26,47,26,37,42,15,60,40,43,48,30,25,52,28,41,40,34,28,41,38,40,30,35,27,27,32,44,31]},
'Rom.':{'name':'Romans',
'long_name':'THE EPISTLE OF PAUL TO THE ROMANS',
'regex':'ROM(?:ANS|\\.)|Rom(?:ans|\\.)',
'index':'45',
'verses':[32,29,31,25,21,23,25,39,33,21,36,21,14,23,33,27]},
'1 Cor.':{'name':'1 Corinthians',
'long_name':'THE FIRST EPISTLE OF PAUL TO THE CORINTHIANS',
'regex':firstToken+'C(?:OR(?:INTHIANS|\\.)|or(?:inthians|\\.))',
'index':'46',
'verses':[31,16,23,21,13,20,40,13,27,33,34,31,13,40,58,24]},
'2 Cor.':{'name':'2 Corinthians',
'long_name':'THE SECOND EPISTLE OF PAUL TO THE CORINTHIANS',
'regex':secondToken+'C(?:OR(?:INTHIANS|\\.)|or(?:inthians|\\.))',
'index':'47',
'verses':[24,17,18,18,21,18,16,24,15,18,33,21,14]},
'Gal.':{'name':'Galatians',
'long_name':'THE EPISTLE OF PAUL TO THE GALATIANS',
'regex':'GAL(?:ATIANS|\\.)|Gal(?:atians|\\.)',
'index':'48',
'verses':[24,21,29,31,26,18]},
'Eph.':{'name':'Ephesians',
'long_name':'THE EPISTLE OF PAUL TO THE EPHESIANS',
'regex':'EPH(?:ESIANS|\\.)|Eph(?:esians|\\.)',
'index':'49',
'verses':[23,22,21,32,33,24]},
'Phil.':{'name':'Philippians',
'long_name':'THE EPISTLE OF PAUL TO THE PHILIPPIANS',
'regex':'PHIL(?:IPPIANS|\\.)|Phil(?:ippians|\\.)',
'index':'50',
'verses':[30,30,21,23]},
'Col.':{'name':'Colossians',
'long_name':'THE EPISTLE OF PAUL TO THE COLOSSIANS',
'regex':'COL(?:OSSIANS|\\.)|Col(?:ossians|\\.)',
'index':'51',
'verses':[29,23,25,18]},
'1 Thes.':{'name':'1 Thessalonians',
'long_name':'THE FIRST EPISTLE OF PAUL TO THE THESSALONIANS',
'regex':firstToken+'T(?:HES(?:SALONIANS|S?\\.)|hes(?:salonians|s?\\.))',
'index':'52',
'verses':[10,20,13,18,28]},
'2 Thes.':{'name':'2 Thessalonians',
'long_name':'THE SECOND EPISTLE OF PAUL TO THE THESSALONIANS',
'regex':secondToken+'T(?:HES(?:SALONIANS|S?\\.)|hes(?:salonians|s?\\.))',
'index':'53',
'verses':[12,17,18]},
'1 Tim.':{'name':'1 Timothy',
'long_name':'THE FIRST EPISTLE OF PAUL TO TIMOTHY',
'regex':firstToken+'T(?:IM(?:OTHY|\\.)|im(?:othy|\\.)|[Mm]\\.)',
'index':'54',
'verses':[20,15,16,16,25,21]},
'2 Tim.':{'name':'2 Timothy',
'long_name':'THE SECOND EPISTLE OF PAUL TO TIMOTHY',
'regex':secondToken+'T(?:IM(?:OTHY|\\.)|im(?:othy|\\.)|[Mm]\\.)',
'index':'55',
'verses':[18,26,17,22]},
'Titus':{'name':'Titus',
'long_name':'THE EPISTLE OF PAUL TO TITUS',
'regex':'T(?:ITUS|itus|[Ii]\\.)',
'index':'56',
'verses':[16,15,15]},
'Philem.':{'name':'Philemon',
'long_name':'THE EPISTLE OF PAUL TO PHILEMON',
'regex':'PHIL(?:EMON|EM\\.|M\\.)|Phil(?:emon|em\\.|m\\.)',
'index':'57',
'verses':[25]},
'Heb.':{'name':'Hebrews',
'long_name':'THE EPISTLE TO THE HEBREWS',
'regex':'HEB(?:REWS|\\.)|Heb(?:rews|\\.)',
'index':'58',
'verses':[14,18,19,16,14,20,28,13,28,39,40,29,25]},
'James':{'name':'James',
'long_name':'THE EPISTLE OF JAMES',
'regex':'JA(?:MES|S\\.)|Ja(?:mes|s\\.)',
'index':'59',
'verses':[27,26,18,17,20]},
'1 Pet.':{'name':'1 Peter',
'long_name':'THE FIRST EPISTLE OF PETER',
'regex':firstToken+'P(?:ET(?:ER|\\.)|et(?:er|\\.)|[Tt]\\.)',
'index':'60',
'verses':[25,25,22,19,14]},
'2 Pet.':{'name':'2 Peter',
'long_name':'THE SECOND EPISTLE OF PETER',
'regex':secondToken+'P(?:ET(?:ER|\\.)|et(?:er|\\.)|[Tt]\\.)',
'index':'61',
'verses':[21,22,18]},
'1 John':{'name':'1 John',
'long_name':'THE FIRST EPISTLE OF JOHN',
'regex':firstToken+'J(?:OHN|ohn|[Nn]\\.)',
'index':'62',
'verses':[10,29,24,21,21]},
'2 John':{'name':'2 John',
'long_name':'THE SECOND EPISTLE OF JOHN',
'regex':secondToken+'J(?:OHN|ohn|[Nn]\\.)',
'index':'63',
'verses':[13]},
'3 John':{'name':'3 John',
'long_name':'THE THIRD EPISTLE OF JOHN',
'regex':thirdToken+'J(?:OHN|ohn|[Nn]\\.)',
'index':'64',
'verses':[14]},
'Jude':{'name':'Jude',
'long_name':'THE EPISTLE OF JUDE',
'regex':'J(?:UDE|ude)',
'index':'65',
'verses':[25]},
'Rev.':{'name':'Revelation',
'long_name':'REVELATION',
'regex':'R(?:EV(?:ELATION|\\.)|ev(?:elation|\\.)|[Vv]\\.)',
'index':'66',
'verses':[20,29,22,11,14,17,17,13,21,11,19,18,18,20,8,21,18,24,21,15,27,21]}
};

})();
