// fetch(
//   "https://zylalabs.com/api/392/exercise+database+api/309/list+of+body+parts"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const exercises = [
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
    id: "0007",
    name: "alternate lateral pulldown",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
    id: "3293",
    name: "archer pull up",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "leverage machine",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0015.gif",
    id: "0015",
    name: "assisted parallel close grip pull-up",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "leverage machine",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0017.gif",
    id: "0017",
    name: "assisted pull-up",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "leverage machine",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1431.gif",
    id: "1431",
    name: "assisted standing chin-up",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "leverage machine",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1432.gif",
    id: "1432",
    name: "assisted standing pull-up",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "stability ball",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1314.gif",
    id: "1314",
    name: "back extension on exercise ball",
    target: "spine",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3297.gif",
    id: "3297",
    name: "back lever",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1405.gif",
    id: "1405",
    name: "back pec stretch",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "band",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0970.gif",
    id: "0970",
    name: "band assisted pull-up",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "band",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0974.gif",
    id: "0974",
    name: "band close-grip pulldown",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "band",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3117.gif",
    id: "3117",
    name: "band fixed back close grip pulldown",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "band",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3116.gif",
    id: "3116",
    name: "band fixed back underhand pulldown",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "band",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0983.gif",
    id: "0983",
    name: "band kneeling one arm pulldown",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "band",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0988.gif",
    id: "0988",
    name: "band one arm standing low row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "band",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0990.gif",
    id: "0990",
    name: "band one arm twisting seated row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "band",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1018.gif",
    id: "1018",
    name: "band shrug",
    target: "traps",
  },
  {
    bodyPart: "back",
    equipment: "band",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1010.gif",
    id: "1010",
    name: "band straight leg deadlift",
    target: "spine",
  },
  {
    bodyPart: "back",
    equipment: "band",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1013.gif",
    id: "1013",
    name: "band underhand pulldown",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "barbell",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1316.gif",
    id: "1316",
    name: "barbell bent arm pullover",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "barbell",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0027.gif",
    id: "0027",
    name: "barbell bent over row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "barbell",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0034.gif",
    id: "0034",
    name: "barbell decline bent arm pullover",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "barbell",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0037.gif",
    id: "0037",
    name: "barbell decline wide-grip pullover",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "barbell",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0049.gif",
    id: "0049",
    name: "barbell incline row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "barbell",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0064.gif",
    id: "0064",
    name: "barbell one arm bent over row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "barbell",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3017.gif",
    id: "3017",
    name: "barbell pendlay row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "barbell",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0073.gif",
    id: "0073",
    name: "barbell pullover",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "barbell",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0022.gif",
    id: "0022",
    name: "barbell pullover to press",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "barbell",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0118.gif",
    id: "0118",
    name: "barbell reverse grip bent over row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "barbell",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1317.gif",
    id: "1317",
    name: "barbell reverse grip incline bench row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "barbell",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0095.gif",
    id: "0095",
    name: "barbell shrug",
    target: "traps",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3019.gif",
    id: "3019",
    name: "bench pull-ups",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3168.gif",
    id: "3168",
    name: "bodyweight squatting row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3167.gif",
    id: "3167",
    name: "bodyweight squatting row (with towel)",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3156.gif",
    id: "3156",
    name: "bodyweight standing close-grip one arm row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3158.gif",
    id: "3158",
    name: "bodyweight standing close-grip row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3162.gif",
    id: "3162",
    name: "bodyweight standing one arm row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3161.gif",
    id: "3161",
    name: "bodyweight standing one arm row (with towel)",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3166.gif",
    id: "3166",
    name: "bodyweight standing row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3165.gif",
    id: "3165",
    name: "bodyweight standing row (with towel)",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0150.gif",
    id: "0150",
    name: "cable bar lateral pulldown",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0153.gif",
    id: "0153",
    name: "cable cross-over lateral pulldown",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0159.gif",
    id: "0159",
    name: "cable decline seated wide-grip row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0160.gif",
    id: "0160",
    name: "cable floor seated wide-grip row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0167.gif",
    id: "0167",
    name: "cable high row (kneeling)",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1318.gif",
    id: "1318",
    name: "cable incline bench row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0172.gif",
    id: "0172",
    name: "cable incline pushdown",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/2330.gif",
    id: "2330",
    name: "cable lat pulldown full range of motion",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0177.gif",
    id: "0177",
    name: "cable lateral pulldown (with rope attachment)",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/2616.gif",
    id: "2616",
    name: "cable lateral pulldown with v-bar",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0180.gif",
    id: "0180",
    name: "cable low seated row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0184.gif",
    id: "0184",
    name: "cable lying extension pullover (with rope attachment)",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0189.gif",
    id: "0189",
    name: "cable one arm bent over row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3563.gif",
    id: "3563",
    name: "cable one arm pulldown",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0193.gif",
    id: "0193",
    name: "cable one arm straight back high row (kneeling)",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1319.gif",
    id: "1319",
    name: "cable palm rotational row",
    target: "upper back",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0198.gif",
    id: "0198",
    name: "cable pulldown",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0197.gif",
    id: "0197",
    name: "cable pulldown (pro lat bar)",
    target: "lats",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0199.gif",
    id: "0199",
    name: "cable pushdown (straight arm) v. 2",
    target: "lats",
  },
];

// Function to create exercise cards
function createExerciseCard(exercise) {
  const card = document.createElement("div");
  card.classList.add("card");

  const exerciseName = document.createElement("div");
  exerciseName.classList.add("exercise-name");
  exerciseName.textContent = exercise.name;

  const bodyPart = document.createElement("div");
  bodyPart.classList.add("info");
  bodyPart.textContent = `Body Part: ${exercise.bodyPart}`;

  const equipment = document.createElement("div");
  equipment.classList.add("info");
  equipment.textContent = `Equipment: ${exercise.equipment}`;

  const exerciseGif = document.createElement("img");
  exerciseGif.classList.add("exercise-gif");
  exerciseGif.src = exercise.gifUrl;
  exerciseGif.alt = exercise.name;

  const targetMuscle = document.createElement("div");
  targetMuscle.classList.add("target-muscle");
  targetMuscle.textContent = `Target Muscle: ${exercise.target}`;

  card.appendChild(exerciseName);
  card.appendChild(bodyPart);
  card.appendChild(equipment);
  card.appendChild(exerciseGif);
  card.appendChild(targetMuscle);

  return card;
}

// Display exercise cards
const exerciseCardsContainer = document.getElementById("exercise-cards");
exercises.forEach((exercise) => {
  const exerciseCard = createExerciseCard(exercise);
  exerciseCardsContainer.appendChild(exerciseCard);
});
