import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // Setup server-side Gemini client
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    try {
      ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
      console.log('Gemini AI client successfully initialized on server.');
    } catch (e) {
      console.warn('Failed to initialize Gemini AI client:', e);
    }
  } else {
    console.log('No GEMINI_API_KEY detected in env; running with expert gym physiologist fallback engine.');
  }

  // AI Chat Box Endpoint
  app.post('/api/ai/chat', async (req, res) => {
    try {
      const { message, userProfile, history } = req.body;
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required' });
      }

      if (ai) {
        const systemPrompt = `You are IronCoach AI, an elite, scientific, hyper-supportive gym coach and master sports physiologist.
Your Persona: Motivating, direct, safety-obsessed, condemning ego-lifting and poor form, grounded in progressive overload, biomechanics, recovery, and nutrition.
User Profile:
- Name: ${userProfile?.name || 'Athlete'}
- Gender: ${userProfile?.gender || 'Not specified'}
- Current Weight: ${userProfile?.weightKg || '70'} kg
- Goal: ${userProfile?.goal || 'Muscle Hypertrophy & Fat Loss'}
- Physique Tier: ${userProfile?.physiqueTier || 'Intermediate'}
Core Directives:
1. Always condemn ego lifting and warn against muscle tears (pec tears, bicep tendon tears, disc herniation). Form strictly precedes weight.
2. Emphasize lower body training importance (quads, hamstrings, glutes produce systemic growth hormone/testosterone and create balanced V-taper).
3. If user is female or asks about female training, emphasize beginning slowly, joint stability, glute/hamstring balance, and gradual ramp up.
4. Provide structured, actionable answers with bullet points and clear sets/reps or meal suggestions when appropriate.
5. If nutrition is discussed, provide specific pre-workout fuel (60m vs 20m) and post-workout protein timing.
6. Emphasize 7-9 hours of sleep and 48-72h recovery between heavy muscle sessions.`;

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: [
            {
              role: 'user',
              parts: [{ text: `${systemPrompt}\n\nUser Question: ${message}` }],
            },
          ],
        });

        const replyText = response.text || 'Keep pushing with progressive overload and strict form!';
        return res.json({ reply: replyText });
      } else {
        // Fallback intelligent gym answers
        const fallbackReply = generateFallbackGymAdvice(message, userProfile);
        return res.json({ reply: fallbackReply });
      }
    } catch (err: any) {
      console.error('Error in /api/ai/chat:', err);
      const fallback = generateFallbackGymAdvice(req.body.message || '', req.body.userProfile);
      return res.json({ reply: fallback });
    }
  });

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Vite in dev or static in prod
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`TITAN IRON Gym Engine server running on http://0.0.0.0:${PORT}`);
  });
}

