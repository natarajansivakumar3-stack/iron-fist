import { DayDietPlan, FitnessGoal } from '../types/gym';

export const DIET_PLANS: Record<FitnessGoal, DayDietPlan[]> = {
  // ================= 1. WEIGHT LOSS (CALORIE DEFICIT & HIGH SATIETY) =================
  weightloss: [
    {
      dayNumber: 1,
      dayName: 'Day 1: High-Protein Kickoff & Fiber Shield',
      theme: 'Kickstart metabolic deficit with fiber-rich greens, omega eggs, and peri-workout energy.',
      totalCalories: 1850,
      totalProtein: 165,
      totalCarbs: 145,
      totalFats: 50,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '07:30 AM',
          headline: 'Metabolic Ignite Scramble & Oats',
          anabolicPurpose: 'Awakens resting metabolic rate and provides sustained morning glucose without insulin spike.',
          meals: [
            { name: '3 Whole Eggs + 2 Egg Whites Scrambled with Spinach', portion: '1 large bowl', calories: 280, protein: 28, carbs: 4, fats: 16, recipeNote: 'Cook with 1 tsp olive oil spray, add pink Himalayan salt and crushed black pepper.' },
            { name: 'Rolled Oats with Cinnamon & Chia Seeds', portion: '45g dry cooked in water', calories: 180, protein: 6, carbs: 30, fats: 4, recipeNote: 'Top with zero-calorie stevia and Ceylon cinnamon for blood sugar regulation.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '10:30 AM',
          headline: 'Satiety Buffer & Electrolyte Hydration',
          anabolicPurpose: 'Prevents mid-morning ghrelin (hunger hormone) spikes and stabilizes cortisol.',
          meals: [
            { name: 'Low-Fat Greek Yogurt (0-2%) with Blueberries', portion: '180g yogurt + 50g berries', calories: 150, protein: 18, carbs: 14, fats: 2, recipeNote: 'Rich in casein protein for slow gastric emptying; high anthocyanin antioxidants.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '01:30 PM',
          headline: 'Lean Poultry Power Plate',
          anabolicPurpose: 'High Thermic Effect of Food (TEF) burning up to 25% of calories during digestion.',
          meals: [
            { name: 'Grilled Herb Chicken Breast', portion: '160g cooked', calories: 230, protein: 42, carbs: 0, fats: 5, recipeNote: 'Marinated in lemon juice, oregano, garlic, and smoked paprika.' },
            { name: 'Steamed Quinoa & Roasted Asparagus + Broccoli', portion: '80g cooked quinoa + 150g greens', calories: 190, protein: 8, carbs: 32, fats: 3, recipeNote: 'Asparagus acts as a natural potassium diuretic reducing subcutaneous water.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM (60 min before workout)',
          headline: 'Clean Glycogen Primer & Blood Flow',
          anabolicPurpose: 'Delivers easily digestible complex carbohydrates to prevent muscle catabolism during heavy lifts.',
          meals: [
            { name: '1 Medium Green Apple + 1 tbsp Almond Butter', portion: '1 apple + 15g butter', calories: 170, protein: 4, carbs: 24, fats: 8, recipeNote: 'Pectin fiber gives steady energy; monounsaturated fats smooth glucose release.' },
            { name: 'Black Coffee or Green Tea with Pinch of Sea Salt', portion: '250ml', calories: 5, protein: 0, carbs: 1, fats: 0, recipeNote: 'Natural caffeine mobilizes fatty acids into bloodstream; sodium enhances muscular pump.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM (Within 45 min)',
          headline: 'Rapid Anabolic Window Leucine Pulse',
          anabolicPurpose: 'Triggers mTOR protein synthesis to preserve lean muscle tissue in a calorie deficit.',
          meals: [
            { name: '100% Whey Isolate Shake + Half Ripe Banana', portion: '1 scoop (30g) + 60g banana', calories: 175, protein: 26, carbs: 16, fats: 1, recipeNote: 'Mix with ice water for maximum absorption rate. 3g leucine kicks off muscle repair.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:00 PM',
          headline: 'Grilled White Fish & Rainbow Stir-Fry',
          anabolicPurpose: 'Low-calorie high-volume meal that keeps stomach full without bedtime bloat.',
          meals: [
            { name: 'Grilled White Fish (Tilapia, Cod or Basa)', portion: '180g fillet', calories: 190, protein: 38, carbs: 0, fats: 3, recipeNote: 'Season with crushed garlic, turmeric, and sea salt.' },
            { name: 'Zucchini Noodles & Bell Peppers with 1 tsp Olive Oil', portion: '200g vegetables', calories: 130, protein: 4, carbs: 14, fats: 6, recipeNote: 'Massive plate volume with microscopic calorie density.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:00 PM (30 min before bed)',
          headline: 'Nighttime Anti-Catabolic Casein Shield',
          anabolicPurpose: 'Ensures 8-hour continuous amino acid trickle while asleep, preventing overnight muscle breakdown.',
          meals: [
            { name: 'Micellar Casein Pudding or Low-Fat Cottage Cheese', portion: '120g cottage cheese', calories: 110, protein: 17, carbs: 4, fats: 2, recipeNote: 'Sprinkle with Ceylon cinnamon. High tryptophan aids deep Stage 3-4 REM sleep.' }
          ]
        }
      ]
    },
    {
      dayNumber: 2,
      dayName: 'Day 2: Mediterranean Fish & Citrus Cleanse',
      theme: 'Heart-healthy fats and crisp leafy fiber to rev up lipid oxidation.',
      totalCalories: 1820,
      totalProtein: 160,
      totalCarbs: 140,
      totalFats: 52,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '07:30 AM',
          headline: 'Smoked Salmon Avocado Wrap',
          anabolicPurpose: 'Omega-3 fatty acids reduce systemic training inflammation.',
          meals: [
            { name: 'Smoked Salmon on Low-Carb Sprouted Wrap with Egg Whites', portion: '70g salmon + 3 egg whites + 1 wrap', calories: 290, protein: 32, carbs: 18, fats: 9, recipeNote: 'Add baby spinach leaves and a slice of tomato.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '10:30 AM',
          headline: 'Grapefruit & Raw Walnuts',
          anabolicPurpose: 'Naringin flavonoids enhance insulin sensitivity.',
          meals: [
            { name: 'Half Pink Grapefruit + 6 Walnut Halves', portion: '150g fruit + 15g nuts', calories: 140, protein: 4, carbs: 14, fats: 9, recipeNote: 'Refreshing low glycemic bite.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '01:30 PM',
          headline: 'Turkey Breast Chopped Greek Salad',
          anabolicPurpose: 'Zero-carb lean protein powerhouse with crisp hydration greens.',
          meals: [
            { name: 'Roasted Lean Turkey Breast over Romaine, Cucumbers & Kalamata Olives', portion: '170g turkey + large salad', calories: 340, protein: 44, carbs: 12, fats: 11, recipeNote: 'Dress with fresh lemon juice and red wine vinegar.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM',
          headline: 'Oat Cake with Berry Puree',
          anabolicPurpose: 'Slow-burning beta-glucan carbs for gym stamina.',
          meals: [
            { name: '2 Wholegrain Oat Crackers with Light Hummus + Green Tea', portion: '2 cakes + 20g hummus', calories: 150, protein: 5, carbs: 22, fats: 4, recipeNote: 'Light on gut; zero heavy digestion during squats.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Strawberry Whey Rebuilder',
          anabolicPurpose: 'Glutamine & BCAA delivery to depleted muscle fibers.',
          meals: [
            { name: 'Whey Protein Isolate blended with 80g frozen strawberries', portion: '1 shake', calories: 165, protein: 27, carbs: 12, fats: 1, recipeNote: 'Rich in vitamin C to blunt post-workout cortisol.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:00 PM',
          headline: 'Seared Wild Salmon & Garlic Green Beans',
          anabolicPurpose: 'High EPA/DHA to support cellular membrane repair.',
          meals: [
            { name: 'Wild Alaskan Salmon Fillet + Sautéed Garlic Green Beans', portion: '150g salmon + 150g beans', calories: 320, protein: 35, carbs: 10, fats: 14, recipeNote: 'Crispy skin, rich in natural astaxanthin antioxidant.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:00 PM',
          headline: 'Chamomile Infusion & Spiced Cottage Curd',
          anabolicPurpose: 'Lowers heart rate and eases central nervous system recovery.',
          meals: [
            { name: 'Low-Fat Cottage Cheese with Ground Nutmeg + Hot Chamomile Tea', portion: '100g cottage cheese', calories: 95, protein: 14, carbs: 3, fats: 2, recipeNote: 'Promotes deep restorative sleep.' }
          ]
        }
      ]
    },
    {
      dayNumber: 3,
      dayName: 'Day 3: Plant & Poultry Thermogenic Surge',
      theme: 'High volume veggies and tender roasted poultry to torch stubborn visceral fat.',
      totalCalories: 1840,
      totalProtein: 168,
      totalCarbs: 142,
      totalFats: 48,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '07:30 AM',
          headline: 'Egg White Frittata with Bell Peppers & Feta',
          anabolicPurpose: 'Clean morning protein with potassium-rich peppers.',
          meals: [
            { name: '5 Egg Whites + 1 Whole Egg Baked Frittata with 20g Light Feta', portion: '1 slice', calories: 240, protein: 30, carbs: 5, fats: 10, recipeNote: 'Baked in skillet with Italian herbs and sliced bell peppers.' },
            { name: '1 Slice Toasted Sprouted Ezekiel Bread', portion: '1 slice (34g)', calories: 80, protein: 5, carbs: 15, fats: 1, recipeNote: 'Sprouted grains provide maximum bioavailable micronutrients.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '10:30 AM',
          headline: 'Protein Chia Cold Brew',
          anabolicPurpose: 'Hydrating chia gel maintains cellular water retention.',
          meals: [
            { name: 'Cold Brew Coffee with Half Scoop Vanilla Whey & 1 tsp Chia Seeds', portion: '300ml', calories: 120, protein: 15, carbs: 6, fats: 3, recipeNote: 'Blended with ice.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '01:30 PM',
          headline: 'Lean Beef & Cauliflower Rice Bowl',
          anabolicPurpose: 'Creatine, bioavailable heme iron, and B-vitamins for neuromuscular drive.',
          meals: [
            { name: '95% Extra Lean Ground Beef with Taco Spices', portion: '150g cooked', calories: 250, protein: 38, carbs: 0, fats: 9, recipeNote: 'Cooked with cumin, coriander, and minced shallots.' },
            { name: 'Sautéed Cauliflower Rice & Black Beans Salsa', portion: '150g cauli rice + 50g black beans', calories: 140, protein: 7, carbs: 24, fats: 1, recipeNote: 'Tastes like chipotle bowl at a third of the calories.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM',
          headline: 'Rice Cake with Crushed Raspberries',
          anabolicPurpose: 'Fast glycogen priming that does not sit in stomach.',
          meals: [
            { name: '2 Plain Brown Rice Cakes topped with 40g mashed raspberries & sea salt', portion: '2 cakes', calories: 120, protein: 3, carbs: 25, fats: 1, recipeNote: 'Super light, zero reflux during heavy lifts.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Post-Lift Whey Recovery Shot',
          anabolicPurpose: 'Recharges amino acid pool within 45 minutes.',
          meals: [
            { name: 'Whey Protein Isolate in Cold Coconut Water', portion: '1 scoop in 200ml coconut water', calories: 170, protein: 25, carbs: 12, fats: 1, recipeNote: 'Natural potassium electrolytes eliminate post-workout cramping.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:00 PM',
          headline: 'Lemon Rosemary Grilled Chicken & Roasted Pumpkin',
          anabolicPurpose: 'Fiber-rich complex beta-carotene carbs for nighttime serotonin production.',
          meals: [
            { name: 'Grilled Rosemary Chicken Breast', portion: '160g cooked', calories: 230, protein: 42, carbs: 0, fats: 5, recipeNote: 'Tender and juicy.' },
            { name: 'Roasted Spiced Pumpkin Cubes & Steamed Kale', portion: '120g pumpkin + 100g kale', calories: 140, protein: 5, carbs: 26, fats: 2, recipeNote: 'Low calorie, sweet and deeply satisfying.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:00 PM',
          headline: 'Warm Cinnamon Almond Milk with Casein',
          anabolicPurpose: 'Slow digestion overnight.',
          meals: [
            { name: 'Unsweetened Almond Milk with 15g Micellar Casein', portion: '250ml warm cup', calories: 95, protein: 13, carbs: 2, fats: 3, recipeNote: 'Comforting bedtime beverage.' }
          ]
        }
      ]
    },
    {
      dayNumber: 4,
      dayName: 'Day 4: Asian Fusion & Green Tea Thermogenesis',
      theme: 'Ginger, garlic, and lean pork tenderloin or chicken with crisp bok choy.',
      totalCalories: 1810,
      totalProtein: 162,
      totalCarbs: 138,
      totalFats: 49,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '07:30 AM',
          headline: 'Tofu & Egg Scramble with Sriracha',
          anabolicPurpose: 'Dual-source complete amino profile with capsaicin fat-burn boost.',
          meals: [
            { name: '2 Whole Eggs + 100g Firm Tofu Crumbled with Green Onions', portion: '1 plate', calories: 260, protein: 24, carbs: 4, fats: 16, recipeNote: 'Drizzle with 1 tsp sriracha for thermogenic kick.' },
            { name: 'Half Sliced Grapefruit', portion: '120g', calories: 50, protein: 1, carbs: 12, fats: 0, recipeNote: 'Natural appetite suppressant.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '10:30 AM',
          headline: 'Crunchy Edamame Pods',
          anabolicPurpose: 'Plant isoflavones and high dietary fiber.',
          meals: [
            { name: 'Steamed Edamame in Pod with Sea Salt', portion: '100g pods', calories: 120, protein: 11, carbs: 9, fats: 4, recipeNote: 'Fun to eat and highly satiating.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '01:30 PM',
          headline: 'Asian Glazed Pork Tenderloin / Chicken & Bok Choy',
          anabolicPurpose: 'Pork tenderloin is as lean as chicken breast with high B-1 thiamine.',
          meals: [
            { name: 'Lean Pork Tenderloin (or Chicken Breast) in Ginger Soy Marinade', portion: '160g cooked', calories: 240, protein: 40, carbs: 4, fats: 6, recipeNote: 'Pan-seared without added oils.' },
            { name: 'Steamed Baby Bok Choy & 70g Brown Basmati Rice', portion: '150g bok choy + 70g rice', calories: 180, protein: 5, carbs: 32, fats: 2, recipeNote: 'Crunchy and micronutrient loaded.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM',
          headline: 'Banana Half with Cinnamon Espresso',
          anabolicPurpose: 'Quick carbohydrate surge for high-rep pump.',
          meals: [
            { name: 'Half Banana with 5 Raw Almonds + Double Espresso', portion: '1 small snack', calories: 120, protein: 3, carbs: 18, fats: 4, recipeNote: 'Enhances neuromuscular firing.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Chocolate Whey Muscle Quench',
          anabolicPurpose: 'Restores nitrogen balance immediately.',
          meals: [
            { name: '1 Scoop Chocolate Whey Isolate in 300ml Cold Water', portion: '1 shake', calories: 120, protein: 25, carbs: 2, fats: 1, recipeNote: 'Zero sugar, ultra-pure whey filtration.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:00 PM',
          headline: 'Garlic Shrimp & Spaghetti Squash Marinara',
          anabolicPurpose: 'Ultra-low calorie density that allows massive portion size.',
          meals: [
            { name: 'Pan-Seared Jumbo Shrimp with Garlic & Parsley', portion: '180g shrimp', calories: 180, protein: 38, carbs: 2, fats: 2, recipeNote: 'Shrimp is 90% pure protein.' },
            { name: 'Roasted Spaghetti Squash with No-Sugar Basil Marinara', portion: '250g squash + 80g sauce', calories: 140, protein: 3, carbs: 26, fats: 2, recipeNote: 'Huge warm comforting bowl.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:00 PM',
          headline: 'Lemon Balm Tea & Greek Curd',
          anabolicPurpose: 'Promotes deep sleep relaxation.',
          meals: [
            { name: '100g 0% Greek Yogurt with dash of vanilla', portion: '1 small bowl', calories: 90, protein: 16, carbs: 5, fats: 0, recipeNote: 'Zero fat, high casein.' }
          ]
        }
      ]
    },
    {
      dayNumber: 5,
      dayName: 'Day 5: Hearty Turkey Chili & Clean Carb Reset',
      theme: 'Comfort food engineered for fat burning with high soluble fiber beans and lean turkey.',
      totalCalories: 1860,
      totalProtein: 166,
      totalCarbs: 148,
      totalFats: 47,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '07:30 AM',
          headline: 'Protein Overnight Oats with Chia & Berries',
          anabolicPurpose: 'Pre-soaked beta-glucans for optimal gut microbiome health.',
          meals: [
            { name: 'Rolled Oats (40g) soaked in Almond Milk with 20g Vanilla Whey & 50g Blackberries', portion: '1 jar', calories: 290, protein: 24, carbs: 36, fats: 5, recipeNote: 'Prepared night before for quick breakfast.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '10:30 AM',
          headline: 'Hard-Boiled Egg + Cucumber Slices',
          anabolicPurpose: 'Choline for liver metabolism and brain clarity.',
          meals: [
            { name: '1 Large Hard-Boiled Egg with 100g Sliced Cucumbers & Tajín', portion: '1 plate', calories: 95, protein: 7, carbs: 3, fats: 5, recipeNote: 'Refreshing low sodium crunch.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '01:30 PM',
          headline: 'Lean Turkey & Black Bean Power Chili',
          anabolicPurpose: 'Slow-burning resistant starches feed gut bacteria and suppress appetite for hours.',
          meals: [
            { name: 'Homemade Extra Lean Turkey Chili with Diced Tomatoes, Cumin & Peppers', portion: '350g bowl', calories: 380, protein: 44, carbs: 32, fats: 7, recipeNote: 'High fiber (9g) and high protein.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM',
          headline: 'Kiwi Slices & Rice Cake',
          anabolicPurpose: 'Actinidain enzymes assist in protein digestion.',
          meals: [
            { name: '1 Golden Kiwi fruit + 1 Brown Rice Cake', portion: '1 snack', calories: 90, protein: 2, carbs: 20, fats: 1, recipeNote: 'High vitamin C.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Anabolic Whey & Rice Milk Churn',
          anabolicPurpose: 'Fast absorption post workout.',
          meals: [
            { name: '1 Scoop Whey Isolate + 150ml Rice Milk', portion: '1 shake', calories: 170, protein: 26, carbs: 14, fats: 1, recipeNote: 'Replenishes muscle glycogen smoothly.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:00 PM',
          headline: 'Lemon Crusted Haddock & Roasted Brussels Sprouts',
          anabolicPurpose: 'Sulforaphane in Brussels sprouts supports healthy estrogen detoxification.',
          meals: [
            { name: 'Baked Haddock Fillet with Lemon Pepper', portion: '170g fillet', calories: 180, protein: 36, carbs: 0, fats: 2, recipeNote: 'Mild white fish with flaky texture.' },
            { name: 'Crispy Roasted Brussels Sprouts with 1 tsp Olive Oil', portion: '180g sprouts', calories: 150, protein: 6, carbs: 16, fats: 6, recipeNote: 'Caramelized edges taste incredible.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:00 PM',
          headline: 'Spiced Cottage Cheese Mousse',
          anabolicPurpose: 'Slow nocturnal recovery.',
          meals: [
            { name: 'Whipped Cottage Cheese (120g) with Cinnamon & Stevia', portion: '1 small bowl', calories: 110, protein: 17, carbs: 4, fats: 2, recipeNote: 'Rich creamy texture like cheesecake.' }
          ]
        }
      ]
    },
    {
      dayNumber: 6,
      dayName: 'Day 6: Weekend Lean Steak & Roasted Roots',
      theme: 'High zinc, high carnitine red meat meal to optimize natural testosterone while maintaining strict deficit.',
      totalCalories: 1870,
      totalProtein: 165,
      totalCarbs: 140,
      totalFats: 53,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '08:00 AM',
          headline: 'Avocado Toast with Poached Eggs',
          anabolicPurpose: 'Fat-soluble vitamins A, D, E, K absorption.',
          meals: [
            { name: '2 Poached Eggs over 1 slice Toasted Rye Bread + 30g Sliced Avocado', portion: '1 plate', calories: 280, protein: 16, carbs: 18, fats: 16, recipeNote: 'Chili flakes on top.' },
            { name: '3 Egg Whites on the side for extra protein', portion: '100g whites', calories: 50, protein: 11, carbs: 0, fats: 0, recipeNote: 'Boosts total breakfast protein to 27g.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '11:00 AM',
          headline: 'Celery Sticks with Light Cream Cheese',
          anabolicPurpose: 'Apigenin flavonoid in celery reduces stress.',
          meals: [
            { name: 'Crisp Celery Ribs with 30g Light Chive Cream Cheese', portion: '1 bowl', calories: 90, protein: 3, carbs: 4, fats: 6, recipeNote: 'Zero calorie crunch.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '02:00 PM',
          headline: 'Grilled Chicken Souvlaki & Tzatziki Plate',
          anabolicPurpose: 'Probiotic Greek yogurt and garlic immune booster.',
          meals: [
            { name: 'Greek Herb Chicken Skewers with Cucumber Tzatziki', portion: '170g chicken + 40g tzatziki', calories: 290, protein: 42, carbs: 4, fats: 9, recipeNote: 'Marinated in lemon, oregano, and garlic.' },
            { name: 'Greek Salad (Cucumbers, Tomatoes, Red Onion, 15g Feta)', portion: '200g salad', calories: 120, protein: 4, carbs: 12, fats: 6, recipeNote: 'Dressed with oregano and lemon.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM',
          headline: 'Matcha Latte with Almond Milk',
          anabolicPurpose: 'EGCG catechins boost fat oxidation during training.',
          meals: [
            { name: 'Ceremonial Matcha Green Tea whisked in Unsweetened Almond Milk', portion: '300ml', calories: 50, protein: 2, carbs: 4, fats: 3, recipeNote: 'Sustained calm focus.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Vanilla Whey with Pure Cocoa Dust',
          anabolicPurpose: 'Epicatechins in cocoa improve muscle nitric oxide.',
          meals: [
            { name: '1 Scoop Vanilla Whey Isolate + 1 tsp Pure Dark Cocoa in Water', portion: '1 shake', calories: 135, protein: 26, carbs: 3, fats: 2, recipeNote: 'Tastes like hot chocolate over ice.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:00 PM',
          headline: 'Flank Steak with Sautéed Mushrooms & Asparagus',
          anabolicPurpose: 'Naturally packed with creatine and L-carnitine.',
          meals: [
            { name: 'Grilled Lean Flank Steak (Grass-Fed)', portion: '160g cooked', calories: 310, protein: 44, carbs: 0, fats: 13, recipeNote: 'Sliced thin against the grain.' },
            { name: 'Sautéed Cremini Mushrooms & Asparagus in 1 tsp Butter', portion: '180g veg', calories: 130, protein: 5, carbs: 8, fats: 8, recipeNote: 'Umami richness.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:00 PM',
          headline: 'Sleepytime Herbal Tea with Casein Spoon',
          anabolicPurpose: 'Deep night recovery.',
          meals: [
            { name: '100g 0% Greek Yogurt with Cinnamon', portion: '1 small cup', calories: 85, protein: 15, carbs: 4, fats: 0, recipeNote: 'Clean night protein.' }
          ]
        }
      ]
    },
    {
      dayNumber: 7,
      dayName: 'Day 7: Leptin Reset & Controlled Re-Feed',
      theme: 'Slightly higher clean complex carbohydrates to upregulate thyroid T3 and leptin for the coming week.',
      totalCalories: 1950,
      totalProtein: 160,
      totalCarbs: 185,
      totalFats: 45,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '08:30 AM',
          headline: 'Protein Banana Oat Pancakes',
          anabolicPurpose: 'Replenishes depleted liver glycogen and signals hormonal abundance.',
          meals: [
            { name: 'Blended Oats (50g), 1 Scoop Vanilla Whey, 1 Egg, 1/2 Banana cooked as pancakes', portion: '3 medium pancakes', calories: 370, protein: 34, carbs: 46, fats: 6, recipeNote: 'Cook on nonstick pan, top with zero-calorie maple syrup.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '11:30 AM',
          headline: 'Sliced Pear with Cinnamon',
          anabolicPurpose: 'Hydrating low-glycemic fruit.',
          meals: [
            { name: '1 Ripe Bartlett Pear sprinkled with Ceylon Cinnamon', portion: '150g', calories: 95, protein: 1, carbs: 24, fats: 0, recipeNote: 'Rich in dietary fiber.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '02:00 PM',
          headline: 'Sweet Potato & Herb Roasted Chicken Breast',
          anabolicPurpose: 'Clean complex carbs to restock muscle belly fullness.',
          meals: [
            { name: 'Baked Herb Chicken Breast', portion: '160g cooked', calories: 230, protein: 42, carbs: 0, fats: 5, recipeNote: 'Tender baked.' },
            { name: 'Roasted Japanese Sweet Potato Cubes & Steamed Broccoli', portion: '140g sweet potato + 100g broccoli', calories: 200, protein: 5, carbs: 42, fats: 1, recipeNote: 'Sweet and delicious carb source.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM',
          headline: 'Rice Cakes with Raw Honey',
          anabolicPurpose: 'Rapid glycolytic fuel for explosive training.',
          meals: [
            { name: '2 Rice Cakes with 1 tsp Raw Pure Honey', portion: '2 cakes', calories: 110, protein: 2, carbs: 26, fats: 0, recipeNote: 'Instant energy.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Whey Isolate with Pineapple Chunks',
          anabolicPurpose: 'Bromelain enzymes in pineapple accelerate tissue repair.',
          meals: [
            { name: '1 Scoop Whey Isolate + 60g Fresh Pineapple blended with ice', portion: '1 shake', calories: 160, protein: 26, carbs: 14, fats: 1, recipeNote: 'Tropical post-workout refresher.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:00 PM',
          headline: 'Seared Tuna Steak with Sesame Snow Peas',
          anabolicPurpose: 'Pure high-protein ocean superfood.',
          meals: [
            { name: 'Seared Yellowfin Tuna Steak (Rare/Medium)', portion: '170g steak', calories: 210, protein: 44, carbs: 0, fats: 2, recipeNote: 'Crusted with cracked black pepper.' },
            { name: 'Sautéed Snow Peas & Baby Corn with 1 tsp Sesame Oil', portion: '150g vegetables', calories: 120, protein: 4, carbs: 12, fats: 5, recipeNote: 'Crisp and aromatic.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:00 PM',
          headline: 'Nighttime Herbal Infusion & Cottage Cheese',
          anabolicPurpose: 'Caps off the week with steady overnight recovery.',
          meals: [
            { name: '100g Low-Fat Cottage Cheese with ground flaxseed (5g)', portion: '1 small bowl', calories: 110, protein: 15, carbs: 3, fats: 4, recipeNote: 'Ready for next week’s progressive overload.' }
          ]
        }
      ]
    }
  ],

  // ================= 2. FAT LOSS / SHREDDED (STEEP METABOLIC DEFINITION) =================
  fatloss: [
    {
      dayNumber: 1,
      dayName: 'Day 1: Carb-Timing Peri-Workout Shred',
      theme: 'Concentrate 80% of daily carbs strictly around training; zero carbs in late evening.',
      totalCalories: 1720,
      totalProtein: 180,
      totalCarbs: 110,
      totalFats: 45,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '07:30 AM',
          headline: 'Zero-Carb Ketogenic Spark Omelet',
          anabolicPurpose: 'Forces body to burn stored fat for morning fuel while providing 35g protein.',
          meals: [
            { name: '4 Egg Whites + 2 Whole Eggs with Mushrooms & Baby Spinach', portion: 'Large omelet', calories: 250, protein: 32, carbs: 3, fats: 12, recipeNote: 'Cooked with olive spray. Zero starch.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '10:30 AM',
          headline: 'Hydrolyzed Whey & Green Tea Extract',
          anabolicPurpose: 'Fast amino acid pulse with EGCG for targeted visceral fat burn.',
          meals: [
            { name: '1 Scoop Whey Isolate in 350ml Iced Green Tea', portion: '1 tall shaker', calories: 115, protein: 26, carbs: 1, fats: 0, recipeNote: 'Zero sugar, ultra refreshing.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '01:30 PM',
          headline: 'Bison / Lean Beef Patty & Steamed Asparagus',
          anabolicPurpose: 'Natural carnitine shuttles long-chain fatty acids into mitochondria.',
          meals: [
            { name: '96% Extra Lean Ground Beef or Bison Patty', portion: '170g cooked', calories: 240, protein: 40, carbs: 0, fats: 7, recipeNote: 'Seasoned with garlic salt and crushed peppercorns.' },
            { name: 'Charred Asparagus Spears with Lemon Zest', portion: '180g', calories: 45, protein: 4, carbs: 7, fats: 0, recipeNote: 'Flushes subcutaneous water retention.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM (60 min pre)',
          headline: 'Targeted Intra-Workout Glycogen Primer',
          anabolicPurpose: 'All carbohydrate fuel is placed here to power maximum muscle tension.',
          meals: [
            { name: 'Cream of Rice (40g dry) with 10g Whey & Cinnamon', portion: '1 hot bowl', calories: 180, protein: 10, carbs: 32, fats: 1, recipeNote: 'Ultra-fast gastric clearance. No GI distress.' },
            { name: 'Black Coffee with 500mg Sodium (Pink Salt)', portion: '1 cup', calories: 5, protein: 0, carbs: 1, fats: 0, recipeNote: 'Pumps blood volume and vascularity.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Anabolic Surge Whey & Dextrose Spark',
          anabolicPurpose: 'Rapid insulin spike shuttles aminos into trained muscle cells, halting cortisol.',
          meals: [
            { name: 'Whey Isolate (30g) + 15g Fast Carb Powder or Rice Cakes (2)', portion: '1 recovery shake', calories: 180, protein: 27, carbs: 16, fats: 0, recipeNote: 'Zero fat to maximize gastric emptying rate.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:00 PM',
          headline: 'Steamed White Fish & Mountain of Greens',
          anabolicPurpose: 'Maximum protein with microscopic calories to maintain deep fat-burning deficit.',
          meals: [
            { name: 'Baked Atlantic Cod or Tilapia Fillet', portion: '200g cooked', calories: 190, protein: 42, carbs: 0, fats: 2, recipeNote: 'Baked with lemon, parsley, and capers.' },
            { name: 'Massive Sautéed Zucchini & Broccoli Bowl', portion: '250g greens', calories: 80, protein: 5, carbs: 14, fats: 1, recipeNote: 'Fills stomach completely.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:00 PM',
          headline: 'Pure Micellar Casein Sludge',
          anabolicPurpose: 'Sustained night protection against muscle wasting.',
          meals: [
            { name: '25g Micellar Casein mixed with 60ml water into a thick pudding', portion: '1 bowl', calories: 100, protein: 22, carbs: 1, fats: 1, recipeNote: 'Thick, creamy, chocolate or vanilla.' }
          ]
        }
      ]
    },
    {
      dayNumber: 2,
      dayName: 'Day 2: Thermogenic Poultry & Leafy Alkalizer',
      theme: 'Lean turkey breast, raw celery crunch, and white fish to accelerate vascularity.',
      totalCalories: 1700,
      totalProtein: 185,
      totalCarbs: 100,
      totalFats: 42,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '07:30 AM',
          headline: 'Egg White Herb Scramble with Avocado',
          anabolicPurpose: 'High leucine, low calorie start.',
          meals: [
            { name: '6 Egg Whites + 1 Whole Egg with Herbs + 30g Avocado', portion: '1 plate', calories: 230, protein: 30, carbs: 3, fats: 11, recipeNote: 'Fluffy scramble.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '10:30 AM',
          headline: 'Cucumber Protein Crunch',
          anabolicPurpose: 'Hydration and amino top-up.',
          meals: [
            { name: '100g Low Fat Cottage Cheese with Sliced Cucumbers & Black Pepper', portion: '1 bowl', calories: 95, protein: 15, carbs: 4, fats: 1, recipeNote: 'Clean and refreshing.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '01:30 PM',
          headline: 'Charbroiled Herb Turkey Breast & Cauliflower Mash',
          anabolicPurpose: 'High TEF burn during digestion.',
          meals: [
            { name: 'Lean Turkey Breast (180g cooked)', portion: '180g', calories: 240, protein: 46, carbs: 0, fats: 4, recipeNote: 'Seasoned with sage and rosemary.' },
            { name: 'Steamed Cauliflower Mashed with Garlic Salt', portion: '200g', calories: 50, protein: 4, carbs: 9, fats: 0, recipeNote: 'Tastes like mashed potatoes.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM',
          headline: 'Oat Bran Slurry with Cinnamon',
          anabolicPurpose: 'Clean low-FODMAP fuel before gym.',
          meals: [
            { name: '35g Oat Bran cooked in water with cinnamon + 100mg caffeine tablet or black espresso', portion: '1 cup', calories: 120, protein: 5, carbs: 22, fats: 2, recipeNote: 'Stable energy.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Whey Isolate + 1 Medium Rice Cake',
          anabolicPurpose: 'Halts muscle breakdown instantly.',
          meals: [
            { name: '1 Scoop Vanilla Whey Isolate + 1 Rice Cake', portion: '1 shake + 1 cake', calories: 150, protein: 26, carbs: 9, fats: 1, recipeNote: 'Pure muscle repair.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:00 PM',
          headline: 'Lemon Pepper White Fish & Steamed Green Beans',
          anabolicPurpose: 'Low inflammatory nighttime dinner.',
          meals: [
            { name: 'Pan-Seared Tilapia Fillet (180g)', portion: '180g', calories: 180, protein: 38, carbs: 0, fats: 3, recipeNote: 'Dusted with lemon pepper.' },
            { name: 'Steamed French Green Beans with Sea Salt', portion: '180g', calories: 60, protein: 3, carbs: 12, fats: 0, recipeNote: 'Crunchy fiber.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:00 PM',
          headline: 'Casein Night Shield',
          anabolicPurpose: 'Prevents catabolism.',
          meals: [
            { name: 'Casein Protein Powder (25g) in 150ml Ice Water', portion: '1 glass', calories: 100, protein: 22, carbs: 1, fats: 1, recipeNote: 'Smooth vanilla.' }
          ]
        }
      ]
    },
    {
      dayNumber: 3,
      dayName: 'Day 3: Seafood Flush & Potassium Balance',
      theme: 'Prawns, cod, potassium greens to drop stubborn subcutaneous water for razor-sharp definition.',
      totalCalories: 1690,
      totalProtein: 188,
      totalCarbs: 95,
      totalFats: 40,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '07:30 AM',
          headline: 'Smoked Salmon Egg White Roll-Ups',
          anabolicPurpose: 'Clean morning omega-3s and lean protein.',
          meals: [
            { name: '5 Egg White Crepes wrapped around 50g Smoked Salmon & Arugula', portion: '2 roll-ups', calories: 210, protein: 32, carbs: 2, fats: 8, recipeNote: 'Cook egg whites flat like crepes.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '10:30 AM',
          headline: 'Celery Crunch & Whey Shot',
          anabolicPurpose: 'Negative calorie celery with pure protein.',
          meals: [
            { name: '1 Scoop Whey Isolate + 4 Stalks of Fresh Celery', portion: '1 snack', calories: 130, protein: 26, carbs: 3, fats: 1, recipeNote: 'Hydrating and zero bloat.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '01:30 PM',
          headline: 'Lemon Garlic Jumbo Shrimp & Spinach Salad',
          anabolicPurpose: 'Ultra high protein-to-calorie ratio.',
          meals: [
            { name: 'Grilled Jumbo Shrimp with Garlic & Chili Flakes (200g)', portion: '200g', calories: 200, protein: 42, carbs: 2, fats: 2, recipeNote: 'Juicy and packed with zinc.' },
            { name: 'Baby Spinach Salad with 10g Toasted Pine Nuts & Lemon Juice', portion: '150g salad', calories: 110, protein: 4, carbs: 6, fats: 8, recipeNote: 'High magnesium.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM',
          headline: 'Carbohydrate Focus - Sweet Potato Mash',
          anabolicPurpose: 'Potassium and clean complex glycogen.',
          meals: [
            { name: '100g Steamed Sweet Potato mashed with cinnamon + Green Tea', portion: '1 bowl', calories: 95, protein: 2, carbs: 22, fats: 0, recipeNote: 'Absorbs smoothly.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Whey Isolate Anabolic Blast',
          anabolicPurpose: 'Rapid protein synthesis trigger.',
          meals: [
            { name: 'Whey Isolate (30g) shaken in Cold Water', portion: '1 shaker', calories: 115, protein: 26, carbs: 1, fats: 0, recipeNote: 'Clean and rapid.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:00 PM',
          headline: 'Herb Crusted Chicken Breast & Charred Broccolini',
          anabolicPurpose: 'Restorative evening meal.',
          meals: [
            { name: 'Rosemary Grilled Chicken Breast (180g cooked)', portion: '180g', calories: 240, protein: 45, carbs: 0, fats: 5, recipeNote: 'Plump and juicy.' },
            { name: 'Charred Broccolini with Pink Sea Salt & Lemon', portion: '160g', calories: 60, protein: 4, carbs: 9, fats: 1, recipeNote: 'Indole-3-carbinol anti-estrogen power.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:00 PM',
          headline: 'Zero-Fat Cottage Cheese Whip',
          anabolicPurpose: 'Overnight nitrogen retention.',
          meals: [
            { name: 'Fat-Free Cottage Cheese (120g) with ground cinnamon', portion: '1 bowl', calories: 100, protein: 17, carbs: 4, fats: 0, recipeNote: 'Slow release casein.' }
          ]
        }
      ]
    },
    {
      dayNumber: 4,
      dayName: 'Day 4: Spicy Thermogenic & White Meat Wave',
      theme: 'Cayenne, mustard seed, and lean poultry to spike resting calorie expenditure.',
      totalCalories: 1710,
      totalProtein: 182,
      totalCarbs: 105,
      totalFats: 43,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '07:30 AM',
          headline: 'Spicy Salsa Egg White Scramble',
          anabolicPurpose: 'Capsaicin boosts oxygen consumption and calorie expenditure.',
          meals: [
            { name: '5 Egg Whites + 2 Whole Eggs with Jalapeño & Tomato Salsa', portion: '1 plate', calories: 240, protein: 30, carbs: 4, fats: 11, recipeNote: 'Spicy wake-up.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '10:30 AM',
          headline: 'Green Tea & Whey Churn',
          anabolicPurpose: 'Sustained amino trickle.',
          meals: [
            { name: 'Whey Isolate (25g) in 300ml Cold Brew Green Tea', portion: '1 shake', calories: 115, protein: 25, carbs: 1, fats: 0, recipeNote: 'High focus.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '01:30 PM',
          headline: 'Dijon Grilled Chicken & Crispy Cabbage Slaw',
          anabolicPurpose: 'Crunchy raw cabbage requires energy to digest.',
          meals: [
            { name: 'Dijon Mustard Marinated Chicken Breast (170g cooked)', portion: '170g', calories: 230, protein: 44, carbs: 2, fats: 4, recipeNote: 'Tangy and flavorful.' },
            { name: 'Shredded Purple Cabbage with Apple Cider Vinegar', portion: '180g', calories: 50, protein: 2, carbs: 10, fats: 0, recipeNote: 'Low calorie, crisp slaw.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM',
          headline: 'Puffed Rice Cake with Cinnamon',
          anabolicPurpose: 'Glycogen top off.',
          meals: [
            { name: '2 Plain Rice Cakes with dash of Himalayan Pink Salt & Black Espresso', portion: '2 cakes', calories: 80, protein: 2, carbs: 17, fats: 0, recipeNote: 'Super light pre-workout.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Whey Isolate + Half Banana Recovery',
          anabolicPurpose: 'Glycogen restock and muscle repair.',
          meals: [
            { name: '1 Scoop Whey Isolate + 50g Banana', portion: '1 shake', calories: 160, protein: 26, carbs: 13, fats: 0, recipeNote: 'Fast insulin spike.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:00 PM',
          headline: 'Pan-Seared White Basa Fillet & Grilled Asparagus',
          anabolicPurpose: 'Zero carb evening meal.',
          meals: [
            { name: 'Seared Basa Fillet with Cajun Seasoning (190g)', portion: '190g', calories: 180, protein: 39, carbs: 0, fats: 3, recipeNote: 'Flaky white fish.' },
            { name: 'Grilled Asparagus Spears with 1 tsp Olive Oil', portion: '160g', calories: 80, protein: 3, carbs: 7, fats: 5, recipeNote: 'Potassium rich.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:00 PM',
          headline: 'Casein Protein Cream',
          anabolicPurpose: 'Night repair.',
          meals: [
            { name: '25g Casein Powder stirred with small amount of warm water', portion: '1 cup', calories: 100, protein: 22, carbs: 1, fats: 1, recipeNote: 'Deep sleep fuel.' }
          ]
        }
      ]
    },
    {
      dayNumber: 5,
      dayName: 'Day 5: Zero-Sodium Water Cut Protocol',
      theme: 'Natural dandelion leaf tea and high water-content greens to reveal abdominal serratus.',
      totalCalories: 1680,
      totalProtein: 186,
      totalCarbs: 98,
      totalFats: 41,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '07:30 AM',
          headline: 'Spinach & Egg White Power Bowl',
          anabolicPurpose: 'High potassium from wilted spinach.',
          meals: [
            { name: '6 Egg Whites + 1 Whole Egg Scrambled with 100g Wilted Spinach', portion: '1 plate', calories: 200, protein: 30, carbs: 4, fats: 6, recipeNote: 'Lightly seasoned.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '10:30 AM',
          headline: 'Dandelion Tea & Whey Isolate',
          anabolicPurpose: 'Dandelion root assists water balance.',
          meals: [
            { name: '1 Scoop Whey Isolate + Hot Brewed Dandelion Root Tea', portion: '1 shake + 1 tea', calories: 120, protein: 26, carbs: 1, fats: 0, recipeNote: 'Aids digestive diuretic balance.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '01:30 PM',
          headline: 'Grilled Chicken Breast & Steamed Zucchini Slices',
          anabolicPurpose: 'Lean protein without sodium bloat.',
          meals: [
            { name: 'Plain Grilled Chicken Breast with Dried Herbs (180g cooked)', portion: '180g', calories: 240, protein: 46, carbs: 0, fats: 4, recipeNote: 'Juicy and clean.' },
            { name: 'Steamed Zucchini Slices with Black Pepper', portion: '200g', calories: 40, protein: 2, carbs: 8, fats: 0, recipeNote: 'High water volume.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM',
          headline: 'Quick Oats & Black Coffee',
          anabolicPurpose: 'Muscular pump power.',
          meals: [
            { name: '30g Rolled Oats cooked in water with cinnamon + Espresso', portion: '1 small bowl', calories: 110, protein: 4, carbs: 20, fats: 2, recipeNote: 'Fast energy.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Whey Isolate Immediate Shot',
          anabolicPurpose: 'Leucine pulse.',
          meals: [
            { name: 'Whey Isolate (30g) in 250ml Ice Water', portion: '1 shake', calories: 115, protein: 26, carbs: 1, fats: 0, recipeNote: 'Pure amino delivery.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:00 PM',
          headline: 'Baked Lemon Halibut / Cod & Steamed Asparagus',
          anabolicPurpose: 'High mineral density.',
          meals: [
            { name: 'Baked Pacific Halibut or Cod Fillet (190g)', portion: '190g', calories: 200, protein: 42, carbs: 0, fats: 3, recipeNote: 'Seasoned with lemon juice and dill.' },
            { name: 'Steamed Asparagus Spears (180g)', portion: '180g', calories: 45, protein: 4, carbs: 7, fats: 0, recipeNote: 'Diuretic support.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:00 PM',
          headline: 'Casein Pudding Bowl',
          anabolicPurpose: 'Anti-catabolic bedtime shield.',
          meals: [
            { name: '25g Casein Powder mixed thick with cold water', portion: '1 bowl', calories: 100, protein: 22, carbs: 1, fats: 1, recipeNote: 'Zero sugar chocolate flavor.' }
          ]
        }
      ]
    },
    {
      dayNumber: 6,
      dayName: 'Day 6: Red Meat Iron & Anabolic Re-Tension',
      theme: 'Lean sirloin cut to replenish intramuscular creatine while holding hard definition.',
      totalCalories: 1740,
      totalProtein: 184,
      totalCarbs: 102,
      totalFats: 46,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '08:00 AM',
          headline: 'Steak & Eggs Shredded Breakfast',
          anabolicPurpose: 'High bioavailable iron and zinc.',
          meals: [
            { name: '80g Lean Top Sirloin Strips + 4 Egg Whites + 1 Whole Egg', portion: '1 plate', calories: 270, protein: 36, carbs: 1, fats: 12, recipeNote: 'Seared quickly in hot pan.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '11:00 AM',
          headline: 'Whey Isolate in Chilled Water',
          anabolicPurpose: 'Amino acid maintenance.',
          meals: [
            { name: '1 Scoop Whey Isolate', portion: '1 shake', calories: 115, protein: 26, carbs: 1, fats: 0, recipeNote: 'Clean.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '02:00 PM',
          headline: 'Grilled Chicken Breast over Crisp Romaine',
          anabolicPurpose: 'Lean midday sustenance.',
          meals: [
            { name: 'Grilled Chicken Breast (180g cooked)', portion: '180g', calories: 240, protein: 46, carbs: 0, fats: 4, recipeNote: 'Balsamic vinegar dressing.' },
            { name: 'Romaine Lettuce & Cucumber Slices', portion: '150g salad', calories: 30, protein: 2, carbs: 5, fats: 0, recipeNote: 'Crisp and hydrating.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM',
          headline: 'Cream of Rice Pre-Workout Shot',
          anabolicPurpose: 'Muscular endurance.',
          meals: [
            { name: '35g Cream of Rice with cinnamon + Black Coffee', portion: '1 bowl', calories: 130, protein: 3, carbs: 28, fats: 0, recipeNote: 'Instant pump.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Whey Isolate Post-Lift Rapid Recovery',
          anabolicPurpose: 'Muscle recovery.',
          meals: [
            { name: '1 Scoop Whey Isolate in 250ml Water', portion: '1 shake', calories: 115, protein: 26, carbs: 1, fats: 0, recipeNote: 'Rapid recovery.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:00 PM',
          headline: 'Grilled White Fish Fillet & Steamed Broccoli Florets',
          anabolicPurpose: 'Restorative evening meal.',
          meals: [
            { name: 'Cod or Tilapia Fillet (190g cooked)', portion: '190g', calories: 190, protein: 40, carbs: 0, fats: 2, recipeNote: 'Seasoned with dill and lemon.' },
            { name: 'Steamed Broccoli Florets with Garlic (180g)', portion: '180g', calories: 60, protein: 4, carbs: 11, fats: 0, recipeNote: 'Rich in vitamin C.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:00 PM',
          headline: 'Casein Night Shield',
          anabolicPurpose: 'Deep sleep muscle defense.',
          meals: [
            { name: '25g Micellar Casein in Water', portion: '1 glass', calories: 100, protein: 22, carbs: 1, fats: 1, recipeNote: 'Slow protein.' }
          ]
        }
      ]
    },
    {
      dayNumber: 7,
      dayName: 'Day 7: Glycogen Re-Load & Vascularity Reveal',
      theme: 'Clean high-carb re-load (white rice & baked potato) to fill muscle bellies while veins pop.',
      totalCalories: 1850,
      totalProtein: 175,
      totalCarbs: 160,
      totalFats: 38,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '08:00 AM',
          headline: 'Egg White Scramble with English Muffin',
          anabolicPurpose: 'Low-fat glycogen loading starts early.',
          meals: [
            { name: '6 Egg Whites Scrambled + 1 Whole Wholegrain English Muffin Toasted', portion: '1 plate', calories: 260, protein: 28, carbs: 26, fats: 2, recipeNote: 'Zero butter, dash of jam if desired.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '11:00 AM',
          headline: 'Crisp Rice Cakes with Cinnamon & Stevia',
          anabolicPurpose: 'Pure low-residue clean carbs.',
          meals: [
            { name: '3 Plain Rice Cakes with cinnamon', portion: '3 cakes', calories: 105, protein: 2, carbs: 24, fats: 1, recipeNote: 'Expands muscle glycogen stores.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '01:30 PM',
          headline: 'Chicken Breast & Steamed Jasmine White Rice',
          anabolicPurpose: 'Fast-digesting jasmine rice drives carbohydrates straight into biceps and lats.',
          meals: [
            { name: 'Grilled Herb Chicken Breast (170g cooked)', portion: '170g', calories: 230, protein: 44, carbs: 0, fats: 4, recipeNote: 'Tender chicken.' },
            { name: 'Steamed Jasmine Rice (120g cooked)', portion: '120g', calories: 160, protein: 3, carbs: 36, fats: 0, recipeNote: 'Clean glycemic pump.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM',
          headline: 'Banana & Honey Pre-Workout Power Surge',
          anabolicPurpose: 'Maximal intra-workout fullness.',
          meals: [
            { name: '1 Medium Banana with 1 tsp Pure Honey + Double Espresso', portion: '1 snack', calories: 135, protein: 1, carbs: 33, fats: 0, recipeNote: 'High training pump.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Whey Isolate + Dextrose Recovery Shake',
          anabolicPurpose: 'Locks in the full weekly transformation.',
          meals: [
            { name: 'Whey Isolate (30g) + 20g Dextrose/Rice Cereal', portion: '1 shake', calories: 195, protein: 26, carbs: 21, fats: 0, recipeNote: 'Massive vascular pump.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:00 PM',
          headline: 'Baked White Cod & Steamed Green Beans',
          anabolicPurpose: 'Lean dinner to keep waist tight.',
          meals: [
            { name: 'Baked Atlantic Cod (190g)', portion: '190g', calories: 190, protein: 41, carbs: 0, fats: 2, recipeNote: 'Lemon and parsley.' },
            { name: 'Steamed Green Beans (180g)', portion: '180g', calories: 60, protein: 3, carbs: 12, fats: 0, recipeNote: 'Crunchy.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:00 PM',
          headline: 'Casein Protein & Deep Sleep Infusion',
          anabolicPurpose: 'Week 1 fat-loss protocol finished.',
          meals: [
            { name: '25g Casein Powder in Water', portion: '1 cup', calories: 100, protein: 22, carbs: 1, fats: 1, recipeNote: 'Ready for next week’s shred.' }
          ]
        }
      ]
    }
  ],

  // ================= 3. WEIGHT GAIN / BULKING (CLEAN ANABOLIC SURPLUS) =================
  weightgain: [
    {
      dayNumber: 1,
      dayName: 'Day 1: Anabolic Surplus Foundation & Heavy Glycogen',
      theme: 'High calorie-dense whole foods, healthy fats, complex carbs, and maximum muscle hypertrophy.',
      totalCalories: 2950,
      totalProtein: 195,
      totalCarbs: 340,
      totalFats: 85,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '07:30 AM',
          headline: 'Monster Mass Scramble & Whole Milk Oats',
          anabolicPurpose: 'Sets positive nitrogen balance from the moment you wake up.',
          meals: [
            { name: '4 Whole Free-Range Eggs + 2 Whites Scrambled with Cheddar Cheese', portion: '1 large bowl', calories: 420, protein: 38, carbs: 2, fats: 28, recipeNote: 'Cooked in 10g real grass-fed butter.' },
            { name: 'Rolled Oats (80g) cooked in Whole Milk with 1 tbsp Pure Honey', portion: '1 large bowl', calories: 410, protein: 15, carbs: 68, fats: 10, recipeNote: 'Add sliced banana on top.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '10:30 AM',
          headline: 'Anabolic Peanut Butter Shake',
          anabolicPurpose: 'Liquid calories bypass early satiety signals for effortless mass building.',
          meals: [
            { name: 'Whey Protein (35g) + 2 tbsp Natural Peanut Butter + 250ml Whole Milk + 1 Banana', portion: '500ml shake', calories: 520, protein: 42, carbs: 48, fats: 20, recipeNote: 'Blended with ice cubes into creamy shake.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '01:30 PM',
          headline: 'Steak & Jasmine Rice Power Bowl',
          anabolicPurpose: 'Packed with natural creatine and dense clean carbohydrates.',
          meals: [
            { name: 'Grilled Sirloin Steak Strips (180g cooked)', portion: '180g', calories: 380, protein: 48, carbs: 0, fats: 19, recipeNote: 'Seared in olive oil with garlic.' },
            { name: 'Steamed Jasmine White Rice (200g cooked) with Steamed Broccoli', portion: '200g rice + 100g broccoli', calories: 310, protein: 6, carbs: 66, fats: 2, recipeNote: 'Drizzle with 1 tsp toasted sesame oil.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM (60 min pre)',
          headline: 'Bagel with Jam & Greek Yogurt Pump Primer',
          anabolicPurpose: 'High glycemic index carbohydrates stock muscle cells with rapid adenosine triphosphate (ATP).',
          meals: [
            { name: '1 Whole Toasted Plain Bagel with 1.5 tbsp Strawberry Jam', portion: '1 whole bagel', calories: 310, protein: 10, carbs: 64, fats: 2, recipeNote: 'Fast energy that doesn’t cause bloating.' },
            { name: '100g Greek Yogurt with pinch of sea salt', portion: '1 cup', calories: 90, protein: 12, carbs: 5, fats: 2, recipeNote: 'Enhances cell volumization and gym pumps.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Anabolic Hypertrophy Whey & Dextrose Surge',
          anabolicPurpose: 'Massive insulin spike pulls amino acids into microscopically torn muscle fibers.',
          meals: [
            { name: 'Whey Protein Isolate (40g) + 35g Dextrose or Cluster Dextrin + 5g Creatine Monohydrate', portion: '1 post-workout shake', calories: 310, protein: 34, carbs: 40, fats: 1, recipeNote: 'Essential for progressive overload recovery.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:30 PM',
          headline: 'Creamy Pesto Chicken Pasta Feast',
          anabolicPurpose: 'Calorie dense, delicious whole-food surplus.',
          meals: [
            { name: 'Grilled Chicken Breast over Whole Wheat Penne Pasta with Basil Pesto', portion: '160g chicken + 100g dry pasta + 25g pesto', calories: 650, protein: 48, carbs: 74, fats: 19, recipeNote: 'Top with grated Parmesan cheese.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:30 PM',
          headline: 'Casein Sludge with Chopped Walnuts',
          anabolicPurpose: 'Supplies building blocks for all 8 hours of sleep to ensure muscle tissue growth.',
          meals: [
            { name: '30g Casein Protein mixed thick with 150ml milk + 15g chopped walnuts', portion: '1 bowl', calories: 270, protein: 28, carbs: 8, fats: 14, recipeNote: 'Nutty, rich, and deeply anabolic.' }
          ]
        }
      ]
    },
    {
      dayNumber: 2,
      dayName: 'Day 2: Salmon Omega Mass & Roasted Potatoes',
      theme: 'Fatty fish, buttery roasted red potatoes, and double protein shakes.',
      totalCalories: 2980,
      totalProtein: 190,
      totalCarbs: 345,
      totalFats: 90,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '07:30 AM',
          headline: 'Avocado Cheddar Omelet & Toasted Sourdough',
          anabolicPurpose: 'Dense morning energy and clean digestive enzymes.',
          meals: [
            { name: '3 Whole Eggs + 2 Whites with 40g Cheddar & Half Avocado', portion: '1 large omelet', calories: 460, protein: 34, carbs: 8, fats: 32, recipeNote: 'Served with 2 thick slices of toasted sourdough.' },
            { name: '2 Slices Toasted Sourdough with 1 tbsp Honey', portion: '2 slices', calories: 230, protein: 7, carbs: 48, fats: 1, recipeNote: 'Golden brown.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '10:30 AM',
          headline: 'Almond Butter Greek Yogurt Bowl',
          anabolicPurpose: 'Sustained anabolic state.',
          meals: [
            { name: '200g Greek Yogurt with 2 tbsp Almond Butter & Granola (40g)', portion: '1 bowl', calories: 450, protein: 28, carbs: 36, fats: 22, recipeNote: 'Crunchy and delicious.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '01:30 PM',
          headline: 'Pan-Seared Salmon & Garlic Mashed Potatoes',
          anabolicPurpose: 'Omega-3 fatty acids enhance muscle protein synthesis efficiency.',
          meals: [
            { name: 'Atlantic Salmon Fillet (200g cooked)', portion: '200g', calories: 410, protein: 44, carbs: 0, fats: 25, recipeNote: 'Pan seared crispy.' },
            { name: 'Garlic Butter Mashed Potatoes (250g)', portion: '250g', calories: 280, protein: 6, carbs: 50, fats: 8, recipeNote: 'Rich and hearty.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM',
          headline: 'Banana Honey Rice Cakes & Pre-Workout',
          anabolicPurpose: 'Glycogen saturation.',
          meals: [
            { name: '3 Rice Cakes smeared with 1 tbsp Peanut Butter & Sliced Banana', portion: '3 cakes', calories: 270, protein: 7, carbs: 45, fats: 8, recipeNote: 'High training fuel.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Whey Mass Shake & Dextrose',
          anabolicPurpose: 'Immediate muscle restoration.',
          meals: [
            { name: 'Whey Protein (35g) + 30g Carbs in 300ml Cold Water + Creatine', portion: '1 shake', calories: 270, protein: 32, carbs: 32, fats: 1, recipeNote: 'Drink within 45 mins.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:30 PM',
          headline: 'BBQ Pulled Chicken / Beef & Sweet Corn Feast',
          anabolicPurpose: 'High volume muscle sustenance.',
          meals: [
            { name: 'Slow Cooker Shredded BBQ Chicken Breast (200g)', portion: '200g', calories: 340, protein: 48, carbs: 18, fats: 6, recipeNote: 'Tender pulled chicken.' },
            { name: 'Steamed Sweet Corn on Cob (2 cobs) + Roasted Carrots', portion: '2 cobs', calories: 240, protein: 7, carbs: 50, fats: 3, recipeNote: 'Naturally sweet and carb dense.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:30 PM',
          headline: 'Whole Milk Casein Shake',
          anabolicPurpose: 'Overnight hypertrophy builder.',
          meals: [
            { name: '30g Casein in 250ml Warm Whole Milk with dash of nutmeg', portion: '1 warm mug', calories: 260, protein: 30, carbs: 13, fats: 9, recipeNote: 'Sleep like a log while muscle grows.' }
          ]
        }
      ]
    },
    {
      dayNumber: 3,
      dayName: 'Day 3: Ground Beef & Rice Anabolic Stacks',
      theme: 'The classic bodybuilding vertical diet: white rice, 90/10 ground beef, and bone broth.',
      totalCalories: 3020,
      totalProtein: 200,
      totalCarbs: 350,
      totalFats: 88,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '07:30 AM',
          headline: 'Loaded Scramble with Beef Bacon & Hashbrowns',
          anabolicPurpose: 'Morning sodium, creatine, and carbohydrates.',
          meals: [
            { name: '3 Whole Eggs + 3 Strips Beef Bacon + Crispy Skillet Potatoes (150g)', portion: '1 platter', calories: 510, protein: 32, carbs: 38, fats: 26, recipeNote: 'Crisped in olive oil.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '10:30 AM',
          headline: 'Oats & Whey Mass Bowl',
          anabolicPurpose: 'Steady carbohydrate inflow.',
          meals: [
            { name: '60g Rolled Oats + 1 Scoop Chocolate Whey + 1 tbsp Peanut Butter', portion: '1 bowl', calories: 420, protein: 34, carbs: 46, fats: 14, recipeNote: 'Warm and comforting.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '01:30 PM',
          headline: 'Vertical Diet Beef & Jasmine Rice Bowl',
          anabolicPurpose: 'Effortless digestion and maximal nutrient absorption.',
          meals: [
            { name: '90/10 Ground Beef (200g cooked) in Bone Broth with Salt', portion: '200g beef', calories: 420, protein: 50, carbs: 0, fats: 22, recipeNote: 'Simmered in rich beef bone broth.' },
            { name: 'Steamed Jasmine Rice (250g cooked) with Dextrose-rich baby carrots', portion: '250g rice + 80g carrots', calories: 360, protein: 7, carbs: 78, fats: 1, recipeNote: 'The go-to meal for world champion lifters.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM',
          headline: 'Rice Crispy Squares & Pre-Workout',
          anabolicPurpose: 'Explosive workout strength.',
          meals: [
            { name: '2 Rice Crispy Treats + 1 Large Banana + Pink Salt Espresso', portion: '2 treats + 1 banana', calories: 290, protein: 3, carbs: 68, fats: 3, recipeNote: 'Pure intra-muscular glycogen.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Whey Isolate Anabolic Pulse',
          anabolicPurpose: 'Recharges glycogen and stops breakdown.',
          meals: [
            { name: '40g Whey Isolate + 35g Dextrose in Water', portion: '1 shake', calories: 300, protein: 34, carbs: 38, fats: 1, recipeNote: 'Post gym essentials.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:30 PM',
          headline: 'Honey Garlic Roasted Chicken & Sweet Potatoes',
          anabolicPurpose: 'Nighttime glycogen replenishment.',
          meals: [
            { name: 'Baked Honey Garlic Chicken Thighs (Skinless, 200g)', portion: '200g', calories: 380, protein: 46, carbs: 16, fats: 14, recipeNote: 'Tender and juicy.' },
            { name: 'Baked Sweet Potatoes with Cinnamon & 10g Butter (250g)', portion: '250g', calories: 280, protein: 4, carbs: 54, fats: 8, recipeNote: 'Sweet and filling.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:30 PM',
          headline: 'Casein Pudding with Dark Chocolate Chips',
          anabolicPurpose: 'Long 8h release.',
          meals: [
            { name: '30g Casein + 15g 85% Dark Chocolate Chips', portion: '1 small bowl', calories: 240, protein: 26, carbs: 12, fats: 11, recipeNote: 'Tastes like dessert.' }
          ]
        }
      ]
    },
    {
      dayNumber: 4,
      dayName: 'Day 4: Mediterranean Olive Oil & Pasta Fuel',
      theme: 'Extra virgin olive oil, whole pasta, and roasted chicken to build dense slab muscle.',
      totalCalories: 2990,
      totalProtein: 195,
      totalCarbs: 340,
      totalFats: 92,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '07:30 AM',
          headline: 'Greek Feta & Egg Scramble with Pita',
          anabolicPurpose: 'High biological value protein with warm pita.',
          meals: [
            { name: '4 Whole Eggs + 30g Feta + Sliced Tomatoes', portion: '1 plate', calories: 380, protein: 28, carbs: 6, fats: 26, recipeNote: 'Scrambled in olive oil.' },
            { name: '2 Warm Greek Pita Breads with 1 tbsp Honey', portion: '2 pitas', calories: 300, protein: 8, carbs: 60, fats: 3, recipeNote: 'Soft and warm.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '10:30 AM',
          headline: 'Mass Smoothie with Berries & Oats',
          anabolicPurpose: 'Antioxidant rich mass builder.',
          meals: [
            { name: '1 Scoop Whey + 50g Oats + 80g Frozen Berries + 250ml Whole Milk', portion: '1 shake', calories: 430, protein: 34, carbs: 52, fats: 12, recipeNote: 'Thick fruit smoothie.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '01:30 PM',
          headline: 'Chicken Alfredo Fettuccine Feast',
          anabolicPurpose: 'Dense muscle fuel for heavy lifting.',
          meals: [
            { name: 'Grilled Chicken Breast over Fettuccine with Light Cream Parmesan Sauce', portion: '180g chicken + 110g dry pasta', calories: 680, protein: 52, carbs: 80, fats: 18, recipeNote: 'High carb, high protein.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM',
          headline: 'Bagel with Peanut Butter & Sea Salt',
          anabolicPurpose: 'Pre-workout pump.',
          meals: [
            { name: '1 Toasted Plain Bagel with 1.5 tbsp Peanut Butter + Espresso', portion: '1 bagel', calories: 360, protein: 12, carbs: 55, fats: 11, recipeNote: 'High energy density.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Anabolic Whey & Cluster Dextrin',
          anabolicPurpose: 'Immediate muscle feed.',
          meals: [
            { name: '35g Whey Isolate + 30g Carbs in Water', portion: '1 shake', calories: 260, protein: 30, carbs: 32, fats: 1, recipeNote: 'Fast absorption.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:30 PM',
          headline: 'Slow-Cooked Beef Stew with Root Vegetables',
          anabolicPurpose: 'Deep nourishment.',
          meals: [
            { name: 'Lean Beef Stew with Potatoes, Carrots & Peas (350g)', portion: '1 large bowl', calories: 480, protein: 44, carbs: 42, fats: 16, recipeNote: 'Warm comfort food.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:30 PM',
          headline: 'Cottage Cheese & Honey with Cashews',
          anabolicPurpose: 'Slow nocturnal release.',
          meals: [
            { name: '180g Full-Fat Cottage Cheese with 1 tsp Honey & 15g Cashews', portion: '1 bowl', calories: 260, protein: 24, carbs: 14, fats: 12, recipeNote: 'Creamy and sweet.' }
          ]
        }
      ]
    },
    {
      dayNumber: 5,
      dayName: 'Day 5: Texas BBQ & High-Carb Power Surge',
      theme: 'Smoked meats, baked beans, and sweet potato mash to push your body beyond plateaus.',
      totalCalories: 3050,
      totalProtein: 202,
      totalCarbs: 355,
      totalFats: 90,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '07:30 AM',
          headline: 'Fluffy Protein Pancakes with Maple Syrup & Eggs',
          anabolicPurpose: 'Supercharged breakfast surplus.',
          meals: [
            { name: 'Oatmeal Pancakes (80g oats + 1 scoop whey + 2 eggs) with Real Maple Syrup (2 tbsp)', portion: '3 large pancakes', calories: 530, protein: 40, carbs: 75, fats: 12, recipeNote: 'Golden and fluffy.' },
            { name: '2 Fried Eggs on the side', portion: '2 eggs', calories: 150, protein: 12, carbs: 1, fats: 10, recipeNote: 'Sunny side up.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '10:30 AM',
          headline: 'Greek Yogurt Parfait with Granola',
          anabolicPurpose: 'Probiotics and muscle fuel.',
          meals: [
            { name: '200g Greek Yogurt with 50g Crunchy Granola & Honey', portion: '1 parfait', calories: 380, protein: 24, carbs: 50, fats: 10, recipeNote: 'Layered.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '01:30 PM',
          headline: 'Lean Beef Burger with Baked Potato Wedges',
          anabolicPurpose: 'Heme iron, B12, and pure muscle building fuel.',
          meals: [
            { name: '200g Lean Beef Burger on Brioche Bun with Lettuce, Tomato & Pickles', portion: '1 burger', calories: 520, protein: 46, carbs: 42, fats: 18, recipeNote: 'Juicy gourmet burger.' },
            { name: 'Oven-Baked Potato Wedges (200g) with 1 tsp Olive Oil', portion: '200g', calories: 230, protein: 5, carbs: 46, fats: 4, recipeNote: 'Crispy seasoned.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM',
          headline: 'White Toast with Jam & Espresso',
          anabolicPurpose: 'Fast glycemic lift energy.',
          meals: [
            { name: '2 Slices White Toast with 2 tbsp Grape Jelly + Double Shot Espresso', portion: '2 slices', calories: 220, protein: 5, carbs: 50, fats: 1, recipeNote: 'Quick digestion.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Post-Lift Mass Shake',
          anabolicPurpose: 'Accelerates glycogen resynthesis.',
          meals: [
            { name: '40g Whey Isolate + 35g Dextrose in Water', portion: '1 shake', calories: 300, protein: 34, carbs: 38, fats: 1, recipeNote: 'High training pump.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:30 PM',
          headline: 'Roasted Turkey Breast & Sweet Corn Cornbread',
          anabolicPurpose: 'High tryptophan for deep evening sleep.',
          meals: [
            { name: 'Herb Roasted Turkey Breast (200g cooked)', portion: '200g', calories: 280, protein: 52, carbs: 0, fats: 6, recipeNote: 'Carved thick.' },
            { name: 'Homemade Cornbread Slice (80g) with Steamed Sweet Corn', portion: '1 slice + 1 corn', calories: 310, protein: 8, carbs: 54, fats: 8, recipeNote: 'Southern mass classic.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:30 PM',
          headline: 'Casein Pudding with Crushed Graham Crackers',
          anabolicPurpose: 'Overnight hypertrophy.',
          meals: [
            { name: '30g Casein mixed thick with 2 crushed graham crackers', portion: '1 bowl', calories: 230, protein: 26, carbs: 20, fats: 4, recipeNote: 'Cheesecake crust vibes.' }
          ]
        }
      ]
    },
    {
      dayNumber: 6,
      dayName: 'Day 6: Asian Noodle Stir-Fry & Chicken Thighs',
      theme: 'Udon noodles, sesame oil, and chicken thighs for high-volume caloric density.',
      totalCalories: 3010,
      totalProtein: 198,
      totalCarbs: 345,
      totalFats: 94,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '08:00 AM',
          headline: 'Full English Breakfast Anabolic Style',
          anabolicPurpose: 'Heavy protein and complex carbs.',
          meals: [
            { name: '3 Whole Eggs + 2 Beef Sausages + 150g Baked Beans + 2 Slices Whole Toast', portion: '1 large plate', calories: 620, protein: 42, carbs: 58, fats: 25, recipeNote: 'Traditional powerhouse.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '11:00 AM',
          headline: 'Peanut Butter Banana Wrap',
          anabolicPurpose: 'Fast portable calories.',
          meals: [
            { name: '1 Large Tortilla spread with 2 tbsp Peanut Butter & 1 Sliced Banana', portion: '1 wrap', calories: 420, protein: 14, carbs: 58, fats: 18, recipeNote: 'Rolled and cut.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '02:00 PM',
          headline: 'Teriyaki Chicken Thighs over Udon Noodles',
          anabolicPurpose: 'High glycogen and flavorful protein.',
          meals: [
            { name: 'Grilled Teriyaki Chicken Thighs (200g)', portion: '200g', calories: 420, protein: 46, carbs: 12, fats: 20, recipeNote: 'Glazed with sweet soy.' },
            { name: 'Stir-Fried Udon Noodles with Sesame & Scallions (200g cooked)', portion: '200g', calories: 320, protein: 8, carbs: 64, fats: 4, recipeNote: 'Thick chewy noodles.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM',
          headline: 'Rice Cakes with Honey & Whey Swig',
          anabolicPurpose: 'Gym stamina.',
          meals: [
            { name: '3 Rice Cakes + 1.5 tbsp Honey + Espresso', portion: '3 cakes', calories: 190, protein: 2, carbs: 45, fats: 0, recipeNote: 'Fast sugar.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Whey Isolate Anabolic Surge',
          anabolicPurpose: 'Accelerates glycogen synthesis.',
          meals: [
            { name: '35g Whey + 30g Carbs + 5g Creatine', portion: '1 shake', calories: 260, protein: 30, carbs: 32, fats: 1, recipeNote: 'Muscle repair.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:30 PM',
          headline: 'Ribeye Steak & Baked Potato with Sour Cream',
          anabolicPurpose: 'Peak natural testosterone support.',
          meals: [
            { name: 'Grass-Fed Ribeye Steak (200g cooked)', portion: '200g', calories: 490, protein: 46, carbs: 0, fats: 34, recipeNote: 'Seared medium rare.' },
            { name: 'Large Baked Russet Potato with 2 tbsp Sour Cream & Chives', portion: '250g', calories: 270, protein: 6, carbs: 52, fats: 6, recipeNote: 'Fluffy potato.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:30 PM',
          headline: 'Warm Milk & Casein Nightcap',
          anabolicPurpose: 'Restorative sleep.',
          meals: [
            { name: '25g Casein in 250ml Whole Milk', portion: '1 mug', calories: 240, protein: 28, carbs: 12, fats: 8, recipeNote: 'Deep recovery.' }
          ]
        }
      ]
    },
    {
      dayNumber: 7,
      dayName: 'Day 7: Super-Compensation Feast & Prep',
      theme: 'Carb load to maximize glycogen stores for heavy squats and presses in the coming week.',
      totalCalories: 3080,
      totalProtein: 195,
      totalCarbs: 375,
      totalFats: 92,
      flowchartNodes: [
        {
          step: 1,
          mealType: 'Breakfast',
          time: '08:30 AM',
          headline: 'French Toast Stack with Maple Syrup & Eggs',
          anabolicPurpose: 'High biological value egg wash with thick brioche bread.',
          meals: [
            { name: '3 Thick Brioche French Toast Slices soaked in Egg & Cinnamon with Maple Syrup', portion: '3 slices', calories: 540, protein: 22, carbs: 80, fats: 16, recipeNote: 'Cooked in butter.' },
            { name: '3 Scrambled Eggs on the side', portion: '3 eggs', calories: 210, protein: 18, carbs: 1, fats: 15, recipeNote: 'Fluffy.' }
          ]
        },
        {
          step: 2,
          mealType: 'Mid-Morning Snack',
          time: '11:30 AM',
          headline: 'Whole Milk Protein Shake with Peanut Butter',
          anabolicPurpose: 'Easy calories.',
          meals: [
            { name: '1 Scoop Whey + 250ml Milk + 1 tbsp Peanut Butter', portion: '1 shake', calories: 360, protein: 32, carbs: 18, fats: 18, recipeNote: 'Blended.' }
          ]
        },
        {
          step: 3,
          mealType: 'Lunch',
          time: '02:00 PM',
          headline: 'Double Chicken Breast Risotto',
          anabolicPurpose: 'Creamy arborio rice provides rapid muscle glycogen storage.',
          meals: [
            { name: 'Grilled Herb Chicken Breast (200g cooked)', portion: '200g', calories: 280, protein: 52, carbs: 0, fats: 6, recipeNote: 'Sliced.' },
            { name: 'Creamy Mushroom Parmesan Risotto (250g cooked)', portion: '250g', calories: 420, protein: 10, carbs: 70, fats: 12, recipeNote: 'Rich and hearty.' }
          ]
        },
        {
          step: 4,
          mealType: 'Pre-Workout Meal',
          time: '04:30 PM',
          headline: 'Bagel & Honey Glycogen Surge',
          anabolicPurpose: 'High workout intensity.',
          meals: [
            { name: '1 Toasted Bagel with 2 tbsp Honey + Espresso', portion: '1 bagel', calories: 340, protein: 10, carbs: 72, fats: 1, recipeNote: 'High training fuel.' }
          ]
        },
        {
          step: 5,
          mealType: 'Post-Workout Fuel',
          time: '06:30 PM',
          headline: 'Whey Isolate Anabolic Pulse',
          anabolicPurpose: 'Halts breakdown.',
          meals: [
            { name: '35g Whey + 30g Carbs in Water', portion: '1 shake', calories: 260, protein: 30, carbs: 32, fats: 1, recipeNote: 'Post gym essentials.' }
          ]
        },
        {
          step: 6,
          mealType: 'Dinner',
          time: '08:30 PM',
          headline: 'Grilled Salmon with Sweet Potato Fries',
          anabolicPurpose: 'Nutrient rich feast.',
          meals: [
            { name: 'Wild Salmon Fillet (200g cooked)', portion: '200g', calories: 410, protein: 44, carbs: 0, fats: 25, recipeNote: 'Crispy skin.' },
            { name: 'Baked Sweet Potato Fries (200g) with 1 tsp Olive Oil', portion: '200g', calories: 240, protein: 4, carbs: 46, fats: 5, recipeNote: 'Crispy and sweet.' }
          ]
        },
        {
          step: 7,
          mealType: 'Bedtime Recovery',
          time: '10:30 PM',
          headline: 'Casein Protein & Dark Chocolate',
          anabolicPurpose: 'Prepares muscle for Week 2 progressive overload.',
          meals: [
            { name: '30g Casein in Milk + 10g 85% Dark Chocolate', portion: '1 mug + square', calories: 280, protein: 28, carbs: 14, fats: 12, recipeNote: 'Week 1 Bulking complete!' }
          ]
        }
      ]
    }
  ]
};
