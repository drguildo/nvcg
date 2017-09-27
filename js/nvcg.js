let r = new Random();

function chooseAppearance() {
  const races = ["African American", "Asian", "Caucasian", "Hispanic"];

  const unisexHairstylels = ["Sarge", "Clean Cut", "Buzz Cut", "Bedraggled",
    "Blast Back"
  ];
  const maleHairstyles = ["Tunnel Snake", "Pompadour", "Waster", "Balding",
    "Buzz Saw", "Combover", "Smooth Wave", "Shaggy Suave", "Terrorsaur",
    "Punked", "Warhawk", "The Unsettler", "High Riser"
  ];
  const femaleHairstyles = ["Domestic Goddess", "No Nonsense", "Prim 'N Proper",
    "Rough Nite", "Wendy the Welder", "The Sophisticate", "Frazzled",
    "Iron Maiden", "Unladylike", "Rude Ridge", "Mangy", "Fallen Angel",
    "FairyTails", "Shaved", "L'il Devil", "Seductress", "The Unsettler",
    "Pretty Puff"
  ];

  let facialHairStyle = ["Survivalist", "Rough Beard", "Goatee", "Beatnick",
    "Gunslinger", "The Gentleman", "Muttonstache", "Shaggy Sideburns",
    "Soul Patch", "Old Coot", "The Gettysburg", "Chopper", "Chin Strip",
    "Honest Abe", "Man's Man", "Swashbuckler", "Lady's Man", "Tough Guy",
    "Machievellian", "Chin Dusting", "Cavalry", "Daddy O", "Male Eyebrows",
    "Female Eyebrows", "Backwater", "Roughneck", "Thin Strip", "Shag Strip",
    "Touch O' Soul", "Tire Track", "The Comrade", "Chin Scruff", "Manchurian",
    "Doom Rider", "Mephistopholes", "Bristly Cool", "El Carcinero", "Hombre",
    "Renegade", "Gruff Stuff", "Dead Man's Hand", "Bar Brawler", "Stranded",
    "Dashing Rogue", "Slickster", "Chairman Cheng", "Ronin",
    "Grizzled Samurai", "Serious Chic"
  ];

  let appearance = {};
  appearance["race"] = r.pick(races);

  appearance["male"] = r.bool();
  if (appearance["male"]) {
    appearance["hairstyle"] = r.pick(unisexHairstylels.concat(maleHairstyles));
    if (!rolledNone(facialHairStyle)) {
      appearance["facialHair"] = r.pick(facialHairStyle);
    }
  } else {
    appearance["hairstyle"] = r.pick(unisexHairstylels.concat(femaleHairstyles));
  }

  return appearance;
}

function chooseCompanions() {
  let mainCompanions = ["Arcade Israel Gannon", "Craig Boone", "Lily Bowen",
    "Raul Tejada", "Rose of Sharon Cassidy", "Veronica Santangelo"
  ];
  let secondaryCompanions = ["ED-E", "Rex"];
  let companions = [];

  if (!rolledNone(mainCompanions)) {
    companions.push(r.pick(mainCompanions));
  }

  if (!rolledNone(secondaryCompanions)) {
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
    "Energy pistols", "Energy rifles", "Energy heavy weapons",
    "Explosive projectile", "Explosive thrown", "Explosive placed",
    "Melee bladed", "Melee blunt", "Melee thrown", "Melee unarmed"
  ];

  return r.pick(weaponTypes);
}

function chooseTraits() {
  let traits = ["Built to Destroy", "Claustrophobia", "Early Bird", "Fast Shot",
    "Four Eyes", "Good Natured", "Heavy Handed", "Hoarder", "Hot Blooded",
    "Kamikaze", "Logan's Loophole", "Loose Cannon", "Skilled", "Small Frame",
    "Trigger Discipline", "Wild Wasteland"
  ];

  return r.sample(traits, r.integer(0, 2));
}

function chooseTagSkills() {
  let skills = ["Barter", "Energy Weapons", "Explosives", "Guns", "Lockpick",
    "Medicine", "Melee Weapons", "Repair", "Science", "Sneak", "Speech",
    "Survival", "Unarmed"
  ];

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
  };

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


/**
 * Returns `true` with a probability of 1 / (N + 1) where N is the
 * number of elements in the provided list.
 *
 * The idea is that there's an equal probability of selecting the
 * equivalent of "no value" from a set of values, for instances where
 * this is a possibility (e.g. the lack of facial hair in character
 * appearance).
 *
 */
function rolledNone(list) {
  return r.bool(1 / (list.length + 1));
}