function generateFallbackGymAdvice(msg: string, profile: any): string {
  const query = msg.toLowerCase();

  if (query.includes('ego') || query.includes('heavy') || query.includes('tear') || query.includes('injury')) {
    return `⚠️ **COACH'S INJURY WARNING: LEAVE YOUR EGO AT THE DOOR!**

Ego lifting is the #1 cause of catastrophic gym injuries:
1. **Pectoralis Major Ruptures**: Occur when lifters bounce heavy bars off their sternum or flare elbows at 90°. Always tuck elbows to 45° and control the 3-second descent!
2. **Distal Bicep Tendon Tears**: Occur when jerking the bar with an underhand grip on deadlifts or swinging heavy dumbbells on bicep curls.
3. **Lumbar Disc Herniations**: Occurs when rounding the spine to move heavier loads on squats or rows.

**The Golden Rule:** If you cannot pause for 1 second at the stretch and control the 3-second negative, the weight belongs to your ego, not your muscles. Drop the weight by 20% and feel the tension!`;
  }

  if (query.includes('leg') || query.includes('lower body') || query.includes('squat')) {
    return `🔥 **THE ANABOLIC ENGINE: WHY YOU NEVER SKIP LEGS!**

1. **Systemic Hormone Surge**: The quads, hamstrings, and glutes comprise over 50% of your total skeletal muscle mass. Heavy compound lower-body training triggers massive pulses of circulating Human Growth Hormone (HGH) and natural Testosterone that circulate through your blood and stimulate growth in your **chest, back, and arms**!
2. **The V-Taper Optical Illusion**: A wide upper torso on stick legs looks unbalanced ("chicken leg syndrome"). Muscular outer quad sweep (vastus lateralis) creates the aesthetic illusion of an even tighter, narrower waist!
3. **Core & Spinal Longevity**: Strong glutes and hamstrings eliminate lower back pain and anterior pelvic tilt.

Execute your Day 3A Leg workout with the same savagery as chest day!`;
  }

  if (query.includes('female') || query.includes('woman') || query.includes('girl') || query.includes('slow')) {
    return `🌸 **COACH'S FEMALE PROGRESSION GUIDE: SAFE & POWERFUL**

For female athletes, we recommend starting the routine with a smooth, controlled progression:
1. **Initial Pacing**: Start Week 1 with 3 sets of 12-15 reps using conservative weights (RPE 6-7). Focus entirely on feeling the mind-muscle connection and joint tracking.
2. **Ligament Protection**: Due to natural joint flexibility, avoid aggressive hyperextension at the top of presses and squats. Always maintain a soft, active joint lock.
3. **Glute & Pelvic Chain**: Exercises like Romanian Deadlifts (RDLs), Goblet Squats, and Hip Thrusts build incredible posterior posture and metabolic calorie burn.
4. **Gradual Overload**: Add just 1 repetition or 1kg-2.5kg per week. Consistency will sculpt a lean, athletic physique with zero injury risk!`;
  }

  if (query.includes('pre-workout') || query.includes('post-workout') || query.includes('eat') || query.includes('meal')) {
    return `⚡ **PRE & POST-WORKOUT NUTRIENT TIMING BLUEPRINT**

**Pre-Workout Fuel (60-90 min before):**
- Complex Carbs: 45g oats or 150g sweet potato
- Moderate Protein: 3-4 egg whites or 120g lean chicken breast
- *Quick snack (20m before):* 2 rice cakes with honey + pinch of pink Himalayan sea salt (for maximum muscular blood volume pump) + black coffee!

**Post-Workout Anabolic Window (Within 45-60 min):**
- Rapid Protein: 1 scoop (25-30g) Whey Isolate or Plant Isolate
- Glycogen Replenishment: 1 banana, 30g cream of rice, or 200ml coconut water
- *Goal:* Spike insulin moderately to halt muscle protein breakdown and rush aminos into trained muscle fibers!`;
  }

  if (query.includes('sleep') || query.includes('rest') || query.includes('grow')) {
    return `💤 **THE SLEEP & HYPERTROPHY EQUATION**

- **Duration:** 7.5 to 9 hours of uninterrupted sleep every single night.
- **The Science:** Over 70% of your daily Human Growth Hormone (HGH) is secreted during slow-wave Stage 3 & 4 deep sleep. 
- **Recovery Window:** A trained muscle requires **48 to 72 hours** of recovery before being trained with heavy intensity again.
- **Cortisol Control:** Missing sleep raises cortisol by up to 45%, destroying muscle tissue and storing stubborn abdominal fat. Sleep is your most potent natural anabolic steroid!`;
  }

  return `💪 **COACH'S RESPONSE FOR ${profile?.name || 'ATHLETE'}:**

Keep these 3 non-negotiables dialed in:
1. **Progressive Overload**: Strive to beat your previous log by 1 extra rep or 1-2.5kg each week.
2. **3-Second Eccentric Control**: Lower every weight with control to maximize mechanical tension without joint damage.
3. **Hydration & Protein**: Hit ${profile?.dailyWaterTargetMl || 3500}ml water daily and target 1.6-2.2g of protein per kg of bodyweight.

Got a specific question on an exercise, meal plan, or muscle group? Ask away!`;
}

startServer();
