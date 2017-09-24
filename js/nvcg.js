let r = new Random();

function chooseAppearance() {
  const races = ["African American", "Asian", "Caucasian", "Hispanic"];
  const hairstyles = ["Clean Cut",
    "Tunnel Snake",
    "Pompadour",
    "Sarge",
    "Waster",
    "Balding",
    "Buzz Saw",
    "Combover",
    "Smooth Wave",
    "Buzz Cut",
    "Shaggy Suave",
    "Terrorsaur",
    "Punked",
    "Warhawk",
    "The Unsettler",
    "Blast Back",
    "Bedraggled",
    "High Riser"
  ];
  let facialHairStyle = ["Survivalist",
    "Rough Beard",
    "Goatee",
    "Beatnick",
    "Gunslinger",
    "The Gentleman",
    "Muttonstache",
    "Shaggy Sideburns",
    "Soul Patch",
    "Old Coot",
    "The Gettysburg",
    "Chopper",
    "Chin Strip",
    "Honest Abe",
    "Man's Man",
    "Swashbuckler",
    "Lady's Man",
    "Tough Guy",
    "Machievellian",
    "Chin Dusting",
    "Cavalry",
    "Daddy O",
    "Male Eyebrows",
    "Female Eyebrows",
    "Backwater",
    "Roughneck",
    "Thin Strip",
    "Shag Strip",
    "Touch O' Soul",
    "Tire Track",
    "The Comrade",
    "Chin Scruff",
    "Manchurian",
    "Doom Rider",
    "Mephistopholes",
    "Bristly Cool",
    "El Carcinero",
    "Hombre",
    "Renegade",
    "Gruff Stuff",
    "Dead Man's Hand",
    "Bar Brawler",
    "Stranded",
    "Dashing Rogue",
    "Slickster",
    "Chairman Cheng",
    "Ronin",
    "Grizzled Samurai",
    "Serious Chic"
  ];

  let appearance = {};
  appearance["race"] = r.pick(races);
  appearance["hairstyle"] = r.pick(hairstyles);

  appearance["male"] = r.bool();
  if (appearance["male"]) {
    appearance["facialHair"] = r.pick(facialHairStyle);
  }

  return appearance;
}

function chooseCompanions() {
  let mainCompanions = ["Arcade Israel Gannon", "Craig Boone", "Lily Bowen",
    "Raul Tejada", "Rose of Sharon Cassidy", "Veronica Santangelo"
  ];
  let secondaryCompanions = ["ED-E", "Rex"];
  let companions = [];

  if (r.bool(mainCompanions.length / (mainCompanions.length + 1))) {
    companions.push(r.pick(mainCompanions));
  }

  if (r.bool(secondaryCompanions.length / (secondaryCompanions.length + 1))) {
    companions.push(r.pick(secondaryCompanions));
  }

  return companions;
}

function chooseFaction() {
  let factions = ["New California Republic", "Caesar's Legion", "Robert House",
    "Yes Man (Independent)"
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

function chooseTagSkills() {
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