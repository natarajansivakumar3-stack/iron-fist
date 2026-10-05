import { DayWorkoutPlan, PhysiqueTier, Gender } from '../types/gym';

export const WORKOUT_PLANS: DayWorkoutPlan[] = [
  // ================= DAY 1: CHEST & TRICEPS =================
  {
    id: 'day1',
    title: 'DAY 1: CHEST & TRICEPS',
    subtitle: 'Upper Push Hypertrophy & Anabolic Chest Shelf',
    muscleGroups: [
      {
        name: 'Chest (Pectoralis Major & Minor)',
        key: 'chest',
        pools: [
          {
            poolIndex: 0,
            poolName: 'Pool 1: Barbell & Heavy Mechanical Load',
            exercises: [
              {
                id: 'c1-1',
                name: 'Incline Barbell Bench Press (30°)',
                targetMuscle: 'Clavicular Head (Upper Pectoralis Major)',
                muscleGroup: 'chest',
                defaultSets: 4,
                defaultReps: '8-10 reps',
                tempo: '3-1-1-0 (3s slow eccentric)',
                restSeconds: 90,
                equipment: 'Olympic Barbell & Incline Bench',
                formCue: 'Tuck shoulder blades down & back into bench. Lower bar gently to collarbone line, drive up without locking elbows.',
                egoWarning: 'DO NOT bounce the bar off your clavicles. Dropping heavy weight tears pectoral tendon fibers at the sternum.',
                femaleNote: 'Begin with an empty bar or 5-7.5kg dumbbells. Focus on feeling the upper chest stretch before adding plates.'
              },
              {
                id: 'c1-2',
                name: 'Flat Barbell Bench Press',
                targetMuscle: 'Sternal-Costal Head (Mid & Lower Chest)',
                muscleGroup: 'chest',
                defaultSets: 4,
                defaultReps: '6-8 reps',
                tempo: '2-1-1-0',
                restSeconds: 120,
                equipment: 'Barbell & Flat Bench',
                formCue: 'Keep wrist stacked over elbows at 45-degree tuck. Plant feet firmly into floor for leg drive.',
                egoWarning: 'No bouncing off sternum and no extreme arching to shorten range. Heavy ego pressing ruins anterior rotator cuffs.',
                femaleNote: 'Maintain moderate arch, control the 3-second descent to build solid chest-to-shoulder foundation.'
              },
              {
                id: 'c1-3',
                name: 'Weighted or Assisted Chest Dips',
                targetMuscle: 'Lower Pectoralis & Serratus Anterior',
                muscleGroup: 'chest',
                defaultSets: 3,
                defaultReps: '10-12 reps',
                tempo: '2-1-1-1',
                restSeconds: 90,
                equipment: 'Dip Station / Resistance Band',
                formCue: 'Lean torso forward 30 degrees, flare elbows slightly, lower until 90-degree bend at elbows.',
                egoWarning: 'Do not dive too deep if shoulders lack mobility; stop at parallel to avoid AC joint strain.',
                femaleNote: 'Use resistance band or assisted dip machine to dial in 12 clean reps with zero shoulder impingement.'
              },
              {
                id: 'c1-4',
                name: 'Standing Incline Cable Flyes',
                targetMuscle: 'Upper Chest Clavicular Convergence',
                muscleGroup: 'chest',
                defaultSets: 3,
                defaultReps: '12-15 reps',
                tempo: '2-0-1-2 (2s peak squeeze)',
                restSeconds: 60,
                equipment: 'Dual Cable Pulley (Low Position)',
                formCue: 'Sweep hands upward and inward in a scooping arc toward chin level. Squeeze upper inner chest hard.',
                egoWarning: 'Do not swing your torso backwards to jerk the cables. Constant mechanical tension is the goal.',
                femaleNote: 'Use light pin setting (5-10kg). Focus on the contraction at eye level.'
              },
              {
                id: 'c1-5',
                name: 'Pec Deck Machine Butterfly',
                targetMuscle: 'Deep Sternal Fibers & Pectoralis Minor',
                muscleGroup: 'chest',
                defaultSets: 3,
                defaultReps: '12-15 reps (Last set drop set)',
                tempo: '3-0-1-2',
                restSeconds: 60,
                equipment: 'Pec Deck Machine',
                formCue: 'Elbows slightly below shoulder line. Drive elbows together, hold peak squeeze for 2 full seconds.',
                egoWarning: 'Do not hyperextend your arms behind your body at the stretch point. Stop when elbows align with shoulders.',
                femaleNote: 'Adjust seat height so handles sit directly at mid-breast level for optimal angle.'
              }
            ]
          },
          {
            poolIndex: 1,
            poolName: 'Pool 2: Dumbbell Hypertrophy & Range of Motion',
            exercises: [
              {
                id: 'c2-1',
                name: 'Incline Dumbbell Press (45°)',
                targetMuscle: 'Upper Pectoralis & Anterior Deltoid',
                muscleGroup: 'chest',
                defaultSets: 4,
                defaultReps: '8-12 reps',
                tempo: '3-1-1-0',
                restSeconds: 90,
                equipment: 'Incline Bench & Dumbbells',
                formCue: 'Turn palms slightly inward (semi-neutral). Deep stretch at bottom, press up and converge without clinking bells.',
                egoWarning: 'Grabbing 40kg dumbbells and doing 2-inch quarter reps will tear the pec minor and flare the bicep tendon.',
                femaleNote: 'Start with 4-8kg dumbbells. Control the 3-second descent down to chest level.'
              },
              {
                id: 'c2-2',
                name: 'Flat Dumbbell Press with Neutral Squeeze',
                targetMuscle: 'Mid-Sternal Pectoralis Major',
                muscleGroup: 'chest',
                defaultSets: 4,
                defaultReps: '8-12 reps',
                tempo: '2-1-1-1',
                restSeconds: 90,
                equipment: 'Flat Bench & Dumbbells',
                formCue: 'Get maximum safe stretch at bottom with forearms vertical. Press in smooth arc.',
                egoWarning: 'Drop the weights cleanly to thighs; never drop heavy dumbbells violently out sideways after failure.',
                femaleNote: 'Pair with 60s rest to build muscle stamina without overwhelming joint tendons.'
              },
              {
                id: 'c2-3',
                name: 'Decline Dumbbell Press',
                targetMuscle: 'Inferior Sternal Head (Lower Chest Line)',
                muscleGroup: 'chest',
                defaultSets: 3,
                defaultReps: '10-12 reps',
                tempo: '2-1-1-0',
                restSeconds: 75,
                equipment: 'Decline Bench & Dumbbells',
                formCue: 'Lock shins in pads. Press straight up from lower sternum line. Incredible lower pec recruitment.',
                egoWarning: 'Ensure legs are fully locked in before lifting dumbbells. Do not crane your neck forward.',
                femaleNote: 'A gentle decline builds lower pectoral firmness; keep weight conservative.'
              },
              {
                id: 'c2-4',
                name: 'Flat Dumbbell Flyes with Pronation',
                targetMuscle: 'Horizontal Adduction Fibers',
                muscleGroup: 'chest',
                defaultSets: 3,
                defaultReps: '12-15 reps',
                tempo: '3-1-1-1',
                restSeconds: 60,
                equipment: 'Dumbbells & Flat Bench',
                formCue: 'Maintain slight elbow bend like hugging an oak tree. Go until you feel deep pec stretch, then squeeze.',
                egoWarning: 'Never flatten elbows completely on flyes! Straight arms turn dumbbell flyes into shoulder dislocation traps.',
                femaleNote: 'Light 3-6kg dumbbells produce maximum toning and chest stretch without joint shear.'
              },
              {
                id: 'c2-5',
                name: 'Svend Press (Plate Squeeze Press)',
                targetMuscle: 'Inner Chest Sternal Cleavage',
                muscleGroup: 'chest',
                defaultSets: 3,
                defaultReps: '15-20 reps',
                tempo: '2-0-2-2',
                restSeconds: 60,
                equipment: 'Two 5kg/10kg weight plates',
                formCue: 'Squeeze two flat plates between open palms at sternum. Press straight forward while crushing plates together.',
                egoWarning: 'Zero ego required. 5kg plates will burn like fire if squeezed with maximum isometric pressure.',
                femaleNote: 'Great safe finisher. Use two 2.5kg plates with intense chest squeezing.'
              }
            ]
          },
          {
            poolIndex: 2,
            poolName: 'Pool 3: Cables & Smith Machine Continuous Tension',
            exercises: [
              {
                id: 'c3-1',
                name: 'Smith Machine Incline Press (High Angle)',
                targetMuscle: 'Upper Clavicular Pectoralis Shelf',
                muscleGroup: 'chest',
                defaultSets: 4,
                defaultReps: '10-12 reps',
                tempo: '3-1-1-0',
                restSeconds: 90,
                equipment: 'Smith Machine & Adjustable Bench',
                formCue: 'Fixed track allows pure isolation without balance stabilization fatigue. Focus purely on chest push.',
                egoWarning: 'Do not overload the Smith bar thinking it is safe. Rotator cuff shear still occurs with flared elbows.',
                femaleNote: 'Smith machine offers great safety for females lifting alone; use 10-15 reps.'
              },
              {
                id: 'c3-2',
                name: 'Middle Cable Crossovers',
                targetMuscle: 'Full Pectoralis Major Sweep',
                muscleGroup: 'chest',
                defaultSets: 4,
                defaultReps: '12-15 reps',
                tempo: '2-0-1-2',
                restSeconds: 60,
                equipment: 'Dual Cable Station (Chest Height)',
                formCue: 'Cross hands alternately over each other at center for full shortened range contraction.',
                egoWarning: 'Do not lean your whole torso forward like a plow. Stand tall with slight stagger step.',
                femaleNote: 'Excellent for posture and inner chest activation; keep core braced.'
              },
              {
                id: 'c3-3',
                name: 'High-to-Low Cable Flyes',
                targetMuscle: 'Lower Chest Under-Rib Definition',
                muscleGroup: 'chest',
                defaultSets: 3,
                defaultReps: '12-15 reps',
                tempo: '2-0-1-1',
                restSeconds: 60,
                equipment: 'Dual Cable Station (Top Position)',
                formCue: 'Push hands downward and inward toward hips. Feel lower pectoral edge contract vigorously.',
                egoWarning: 'Do not shrug shoulders up to ears. Keep traps depressed and chest high.',
                femaleNote: 'Target 12-15 controlled reps with light resistance for clean muscle tone.'
              },
              {
                id: 'c3-4',
                name: 'Hammer Strength Iso-Lateral Chest Press',
                targetMuscle: 'Mid & Outer Pectoralis Major',
                muscleGroup: 'chest',
                defaultSets: 3,
                defaultReps: '8-12 reps',
                tempo: '2-1-1-0',
                restSeconds: 75,
                equipment: 'Hammer Strength Plate Loaded Machine',
                formCue: 'Converging path mimics natural pectoral fiber direction. Drive through palms.',
                egoWarning: 'Do not bounce back off the bottom stoppers. Start smoothly from dead stop.',
                femaleNote: 'Adjust seat so handles align with mid-chest. 10-12 reps.'
              },
              {
                id: 'c3-5',
                name: 'Deficit Push-Ups on Hex Dumbbells',
                targetMuscle: 'Full Chest, Serratus & Core',
                muscleGroup: 'chest',
                defaultSets: 3,
                defaultReps: '15-20 reps to burnout',
                tempo: '2-1-1-0',
                restSeconds: 60,
                equipment: 'Floor & Hex Dumbbells',
                formCue: 'Grip dumbbells to allow deeper chest drop past hand level. Core rigid as steel.',
                egoWarning: 'Do not sag your lower back or hip thrust. Keep body in a straight plank.',
                femaleNote: 'Elevate hands on bench or perform knee push-ups if standard deficit is too demanding.'
              }
            ]
          }
        ]
      },
      {
        name: 'Triceps (Triceps Brachii - Long, Lateral & Medial Heads)',
        key: 'triceps',
        pools: [
          {
            poolIndex: 0,
            poolName: 'Pool 1: Cable Tension & Elbow Extensions',
            exercises: [
              {
                id: 't1-1',
                name: 'Rope Tricep Pushdowns',
                targetMuscle: 'Lateral & Medial Head of Triceps',
                muscleGroup: 'triceps',
                defaultSets: 4,
                defaultReps: '12-15 reps',
                tempo: '2-0-1-2 (Spread rope at bottom)',
                restSeconds: 60,
                equipment: 'Cable Pulley & Tricep Rope',
                formCue: 'Glue elbows to ribcage. Push down and flare rope outward past thighs for maximum lateral head crunch.',
                egoWarning: 'Do not lean over the rope and use your bodyweight to press down. Only forearms move.',
                femaleNote: 'Keep shoulders relaxed and back; don’t hunch traps. 12-15 reps.'
              },
              {
                id: 't1-2',
                name: 'Overhead Cable Rope Extension',
                targetMuscle: 'Long Head of Triceps (Arm Thickness)',
                muscleGroup: 'triceps',
                defaultSets: 4,
                defaultReps: '10-12 reps',
                tempo: '3-1-1-1',
                restSeconds: 75,
                equipment: 'Cable Machine (Chest/High Setting)',
                formCue: 'Step forward into lunge. Keep upper arms fixed parallel to ears. Deep stretch behind neck, extend fully.',
                egoWarning: 'Overarching lower spine under heavy weight causes lumbar compression. Brace glutes and abs.',
                femaleNote: 'Overhead movement eliminates batwing arms; focus on the deep stretch behind head.'
              },
              {
                id: 't1-3',
                name: 'EZ-Bar Skull Crushers (Lying Triceps Extension)',
                targetMuscle: 'Long Head & Medial Head',
                muscleGroup: 'triceps',
                defaultSets: 3,
                defaultReps: '8-10 reps',
                tempo: '3-1-1-0',
                restSeconds: 90,
                equipment: 'EZ-Curl Bar & Flat Bench',
                formCue: 'Angle upper arms slightly back toward forehead rather than vertical. Lower bar behind crown of head.',
                egoWarning: 'Number 1 exercise for elbow tendinitis when ego lifters drop bar fast. Strict 3-second descent required.',
                femaleNote: 'Use a pre-loaded light bar (5-10kg). Move only from the elbows.'
              },
              {
                id: 't1-4',
                name: 'Single-Arm Cable Underhand Reverse Pushdown',
                targetMuscle: 'Medial Tricep Head (Elbow Joint Stability)',
                muscleGroup: 'triceps',
                defaultSets: 3,
                defaultReps: '12-15 reps each arm',
                tempo: '2-0-1-1',
                restSeconds: 45,
                equipment: 'Single Cable D-Handle',
                formCue: 'Palm facing UP (supinated). Lock elbow at side, extend down smoothly.',
                egoWarning: 'Keep wrist straight; do not flick your wrist to finish the rep.',
                femaleNote: 'Great for sculpting slender, defined arm lines.'
              },
              {
                id: 't1-5',
                name: 'Bench Dips with Squeeze',
                targetMuscle: 'Full Tricep Complex & Deltoid Synergy',
                muscleGroup: 'triceps',
                defaultSets: 3,
                defaultReps: '15-20 reps',
                tempo: '2-1-1-1',
                restSeconds: 60,
                equipment: 'Flat Workout Bench',
                formCue: 'Hands shoulder-width on bench edge, back skimming bench as you lower. Lock out at top.',
                egoWarning: 'Never place feet too far if shoulders round forward. Stop if front shoulder feels pinch.',
                femaleNote: 'Keep knees bent at 90 degrees to calibrate intensity safely.'
              }
            ]
          },
          {
            poolIndex: 1,
            poolName: 'Pool 2: Heavy Free Weights & Compound Lockouts',
            exercises: [
              {
                id: 't2-1',
                name: 'Close-Grip Barbell Bench Press',
                targetMuscle: 'Inner & Lateral Triceps Heads',
                muscleGroup: 'triceps',
                defaultSets: 4,
                defaultReps: '8-10 reps',
                tempo: '3-1-1-0',
                restSeconds: 90,
                equipment: 'Barbell & Bench',
                formCue: 'Hands shoulder-width apart (NOT touching). Tuck elbows close to ribs throughout movement.',
                egoWarning: 'Putting hands 4 inches apart crushes wrists! Hands must be exactly shoulder-width apart.',
                femaleNote: 'Excellent compound builder; use 10-15kg bar with steady pace.'
              },
              {
                id: 't2-2',
                name: 'Seated Overhead Dumbbell Tricep Extension',
                targetMuscle: 'Triceps Long Head (Peak Mass)',
                muscleGroup: 'triceps',
                defaultSets: 4,
                defaultReps: '10-12 reps',
                tempo: '3-1-1-0',
                restSeconds: 75,
                equipment: 'Single Heavy Dumbbell & Low Back Bench',
                formCue: 'Cup dumbbell with both palms under top plate. Lower deep behind neck, drive vertically.',
                egoWarning: 'Flaring elbows excessively stresses shoulder capsules. Keep elbows pointing forward as much as possible.',
                femaleNote: 'Start with 4-8kg dumbbell; ensure stable vertical back support.'
              },
              {
                id: 't2-3',
                name: 'Incline Dumbbell Kickbacks',
                targetMuscle: 'Tricep Lateral Head Peak Contraction',
                muscleGroup: 'triceps',
                defaultSets: 3,
                defaultReps: '12-15 reps',
                tempo: '2-0-1-2 (2s hold at lockout)',
                restSeconds: 60,
                equipment: 'Incline Bench (45°) & Dumbbells',
                formCue: 'Lie chest-down on incline bench. Pin elbows high, kick dumbbells back until arm is parallel to floor.',
                egoWarning: 'Do not swing the dumbbell forward like a pendulum. Only extend the forearm backward.',
                femaleNote: 'Very effective targeting without wrist strain; 2-4kg dumbbells are plenty.'
              },
              {
                id: 't2-4',
                name: 'Tate Press (Dumbbell Elbow Flare Presses)',
                targetMuscle: 'Lateral Tricep Head & Anconeus',
                muscleGroup: 'triceps',
                defaultSets: 3,
                defaultReps: '12 reps',
                tempo: '2-1-1-0',
                restSeconds: 60,
                equipment: 'Flat Bench & Dumbbells',
                formCue: 'Lie on bench with dumbbells touching chest. Flare elbows wide and extend triceps upward.',
                egoWarning: 'Use light weights to master the unique angle before chasing numbers.',
                femaleNote: 'Try 3-5kg dumbbells; great for toning upper outer arm.'
              },
              {
                id: 't2-5',
                name: 'Diamond Push-Ups',
                targetMuscle: 'Triceps Brachii & Inner Chest',
                muscleGroup: 'triceps',
                defaultSets: 3,
                defaultReps: '10-15 reps',
                tempo: '2-1-1-0',
                restSeconds: 60,
                equipment: 'Bodyweight',
                formCue: 'Make diamond shape with index fingers and thumbs on floor directly below chest.',
                egoWarning: 'Do not drop your head to fake depth. Lower chest directly to touch hands.',
                femaleNote: 'Can be performed with knees on floor to build initial arm strength.'
              }
            ]
          },
          {
            poolIndex: 2,
            poolName: 'Pool 3: Machine & Bar Isolation Pump',
            exercises: [
              {
                id: 't3-1',
                name: 'V-Bar Cable Pushdowns',
                targetMuscle: 'Lateral Head Power Contraction',
                muscleGroup: 'triceps',
                defaultSets: 4,
                defaultReps: '10-12 reps',
                tempo: '2-1-1-1',
                restSeconds: 60,
                equipment: 'V-Bar & Cable Pulley',
                formCue: 'Grip angles relieve wrist strain. Drive V-bar straight down to full arm lock.',
                egoWarning: 'Do not bounce weight stack between reps. Keep constant tension on stack.',
                femaleNote: '12 reps with clean pause at bottom for arm definition.'
              },
              {
                id: 't3-2',
                name: 'Machine Tricep Dip Press',
                targetMuscle: 'Total Triceps Complex',
                muscleGroup: 'triceps',
                defaultSets: 4,
                defaultReps: '10-12 reps',
                tempo: '3-0-1-1',
                restSeconds: 75,
                equipment: 'Seated Tricep Dip Machine',
                formCue: 'Belt in seat. Grip handles, press down without letting shoulders hike up.',
                egoWarning: 'Do not let weight slam down at top. Keep triceps loaded.',
                femaleNote: 'Safe seated position makes it great for beginners.'
              },
              {
                id: 't3-3',
                name: 'Single-Arm Overhead Cable Tricep Extension',
                targetMuscle: 'Unilateral Triceps Long Head',
                muscleGroup: 'triceps',
                defaultSets: 3,
                defaultReps: '12-15 reps per arm',
                tempo: '2-1-1-1',
                restSeconds: 45,
                equipment: 'Cable Pulley (No Attachment, hold ball)',
                formCue: 'Face away from pulley, extend arm across body overhead. Eliminates dominant arm compensation.',
                egoWarning: 'Keep upper arm immobile. Do not twist torso.',
                femaleNote: 'Fixes left/right arm imbalances effectively.'
              },
              {
                id: 't3-4',
                name: 'Cross-Body Cable Triceps Extension',
                targetMuscle: 'Lateral & Medial Head Alignment',
                muscleGroup: 'triceps',
                defaultSets: 3,
                defaultReps: '15 reps',
                tempo: '2-0-1-2',
                restSeconds: 60,
                equipment: 'Dual High Cable Station',
                formCue: 'Cross cables in front of chest, extend both arms down and outward simultaneously.',
                egoWarning: 'Zero momentum; feel the back of arm burn.',
                femaleNote: 'Gentle on elbow joint; highly recommended.'
              },
              {
                id: 't3-5',
                name: 'Straight Bar Cable Underhand Pressdown',
                targetMuscle: 'Medial Head & Forearm Extensors',
                muscleGroup: 'triceps',
                defaultSets: 3,
                defaultReps: '15-20 reps burnout',
                tempo: '2-0-1-1',
                restSeconds: 45,
                equipment: 'Straight Cable Bar',
                formCue: 'Underhand grip, elbows pinned. Full lockout contraction.',
                egoWarning: 'Do not let wrists bend backward.',
                femaleNote: 'Light pin, high reps for muscle endurance and fat burning.'
              }
            ]
          }
        ]
      }
    ]
  },

  // ================= DAY 2: BACK & BICEPS =================
  {
    id: 'day2',
    title: 'DAY 2: BACK & BICEPS',
    subtitle: 'V-Taper Lat Width, Upper Back Thickness & Arm Peaks',
    muscleGroups: [
      {
        name: 'Back (Latissimus Dorsi, Rhomboids, Trapezius & Erector Spinae)',
        key: 'back',
        pools: [
          {
            poolIndex: 0,
            poolName: 'Pool 1: Heavy Compounds & Vertical Lat Width',
            exercises: [
              {
                id: 'b1-1',
                name: 'Wide-Grip Lat Pulldown to Upper Chest',
                targetMuscle: 'Latissimus Dorsi (Outer Flaring Wings for V-Taper)',
                muscleGroup: 'back',
                defaultSets: 4,
                defaultReps: '8-12 reps',
                tempo: '3-0-1-2 (2s contraction at collarbone)',
                restSeconds: 90,
                equipment: 'Cable Lat Pulldown Machine',
                formCue: 'Thumbless hook grip. Pull elbows down and into back pockets. Depress scapula before bending elbows.',
                egoWarning: 'NEVER pull behind the neck! Pulling behind neck causes cervical spine injury and rotator impingement. Pull to upper sternum.',
                femaleNote: 'Focus on drawing shoulders down away from ears to activate lats without neck strain.'
              },
              {
                id: 'b1-2',
                name: 'Bent-Over Barbell Row (Overhand Grip)',
                targetMuscle: 'Rhomboids, Middle Trapezius & Upper Lats',
                muscleGroup: 'back',
                defaultSets: 4,
                defaultReps: '6-8 reps',
                tempo: '2-1-1-0',
                restSeconds: 120,
                equipment: 'Olympic Barbell & Weight Plates',
                formCue: 'Hinge hips back to 45 degrees, flat spine. Pull bar to upper belly button, squeeze shoulder blades.',
                egoWarning: 'Ego lifters stand upright and violently yank with lower back. If your torso bounces up and down, lower the weight.',
                femaleNote: 'Begin with 15kg or use dumbbells supported on bench to protect lower back.'
              },
              {
                id: 'b1-3',
                name: 'Chest-Supported T-Bar Row',
                targetMuscle: 'Mid-Back Thickness & Lower Lat Insertion',
                muscleGroup: 'back',
                defaultSets: 4,
                defaultReps: '8-10 reps',
                tempo: '3-1-1-1',
                restSeconds: 90,
                equipment: 'Chest Supported T-Bar Row Machine',
                formCue: 'Chest glued to pad removes lower back risk. Pull elbows back as far as possible.',
                egoWarning: 'Do not lift chest off pad to momentum the weight up.',
                femaleNote: 'Ideal safe back thickness exercise for all fitness levels.'
              },
              {
                id: 'b1-4',
                name: 'Seated Close-Grip Cable Rows',
                targetMuscle: 'Lower Latissimus Dorsi & Rhomboids',
                muscleGroup: 'back',
                defaultSets: 3,
                defaultReps: '10-12 reps',
                tempo: '2-1-1-1',
                restSeconds: 75,
                equipment: 'Low Cable Row & V-Grip Handle',
                formCue: 'Sit upright, slight knee bend. Let shoulders stretch forward, then row handle into stomach, arching chest.',
                egoWarning: 'Do not rock back and forth like a rowing boat. Keep torso stationary at 90 degrees.',
                femaleNote: 'Emphasize the mid-back pinch to correct forward-shoulder sitting posture.'
              },
              {
                id: 'b1-5',
                name: 'Straight-Arm Cable Lat Pullover',
                targetMuscle: 'Latissimus Dorsi Isolation (No Bicep Involvement)',
                muscleGroup: 'back',
                defaultSets: 3,
                defaultReps: '12-15 reps',
                tempo: '3-0-1-2',
                restSeconds: 60,
                equipment: 'High Cable Pulley & Straight/Curved Bar',
                formCue: 'Hinge at hips, arms extended with soft elbow. Sweep bar down in arc to upper thighs, flare lats wide.',
                egoWarning: 'Do not bend elbows into a tricep pushdown. Keep arms locked at fixed slight angle.',
                femaleNote: 'Fantastic mind-muscle connection builder for the back wings.'
              }
            ]
          },
          {
            poolIndex: 1,
            poolName: 'Pool 2: Unilateral Dumbbells & Scapular Retraction',
            exercises: [
              {
                id: 'b2-1',
                name: 'Single-Arm Dumbbell Row (Sawmill Row)',
                targetMuscle: 'Full Latissimus Dorsi & Core Anti-Rotation',
                muscleGroup: 'back',
                defaultSets: 4,
                defaultReps: '8-10 reps per side',
                tempo: '3-1-1-1',
                restSeconds: 90,
                equipment: 'Heavy Dumbbell & Flat Bench',
                formCue: 'Place one knee and hand on bench. Row dumbbell back toward hip crease, keeping shoulders level.',
                egoWarning: 'Do not rotate your torso 45 degrees to wrench the weight up. Keep chest parallel to floor.',
                femaleNote: 'Use 6-12kg dumbbell; keep core tight to prevent torso twisting.'
              },
              {
                id: 'b2-2',
                name: 'Neutral Grip Pull-Ups / Assisted Pull-Ups',
                targetMuscle: 'Lower Lat Width & Teres Major',
                muscleGroup: 'back',
                defaultSets: 4,
                defaultReps: '6-10 reps',
                tempo: '2-1-1-1',
                restSeconds: 90,
                equipment: 'Pull-Up Bar or Assisted Machine',
                formCue: 'Palms facing each other. Drive elbows down to sides, raise chest to bar level.',
                egoWarning: 'No kipping or kicking legs. Dead hang at bottom, pure back pull.',
                femaleNote: 'Use resistance bands or assisted machine with 20-30kg counterbalance to master strict form.'
              },
              {
                id: 'b2-3',
                name: 'Incline Bench Prone Dumbbell Row',
                targetMuscle: 'Posterior Deltoid & Lower Trapezius',
                muscleGroup: 'back',
                defaultSets: 3,
                defaultReps: '10-12 reps',
                tempo: '2-1-1-1',
                restSeconds: 60,
                equipment: 'Incline Bench (30°) & Dumbbells',
                formCue: 'Lie face down on incline bench. Flare elbows slightly at 60 degrees, row dumbbells to ribs.',
                egoWarning: 'Don’t shrug your neck; drive with elbows.',
                femaleNote: 'Superb for upper back definition and correcting computer-hunch posture.'
              },
              {
                id: 'b2-4',
                name: 'Dumbbell Pullover on Flat Bench',
                targetMuscle: 'Lats, Serratus Anterior & Rib Cage Expansion',
                muscleGroup: 'back',
                defaultSets: 3,
                defaultReps: '12 reps',
                tempo: '3-1-1-0',
                restSeconds: 75,
                equipment: 'Flat Bench & Single Dumbbell',
                formCue: 'Lie across bench supporting upper back. Lower dumbbell in arc behind head, pull back to forehead.',
                egoWarning: 'Do not let hips drop too low. Keep pelvis stable to protect ribcage and shoulders.',
                femaleNote: 'Moderate dumbbell (6-10kg) gives great elongation and lat stretch.'
              },
              {
                id: 'b2-5',
                name: 'Hyperextensions with Upper Back Hold',
                targetMuscle: 'Erector Spinae & Posterior Chain',
                muscleGroup: 'back',
                defaultSets: 3,
                defaultReps: '15 reps',
                tempo: '2-1-1-2',
                restSeconds: 60,
                equipment: '45-Degree Roman Chair',
                formCue: 'Hinge at waist, raise torso until in line with legs. Squeeze lower back and glutes.',
                egoWarning: 'Do not hyperextend backwards into an extreme backward bend. Align straight with spine.',
                femaleNote: 'Builds vital lower back support for daily posture and injury prevention.'
              }
            ]
          },
          {
            poolIndex: 2,
            poolName: 'Pool 3: Machine Precision & Iso-Lateral Back Sculpting',
            exercises: [
              {
                id: 'b3-1',
                name: 'Iso-Lateral Hammer High Row',
                targetMuscle: 'Upper Lat Width & Lower Traps',
                muscleGroup: 'back',
                defaultSets: 4,
                defaultReps: '10-12 reps',
                tempo: '3-0-1-1',
                restSeconds: 75,
                equipment: 'Hammer Strength High Row',
                formCue: 'High to low trajectory matches natural lat fibers. Pull single arm or both arms together.',
                egoWarning: 'Do not twist spine violently on unilateral reps.',
                femaleNote: 'Begin with 10kg per side. Excellent machine safety.'
              },
              {
                id: 'b3-2',
                name: 'Machine Meadow Row (Single Arm)',
                targetMuscle: 'Lat Insertion & Lower Back Lat Shelf',
                muscleGroup: 'back',
                defaultSets: 3,
                defaultReps: '10-12 reps each',
                tempo: '2-1-1-1',
                restSeconds: 60,
                equipment: 'Landmine or Lever Row',
                formCue: 'Stand perpendicular to bar. Grip sleeve end, pull up toward hip with elbow high.',
                egoWarning: 'Keep knees soft and core braced; do not jerk.',
                femaleNote: '10 reps with controlled tempo.'
              },
              {
                id: 'b3-3',
                name: 'Dual Pulley Kneeling Lat Pulldown',
                targetMuscle: 'Latissimus Dorsi Peak Stretch',
                muscleGroup: 'back',
                defaultSets: 3,
                defaultReps: '12-15 reps',
                tempo: '3-1-1-2',
                restSeconds: 60,
                equipment: 'Dual Cable Station & Handles',
                formCue: 'Kneel between pulleys. Pull handles down in sweeping arch into sides.',
                egoWarning: 'Maintain tall upright kneeling posture; do not collapse forward.',
                femaleNote: 'Smooth continuous cable resistance is extremely joint-friendly.'
              },
              {
                id: 'b3-4',
                name: 'Face Pulls with High Pulley Rope',
                targetMuscle: 'Rear Delts, Rhomboids & Rotator Cuff',
                muscleGroup: 'back',
                defaultSets: 4,
                defaultReps: '15-20 reps',
                tempo: '2-0-1-2 (2s external rotation)',
                restSeconds: 60,
                equipment: 'High Cable & Long Rope',
                formCue: 'Pull rope toward forehead, separating hands and rotating thumbs backward.',
                egoWarning: 'Overloading face pulls causes leaning back and neck strain. Use light weight, focus on external rotation.',
                femaleNote: 'Crucial exercise to combat rounded posture; high reps (15-20).'
              },
              {
                id: 'b3-5',
                name: 'Barbell Shrugs (Behind the Back or Front)',
                targetMuscle: 'Upper Trapezius Hypertrophy',
                muscleGroup: 'back',
                defaultSets: 3,
                defaultReps: '12-15 reps',
                tempo: '2-0-1-2 (2s peak pause)',
                restSeconds: 60,
                equipment: 'Barbell or Smith Machine',
                formCue: 'Elevate shoulders directly straight up to ears. Hold peak contraction.',
                egoWarning: 'NEVER roll your shoulders in circles! Rolling shoulders shreds the rotators and does not build traps.',
                femaleNote: 'Dumbbell shrugs with light weight prevent neck stiffness.'
              }
            ]
          }
        ]
      },
      {
        name: 'Biceps (Biceps Brachii & Brachialis)',
        key: 'biceps',
        pools: [
          {
            poolIndex: 0,
            poolName: 'Pool 1: Barbell Peaks & Heavy Arm Mass',
            exercises: [
              {
                id: 'bi1-1',
                name: 'Standing EZ-Bar Bicep Curls',
                targetMuscle: 'Short Head & Long Head (Biceps Brachii)',
                muscleGroup: 'biceps',
                defaultSets: 4,
                defaultReps: '8-10 reps',
                tempo: '3-0-1-1',
                restSeconds: 75,
                equipment: 'EZ-Curl Bar',
                formCue: 'Elbows pinned slightly in front of ribs. Curl up smoothly without swinging back.',
                egoWarning: 'Swinging torso backward to fling the bar up is the #1 cause of lower back strains and bicep tears. Lower the weight.',
                femaleNote: 'Start with 5-10kg EZ bar. Keep wrists firm and unbent.'
              },
              {
                id: 'bi1-2',
                name: 'Incline Dumbbell Bicep Curls (45°)',
                targetMuscle: 'Long Head of Biceps (Arm Peak & Length)',
                muscleGroup: 'biceps',
                defaultSets: 4,
                defaultReps: '10-12 reps',
                tempo: '3-1-1-1',
                restSeconds: 75,
                equipment: 'Incline Bench (45°) & Dumbbells',
                formCue: 'Arms hang straight down behind torso for extreme stretch. Curl up, supinating palms at top.',
                egoWarning: 'Do not drop the dumbbells rapidly at the bottom stretch; high risk of distal bicep tendon strain.',
                femaleNote: '4-6kg dumbbells give incredible arm elongation and definition.'
              },
              {
                id: 'bi1-3',
                name: 'Hammer Curls with Dumbbells',
                targetMuscle: 'Brachialis & Brachioradialis (Arm Width & Forearms)',
                muscleGroup: 'biceps',
                defaultSets: 3,
                defaultReps: '10-12 reps',
                tempo: '2-1-1-0',
                restSeconds: 60,
                equipment: 'Dumbbells (Neutral Grip)',
                formCue: 'Thumbs point upward like swinging a hammer. Pushes bicep peak outward for thicker arm appearance.',
                egoWarning: 'Do not alternate by rocking shoulders from side to side.',
                femaleNote: 'Builds functional wrist and forearm grip strength.'
              },
              {
                id: 'bi1-4',
                name: 'Preacher Curl on Scott Bench',
                targetMuscle: 'Short Head of Biceps (Inner Thickness)',
                muscleGroup: 'biceps',
                defaultSets: 3,
                defaultReps: '10-12 reps',
                tempo: '3-1-1-0',
                restSeconds: 60,
                equipment: 'Preacher Bench & EZ-Bar / Dumbbell',
                formCue: 'Armpits locked on top of pad. Lower bar until arm is almost straight, curl to chin.',
                egoWarning: 'DO NOT aggressively hyperextend or jerk out of bottom position on preacher bench; highest bicep tear danger zone!',
                femaleNote: 'Stop just short of total elbow hyperextension at bottom.'
              },
              {
                id: 'bi1-5',
                name: 'High Cable Bicep Curls (Hercules Curl)',
                targetMuscle: 'Double Bicep Peak Squeeze',
                muscleGroup: 'biceps',
                defaultSets: 3,
                defaultReps: '15 reps',
                tempo: '2-0-1-2',
                restSeconds: 60,
                equipment: 'Dual High Cable Pulleys',
                formCue: 'Stand in middle of cable crossover. Arms at shoulder height, curl handles toward ears.',
                egoWarning: 'Keep upper arms parallel to floor; do not drop elbows downward.',
                femaleNote: 'High reps (12-15) create a sensational arm pump.'
              }
            ]
          },
          {
            poolIndex: 1,
            poolName: 'Pool 2: Dumbbell Supination & Peak Contraction',
            exercises: [
              {
                id: 'bi2-1',
                name: 'Seated Alternating Dumbbell Curls with Supination',
                targetMuscle: 'Biceps Brachii Full Contraction',
                muscleGroup: 'biceps',
                defaultSets: 4,
                defaultReps: '10-12 reps each arm',
                tempo: '3-0-1-1',
                restSeconds: 60,
                equipment: 'Flat or Upright Bench & Dumbbells',
                formCue: 'Start neutral, rotate pinky finger upward toward ceiling at peak for maximal bicep muscle balling.',
                egoWarning: 'Do not rock forward off the bench backrest to start the curl.',
                femaleNote: 'Great for building symmetrical, toned biceps.'
              },
              {
                id: 'bi2-2',
                name: 'Concentration Curls',
                targetMuscle: 'Isolated Bicep Peak & Short Head',
                muscleGroup: 'biceps',
                defaultSets: 3,
                defaultReps: '12-15 reps per arm',
                tempo: '2-1-1-2',
                restSeconds: 45,
                equipment: 'Bench & Single Dumbbell',
                formCue: 'Elbow braced against inner thigh. Pure hinge at elbow with zero shoulder help.',
                egoWarning: 'Do not push off your other knee with your free hand to cheat.',
                femaleNote: 'Pure isolation; 3-6kg dumbbell.'
              },
              {
                id: 'bi2-3',
                name: 'Cross-Body Hammer Curls',
                targetMuscle: 'Brachialis & Outer Bicep Head',
                muscleGroup: 'biceps',
                defaultSets: 3,
                defaultReps: '12 reps each side',
                tempo: '2-0-1-1',
                restSeconds: 60,
                equipment: 'Dumbbells',
                formCue: 'Curl dumbbell across torso toward opposite pectoral.',
                egoWarning: 'No hip thrusting.',
                femaleNote: 'Great for sculpting outer arm profile.'
              },
              {
                id: 'bi2-4',
                name: 'Spider Curls on Incline Bench',
                targetMuscle: 'Short Head Peak Muscle Shortening',
                muscleGroup: 'biceps',
                defaultSets: 3,
                defaultReps: '10-12 reps',
                tempo: '3-0-1-2',
                restSeconds: 60,
                equipment: 'Incline Bench (45°) & EZ-Bar / Dumbbells',
                formCue: 'Chest against incline pad, arms hanging vertically over back of bench. Curl upward.',
                egoWarning: 'Keep upper arms strictly vertical; do not swing.',
                femaleNote: '10-12 reps with light bar.'
              },
              {
                id: 'bi2-5',
                name: 'Zottman Curls (Eccentric Forearm Finisher)',
                targetMuscle: 'Biceps on Way Up, Forearm Brachioradialis on Way Down',
                muscleGroup: 'biceps',
                defaultSets: 3,
                defaultReps: '12-15 reps',
                tempo: '3-0-1-0',
                restSeconds: 60,
                equipment: 'Light Dumbbells',
                formCue: 'Curl up palms facing up, rotate palms facing DOWN at top, lower slowly with overhand grip.',
                egoWarning: 'Use light weight; forearms fatigue quickly on the reverse descent.',
                femaleNote: 'Incredible for firm wrists and lean arm tone.'
              }
            ]
          },
          {
            poolIndex: 2,
            poolName: 'Pool 3: Cable Pulleys & Mechanical Drop Sets',
            exercises: [
              {
                id: 'bi3-1',
                name: 'Low Cable Straight Bar Curls',
                targetMuscle: 'Continuous Tension Biceps Brachii',
                muscleGroup: 'biceps',
                defaultSets: 4,
                defaultReps: '12-15 reps',
                tempo: '2-1-1-1',
                restSeconds: 60,
                equipment: 'Low Cable Pulley & Straight Bar',
                formCue: 'Cable provides constant tension even at bottom where barbells lose resistance.',
                egoWarning: 'Do not hike shoulders to ears.',
                femaleNote: '12 reps with crisp lockout and peak squeeze.'
              },
              {
                id: 'bi3-2',
                name: 'Cable Rope Hammer Curls',
                targetMuscle: 'Brachialis & Forearm Extensors',
                muscleGroup: 'biceps',
                defaultSets: 4,
                defaultReps: '12 reps',
                tempo: '2-0-1-1',
                restSeconds: 60,
                equipment: 'Low Cable & Rope Attachment',
                formCue: 'Keep wrists neutral, spread rope slightly at top.',
                egoWarning: 'No hip bobbing.',
                femaleNote: 'Joint-friendly arm builder.'
              },
              {
                id: 'bi3-3',
                name: 'Bayesian Cable Curl (Behind-the-Back Cable Curl)',
                targetMuscle: 'Maximum Long Head Stretch',
                muscleGroup: 'biceps',
                defaultSets: 3,
                defaultReps: '12-15 reps each arm',
                tempo: '3-1-1-1',
                restSeconds: 45,
                equipment: 'Single Low Cable D-Handle',
                formCue: 'Step forward away from cable so arm is extended behind body. Curl with extreme stretch.',
                egoWarning: 'Do not lean torso forward to reduce stretch.',
                femaleNote: 'Elite exercise for building long, lean bicep line.'
              },
              {
                id: 'bi3-4',
                name: 'Machine Bicep Curl',
                targetMuscle: 'Isolated Hypertrophy Machine',
                muscleGroup: 'biceps',
                defaultSets: 3,
                defaultReps: '10-12 reps (Drop set last set)',
                tempo: '3-0-1-1',
                restSeconds: 60,
                equipment: 'Seated Bicep Machine',
                formCue: 'Align elbow joint axis with machine pivot point.',
                egoWarning: 'Do not lift hips off seat to leverage weight.',
                femaleNote: 'Safe setup to reach muscle failure without spotter.'
              },
              {
                id: 'bi3-5',
                name: 'Plate Pinch Reverse Grip Curls',
                targetMuscle: 'Forearm Flexors & Brachialis Burnout',
                muscleGroup: 'biceps',
                defaultSets: 3,
                defaultReps: '15-20 reps',
                tempo: '2-0-1-1',
                restSeconds: 45,
                equipment: 'EZ-Bar (Overhand Reverse Grip)',
                formCue: 'Grip bar with knuckles facing up. Pure forearm and bicep outer burn.',
                egoWarning: 'Keep wrists straight, never bend wrists downward.',
                femaleNote: 'Great for toned lower arms.'
              }
            ]
          }
        ]
      }
    ]
  },

  // ================= DAY 3A: SHOULDER & LEGS (LOWER BODY FOCUS) =================
  {
    id: 'day3a',
    title: 'DAY 3A: SHOULDER & LEGS (LOWER BODY POWER)',
    subtitle: 'The Hormonal Anabolic Engine - Quads, Glutes, Hamstrings & Delts',
    muscleGroups: [
      {
        name: 'Shoulders (Anterior, Lateral & Posterior Deltoids)',
        key: 'shoulders',
        pools: [
          {
            poolIndex: 0,
            poolName: 'Pool 1: Overhead Power & Wide Lateral Caps',
            exercises: [
              {
                id: 's1-1',
                name: 'Seated Overhead Dumbbell Shoulder Press',
                targetMuscle: 'Anterior Deltoid & Lateral Deltoid Cap',
                muscleGroup: 'shoulders',
                defaultSets: 4,
                defaultReps: '8-10 reps',
                tempo: '3-1-1-0',
                restSeconds: 90,
                equipment: 'Adjustable Bench (80°) & Dumbbells',
                formCue: 'Set bench at 75-80° (slight incline relieves shoulder impingement). Press up in smooth arc.',
                egoWarning: 'Lowering the bench to 45° to turn it into an incline bench press because the weight is too heavy is pure ego lifting.',
                femaleNote: 'Start with 4-8kg dumbbells. Push straight over head with core engaged.'
              },
              {
                id: 's1-2',
                name: 'Standing Dumbbell Lateral Raises',
                targetMuscle: 'Lateral Deltoid (Width for V-Taper Silhouette)',
                muscleGroup: 'shoulders',
                defaultSets: 4,
                defaultReps: '12-15 reps',
                tempo: '2-0-1-2 (2s hold at parallel)',
                restSeconds: 60,
                equipment: 'Dumbbells',
                formCue: 'Slight bend in elbows, lean torso forward 5 degrees. Lead with elbows up to parallel, pinky slightly higher than thumb.',
                egoWarning: 'Swinging heavy dumbbells with knee momentum works traps and lower back, not lateral delts. Use 4-8kg with zero swing.',
                femaleNote: 'Use 2-4kg dumbbells. Control the top pause to build sculptured shoulder caps.'
              },
              {
                id: 's1-3',
                name: 'Reverse Pec Deck / Rear Delt Flyes',
                targetMuscle: 'Posterior Deltoid (3D Roundness & Posture)',
                muscleGroup: 'shoulders',
                defaultSets: 4,
                defaultReps: '12-15 reps',
                tempo: '2-0-1-1',
                restSeconds: 60,
                equipment: 'Reverse Fly Machine',
                formCue: 'Chest against pad, arms extended with soft bend. Sweep arms out wide behind body.',
                egoWarning: 'Do not squeeze shoulder blades together too early; make the back of the shoulder do the work.',
                femaleNote: 'Crucial for countering rounded shoulders from desk work.'
              },
              {
                id: 's1-4',
                name: 'Barbell Military Overhead Press (OHP)',
                targetMuscle: 'Anterior Deltoids, Upper Chest & Core',
                muscleGroup: 'shoulders',
                defaultSets: 3,
                defaultReps: '6-8 reps',
                tempo: '2-1-1-0',
                restSeconds: 120,
                equipment: 'Olympic Barbell & Squat Rack',
                formCue: 'Squeeze glutes and quads to create a rigid platform. Clear face, press bar directly over spine.',
                egoWarning: 'Excessive backward lean turns OHP into a lumbar-crushing incline press. Keep ribs locked down.',
                femaleNote: 'Use light barbell (10-15kg) or dumbbells to learn clean vertical bar path.'
              },
              {
                id: 's1-5',
                name: 'Cable Front Raises with Rope',
                targetMuscle: 'Anterior Deltoid & Clavicular Head',
                muscleGroup: 'shoulders',
                defaultSets: 3,
                defaultReps: '12-15 reps',
                tempo: '2-0-1-1',
                restSeconds: 60,
                equipment: 'Low Cable & Rope Attachment',
                formCue: 'Straddle cable, raise rope up to eye level with thumbs up.',
                egoWarning: 'Do not lean back as the rope rises.',
                femaleNote: 'Smooth resistance builds sleek shoulder lines.'
              }
            ]
          },
          {
            poolIndex: 1,
            poolName: 'Pool 2: Cables & Lateral Continuous Tension',
            exercises: [
              {
                id: 's2-1',
                name: 'Single-Arm Behind-the-Back Cable Lateral Raise',
                targetMuscle: 'Lateral Deltoid Full Arc Contraction',
                muscleGroup: 'shoulders',
                defaultSets: 4,
                defaultReps: '12-15 reps each arm',
                tempo: '2-0-1-2',
                restSeconds: 60,
                equipment: 'Low Cable Pulley & D-Handle',
                formCue: 'Cable behind back, lean away from pulley slightly. Raise arm to parallel, constant tension from degree zero.',
                egoWarning: 'Do not jerk the weight off the stack at the bottom.',
                femaleNote: 'The gold standard for sculpted deltoids without heavy joint pressure.'
              },
              {
                id: 's2-2',
                name: 'Arnold Dumbbell Press',
                targetMuscle: 'Anterior & Medial Deltoid Rotation',
                muscleGroup: 'shoulders',
                defaultSets: 4,
                defaultReps: '10-12 reps',
                tempo: '3-1-1-0',
                restSeconds: 75,
                equipment: 'Dumbbells & Upright Bench',
                formCue: 'Start with palms facing chest. As you press overhead, smoothly rotate palms outward.',
                egoWarning: 'Do not slam weights together overhead.',
                femaleNote: 'Great comprehensive shoulder developer for females; start with 3-5kg.'
              },
              {
                id: 's2-3',
                name: 'Bent-Over Dumbbell Rear Delt Raises',
                targetMuscle: 'Posterior Deltoid & Infraspinatus',
                muscleGroup: 'shoulders',
                defaultSets: 3,
                defaultReps: '15 reps',
                tempo: '2-0-1-1',
                restSeconds: 60,
                equipment: 'Light Dumbbells',
                formCue: 'Hinge hips to 90°, flat back. Raise dumbbells outward like bird wings, pinkies leading.',
                egoWarning: 'Use light weight (3-6kg). Heavy dumbbells turn this into a sloppy row.',
                femaleNote: '2-3kg dumbbells are plenty to burn rear delts.'
              },
              {
                id: 's2-4',
                name: 'Upright Cable Row with Wide Rope',
                targetMuscle: 'Lateral Deltoids & Upper Traps',
                muscleGroup: 'shoulders',
                defaultSets: 3,
                defaultReps: '12 reps',
                tempo: '2-0-1-1',
                restSeconds: 60,
                equipment: 'Cable Pulley & Rope',
                formCue: 'Grip rope wide, pull elbows high and out to sides stopping at chest level.',
                egoWarning: 'Never do close-grip barbell upright rows; they crush the subacromial space. Always use a wide rope to chest level.',
                femaleNote: 'Keep elbows leading the movement, stop at mid-chest.'
              },
              {
                id: 's2-5',
                name: 'Plate Overhead Bus Driver Holds',
                targetMuscle: 'Rotator Cuff & Deltoid Endurance',
                muscleGroup: 'shoulders',
                defaultSets: 3,
                defaultReps: '45 seconds hold / 20 turns',
                tempo: 'Controlled',
                restSeconds: 60,
                equipment: '5kg or 10kg Bumper Plate',
                formCue: 'Hold plate at eye level with arms straight. Rotate plate like a steering wheel left and right.',
                egoWarning: 'Do not drop your head or shrug.',
                femaleNote: '2.5kg or 5kg plate creates deep isometric tone.'
              }
            ]
          },
          {
            poolIndex: 2,
            poolName: 'Pool 3: Machine Precision & 3D Deltoid Density',
            exercises: [
              {
                id: 's3-1',
                name: 'Machine Shoulder Press',
                targetMuscle: 'Anterior & Lateral Deltoids',
                muscleGroup: 'shoulders',
                defaultSets: 4,
                defaultReps: '10-12 reps',
                tempo: '3-0-1-0',
                restSeconds: 75,
                equipment: 'Plate-Loaded Shoulder Machine',
                formCue: 'Adjust seat so handles are at ear level. Press up smoothly.',
                egoWarning: 'Do not hyperextend your lower back off the back pad.',
                femaleNote: 'Safe track allows training close to failure safely.'
              },
              {
                id: 's3-2',
                name: 'Machine Lateral Raise',
                targetMuscle: 'Isolated Medial Deltoid',
                muscleGroup: 'shoulders',
                defaultSets: 4,
                defaultReps: '12-15 reps',
                tempo: '2-1-1-2',
                restSeconds: 60,
                equipment: 'Lateral Raise Machine',
                formCue: 'Pad rests against upper arms. Drive elbows out toward side walls.',
                egoWarning: 'Don’t shrug your neck; press through elbows.',
                femaleNote: '12-15 reps with light pin setting.'
              },
              {
                id: 's3-3',
                name: 'Cable Y-Raises (Incline or Standing)',
                targetMuscle: 'Lateral Deltoids & Lower Traps',
                muscleGroup: 'shoulders',
                defaultSets: 3,
                defaultReps: '15 reps',
                tempo: '2-0-1-2',
                restSeconds: 60,
                equipment: 'Dual Low Pulley',
                formCue: 'Cross cables. Raise arms outward and upward in a 45-degree "Y" shape.',
                egoWarning: 'Zero momentum. Pure 3D deltoid construction.',
                femaleNote: 'Great for shoulder joint health and posture.'
              },
              {
                id: 's3-4',
                name: 'Cable Face Pulls with External Rotation',
                targetMuscle: 'Posterior Deltoids & External Rotators',
                muscleGroup: 'shoulders',
                defaultSets: 3,
                defaultReps: '15-20 reps',
                tempo: '2-0-1-2',
                restSeconds: 60,
                equipment: 'High Cable & Tricep Rope',
                formCue: 'Pull to eyes, separate hands, finish with thumbs pointed back behind head.',
                egoWarning: 'Use light weight; internal rotator dominance is common.',
                femaleNote: 'Essential for healthy shoulder aesthetics.'
              },
              {
                id: 's3-5',
                name: 'Lu Raises (Full Range Dumbbell Lateral to Overhead)',
                targetMuscle: 'Full Deltoid Arc & Serratus',
                muscleGroup: 'shoulders',
                defaultSets: 3,
                defaultReps: '12 reps',
                tempo: '2-0-2-0',
                restSeconds: 60,
                equipment: 'Very Light Dumbbells (2-5kg)',
                formCue: 'Raise dumbbells laterally all the way until they touch overhead in a full circle.',
                egoWarning: 'Never use heavy weights on this Olympic lifter accessory! 2kg-4kg is max.',
                femaleNote: 'Fantastic mobility builder for female athletes.'
              }
            ]
          }
        ]
      },
      {
        name: 'Legs & Lower Body (Quads, Glutes, Hamstrings & Calves)',
        key: 'legs',
        pools: [
          {
            poolIndex: 0,
            poolName: 'Pool 1: Squat Power & The Lower Body Anabolic Catalyst',
            exercises: [
              {
                id: 'l1-1',
                name: 'Barbell Back Squat / Goblet Squat',
                targetMuscle: 'Quadriceps (Vastus Lateralis, Medialis), Gluteus Maximus',
                muscleGroup: 'legs',
                defaultSets: 4,
                defaultReps: '8-10 reps',
                tempo: '3-1-1-0 (3s slow descent to parallel)',
                restSeconds: 120,
                equipment: 'Olympic Barbell, Squat Rack or Heavy Dumbbell',
                formCue: 'Brace core with Valsalva breath. Sit hips back and down between knees, drive through mid-foot.',
                egoWarning: 'Quarter-squatting with 100kg destroys patellar tendons while giving 0% hypertrophy. Squat to parallel with lighter weight!',
                femaleNote: 'Start with Goblet Squats holding a 6-10kg dumbbell at chest to master depth before barbell loading.'
              },
              {
                id: 'l1-2',
                name: 'Romanian Deadlift (RDL with Dumbbells or Barbell)',
                targetMuscle: 'Hamstrings (Biceps Femoris), Glutes & Hip Hinge',
                muscleGroup: 'legs',
                defaultSets: 4,
                defaultReps: '10-12 reps',
                tempo: '3-1-1-0',
                restSeconds: 90,
                equipment: 'Barbell or Heavy Dumbbells',
                formCue: 'Knees slightly soft, push hips straight back to wall behind you until deep hamstring stretch. Squeeze glutes at top.',
                egoWarning: 'Rounding lower back to touch floor will herniate lumbar discs. The bar only needs to go just below the knees!',
                femaleNote: 'Top-tier glute and hamstring shaping exercise; focus on pushing hips back.'
              },
              {
                id: 'l1-3',
                name: 'Leg Press (Foot Positioned for Quads & Glutes)',
                targetMuscle: 'Quadriceps Femoris & Glute Drive',
                muscleGroup: 'legs',
                defaultSets: 4,
                defaultReps: '10-12 reps',
                tempo: '3-1-1-0',
                restSeconds: 90,
                equipment: '45-Degree Leg Press Machine',
                formCue: 'Feet shoulder-width on platform. Lower sled until knees hit 90 degrees. NEVER lock out knees at top.',
                egoWarning: 'Loading 10 plates each side and locking knees backward can snap knee joints backward (hyperextension injury). Always keep soft bend!',
                femaleNote: 'High and wide foot placement shifts load heavily onto glutes.'
              },
              {
                id: 'l1-4',
                name: 'Lying or Seated Hamstring Leg Curls',
                targetMuscle: 'Hamstrings (Semimembranosus & Semitendinosus)',
                muscleGroup: 'legs',
                defaultSets: 3,
                defaultReps: '12-15 reps',
                tempo: '3-0-1-1 (1s peak flex)',
                restSeconds: 60,
                equipment: 'Hamstring Curl Machine',
                formCue: 'Keep hips pressed into pad. Curl heels to glutes, control the 3-second negative descent.',
                egoWarning: 'Do not let hips jerk off the bench on the curl.',
                femaleNote: 'Directly protects anterior cruciate ligament (ACL) from athletic injury.'
              },
              {
                id: 'l1-5',
                name: 'Standing Calf Raises',
                targetMuscle: 'Gastrocnemius & Soleus (Calf Mass)',
                muscleGroup: 'legs',
                defaultSets: 4,
                defaultReps: '15-20 reps',
                tempo: '2-2-1-2 (2s full stretch at bottom, 2s peak raise)',
                restSeconds: 60,
                equipment: 'Standing Calf Machine or Raised Step',
                formCue: 'Full deep heel stretch at bottom, drive onto big toes at top. Never bounce.',
                egoWarning: 'Rapidly bouncing 50 reps without pausing only bounces the Achilles tendon without building calf muscle.',
                femaleNote: 'Great for sculpted ankles and calf tone; focus on deep 2s pause.'
              }
            ]
          },
          {
            poolIndex: 1,
            poolName: 'Pool 2: Dumbbell Lunges, Hip Thrusts & Athletic Stability',
            exercises: [
              {
                id: 'l2-1',
                name: 'Barbell or Dumbbell Hip Thrusts',
                targetMuscle: 'Gluteus Maximus (Peak Hormonal Output)',
                muscleGroup: 'legs',
                defaultSets: 4,
                defaultReps: '10-12 reps',
                tempo: '2-1-1-2 (2s glute lock at top)',
                restSeconds: 90,
                equipment: 'Bench, Barbell with Foam Pad or Heavy Dumbbell',
                formCue: 'Shoulder blades on bench, chin tucked. Drive through heels, full hip extension with posterior pelvic tilt.',
                egoWarning: 'Do not hyperextend lower spine at top; keep ribs down and squeeze glutes hard.',
                femaleNote: 'The #1 glute builder in fitness science; pad the barbell well for comfort.'
              },
              {
                id: 'l2-2',
                name: 'Bulgarian Split Squats (Rear Foot Elevated)',
                targetMuscle: 'Quadriceps, Glutes & Hip Stabilizers',
                muscleGroup: 'legs',
                defaultSets: 3,
                defaultReps: '8-10 reps per leg',
                tempo: '3-1-1-0',
                restSeconds: 90,
                equipment: 'Bench & Dumbbells',
                formCue: 'Back foot on bench. Drop back knee toward floor, torso upright for quads or leaned for glutes.',
                egoWarning: 'Humble yourself: bodyweight alone will test balance and burn. Start with light dumbbells.',
                femaleNote: 'Unbeatable for single-leg balance and glute-quad definition.'
              },
              {
                id: 'l2-3',
                name: 'Leg Extensions (Quad Teardrop Focus)',
                targetMuscle: 'Rectus Femoris & Vastus Medialis (Teardrop)',
                muscleGroup: 'legs',
                defaultSets: 3,
                defaultReps: '12-15 reps',
                tempo: '2-0-1-2 (2s peak hold)',
                restSeconds: 60,
                equipment: 'Leg Extension Machine',
                formCue: 'Sit back against pad. Extend legs, hold contraction at top for 2 seconds.',
                egoWarning: 'Do not kick weight explosively from bottom; control the movement to save knees.',
                femaleNote: '12-15 reps with moderate weight.'
              },
              {
                id: 'l2-4',
                name: 'Walking Dumbbell Lunges',
                targetMuscle: 'Full Lower Body & Core Balance',
                muscleGroup: 'legs',
                defaultSets: 3,
                defaultReps: '20 steps total (10 per leg)',
                tempo: 'Controlled',
                restSeconds: 75,
                equipment: 'Dumbbells',
                formCue: 'Take long strides, lower back knee to skim floor, push off front heel.',
                egoWarning: 'Don’t bang back knee on concrete floor.',
                femaleNote: 'Hold 4-6kg dumbbells or bodyweight for incredible lower body burn.'
              },
              {
                id: 'l2-5',
                name: 'Seated Calf Raise',
                targetMuscle: 'Soleus (Deep Calf Muscle Under Gastrocnemius)',
                muscleGroup: 'legs',
                defaultSets: 4,
                defaultReps: '15-20 reps',
                tempo: '2-2-1-2',
                restSeconds: 60,
                equipment: 'Seated Calf Machine',
                formCue: 'Knees bent at 90° isolates soleus. Lower heels deep, pause 2s, raise high.',
                egoWarning: 'Bouncing eliminates soleus engagement.',
                femaleNote: 'Builds sleek lower leg symmetry.'
              }
            ]
          },
          {
            poolIndex: 2,
            poolName: 'Pool 3: Hack Squats & Pure Mechanical Hypertrophy',
            exercises: [
              {
                id: 'l3-1',
                name: 'Hack Squat Machine',
                targetMuscle: 'Quadriceps Outer Sweep & Glutes',
                muscleGroup: 'legs',
                defaultSets: 4,
                defaultReps: '8-12 reps',
                tempo: '3-1-1-0',
                restSeconds: 90,
                equipment: 'Hack Squat Machine',
                formCue: 'Back fully supported. Place feet low on platform for quad sweep, descend deep to parallel.',
                egoWarning: 'Keep lower back glued to pad; do not let hips lift off pad at bottom.',
                femaleNote: 'Safe guided angle allows great depth without spine strain.'
              },
              {
                id: 'l3-2',
                name: 'Cable Pull-Throughs',
                targetMuscle: 'Hamstrings & Glute Peak Lockout',
                muscleGroup: 'legs',
                defaultSets: 3,
                defaultReps: '12-15 reps',
                tempo: '2-1-1-2',
                restSeconds: 60,
                equipment: 'Low Cable Pulley & Rope',
                formCue: 'Straddle cable facing away. Hinge back, drive hips forward and squeeze glutes.',
                egoWarning: 'Hinge at hips, do not squat.',
                femaleNote: 'Low back friendly hip hinge for posterior chain.'
              },
              {
                id: 'l3-3',
                name: 'Sissy Squat / Bodyweight Matrix',
                targetMuscle: 'Rectus Femoris Quad Stretch',
                muscleGroup: 'legs',
                defaultSets: 3,
                defaultReps: '10-12 reps',
                tempo: '3-1-1-0',
                restSeconds: 60,
                equipment: 'Sissy Squat Bench or Upright Pole',
                formCue: 'Lean torso back in line with thighs as knees push forward. Deep quad stretch.',
                egoWarning: 'Stop if knee joints feel discomfort; requires quad flexibility.',
                femaleNote: 'Use pole support to assist the movement.'
              },
              {
                id: 'l3-4',
                name: 'Seated Leg Curl with Toes Dorsiflexed',
                targetMuscle: 'Hamstring Deep Belly',
                muscleGroup: 'legs',
                defaultSets: 3,
                defaultReps: '12-15 reps',
                tempo: '3-0-1-1',
                restSeconds: 60,
                equipment: 'Seated Leg Curl Machine',
                formCue: 'Seated position places hamstrings in stretched hip flexion for superior hypertrophy.',
                egoWarning: 'Control the release back up.',
                femaleNote: 'Studies show seated curl produces more hypertrophy than lying curl.'
              },
              {
                id: 'l3-5',
                name: 'Leg Press Calf Press',
                targetMuscle: 'Gastrocnemius & Achilles Tendon Strength',
                muscleGroup: 'legs',
                defaultSets: 4,
                defaultReps: '15-20 reps',
                tempo: '2-1-1-2',
                restSeconds: 60,
                equipment: '45-Degree Leg Press Platform (Balls of Feet)',
                formCue: 'Balls of feet on lower edge. Push sled with ankles only.',
                egoWarning: 'Keep safety catches engaged at all times so sled cannot slide down onto you.',
                femaleNote: 'Safe and effective calf builder.'
              }
            ]
          }
        ]
      }
    ]
  },

  // ================= DAY 3B: SHOULDER & ABS (ALTERNATIVE DAY 3) =================
  {
    id: 'day3b',
    title: 'DAY 3B: SHOULDER & ABS (ALTERNATIVE DAY 3)',
    subtitle: 'V-Taper Broad Deltoids & Tight Waistline Core Sculpting',
    muscleGroups: [
      {
        name: 'Shoulders (Anterior, Lateral & Rear Delts)',
        key: 'shoulders',
        pools: [
          {
            poolIndex: 0,
            poolName: 'Pool 1: Overhead Power & Wide Lateral Caps',
            exercises: [
              {
                id: 's3b1-1',
                name: 'Seated Dumbbell Shoulder Press',
                targetMuscle: 'Anterior & Lateral Deltoids',
                muscleGroup: 'shoulders',
                defaultSets: 4,
                defaultReps: '8-10 reps',
                tempo: '3-1-1-0',
                restSeconds: 90,
                equipment: 'Dumbbells & 80° Bench',
                formCue: 'Elbows slightly tucked forward, press upward in smooth arc.',
                egoWarning: 'Do not arch back into a bench press.',
                femaleNote: '4-8kg dumbbells, clean control.'
              },
              {
                id: 's3b1-2',
                name: 'Standing Dumbbell Lateral Raises',
                targetMuscle: 'Lateral Deltoids (Shoulder Width)',
                muscleGroup: 'shoulders',
                defaultSets: 4,
                defaultReps: '12-15 reps',
                tempo: '2-0-1-2',
                restSeconds: 60,
                equipment: 'Dumbbells',
                formCue: 'Lead with elbows, 2s peak hold at top parallel.',
                egoWarning: 'No body swing.',
                femaleNote: '2-4kg with strict form.'
              },
              {
                id: 's3b1-3',
                name: 'Bent-Over Rear Delt Flyes',
                targetMuscle: 'Posterior Deltoids',
                muscleGroup: 'shoulders',
                defaultSets: 4,
                defaultReps: '12-15 reps',
                tempo: '2-0-1-1',
                restSeconds: 60,
                equipment: 'Light Dumbbells',
                formCue: 'Hinge flat back, fly outward wide.',
                egoWarning: 'Light weight only.',
                femaleNote: 'Great for posture.'
              },
              {
                id: 's3b1-4',
                name: 'Cable Upright Row with Rope',
                targetMuscle: 'Lateral Delts & Traps',
                muscleGroup: 'shoulders',
                defaultSets: 3,
                defaultReps: '12 reps',
                tempo: '2-0-1-1',
                restSeconds: 60,
                equipment: 'Low Cable & Rope',
                formCue: 'Pull elbows high and wide to chest.',
                egoWarning: 'Stop at mid-chest level.',
                femaleNote: 'Smooth continuous tension.'
              },
              {
                id: 's3b1-5',
                name: 'Cable Front Plate Raise',
                targetMuscle: 'Anterior Deltoids',
                muscleGroup: 'shoulders',
                defaultSets: 3,
                defaultReps: '12-15 reps',
                tempo: '2-0-1-1',
                restSeconds: 60,
                equipment: 'Cable or Weight Plate',
                formCue: 'Raise to eye level, pause 1s.',
                egoWarning: 'Keep torso straight.',
                femaleNote: 'Smooth tone builder.'
              }
            ]
          },
          {
            poolIndex: 1,
            poolName: 'Pool 2: Cable Deltoid Isolation',
            exercises: [
              {
                id: 's3b2-1',
                name: 'Single-Arm Cable Lateral Raise',
                targetMuscle: 'Lateral Deltoid Peak Isolation',
                muscleGroup: 'shoulders',
                defaultSets: 4,
                defaultReps: '12-15 reps per side',
                tempo: '2-0-1-2',
                restSeconds: 60,
                equipment: 'Low Cable & D-Handle',
                formCue: 'Smooth arc to parallel, hold 2s.',
                egoWarning: 'No jerking off the stack.',
                femaleNote: 'Top exercise for shoulder cap shape.'
              },
              {
                id: 's3b2-2',
                name: 'Smith Machine Overhead Press',
                targetMuscle: 'Anterior Deltoid & Upper Chest',
                muscleGroup: 'shoulders',
                defaultSets: 4,
                defaultReps: '8-10 reps',
                tempo: '3-0-1-0',
                restSeconds: 90,
                equipment: 'Smith Machine',
                formCue: 'Bar passes just in front of nose down to collarbones.',
                egoWarning: 'Do not bounce off safety stoppers.',
                femaleNote: 'Stable overhead safety.'
              },
              {
                id: 's3b2-3',
                name: 'High Cable Face Pulls',
                targetMuscle: 'Rear Delts & Rotator Cuff',
                muscleGroup: 'shoulders',
                defaultSets: 4,
                defaultReps: '15-20 reps',
                tempo: '2-0-1-2',
                restSeconds: 60,
                equipment: 'High Cable Pulley & Rope',
                formCue: 'Pull to eyes, flare hands wide.',
                egoWarning: 'Don’t use excessive weight.',
                femaleNote: 'Excellent posture corrector.'
              },
              {
                id: 's3b2-4',
                name: 'Incline Bench Dumbbell Lateral Raise',
                targetMuscle: 'Medial Deltoid Under Stretch',
                muscleGroup: 'shoulders',
                defaultSets: 3,
                defaultReps: '12-15 reps',
                tempo: '2-1-1-1',
                restSeconds: 60,
                equipment: 'Incline Bench (60°) & Dumbbells',
                formCue: 'Chest against incline bench stops momentum.',
                egoWarning: 'Strict isolation.',
                femaleNote: 'Clean and safe deltoid burn.'
              },
              {
                id: 's3b2-5',
                name: 'Overhead Barbell Shrugs',
                targetMuscle: 'Upper Trapezius & Scapular Elevation',
                muscleGroup: 'shoulders',
                defaultSets: 3,
                defaultReps: '12 reps',
                tempo: '2-0-1-2',
                restSeconds: 60,
                equipment: 'Light Barbell Overhead',
                formCue: 'Hold bar overhead, shrug shoulders straight up.',
                egoWarning: 'Light weight only.',
                femaleNote: 'Builds overhead shoulder stability.'
              }
            ]
          },
          {
            poolIndex: 2,
            poolName: 'Pool 3: Machine & 3D Deltoid Burnout',
            exercises: [
              {
                id: 's3b3-1',
                name: 'Machine Lateral Raise',
                targetMuscle: 'Medial Deltoid',
                muscleGroup: 'shoulders',
                defaultSets: 4,
                defaultReps: '12-15 reps',
                tempo: '2-0-1-2',
                restSeconds: 60,
                equipment: 'Lateral Machine',
                formCue: 'Push out through elbows.',
                egoWarning: 'No neck hiking.',
                femaleNote: 'Smooth guided burn.'
              },
              {
                id: 's3b3-2',
                name: 'Dumbbell Arnold Press',
                targetMuscle: 'Deltoid Rotation Complex',
                muscleGroup: 'shoulders',
                defaultSets: 4,
                defaultReps: '10-12 reps',
                tempo: '3-1-1-0',
                restSeconds: 75,
                equipment: 'Dumbbells',
                formCue: 'Rotate smoothly as you press.',
                egoWarning: 'Control the descent.',
                femaleNote: 'Great for rounded deltoids.'
              },
              {
                id: 's3b3-3',
                name: 'Reverse Pec Deck Flyes',
                targetMuscle: 'Posterior Deltoids',
                muscleGroup: 'shoulders',
                defaultSets: 4,
                defaultReps: '15 reps',
                tempo: '2-0-1-1',
                restSeconds: 60,
                equipment: 'Reverse Pec Deck',
                formCue: 'Sweep arms wide.',
                egoWarning: 'Don’t shrug traps.',
                femaleNote: 'Essential for upper back balance.'
              },
              {
                id: 's3b3-4',
                name: 'Cable Leaning Lateral Raise',
                targetMuscle: 'Lateral Deltoid Peak',
                muscleGroup: 'shoulders',
                defaultSets: 3,
                defaultReps: '12-15 reps',
                tempo: '2-0-1-1',
                restSeconds: 60,
                equipment: 'Low Cable',
                formCue: 'Hold pole, lean out 30 degrees.',
                egoWarning: 'Pure deltoid focus.',
                femaleNote: 'Light resistance, high burn.'
              },
              {
                id: 's3b3-5',
                name: 'Dumbbell Front Hammer Raise',
                targetMuscle: 'Anterior Deltoid & Upper Pec',
                muscleGroup: 'shoulders',
                defaultSets: 3,
                defaultReps: '12 reps',
                tempo: '2-0-1-1',
                restSeconds: 60,
                equipment: 'Dumbbells',
                formCue: 'Thumbs up, raise to forehead.',
                egoWarning: 'No back rocking.',
                femaleNote: 'Great front shoulder line.'
              }
            ]
          }
        ]
      },
      {
        name: 'Abs & Core (Rectus Abdominis, Obliques & Transverse Abdominis)',
        key: 'abs',
        pools: [
          {
            poolIndex: 0,
            poolName: 'Pool 1: Hanging Decompression & Deep Core Flexion',
            exercises: [
              {
                id: 'a1-1',
                name: 'Hanging Leg Raises / Knee Tucks',
                targetMuscle: 'Lower Rectus Abdominis & Hip Flexors',
                muscleGroup: 'abs',
                defaultSets: 4,
                defaultReps: '12-15 reps',
                tempo: '2-0-1-1 (Curl pelvis up at top)',
                restSeconds: 60,
                equipment: 'Pull-Up Bar or Captain’s Chair',
                formCue: 'Do not just swing legs! Roll your pelvis upward toward your chest to contract the lower abs.',
                egoWarning: 'Swinging your body back and forth like a clock pendulum works 0% abs and 100% hip momentum. Keep still.',
                femaleNote: 'Start on Captain’s Chair or do bent-knee raises to build initial core control.'
              },
              {
                id: 'a1-2',
                name: 'Kneeling Cable Rope Crunches',
                targetMuscle: 'Upper & Middle Rectus Abdominis (6-Pack Definition)',
                muscleGroup: 'abs',
                defaultSets: 4,
                defaultReps: '15-20 reps',
                tempo: '2-0-1-2 (2s peak crunch)',
                restSeconds: 60,
                equipment: 'High Cable Pulley & Rope',
                formCue: 'Hold rope by ears. Curl torso down toward knees, flexing spine. Keep hips locked in space.',
                egoWarning: 'Do not sit your hips back onto your heels! Hips must stay high while the ribcage curls into pelvis.',
                femaleNote: 'One of the best ways to add progressive overload to abdominal muscles safely.'
              },
              {
                id: 'a1-3',
                name: 'Decline Bench Weighted Crunches',
                targetMuscle: 'Upper Rectus Abdominis & Core Compression',
                muscleGroup: 'abs',
                defaultSets: 3,
                defaultReps: '15 reps',
                tempo: '2-1-1-1',
                restSeconds: 60,
                equipment: 'Decline Bench & Light Plate',
                formCue: 'Hold weight plate on chest (not behind neck). Curl shoulders off bench, flatten lower back into pad.',
                egoWarning: 'Never yank on your neck with your hands; keep hands on chest or temples.',
                femaleNote: 'Bodyweight crunches with slow 2-second peak flex at top.'
              },
              {
                id: 'a1-4',
                name: 'Russian Twists with Medicine Ball / Plate',
                targetMuscle: 'Internal & External Obliques (Waist Tightener)',
                muscleGroup: 'abs',
                defaultSets: 3,
                defaultReps: '20 twists total (10 each side)',
                tempo: 'Controlled',
                restSeconds: 45,
                equipment: 'Floor & 5kg Medicine Ball',
                formCue: 'Feet elevated in V-sit. Rotate torso from side to side, touching ball to floor beside hip.',
                egoWarning: 'Do not just move your arms; your entire chest and ribcage must rotate.',
                femaleNote: 'Keep heels lightly resting on floor if balance is challenging.'
              },
              {
                id: 'a1-5',
                name: 'Stomach Vacuums & Plank Hold',
                targetMuscle: 'Transverse Abdominis (Internal Weight Belt for Tiny Waist)',
                muscleGroup: 'abs',
                defaultSets: 3,
                defaultReps: '45-60 seconds hold',
                tempo: 'Isometric',
                restSeconds: 60,
                equipment: 'Floor Mat',
                formCue: 'Exhale all air, pull belly button back toward spine as hard as possible, hold rigid plank.',
                egoWarning: 'Do not let lower back sag toward floor; maintain posterior pelvic tilt.',
                femaleNote: 'The gold standard exercise for achieving a tight, flat waistline.'
              }
            ]
          },
          {
            poolIndex: 1,
            poolName: 'Pool 2: Anti-Rotational & Stability Core Strength',
            exercises: [
              {
                id: 'a2-1',
                name: 'Ab Wheel Rollouts (Kneeling)',
                targetMuscle: 'Full Rectus Abdominis & Deep Core Wall',
                muscleGroup: 'abs',
                defaultSets: 3,
                defaultReps: '10-12 reps',
                tempo: '3-1-1-0',
                restSeconds: 75,
                equipment: 'Ab Wheel & Knee Pad',
                formCue: 'Round upper back slightly like a frightened cat, roll wheel out, pull back using core contraction.',
                egoWarning: 'Never allow lower back to arch or sag; if you feel lower back pinch, stop rollout before that point.',
                femaleNote: 'Start with short 30cm rollouts toward a wall stopper to prevent overextending.'
              },
              {
                id: 'a2-2',
                name: 'Cable Woodchoppers (High-to-Low & Low-to-High)',
                targetMuscle: 'Obliques & Transverse Rotational Power',
                muscleGroup: 'abs',
                defaultSets: 3,
                defaultReps: '12 reps each side',
                tempo: '2-0-1-1',
                restSeconds: 60,
                equipment: 'Cable Pulley & D-Handle',
                formCue: 'Pivot on back foot, rotate torso with arms extended, driving handle across body.',
                egoWarning: 'Do not pull solely with arms; initiate rotation from the core and hips.',
                femaleNote: 'Fabulous for cinching the waist and burning core calories.'
              },
              {
                id: 'a2-3',
                name: 'Lying Leg Raises on Flat Bench',
                targetMuscle: 'Lower Abdominal Wall',
                muscleGroup: 'abs',
                defaultSets: 3,
                defaultReps: '15 reps',
                tempo: '2-1-1-1',
                restSeconds: 45,
                equipment: 'Flat Bench',
                formCue: 'Hands gripping bench behind head. Raise legs to 90 degrees, push hips 2 inches off bench at top.',
                egoWarning: 'Do not arch back off bench on descent.',
                femaleNote: 'Bend knees slightly if hip flexors are tight.'
              },
              {
                id: 'a2-4',
                name: 'Side Plank with Hip Dips',
                targetMuscle: 'Lateral Obliques & Quadratus Lumborum',
                muscleGroup: 'abs',
                defaultSets: 3,
                defaultReps: '12-15 dips per side',
                tempo: 'Controlled',
                restSeconds: 45,
                equipment: 'Floor Mat',
                formCue: 'Elbow directly under shoulder. Lower hip toward floor, drive up past neutral.',
                egoWarning: 'Keep body in straight line; do not roll chest forward.',
                femaleNote: 'Excellent for toning side waist and pelvic stabilization.'
              },
              {
                id: 'a2-5',
                name: 'Bicycle Crunches (Air Bicycles)',
                targetMuscle: 'Rectus Abdominis & Rotational Synergy',
                muscleGroup: 'abs',
                defaultSets: 3,
                defaultReps: '30 alternating reps (15 each side)',
                tempo: '2-0-2-0 (Deliberate speed)',
                restSeconds: 45,
                equipment: 'Floor Mat',
                formCue: 'Elbow to opposite knee, hold 1s pause, extend other leg straight out. Slow and deliberate.',
                egoWarning: 'Flapping your elbows fast like a dying bug does not engage abs. Slow, controlled crunches only.',
                femaleNote: 'Ranked #1 for abdominal muscle EMG activation.'
              }
            ]
          },
          {
            poolIndex: 2,
            poolName: 'Pool 3: Machine & Isometric Core Lockdown',
            exercises: [
              {
                id: 'a3-1',
                name: 'Seated Machine Ab Crunch',
                targetMuscle: 'Isolated Rectus Abdominis Crunch',
                muscleGroup: 'abs',
                defaultSets: 4,
                defaultReps: '15-20 reps',
                tempo: '2-0-1-2',
                restSeconds: 60,
                equipment: 'Seated Ab Machine',
                formCue: 'Curl torso forward, bringing ribs to hips, hold 2s peak squeeze.',
                egoWarning: 'Do not push with feet; let abs perform the crunch.',
                femaleNote: 'Safe progressive loading without neck strain.'
              },
              {
                id: 'a3-2',
                name: 'Pallof Press (Cable Anti-Rotation)',
                targetMuscle: 'Transverse Abdominis & Core Anti-Rotation',
                muscleGroup: 'abs',
                defaultSets: 3,
                defaultReps: '12 reps each side (3s hold per rep)',
                tempo: 'Controlled',
                restSeconds: 45,
                equipment: 'Chest-Height Cable & D-Handle',
                formCue: 'Hold handle at chest, press straight out, resist cable wanting to twist you. Hold 3s, return.',
                egoWarning: 'Do not allow torso to rotate even one millimeter.',
                femaleNote: 'Protects lumbar spine and creates tight, firm abdominal girdle.'
              },
              {
                id: 'a3-3',
                name: 'Deadbugs with Alternating Arm/Leg Reach',
                targetMuscle: 'Deep Transverse & Pelvic Stabilizers',
                muscleGroup: 'abs',
                defaultSets: 3,
                defaultReps: '16 reps (8 per side)',
                tempo: '3-0-1-0',
                restSeconds: 45,
                equipment: 'Floor Mat',
                formCue: 'Back pressed flat into floor. Extend opposite arm and leg, keeping lower back glued to floor.',
                egoWarning: 'If lower back arches off floor, you have lost core tension.',
                femaleNote: 'Supreme for postpartum and core rehab; safe and highly effective.'
              },
              {
                id: 'a3-4',
                name: 'Captain’s Chair Windshield Wipers',
                targetMuscle: 'Obliques & Lower Rectus Abdominis',
                muscleGroup: 'abs',
                defaultSets: 3,
                defaultReps: '12 reps alternating',
                tempo: 'Controlled',
                restSeconds: 60,
                equipment: 'Captain’s Chair Station',
                formCue: 'Raise knees to chest, rotate knees left and right under control.',
                egoWarning: 'No swinging momentum.',
                femaleNote: '10 reps with knee bend.'
              },
              {
                id: 'a3-5',
                name: 'Dragon Flag Progression / Reverse Crunches',
                targetMuscle: 'Complete Abdominal Wall',
                muscleGroup: 'abs',
                defaultSets: 3,
                defaultReps: '10-12 reps',
                tempo: '3-1-1-0',
                restSeconds: 60,
                equipment: 'Bench',
                formCue: 'Grip bench behind head, raise legs and lower back off bench, lower down with straight rigid torso.',
                egoWarning: 'Bruce Lee’s signature move; start with tucked knees before attempting straight legs.',
                femaleNote: 'Tuck-knee reverse crunches are ideal to build up to this.'
              }
            ]
          }
        ]
      }
    ]
  }
];

