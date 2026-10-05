export interface ScienceArticle {
  id: string;
  category: 'lower_body' | 'ego_lifting' | 'sleep_rest' | 'nutrition_timing' | 'progressive_overload' | 'hydration';
  title: string;
  subtitle: string;
  alertBadge?: string;
  keyTakeaways: string[];
  scientificExplanation: string;
  actionProtocol: string[];
  injuryRisks?: string[];
  femaleSpecificNote?: string;
}

export const SCIENCE_ARTICLES: ScienceArticle[] = [
  // ================= 1. LOWER BODY IMPORTANCE =================
  {
    id: 'lower-body-catapult',
    category: 'lower_body',
    title: 'THE LOWER BODY ANABOLIC ENGINE: WHY SKIPPING LEGS DESTROYS TOTAL PHYSIQUE',
    subtitle: 'Endocrine hormonal release, the V-Taper illusion, and whole-body muscle synthesis.',
    alertBadge: 'CRITICAL KNOWLEDGE',
    keyTakeaways: [
      'The quadriceps, glutes, and hamstrings contain more than 50% of your body’s total skeletal muscle mass.',
      'Heavy multi-joint leg training (squats, RDLs, leg presses) provokes the highest acute elevation of circulating Testosterone and Growth Hormone (HGH) of any workout.',
      'This systemic hormonal surge circulates through your bloodstream, accelerating hypertrophy in your chest, shoulders, and arms as well!',
      'Muscular legs and glutes create the optical illusion of a tighter waist, dramatically amplifying your V-taper physique.'
    ],
    scientificExplanation: `Many gym-goers commit the fatal error of training only "mirror muscles" (chest, biceps, abs). However, exercise physiology proves that systemic anabolism is driven by total motor unit recruitment.

When you perform deep squats or Romanian deadlifts, the sheer volume of muscle tissue placed under tension stimulates the endocrine system via the hypothalamic-pituitary-gonadal (HPG) axis. This releases a wave of endogenous growth hormone and IGF-1. Athletes who train legs alongside upper body exhibit significantly higher rates of upper body protein synthesis than those who neglect lower body.

Furthermore, a powerful posterior chain (glutes, hamstrings, erectors) forms the biological chassis that supports heavy standing overhead presses, barbell rows, and core stability. Skipping legs creates severe kinetic chain dysfunction, leading to anterior pelvic tilt and crippling lower back pain.`,
    actionProtocol: [
      'Execute lower body with the exact same intensity as chest or back (minimum 1 dedicated leg session every 4 to 5 days).',
      'Never skip squats, Romanian deadlifts, and hip thrusts; master full range of motion over weight.',
      'For V-Taper aesthetics: build outer quad sweep (vastus lateralis) and solid calves to visually balance wide shoulders.'
    ],
    injuryRisks: [
      'Quarter Squats: Loading immense weight and bending knees only 2 inches places 100% of shear force directly onto the patellar tendon, ruining knees.',
      'Rounding lumbar spine on deadlifts: Leading cause of L4-L5 disc herniation. Always hinge hips backward with a neutral spine.'
    ],
    femaleSpecificNote: 'For female athletes, lower body training builds functional glute and hamstring curve density, which dramatically optimizes pelvic floor health, knee ligament (ACL) resilience, and metabolic calorie burn.'
  },

  // ================= 2. EGO LIFTING & OVERLIFTING AWARENESS =================
  {
    id: 'ego-lifting-catastrophe',
    category: 'ego_lifting',
    title: 'THE LETHAL DANGER OF EGO LIFTING & OVERLIFTING: PREVENTING MUSCLE TEARS',
    subtitle: 'Pec tears, bicep tendon ruptures, and spinal herniations happen in a split second.',
    alertBadge: 'INJURY PREVENTION',
    keyTakeaways: [
      'Muscle grows from mechanical tension and strict mind-muscle connection, NEVER from swinging uncontrolled loads.',
      'Tendons and ligaments take up to 10x longer to adapt and strengthen than muscle bellies; overloading causes catastrophic tendon avulsions.',
      'Bouncing the bar off your chest, flaring elbows to 90 degrees, and arching violently will end your lifting career.',
      'Check your ego at the gym door: Lift what you can control with a 3-second negative descent.'
    ],
    scientificExplanation: `Ego lifting is the practice of selecting a weight that exceeds your muscular capacity, forcing your body to recruit momentum, poor leverage, and joint structures to move the load.

Biomechanical failure occurs when the external load exceeds the tensile strength of connective tissue:
1. Pectoralis Major Tendon Tear: Typically happens on bench press when an ego lifter bounces heavy weight off the ribcage or flares elbows out perpendicular to the torso. The tendon rips directly off the humerus bone with an audible pop.
2. Distal Bicep Tendon Rupture: Occurs during heavy deadlifts with a mixed grip (the supinated arm jerks the bar) or when swinging 30kg dumbbells on bicep curls. The tendon rolls up into the arm like a window shade.
3. Lumbar Disc Herniation: Occurs on squats and deadlifts when the lifter rounds their lower back under heavy load, squeezing the gel-like nucleus pulposus out of the spinal disc onto spinal nerves.`,
    actionProtocol: [
      'Follow the "3-Second Rule": If you cannot lower the weight under strict 3-second control, it is too heavy. Drop the weight immediately.',
      'Always leave 1 to 2 Reps in Reserve (RIR) on heavy compound movements. True muscular failure should be reserved for safe machines and cables.',
      'Never skip the Warm-Up Ladder: 10 reps with empty bar -> 5 reps at 50% -> 3 reps at 70% -> First working set.'
    ],
    injuryRisks: [
      'Violent Bouncing: Using rib cage or joint rebound to reverse heavy weights.',
      'Kipping & Torso Rocking: Shifting load away from target muscle onto the lumbar spine.'
    ],
    femaleSpecificNote: 'Females generally possess greater joint laxity (hypermobility due to relaxin hormones). Strict form and resisting joint hyperextension (especially at elbows and knees) is doubly vital.'
  },

  // ================= 3. SLEEP, REST & MUSCLE HYPERTROPHY =================
  {
    id: 'sleep-hypertrophy-science',
    category: 'sleep_rest',
    title: 'THE SLEEP & RECOVERY MATRIX: WHERE MUSCLE IS ACTUALLY BUILT',
    subtitle: 'You do not grow in the gym; you tear muscle down in the gym and grow while sleeping.',
    alertBadge: 'GROWTH HORMONES',
    keyTakeaways: [
      'Weightlifting creates micro-tears in muscle myofibrils; actual protein synthesis and cellular repair occur during sleep.',
      'Sleep Duration: 7 to 9 hours of uninterrupted sleep is non-negotiable for serious natural lifters.',
      'Over 70% of total daily Human Growth Hormone (HGH) is released during slow-wave sleep (Stage 3 & 4 deep sleep).',
      'Muscle recovery window: A muscle group requires 48 to 72 hours of recovery before being trained with heavy volume again.'
    ],
    scientificExplanation: `When you lift weights, you trigger micro-trauma and initiate an inflammatory cascade. However, muscular hypertrophy (myofibrillar protein synthesis) requires two biological catalysts: substrate availability (amino acids) and systemic hormonal signaling.

During Stage 3 and Stage 4 Non-REM (NREM) sleep, your body enters deep anabolic recovery:
- Pituitary HGH Pulsing: Deep slow-wave sleep stimulates massive pulses of growth hormone, facilitating tissue repair and cellular turnover.
- Cortisol Clearance: Sleep deprivation elevates resting cortisol by up to 45%, placing your body in a chronic catabolic state that breaks down muscle tissue and promotes stubborn visceral abdominal fat storage.
- Glycogen Resynthesis: Brain and skeletal muscle glycogen stores are replenished, restoring cellular ATP for tomorrow's workout.

Training the same muscle group everyday prevents tissue remodeling and leads to chronic overtraining syndrome, tendonitis, and muscle atrophy.`,
    actionProtocol: [
      'Aim for 7.5 to 9 hours of nightly sleep; maintain consistent sleep and wake schedules.',
      'Keep your bedroom completely dark, silent, and cool (18-20°C / 65-68°F) to maximize slow-wave deep sleep.',
      'Ensure at least 48 to 72 hours of rest between training the same muscle group hard (e.g. Chest on Day 1, Back on Day 2, Legs on Day 3, Rest/Abs on Day 4).'
    ],
    femaleSpecificNote: 'Female muscle recovery tends to tolerate higher relative frequency and volume due to estrogen’s anti-catabolic membrane-protective properties, but sleep remains mandatory for hormone harmony.'
  },

  // ================= 4. PRE-WORKOUT & POST-WORKOUT NUTRITION =================
  {
    id: 'nutrient-timing-anabolism',
    category: 'nutrition_timing',
    title: 'PRE & POST-WORKOUT NUTRITION TIMING: MAXIMIZING INTRA-CELLULAR FUEL',
    subtitle: 'How to fuel maximum vascular pumps and lock in the post-exercise anabolic window.',
    alertBadge: 'NUTRIENT TIMING',
    keyTakeaways: [
      'Pre-Workout Meal (60-90 min before): Complex carbs + lean protein to sustain blood glucose and prevent catabolism.',
      'Pre-Workout Fast Snack (20-30 min before): Rapid low-fiber carbs (banana, rice cakes, honey) + 500mg sodium + caffeine for muscular pump.',
      'Post-Workout Fuel (Within 45-60 min): 25-40g fast-digesting protein (whey isolate) + 30-50g high-glycemic carbs to spike insulin and replenish glycogen.',
      'Never train on an empty stomach when aiming for hypertrophy; low liver glycogen forces your body to convert muscle amino acids into glucose (gluconeogenesis).'
    ],
    scientificExplanation: `Nutrient timing around the workout is critical for cellular energetics and muscle protein synthesis (MPS).

1. Pre-Workout Phase (Fueling the Engine):
Carbohydrates consumed prior to training elevate intra-muscular glycogen and circulating blood glucose. This prevents your body from metabolizing Branched Chain Amino Acids (BCAAs) from your own muscle tissue during high-volume sets. Adding sodium (500mg pink sea salt) expands intravascular blood volume, dramatically improving nitric oxide vascularity, cellular hydration, and nutrient delivery to working muscles.

2. Post-Workout Phase (The Anabolic Window):
Exercise sensitizes skeletal muscle to insulin and activates GLUT-4 glucose transporters. Consuming high-leucine protein (whey or egg isolate) triggers the mammalian target of rapamycin (mTOR) signaling pathway. Pairing protein with fast carbohydrates causes a controlled insulin spike, which immediately halts post-exercise muscle protein breakdown (MPB) and drives amino acids directly into muscle cells.`,
    actionProtocol: [
      '60-90 Mins Pre-Gym: 1 cup oatmeal or sweet potato + 4 egg whites or 120g chicken breast.',
      '20-30 Mins Pre-Gym: 2 rice cakes with honey + pinch of pink salt + double espresso.',
      'Within 45 Mins Post-Gym: 1 scoop whey isolate + 1 banana or 30g cream of rice.'
    ]
  },

  // ================= 5. PROGRESSIVE OVERLOAD PRINCIPLES =================
  {
    id: 'progressive-overload-bible',
    category: 'progressive_overload',
    title: 'THE LAW OF PROGRESSIVE OVERLOAD: HOW MUSCLE ACTUALLY GROWS',
    subtitle: 'Without progressive overload, your body has zero biological reason to build new muscle.',
    alertBadge: 'HYPERTROPHY LAW',
    keyTakeaways: [
      'Progressive Overload is the foundational principle of all resistance training: Gradually increasing the stress placed upon the musculoskeletal system.',
      'If you lift the exact same 20kg dumbbells for 10 reps for 6 months, your body will look exactly the same.',
      'Progression does NOT only mean adding weight to the bar: Reps, tempo, form control, and density are equally powerful.',
      'Use the Double Progression Method: First increase reps within a target range (e.g., 8-12 reps); once you hit 12 reps on all sets, increase the weight by 2.5-5kg and drop back to 8 reps.'
    ],
    scientificExplanation: `The human body is an evolutionary survival organism; muscle tissue is metabolically expensive to maintain. The body will only synthesize and maintain new muscle tissue if it is forced to adapt to a stimulus greater than what it previously encountered.

Five Proven Methods to Execute Progressive Overload:
1. Increased Load: Adding 1.25kg to 2.5kg to the bar while maintaining identical strict form.
2. Increased Repetitions: Pushing an exercise from 8 reps to 9, 10, 11, and 12 reps with the exact same weight.
3. Improved Tempo & Time Under Tension (TUT): Slowing down the eccentric phase (e.g. 3-second descent) increases mechanical micro-damage and motor unit recruitment without joint wear.
4. Reduced Rest Intervals: Completing the same sets and reps in less rest time (improves metabolic capacity and cellular density).
5. Increased Range of Motion: Moving through a deeper, safer stretch (e.g., pausing at full depth on squats or bench press).`,
    actionProtocol: [
      'Log every single set, weight, and repetition completed in your workout ledger.',
      'Aim to beat your previous log by at least 1 rep or a slight weight increment every week.',
      'Never sacrifice form for load: A sloppy rep with momentum is a step backward, not progressive overload.'
    ]
  },

  // ================= 6. HYDRATION FOR BULKING VS CUTTING =================
  {
    id: 'hydration-bulking-cutting',
    category: 'hydration',
    title: 'WATER INTAKE CALCULATION: BULKING VS CUTTING HYDRATION SCIENCE',
    subtitle: 'Muscles are 75% water. A 2% drop in hydration reduces muscular strength by 10-15%.',
    alertBadge: 'CELLULAR HYDRATION',
    keyTakeaways: [
      'Muscles are made of 75% water, 20% protein, and 5% minerals and glycogen.',
      'Glycogen Storage: Every 1 gram of carbohydrate stored in muscle tissue binds to 3 to 4 grams of water.',
      'Bulking Hydration: Requires 40-45 ml per kg of body weight to support massive glycogen synthesis, creatine saturation, and protein digestion.',
      'Cutting Hydration: Requires 45-50 ml per kg of body weight to flush metabolic ketones, prevent false aldosterone water retention, and suppress false hunger signals.'
    ],
    scientificExplanation: `Cellular hydration status is a major regulator of cell volume and protein synthesis. A hyper-hydrated muscle cell signals an anabolic state, stimulating protein synthesis and inhibiting proteolysis (muscle breakdown).

1. Why Hydration is Crucial During Bulking:
When you consume high carbohydrates and creatine, your muscle cells act like sponges. Without sufficient water intake, creatine and carbohydrates remain unabsorbed in the gut, causing digestive distress and flat, deflated muscle pumps.

2. Why Hydration is Crucial During Cutting:
When dieting in a calorie deficit, the body increases cortisol, which triggers the adrenal glands to produce aldosterone—a hormone that holds onto subcutaneous water, creating a "soft, watery" look. Drinking large amounts of clean water signals the kidneys that fluid is abundant, turning off aldosterone and releasing trapped subcutaneous water for crisp vascular definition.`,
    actionProtocol: [
      'Calculate your target daily intake: Body Weight (kg) × 45ml (Bulking) or × 48ml (Cutting).',
      'Drink 500ml of water immediately upon waking to reverse overnight dehydration.',
      'Sip water steadily throughout workouts; never wait until you are thirsty to drink.'
    ]
  }
];

export function calculateWaterRequirementMl(weightKg: number, goal: 'weightloss' | 'weightgain' | 'fatloss'): number {
  if (goal === 'weightgain') {
    return Math.round(weightKg * 44); // ~44ml / kg for bulking
  } else if (goal === 'fatloss') {
    return Math.round(weightKg * 48); // ~48ml / kg for cutting
  } else {
    return Math.round(weightKg * 42); // ~42ml / kg for weightloss
  }
}

export function calculateCalorieTarget(weightKg: number, gender: 'male' | 'female' | 'other', age: number, goal: 'weightloss' | 'weightgain' | 'fatloss'): number {
  // Mifflin-St Jeor formula baseline
  let bmr = 10 * weightKg + 6.25 * 175 - 5 * age;
  if (gender === 'male') {
    bmr += 5;
  } else if (gender === 'female') {
    bmr -= 161;
  } else {
    bmr -= 78;
  }

  const tdee = Math.round(bmr * 1.55); // Moderate lifting activity

  if (goal === 'weightloss') {
    return Math.max(1500, Math.round(tdee - 500));
  } else if (goal === 'fatloss') {
    return Math.max(1600, Math.round(tdee - 600));
  } else {
    return Math.round(tdee + 450); // Clean bulk
  }
}
