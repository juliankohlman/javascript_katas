// In Sonic the Hedgehog games, most thing Sonic will encounter are rings,
// collecting a ring will add to Sonic's Ring Bank 1 ring and protects him from
// all damage, getting hit will cause Sonic to lose all rings and start back to
// 0, having a shield which can be found in monitors around the level will cause
// Sonic to lose the shield instead of all his rings.

// Ring currencies in this Kata are based over Sonic 3 & Knuckles Ring Counter
// which goes with the following:

// Ring = 1, Monitor Ring = 10, Giant Ring = 50

// If Sonic doesn't have 7 Chaos Emeralds, Giant Rings do NOT count so basically
// if Sonic already collected 7 Chaos Emeralds, any Giant Ring collected is now
// worth 50 rings.

function ringBank (rings, monitors, giantrings, chaosEmeralds, sonicHit, sonicShield){
  if (sonicHit && sonicShield === false) return 0;

  let enoughEmeralds = chaosEmeralds >= 7;
  let giantBonus = rings + (monitors * 10) + (giantrings * 50);
  let regBonus = rings + (monitors * 10);

  if (sonicHit && sonicShield) {
    return enoughEmeralds ? giantBonus : regBonus;
  } else {
    return enoughEmeralds ? giantBonus : regBonus;
  }
}

// Cw solutions

// ringBank=(a,b,c,d,e,f)=>(a+b*10+c*50*(d>6))*(!(e&&!f))

// function ringBank(rings, monitors, giantRings, chaosEmeralds, sonicHit, sonicShield) {
//   return sonicHit && !sonicShield ? 0 : rings + monitors * 10 + (chaosEmeralds === 7 ? giantRings * 50 : 0)
// }

ringBank(1, 0, 0, 0, false, false)
ringBank(0, 1, 0, 0, false, false)
ringBank(0, 0, 1, 0, false, false)
ringBank(0, 0, 1, 7, false, false)
ringBank(777, 777, 777, 7, true, false)
ringBank(100, 5, 3, 6, true, true)
ringBank(0, 7, 10, 7, false, false)
ringBank(2, 2, 2, 2, false, true)
ringBank(1000000, 0, 0, 0, false, false)
ringBank(67, 234, 50, 7, false, true)
ringBank(323, 434, 5, 6, true, false)
ringBank(1, 0, 5409530495039, 0, false, false)
ringBank(69, 420, 68, 6, false, true)
ringBank(666, 666, 666, 6, false, false)
ringBank(37, 130, 0, 0, false, false)
ringBank(6, 66, 0, 0, false, false)
ringBank(42, 0, 0, 0, false, false)
ringBank(412747198274, 5325325325352, 53253253523, 7, false, false)