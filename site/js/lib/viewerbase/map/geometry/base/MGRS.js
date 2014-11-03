//>>built
define("esriviewer/map/geometry/base/MGRS",["dojo/_base/declare"],function(_1){return _1([],{NUM_100K_SETS:6,SET_ORIGIN_COLUMN_LETTERS:"AJSAJS",SET_ORIGIN_ROW_LETTERS:"AFAFAF",A:65,I:73,O:79,V:86,Z:90,forward:function(ll,_2){_2=_2||5;return this.encode(this.LLtoUTM({lat:ll[1],lon:ll[0]}),_2);},inverse:function(_3){var _4=this.UTMtoLL(this.decode(_3.toUpperCase()));return [_4.left,_4.bottom,_4.right,_4.top];},toPoint:function(_5){var _6=this.inverse(_5);return [(_6[2]+_6[0])/2,(_6[3]+_6[1])/2];},degToRad:function(_7){return (_7*(Math.PI/180));},radToDeg:function(_8){return (180*(_8/Math.PI));},LLtoUTM:function(ll){var _9=ll.lat;var _a=ll.lon;var a=6378137;var _b=0.00669438;var k0=0.9996;var _c;var _d;var N,T,C,A,M;var _e=this.degToRad(_9);var _f=this.degToRad(_a);var _10;var _11;_11=Math.floor((_a+180)/6)+1;if(_a===180){_11=60;}if(_9>=56&&_9<64&&_a>=3&&_a<12){_11=32;}if(_9>=72&&_9<84){if(_a>=0&&_a<9){_11=31;}else{if(_a>=9&&_a<21){_11=33;}else{if(_a>=21&&_a<33){_11=35;}else{if(_a>=33&&_a<42){_11=37;}}}}}_c=(_11-1)*6-180+3;_10=this.degToRad(_c);_d=(_b)/(1-_b);N=a/Math.sqrt(1-_b*Math.sin(_e)*Math.sin(_e));T=Math.tan(_e)*Math.tan(_e);C=_d*Math.cos(_e)*Math.cos(_e);A=Math.cos(_e)*(_f-_10);M=a*((1-_b/4-3*_b*_b/64-5*_b*_b*_b/256)*_e-(3*_b/8+3*_b*_b/32+45*_b*_b*_b/1024)*Math.sin(2*_e)+(15*_b*_b/256+45*_b*_b*_b/1024)*Math.sin(4*_e)-(35*_b*_b*_b/3072)*Math.sin(6*_e));var _12=(k0*N*(A+(1-T+C)*A*A*A/6+(5-18*T+T*T+72*C-58*_d)*A*A*A*A*A/120)+500000);var _13=(k0*(M+N*Math.tan(_e)*(A*A/2+(5-T+9*C+4*C*C)*A*A*A*A/24+(61-58*T+T*T+600*C-330*_d)*A*A*A*A*A*A/720)));if(_9<0){_13+=10000000;}return {northing:Math.round(_13),easting:Math.round(_12),zoneNumber:_11,zoneLetter:this.getLetterDesignator(_9)};},UTMtoLL:function(utm){var _14=utm.northing;var _15=utm.easting;var _16=utm.zoneLetter;var _17=utm.zoneNumber;if(_17<0||_17>60){return null;}var k0=0.9996;var a=6378137;var _18=0.00669438;var _19;var e1=(1-Math.sqrt(1-_18))/(1+Math.sqrt(1-_18));var N1,T1,C1,R1,D,M;var _1a;var mu,_1b;var x=_15-500000;var y=_14;if(_16<"N"){y-=10000000;}_1a=(_17-1)*6-180+3;_19=(_18)/(1-_18);M=y/k0;mu=M/(a*(1-_18/4-3*_18*_18/64-5*_18*_18*_18/256));_1b=mu+(3*e1/2-27*e1*e1*e1/32)*Math.sin(2*mu)+(21*e1*e1/16-55*e1*e1*e1*e1/32)*Math.sin(4*mu)+(151*e1*e1*e1/96)*Math.sin(6*mu);N1=a/Math.sqrt(1-_18*Math.sin(_1b)*Math.sin(_1b));T1=Math.tan(_1b)*Math.tan(_1b);C1=_19*Math.cos(_1b)*Math.cos(_1b);R1=a*(1-_18)/Math.pow(1-_18*Math.sin(_1b)*Math.sin(_1b),1.5);D=x/(N1*k0);var lat=_1b-(N1*Math.tan(_1b)/R1)*(D*D/2-(5+3*T1+10*C1-4*C1*C1-9*_19)*D*D*D*D/24+(61+90*T1+298*C1+45*T1*T1-252*_19-3*C1*C1)*D*D*D*D*D*D/720);lat=this.radToDeg(lat);var lon=(D-(1+2*T1+C1)*D*D*D/6+(5-2*C1+28*T1-3*C1*C1+8*_19+24*T1*T1)*D*D*D*D*D/120)/Math.cos(_1b);lon=_1a+this.radToDeg(lon);var _1c;if(utm.accuracy){var _1d=this.UTMtoLL({northing:utm.northing+utm.accuracy,easting:utm.easting+utm.accuracy,zoneLetter:utm.zoneLetter,zoneNumber:utm.zoneNumber});_1c={top:_1d.lat,right:_1d.lon,bottom:lat,left:lon};}else{_1c={lat:lat,lon:lon};}return _1c;},getLetterDesignator:function(lat){var _1e="Z";if((84>=lat)&&(lat>=72)){_1e="X";}else{if((72>lat)&&(lat>=64)){_1e="W";}else{if((64>lat)&&(lat>=56)){_1e="V";}else{if((56>lat)&&(lat>=48)){_1e="U";}else{if((48>lat)&&(lat>=40)){_1e="T";}else{if((40>lat)&&(lat>=32)){_1e="S";}else{if((32>lat)&&(lat>=24)){_1e="R";}else{if((24>lat)&&(lat>=16)){_1e="Q";}else{if((16>lat)&&(lat>=8)){_1e="P";}else{if((8>lat)&&(lat>=0)){_1e="N";}else{if((0>lat)&&(lat>=-8)){_1e="M";}else{if((-8>lat)&&(lat>=-16)){_1e="L";}else{if((-16>lat)&&(lat>=-24)){_1e="K";}else{if((-24>lat)&&(lat>=-32)){_1e="J";}else{if((-32>lat)&&(lat>=-40)){_1e="H";}else{if((-40>lat)&&(lat>=-48)){_1e="G";}else{if((-48>lat)&&(lat>=-56)){_1e="F";}else{if((-56>lat)&&(lat>=-64)){_1e="E";}else{if((-64>lat)&&(lat>=-72)){_1e="D";}else{if((-72>lat)&&(lat>=-80)){_1e="C";}}}}}}}}}}}}}}}}}}}}return _1e;},encode:function(utm,_1f){var _20=""+utm.easting,_21=""+utm.northing;return utm.zoneNumber+utm.zoneLetter+this.get100kID(utm.easting,utm.northing,utm.zoneNumber)+_20.substr(_20.length-5,_1f)+_21.substr(_21.length-5,_1f);},get100kID:function(_22,_23,_24){var _25=this.get100kSetForZone(_24);var _26=Math.floor(_22/100000);var _27=Math.floor(_23/100000)%20;return this.getLetter100kID(_26,_27,_25);},get100kSetForZone:function(i){var _28=i%this.NUM_100K_SETS;if(_28===0){_28=this.NUM_100K_SETS;}return _28;},getLetter100kID:function(_29,row,_2a){var _2b=_2a-1;var _2c=this.SET_ORIGIN_COLUMN_LETTERS.charCodeAt(_2b);var _2d=this.SET_ORIGIN_ROW_LETTERS.charCodeAt(_2b);var _2e=_2c+_29-1;var _2f=_2d+row;var _30=false;if(_2e>this.Z){_2e=_2e-this.Z+this.A-1;_30=true;}if(_2e===this.I||(_2c<this.I&&_2e>this.I)||((_2e>this.I||_2c<this.I)&&_30)){_2e++;}if(_2e===this.O||(_2c<this.O&&_2e>this.O)||((_2e>this.O||_2c<this.O)&&_30)){_2e++;if(_2e===this.I){_2e++;}}if(_2e>this.Z){_2e=_2e-this.Z+this.A-1;}if(_2f>this.V){_2f=_2f-this.V+this.A-1;_30=true;}else{_30=false;}if(((_2f===this.I)||((_2d<this.I)&&(_2f>this.I)))||(((_2f>this.I)||(_2d<this.I))&&_30)){_2f++;}if(((_2f===this.O)||((_2d<this.O)&&(_2f>this.O)))||(((_2f>this.O)||(_2d<this.O))&&_30)){_2f++;if(_2f===this.I){_2f++;}}if(_2f>this.V){_2f=_2f-this.V+this.A-1;}var _31=String.fromCharCode(_2e)+String.fromCharCode(_2f);return _31;},decode:function(_32){if(_32&&_32.length===0){throw ("MGRSPoint coverting from nothing");}var _33=_32.length;var _34=null;var sb="";var _35;var i=0;while(!(/[A-Z]/).test(_35=_32.charAt(i))){if(i>=2){throw ("MGRSPoint bad conversion from: "+_32);}sb+=_35;i++;}var _36=parseInt(sb,10);if(i===0||i+3>_33){throw ("MGRSPoint bad conversion from: "+_32);}var _37=_32.charAt(i++);if(_37<="A"||_37==="B"||_37==="Y"||_37>="Z"||_37==="I"||_37==="O"){throw ("MGRSPoint zone letter "+_37+" not handled: "+_32);}_34=_32.substring(i,i+=2);var set=this.get100kSetForZone(_36);var _38=this.getEastingFromChar(_34.charAt(0),set);var _39=this.getNorthingFromChar(_34.charAt(1),set);while(_39<this.getMinNorthing(_37)){_39+=2000000;}var _3a=_33-i;if(_3a%2!==0){throw ("MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters"+_32);}var sep=_3a/2;var _3b=0;var _3c=0;var _3d,_3e,_3f,_40,_41;if(sep>0){_3d=100000/Math.pow(10,sep);_3e=_32.substring(i,i+sep);_3b=parseFloat(_3e)*_3d;_3f=_32.substring(i+sep);_3c=parseFloat(_3f)*_3d;}_40=_3b+_38;_41=_3c+_39;return {easting:_40,northing:_41,zoneLetter:_37,zoneNumber:_36,accuracy:_3d};},getEastingFromChar:function(e,set){var _42=this.SET_ORIGIN_COLUMN_LETTERS.charCodeAt(set-1);var _43=100000;var _44=false;while(_42!==e.charCodeAt(0)){_42++;if(_42===this.I){_42++;}if(_42===this.O){_42++;}if(_42>this.Z){if(_44){throw ("Bad character: "+e);}_42=this.A;_44=true;}_43+=100000;}return _43;},getNorthingFromChar:function(n,set){if(n>"V"){throw ("MGRSPoint given invalid Northing "+n);}var _45=this.SET_ORIGIN_ROW_LETTERS.charCodeAt(set-1);var _46=0;var _47=false;while(_45!==n.charCodeAt(0)){_45++;if(_45===this.I){_45++;}if(_45===this.O){_45++;}if(_45>this.V){if(_47){throw ("Bad character: "+n);}_45=this.A;_47=true;}_46+=100000;}return _46;},getMinNorthing:function(_48){var _49;switch(_48){case "C":_49=1100000;break;case "D":_49=2000000;break;case "E":_49=2800000;break;case "F":_49=3700000;break;case "G":_49=4600000;break;case "H":_49=5500000;break;case "J":_49=6400000;break;case "K":_49=7300000;break;case "L":_49=8200000;break;case "M":_49=9100000;break;case "N":_49=0;break;case "P":_49=800000;break;case "Q":_49=1700000;break;case "R":_49=2600000;break;case "S":_49=3500000;break;case "T":_49=4400000;break;case "U":_49=5300000;break;case "V":_49=6200000;break;case "W":_49=7000000;break;case "X":_49=7900000;break;default:_49=-1;}if(_49>=0){return _49;}else{throw ("Invalid zone letter: "+_48);}}});});