export function getTierSetsAndReps(tier: PhysiqueTier, gender: Gender, defaultSets: number, defaultReps: string) {
  let adjustedSets = defaultSets;
  let adjustedReps = defaultReps;
  let pacingAdvice = '';

  if (tier === 'beginner') {
    adjustedSets = Math.max(3, defaultSets - 1);
    adjustedReps = '12-15 reps (Light weight, perfect form)';
    pacingAdvice = 'Master movement mechanics first. Leave 3-4 reps in reserve (RIR 3-4).';
  } else if (tier === 'intermediate') {
    adjustedSets = defaultSets;
    adjustedReps = defaultReps;
    pacingAdvice = 'Push compound movements with progressive overload. Leave 1-2 reps in reserve (RIR 1-2).';
  } else if (tier === 'athletic') {
    adjustedSets = defaultSets;
    adjustedReps = '8-12 reps (Explosive concentric & power tempo)';
    pacingAdvice = 'Combine mechanical power with mobility. Control the negative, explode on the push/pull.';
  } else if (tier === 'v-taper') {
    adjustedSets = defaultSets + 1; // High volume
    adjustedReps = '10-15 reps (Strict peak contractions & pump)';
    pacingAdvice = 'Maximal hypertrophy volume. Focus on outer lat width, lateral shoulder caps, and upper chest shelf.';
  }

  if (gender === 'female') {
    pacingAdvice += ' Start smoothly with conservative loading, focusing on pelvic alignment, full joint mobility, and gradual week-over-week progression.';
  }

  return { adjustedSets, adjustedReps, pacingAdvice };
}
