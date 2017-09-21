let r = new Random();

function chooseOtherCompanion() {
  let companions = ["ED-E", "Rex", "None"];
  return r.pick(companions);
}

function chooseCompanion() {
  let companions = ["Arcade Israel Gannon", "Craig Boone", "Lily Bowen",
    "Raul Tejada",
    "Rose of Sharon Cassidy", "Veronica Santangelo", "None"
  ];
  return r.pick(companions);
}

function chooseFaction() {
  let factions = ["New California Republic", "Caesar's Legion", "Robert House",
    "Yes Man"
  ];
  return r.pick(factions);
}

function choosePrimaryWeaponType() {
  let weaponTypes = ["Pistols", "Rifles", "SMGs", "Shotguns", "Heavy weapons",
    "Energy pistols",
    "Energy rifles", "Energy heavy weapons", "Explosive projectile",
    "Explosive thrown",
    "Explosive placed", "Melee bladed", "Melee blunt", "Melee thrown",
    "Melee unarmed"
  ];

  return r.pick(weaponTypes);
}

function chooseTraits() {
  let traits = ["Built to Destroy",
    "Claustrophobia",
    "Early Bird",
    "Fast Shot",
    "Four Eyes",
    "Good Natured",
    "Heavy Handed",
    "Hoarder",
    "Hot Blooded",
    "Kamikaze",
    "Logan's Loophole",
    "Loose Cannon",
    "Skilled",
    "Small Frame",
    "Trigger Discipline",
    "Wild Wasteland"
  ]

  return r.sample(traits, r.integer(0, 2));
}

function chooseTaggedSkills() {
  let skills = ["Barter",
    "Energy Weapons",
    "Explosives",
    "Guns",
    "Lockpick",
    "Medicine",
    "Melee Weapons",
    "Repair",
    "Science",
    "Sneak",
    "Speech",
    "Survival",
    "Unarmed"
  ]

  return r.sample(skills, 3);
}

function chooseSpecial() {
  let SPECIAL = {
    "agility": 1,
    "charisma": 1,
    "endurance": 1,
    "intelligence": 1,
    "luck": 1,
    "perception": 1,
    "strength": 1
  }

  let SPECIALPointsRemaining = 33;
  while (SPECIALPointsRemaining > 0) {
    let attributeName = r.pick(Object.keys(SPECIAL));
    if (SPECIAL[attributeName] === 10) {
      continue;
    }
    SPECIAL[attributeName]++;
    SPECIALPointsRemaining -= 1;
  }

  return SPECIAL;
}