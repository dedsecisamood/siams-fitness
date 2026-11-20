/* Better 1% · plan engine (shared by the landing page and the app) */
(function(G){
'use strict';
const EXI={"incline-db-press":{"n":"Incline dumbbell press","r":[6,10],"rest":120,"eq":"db-incline","c":"Bench at 30°. Shoulder blades pinched, lower to upper chest, elbows about 45° from your body.","pri":["chest"]},"machine-chest-press":{"n":"Machine chest press","r":[8,12],"rest":120,"eq":"chest-press","c":"Handles level with mid-chest. Press out without slamming the lockout, 2 seconds back.","pri":["chest"]},"seated-db-shoulder-press":{"n":"Seated dumbbell shoulder press","r":[8,12],"rest":120,"eq":"db-seated","c":"Ribs down, no big arch. Press straight up and stop just short of locking out.","pri":["delt-front"]},"cable-lateral-raise":{"n":"Cable lateral raise","r":[12,20],"rest":60,"eq":"cable","c":"Lead with the elbow, stop at shoulder height, lower slowly.","pri":["delt-side"]},"rope-pushdown":{"n":"Triceps rope pushdown","r":[10,15],"rest":60,"eq":"cable","c":"Elbows pinned to your sides. Spread the rope apart at the bottom.","pri":["triceps"]},"lat-pulldown":{"n":"Lat pulldown","r":[8,12],"rest":120,"eq":"lat-pulldown","c":"Chest up. Pull elbows down to your back pockets, bar to upper chest, full stretch at the top.","pri":["lats"]},"seated-cable-row":{"n":"Seated cable row","r":[8,12],"rest":120,"eq":"cable-row","c":"Chest stays still. Pull to your lower ribs and squeeze for 1 second.","pri":["upper-back","lats"]},"single-arm-pulldown":{"n":"Single-arm cable pulldown","r":[10,15],"rest":90,"eq":"cable","c":"Drive the elbow down toward your hip. Feel the side of your back working.","pri":["lats"]},"face-pull":{"n":"Face pull","r":[12,15],"rest":60,"eq":"cable","c":"Rope at eye level, elbows high, pull the rope apart toward your ears.","pri":["delt-rear"]},"curl":{"n":"EZ-bar or dumbbell curl","r":[8,12],"rest":60,"eq":"ez-bar","c":"Elbows stay still. No swinging, lower slowly.","pri":["biceps"]},"squat":{"n":"Hack squat or goblet squat","r":[8,12],"rest":120,"eq":"hack-squat","c":"Knees track over toes. Go as deep as you can with a flat lower back.","pri":["quads"]},"db-rdl":{"n":"Dumbbell Romanian deadlift","r":[8,12],"rest":120,"eq":"dumbbells","c":"Soft knees, push hips back, weights slide down your thighs. Back stays flat.","pri":["hamstrings","glutes"]},"leg-extension":{"n":"Leg extension","r":[10,15],"rest":90,"eq":"leg-ext","c":"Pause for 1 second at the top. Control the way down.","pri":["quads"]},"seated-leg-curl":{"n":"Seated leg curl","r":[10,15],"rest":90,"eq":"leg-curl-seated","c":"Curl fully, then let the weight back slowly.","pri":["hamstrings"]},"standing-calf":{"n":"Standing calf raise","r":[10,15],"rest":60,"eq":"calf-standing","c":"Full stretch at the bottom, 1-second pause at the top.","pri":["calves"]},"cable-crunch":{"n":"Cable crunch","r":[10,15],"rest":60,"eq":"cable","c":"Curl your ribs toward your hips. Hips stay still.","pri":["abs"]},"machine-shoulder-press":{"n":"Machine shoulder press","r":[8,12],"rest":120,"eq":"shoulder-press","c":"Back flat on the pad, ribs down. Press up and stop short of lockout.","pri":["delt-front"]},"flat-db-press":{"n":"Flat dumbbell press","r":[8,12],"rest":120,"eq":"db-flat","c":"Shoulder blades pinched, feet planted. Lower to mid-chest, elbows about 45°.","pri":["chest"]},"db-lateral-raise":{"n":"Dumbbell lateral raise","r":[12,20],"rest":60,"eq":"dumbbells","c":"Slight lean forward, lead with the elbows, raise to shoulder height. Light weight.","pri":["delt-side"]},"pec-deck":{"n":"Pec deck","r":[10,15],"rest":60,"eq":"pec-deck","c":"Slight bend in the elbows. Squeeze the handles together, open slowly.","pri":["chest"]},"overhead-triceps":{"n":"Overhead cable triceps extension","r":[10,15],"rest":60,"eq":"cable","c":"Elbows point forward and stay put. Full stretch behind your head.","pri":["triceps"]},"assisted-pullup":{"n":"Assisted pull-up","r":[6,10],"rest":120,"eq":"assisted-pullup","c":"More weight on the stack = more help. Log the assistance; using less over time is progress.","pri":["lats"]},"chest-supported-row":{"n":"Chest-supported machine row","r":[8,12],"rest":120,"eq":"chest-row","c":"Chest on the pad. Pull elbows back past your body, squeeze for 1 second.","pri":["upper-back"]},"straight-arm-pulldown":{"n":"Straight-arm cable pulldown","r":[12,15],"rest":60,"eq":"cable","c":"Arms nearly straight. Sweep the bar down to your thighs using your lats.","pri":["lats"]},"reverse-pec-deck":{"n":"Reverse pec deck","r":[12,20],"rest":60,"eq":"pec-deck","c":"Lead with the elbows, light weight, squeeze the backs of your shoulders.","pri":["delt-rear"]},"hammer-curl":{"n":"Hammer curl","r":[10,12],"rest":60,"eq":"dumbbells","c":"Thumbs up, elbows still, lower slowly.","pri":["biceps"]},"leg-press":{"n":"Leg press","r":[10,15],"rest":120,"eq":"leg-press","c":"Feet shoulder-width. Lower until your lower back would start to lift, then press.","pri":["quads"]},"hip-thrust":{"n":"Hip thrust","r":[8,12],"rest":120,"eq":"hip-thrust","c":"Chin tucked, ribs down. Drive through your heels, squeeze glutes at the top.","pri":["glutes"]},"lying-leg-curl":{"n":"Lying leg curl","r":[10,15],"rest":90,"eq":"leg-curl-lying","c":"Hips pressed into the pad. Curl up, lower slowly.","pri":["hamstrings"]},"seated-calf":{"n":"Seated calf raise","r":[12,20],"rest":60,"eq":"calf-seated","c":"Full stretch at the bottom, pause at the top.","pri":["calves"]},"hanging-knee-raise":{"n":"Hanging knee raise","r":[10,15],"rest":60,"eq":"captain","c":"No swinging. Curl your knees up toward your chest.","pri":["abs"]}};
const EQN={"db-incline":"Adjustable bench + dumbbells","db-flat":"Flat bench + dumbbells","db-seated":"Upright bench + dumbbells","dumbbells":"Dumbbells","ez-bar":"EZ curl bar (or dumbbells)","chest-press":"Seated chest press machine","shoulder-press":"Seated shoulder press machine","cable":"Cable station","lat-pulldown":"Lat pulldown machine","cable-row":"Seated cable row","pec-deck":"Pec deck / rear delt fly machine","assisted-pullup":"Assisted pull-up machine","chest-row":"Chest-supported row machine","hack-squat":"Hack squat machine (or a dumbbell for goblet squat)","leg-ext":"Leg extension machine","leg-curl-seated":"Seated leg curl machine","leg-curl-lying":"Lying leg curl machine","leg-press":"45° leg press","hip-thrust":"Bench + barbell with a pad (or hip thrust machine)","calf-standing":"Standing calf raise machine","calf-seated":"Seated calf raise machine","captain":"Captain’s chair (knee raise station)"};
const SIAM_TEXT={"push":{"warm":["5 min on the bike or an incline walk","10 arm circles each way, 10 band pull-aparts or light face pulls","2 light sets of incline dumbbell press (about 50% and 75% of your working weight)"],"dos":["Pinch your shoulder blades back and down before every press","Lower the weight slowly, 2–3 seconds","Keep lateral raises light and strict; feel the side of the shoulder","Stop each set with the reps in reserve your phase says"],"donts":["Flaring elbows straight out to 90° on presses","Arching your lower back on the shoulder press","Swinging heavy dumbbells on lateral raises","Racing through sets with short rests on the big presses"]},"pull":{"warm":["5 min on the rowing machine or bike","10 arm swings and 10 band pull-aparts","2 light sets of lat pulldown to feel your lats"],"dos":["Think “elbows down and back”, not “hands”","Get a full stretch at the top of every pulldown","Squeeze your shoulder blades for 1 second on rows","Do face pulls every pull day; they protect your shoulders"],"donts":["Pulling the bar behind your neck","Rocking your body to move the weight on rows","Swinging on curls","Shrugging your shoulders up to your ears"]},"legs":{"warm":["5 min on the bike","10 bodyweight squats, 10 leg swings each side","1–2 light sets of the first squat with the empty sled or a light dumbbell"],"dos":["Go as deep as you can with a flat lower back","Push through your whole foot, knees tracking over toes","Lock the safety handles back in after every set on the sled machines","Rest the full 2 minutes on squats and leg press"],"donts":["Bouncing out of the bottom","Letting your knees cave inward","Loading the leg press heavier than you can control","Skipping calves and abs because you are tired"]},"upper":{"warm":["5 min on the bike or rower","10 arm circles, 10 band pull-aparts","2 light sets of flat dumbbell press"],"dos":["Do hammer curls and overhead extensions back to back (superset) to save time","Control every lowering phase","Use less assistance on pull-ups over the weeks","Keep the whole session to about an hour"],"donts":["Rushing the rest on the two big lifts","Using the same weight for weeks without trying one more rep","Letting your chest come off the pad on rows","Turning it into a 90-minute session"]},"lower":{"warm":["5 min brisk incline walk","10 hip hinges with a broomstick or no weight, 10 glute bridges","1 light set of Romanian deadlifts"],"dos":["Push your hips back on RDLs; the dumbbells slide down your legs","Squeeze your glutes hard for 1 second at the top of hip thrusts","Keep leg extensions to 2 easy sets: they give your quads a second day each week","Do lateral raises strict and light after legs","Finish with rear delts; they make your shoulders look round from the side"],"donts":["Rounding your back on RDLs","Heavy overhead pressing today (your front shoulders already worked this week)","Rushing laterals because legs made you tired","Skipping the calf work"]}};
Object.assign(EQN,{floor:'Floor space or a mat (no equipment)',backpack:'Backpack filled with books or water bottles'});

/* ---------- Extra exercises for home and no-equipment plans ---------- */
const NEW_EX=[
 {k:'db-floor-press',n:'Dumbbell floor press',r:[8,12],rest:90,eq:'dumbbells',pri:['chest'],sec:['triceps','delt-front'],
  cue:'Lie on the floor, elbows about 45° from your body. Lower until your upper arms touch the floor, then press.',
  setup:['Sit on the floor with a dumbbell on each thigh.','Lie back and bring the dumbbells to your chest. Bend your knees, feet flat.'],
  how:['Press the dumbbells up over your chest.','Lower slowly until your upper arms lightly touch the floor.','Pause for a moment, then press up again.'],
  breathe:'In on the way down, out as you press.',feel:'Chest and the back of your arms.',
  mistakes:['Flaring the elbows straight out to the sides','Bouncing the elbows off the floor','Letting the dumbbells drift over your face'],
  tips:['The floor stops your elbows, which makes this kind to the shoulders.'],swap:['Push-up','Flat dumbbell press'],start:'6–10 kg per hand.'},
 {k:'db-row',n:'One-arm dumbbell row',r:[8,12],rest:90,eq:'dumbbells',pri:['lats','upper-back'],sec:['biceps','delt-rear'],
  cue:'Hand and knee on a bench or chair, back flat. Pull the dumbbell to your hip, not your chest.',
  setup:['Put one hand and the same-side knee on a bench, bed edge or sturdy chair.','Hold a dumbbell in the other hand, arm straight down. Back flat like a table.'],
  how:['Pull the dumbbell up and back towards your hip.','Squeeze your back for 1 second at the top.','Lower slowly until your arm is straight. Do all reps, then switch sides.'],
  breathe:'Out as you pull, in as you lower.',feel:'The side of your back under your armpit.',
  mistakes:['Twisting your body to swing the weight up','Rounding your back','Pulling with your arm instead of driving the elbow back'],
  tips:['Think of your hand as a hook and your elbow doing the work.'],swap:['Backpack row','Seated cable row'],start:'8–14 kg.'},
 {k:'goblet-squat',n:'Goblet squat',r:[8,12],rest:120,eq:'dumbbells',pri:['quads'],sec:['glutes','abs'],
  cue:'Hold one dumbbell at your chest. Sit down between your heels, chest up, knees over toes.',
  setup:['Hold one dumbbell vertically against your chest with both hands.','Feet a little wider than your hips, toes slightly out.'],
  how:['Sit down and back between your heels, keeping your chest tall.','Go as low as you can with a flat back.','Drive up through your whole foot.'],
  breathe:'In on the way down, out on the way up.',feel:'Front of your thighs and your glutes.',
  mistakes:['Heels lifting off the floor','Knees caving in','Chest falling forward'],
  tips:['Put your heels on a thin book if your heels lift.'],swap:['Bodyweight squat','Hack squat'],start:'8–12 kg.'},
 {k:'db-split-squat',n:'Dumbbell split squat',r:[8,12],rest:90,eq:'dumbbells',pri:['quads','glutes'],sec:['hamstrings'],
  cue:'Long stance, drop your back knee straight down towards the floor, front heel stays planted.',
  setup:['Hold a dumbbell in each hand.','Take a long step forward. Back heel up, both feet pointing forward.'],
  how:['Lower your back knee straight down until it almost touches the floor.','Push through your front heel to come back up.','Do all reps on one leg, then switch.'],
  breathe:'In on the way down, out on the way up.',feel:'Front leg thigh and glute.',
  mistakes:['A short stance that pushes the front knee far past the toes','Leaning far forward','Bouncing off the bottom'],
  tips:['Hold a wall or chair with one hand for balance at first.'],swap:['Reverse lunge','Leg press'],start:'Bodyweight first, then 4–8 kg per hand.'},
 {k:'db-standing-press',n:'Standing dumbbell shoulder press',r:[8,12],rest:90,eq:'dumbbells',pri:['delt-front'],sec:['triceps','delt-side'],
  cue:'Ribs down, glutes tight. Press straight up, finish with the dumbbells over your ears.',
  setup:['Stand with feet hip-width, dumbbells at shoulder height, palms facing forward.','Squeeze your glutes and brace your stomach.'],
  how:['Press the dumbbells straight up until your arms are nearly straight.','Lower slowly back to shoulder height.'],
  breathe:'Out as you press.',feel:'Front of your shoulders.',
  mistakes:['Leaning back and arching your lower back','Pressing forward instead of up','Half reps'],
  tips:['Sit on a chair with a back if standing feels unstable.'],swap:['Seated dumbbell shoulder press','Pike push-up'],start:'5–8 kg per hand.'},
 {k:'db-glute-bridge',n:'Dumbbell glute bridge',r:[10,15],rest:90,eq:'dumbbells',pri:['glutes'],sec:['hamstrings'],
  cue:'Dumbbell on your hips, feet flat. Drive through your heels and squeeze your glutes at the top.',
  setup:['Lie on your back, knees bent, feet flat and hip-width apart.','Rest a dumbbell across your hips and hold it with both hands.'],
  how:['Push through your heels and lift your hips until your body is straight from knees to shoulders.','Squeeze your glutes for 1 second.','Lower slowly.'],
  breathe:'Out as you lift.',feel:'Glutes, not your lower back.',
  mistakes:['Arching your lower back at the top','Pushing through your toes','Rushing the reps'],
  tips:['Tuck your chin and keep your ribs down.'],swap:['Glute bridge','Hip thrust'],start:'10–16 kg.'},
 {k:'db-calf-raise',n:'Dumbbell calf raise',r:[12,20],rest:60,eq:'dumbbells',pri:['calves'],sec:[],
  cue:'Balls of your feet on a step. Full stretch at the bottom, 1-second pause at the top.',
  setup:['Stand with the balls of your feet on a step or thick book, heels hanging off.','Hold a dumbbell in one hand and the wall or rail with the other.'],
  how:['Lower your heels slowly for a deep stretch.','Rise up as high as you can and pause for 1 second.'],
  breathe:'Steady breathing.',feel:'Your calves.',mistakes:['Bouncing','Half reps'],
  tips:['Do one leg at a time when two legs gets easy.'],swap:['Step calf raise','Standing calf raise'],start:'Bodyweight, then one 8–12 kg dumbbell.'},
 {k:'db-rear-fly',n:'Bent-over dumbbell rear fly',r:[12,20],rest:60,eq:'dumbbells',pri:['delt-rear'],sec:['upper-back'],
  cue:'Hinge forward, soft elbows, raise the dumbbells out to the sides. Light weight.',
  setup:['Hold light dumbbells and hinge forward at the hips until your chest is nearly parallel to the floor.','Let your arms hang with a soft bend in the elbows.'],
  how:['Raise your arms out to the sides, leading with your elbows.','Pause, then lower slowly.'],
  breathe:'Out on the way up.',feel:'The back of your shoulders.',
  mistakes:['Using your lower back to swing','Going too heavy','Shrugging'],
  tips:['Rest your forehead on an incline bench or chair back if your back gets tired.'],swap:['Reverse pec deck','Face pull'],start:'2–5 kg per hand.'},
 {k:'db-overhead-ext',n:'Dumbbell overhead triceps extension',r:[10,15],rest:60,eq:'dumbbells',pri:['triceps'],sec:[],
  cue:'Hold one dumbbell overhead with both hands. Elbows point forward and stay still.',
  setup:['Sit or stand tall holding one dumbbell with both hands overhead.'],
  how:['Lower the dumbbell behind your head by bending only at the elbows.','Straighten your arms to press it back up.'],
  breathe:'Out as you press up.',feel:'The back of your arms.',
  mistakes:['Elbows flaring wide','Arching your lower back','Going too heavy'],
  tips:['Keep your ribs down and stomach tight.'],swap:['Overhead cable triceps extension','Close-grip push-up'],start:'6–10 kg.'},
 {k:'push-up',n:'Push-up',r:[6,15],rest:90,eq:'floor',pri:['chest'],sec:['triceps','delt-front','abs'],
  cue:'Hands a bit wider than shoulders, body straight like a plank. Chest to a fist’s height from the floor.',
  setup:['Hands on the floor slightly wider than your shoulders.','Step your feet back so your body is one straight line. Squeeze your glutes.'],
  how:['Lower your chest towards the floor, elbows about 45° from your body.','Push the floor away until your arms are straight.'],
  breathe:'In on the way down, out as you push.',feel:'Chest, shoulders and the back of your arms.',
  mistakes:['Hips sagging','Head poking forward','Elbows flaring straight out'],
  tips:['Too hard? Put your hands on a bed or table. Too easy? Slow down to 3 seconds on the way down.'],swap:['Dumbbell floor press','Machine chest press'],start:'Hands on a table if you can’t do 6 good reps on the floor.'},
 {k:'pike-push-up',n:'Pike push-up',r:[6,12],rest:90,eq:'floor',pri:['delt-front'],sec:['triceps'],
  cue:'Hips high like an upside-down V. Lower the top of your head towards the floor between your hands.',
  setup:['Start in a push-up position, then walk your feet in and lift your hips high.'],
  how:['Bend your elbows and lower your head towards the floor in front of your hands.','Press back up until your arms are straight.'],
  breathe:'Out as you press.',feel:'Your shoulders.',mistakes:['Letting the hips drop','Going too fast'],
  tips:['Put your feet on a step to make it harder.'],swap:['Standing dumbbell shoulder press','Seated dumbbell shoulder press'],start:'Small range first. Go deeper over the weeks.'},
 {k:'close-push-up',n:'Close-grip push-up',r:[6,15],rest:60,eq:'floor',pri:['triceps'],sec:['chest'],
  cue:'Hands under your shoulders, elbows brush your sides on the way down.',
  setup:['Push-up position with hands directly under your shoulders.'],
  how:['Lower your chest, keeping your elbows close to your sides.','Push back up until your arms are straight.'],
  breathe:'Out as you push.',feel:'The back of your arms.',mistakes:['Elbows flaring out','Hips sagging'],
  tips:['Do them with hands on a bed or table until you can do 6 good reps on the floor.'],swap:['Triceps rope pushdown','Dumbbell overhead triceps extension'],start:'Hands on a raised surface at first.'},
 {k:'bw-squat',n:'Bodyweight squat',r:[12,20],rest:90,eq:'floor',pri:['quads'],sec:['glutes'],
  cue:'Arms forward, sit down between your heels, chest up, then stand tall.',
  setup:['Feet a little wider than your hips, toes slightly out.','Arms straight out in front for balance.'],
  how:['Sit down and back as low as you can with a flat back.','Stand up by pushing through your whole foot.'],
  breathe:'In on the way down, out on the way up.',feel:'Front of your thighs and your glutes.',
  mistakes:['Heels lifting','Knees caving in','Rounding your back at the bottom'],
  tips:['Too easy? Pause 2 seconds at the bottom of every rep.'],swap:['Goblet squat','Leg press'],start:'Bodyweight.'},
 {k:'reverse-lunge',n:'Reverse lunge',r:[8,12],rest:90,eq:'floor',pri:['quads','glutes'],sec:['hamstrings'],
  cue:'Step back, drop the back knee towards the floor, push through the front heel to return.',
  setup:['Stand tall with feet hip-width. Hold a wall or chair if you need balance.'],
  how:['Step one foot back and lower your back knee towards the floor.','Push through your front heel to step back up.','Alternate legs or finish one side first.'],
  breathe:'In on the way down, out on the way up.',feel:'Front leg thigh and glute.',
  mistakes:['Front knee caving in','Taking a tiny step','Slamming the back knee down'],
  tips:['Hold a filled backpack to make it harder.'],swap:['Dumbbell split squat','Leg press'],start:'Bodyweight.'},
 {k:'glute-bridge',n:'Glute bridge',r:[12,20],rest:60,eq:'floor',pri:['glutes'],sec:['hamstrings'],
  cue:'Feet flat, drive through your heels and squeeze your glutes at the top for 1 second.',
  setup:['Lie on your back, knees bent, feet flat and hip-width apart, arms by your sides.'],
  how:['Lift your hips until your body is straight from knees to shoulders.','Squeeze your glutes for 1 second, then lower slowly.'],
  breathe:'Out as you lift.',feel:'Glutes, not your lower back.',mistakes:['Arching your lower back','Pushing through your toes'],
  tips:['Too easy? Do it on one leg, or put a filled backpack on your hips.'],swap:['Dumbbell glute bridge','Hip thrust'],start:'Bodyweight.'},
 {k:'step-calf-raise',n:'Step calf raise',r:[12,25],rest:60,eq:'floor',pri:['calves'],sec:[],
  cue:'Balls of your feet on a step, full stretch at the bottom, pause at the top.',
  setup:['Stand on a stair with the balls of your feet on the edge. Hold the rail.'],
  how:['Lower your heels slowly for a deep stretch.','Rise up as high as you can and pause for 1 second.'],
  breathe:'Steady breathing.',feel:'Your calves.',mistakes:['Bouncing','Half reps'],
  tips:['Do one leg at a time when two legs gets easy.'],swap:['Dumbbell calf raise','Standing calf raise'],start:'Bodyweight.'},
 {k:'plank',n:'Plank',r:[20,45],rest:60,eq:'floor',pri:['abs'],sec:['obliques'],
  cue:'Forearms down, body straight from head to heels, squeeze glutes and stomach. Reps are seconds.',
  setup:['Forearms on the floor, elbows under your shoulders.','Step your feet back so your body is one straight line.'],
  how:['Hold the position while breathing normally.','Stop when your hips start to sag.'],
  breathe:'Slow steady breaths. Don’t hold your breath.',feel:'Your stomach.',mistakes:['Hips sagging or piking up','Holding your breath'],
  tips:['Log the seconds you held as reps.'],swap:['Cable crunch','Hanging knee raise'],start:'20 seconds.'},
 {k:'backpack-row',n:'Backpack row',r:[10,15],rest:90,eq:'backpack',pri:['upper-back','lats'],sec:['biceps','delt-rear'],
  cue:'Hinge forward with a flat back, pull the backpack to your lower ribs, squeeze your shoulder blades.',
  setup:['Fill a backpack with books or water bottles and hold it by the straps or bottom with both hands.','Hinge forward at the hips, knees soft, back flat.'],
  how:['Pull the bag up to your lower ribs, elbows close to your body.','Squeeze your shoulder blades together for 1 second.','Lower slowly.'],
  breathe:'Out as you pull.',feel:'Your upper and middle back.',mistakes:['Rounding your back','Standing up as you pull','Jerking the bag'],
  tips:['Add more books as it gets easier.'],swap:['One-arm dumbbell row','Seated cable row'],start:'A backpack with 5–8 kg inside.'},
 {k:'backpack-curl',n:'Backpack curl',r:[10,15],rest:60,eq:'backpack',pri:['biceps'],sec:['forearms'],
  cue:'Hold the bag by its handle or bottom, elbows pinned to your sides, curl up slowly.',
  setup:['Hold a filled backpack in front of you with both hands, palms up.'],
  how:['Curl the bag up towards your chest without moving your elbows.','Lower slowly for 2–3 seconds.'],
  breathe:'Out as you curl.',feel:'The front of your arms.',mistakes:['Swinging with your back','Elbows moving forward'],
  tips:['Slow lowering makes a light bag much harder.'],swap:['Hammer curl','EZ-bar or dumbbell curl'],start:'A backpack with 4–6 kg inside.'}
];
NEW_EX.forEach(e=>{EXI[e.k]={n:e.n,r:e.r,rest:e.rest,eq:e.eq,c:e.cue,pri:e.pri}});

/* ---------- Slots: one movement, the right exercise for your equipment ---------- */
const SLOT={
 chestPress:{gym:['incline-db-press','flat-db-press'],db:['db-floor-press','db-floor-press'],bw:['push-up','push-up']},
 chest2:{gym:['machine-chest-press','pec-deck'],db:[],bw:[]},
 vPush:{gym:['seated-db-shoulder-press','machine-shoulder-press'],db:['db-standing-press','db-standing-press'],bw:['pike-push-up','pike-push-up']},
 latRaise:{gym:['cable-lateral-raise','db-lateral-raise'],db:['db-lateral-raise','db-lateral-raise'],bw:[]},
 vPull:{gym:['lat-pulldown','assisted-pullup'],db:['db-row','db-row'],bw:['backpack-row','backpack-row']},
 hPull:{gym:['seated-cable-row','chest-supported-row'],db:['db-row','db-row'],bw:['backpack-row','backpack-row']},
 pull2:{gym:['single-arm-pulldown','straight-arm-pulldown'],db:[],bw:[]},
 rearDelt:{gym:['face-pull','reverse-pec-deck'],db:['db-rear-fly','db-rear-fly'],bw:[]},
 biceps:{gym:['curl','hammer-curl'],db:['hammer-curl','curl'],bw:['backpack-curl','backpack-curl']},
 triceps:{gym:['rope-pushdown','overhead-triceps'],db:['db-overhead-ext','db-overhead-ext'],bw:['close-push-up','close-push-up']},
 squat:{gym:['squat','leg-press'],db:['goblet-squat','goblet-squat'],bw:['bw-squat','bw-squat']},
 quad2:{gym:['leg-press','leg-extension'],db:['db-split-squat','db-split-squat'],bw:['reverse-lunge','reverse-lunge']},
 quadIso:{gym:['leg-extension','leg-extension'],db:[],bw:[]},
 hinge:{gym:['db-rdl','db-rdl'],db:['db-rdl','db-rdl'],bw:['glute-bridge','glute-bridge']},
 glute:{gym:['hip-thrust','hip-thrust'],db:['db-glute-bridge','db-glute-bridge'],bw:['glute-bridge','glute-bridge']},
 legCurl:{gym:['seated-leg-curl','lying-leg-curl'],db:[],bw:[]},
 calf:{gym:['standing-calf','seated-calf'],db:['db-calf-raise','db-calf-raise'],bw:['step-calf-raise','step-calf-raise']},
 core:{gym:['cable-crunch','hanging-knee-raise'],db:['plank','plank'],bw:['plank','plank']}
};
// [slot, variant, flag] where flag m = main lift, l = shoulder-width builder
const W={
 push:{name:'Push',title:'Push day',focus:'Chest, front shoulders, triceps',color:'var(--train)',type:'push',s:[['chestPress',0,'m'],['chest2',0,'m'],['vPush',0],['latRaise',0,'l'],['triceps',0]]},
 pull:{name:'Pull',title:'Pull day',focus:'Back width, rear shoulders, biceps',color:'var(--habit)',type:'pull',s:[['vPull',0,'m'],['hPull',0,'m'],['pull2',0],['rearDelt',0],['biceps',0]]},
 legs:{name:'Legs',title:'Leg day (quads)',focus:'Quads, calves, abs',color:'var(--protein)',type:'legs',s:[['squat',0,'m'],['quad2',0,'m'],['quadIso',0],['legCurl',0],['calf',0],['core',0]]},
 upper:{name:'Upper',title:'Upper day',focus:'Chest, back, arms',color:'var(--accent)',type:'upper',s:[['chestPress',1,'m'],['vPull',1,'m'],['chest2',1],['hPull',1],['biceps',1],['triceps',1]]},
 lower:{name:'Legs & Shoulders',title:'Legs & shoulders day',focus:'Hamstrings, glutes, quads, side and rear shoulders',color:'var(--warn)',type:'lower',s:[['hinge',0,'m'],['glute',0,'m'],['legCurl',1],['quadIso',0],['calf',1],['latRaise',1,'l'],['rearDelt',1]]},
 push2:{name:'Push B',title:'Push day B',focus:'Chest, shoulders, triceps',color:'var(--train)',type:'push',s:[['chestPress',1,'m'],['vPush',1,'m'],['chest2',1],['latRaise',1,'l'],['triceps',1]]},
 pull2:{name:'Pull B',title:'Pull day B',focus:'Back thickness, rear shoulders, biceps',color:'var(--habit)',type:'pull',s:[['hPull',1,'m'],['vPull',1,'m'],['rearDelt',1],['pull2',1],['biceps',1]]},
 legs2:{name:'Legs B',title:'Leg day B (hamstrings)',focus:'Hamstrings, glutes, calves',color:'var(--protein)',type:'legs',s:[['hinge',0,'m'],['glute',0,'m'],['quad2',0],['legCurl',1],['calf',1],['core',1]]},
 upA:{name:'Upper A',title:'Upper day A',focus:'Chest, back, shoulders, arms',color:'var(--accent)',type:'upper',s:[['chestPress',0,'m'],['hPull',0,'m'],['vPush',0],['vPull',0],['latRaise',0,'l'],['triceps',0],['biceps',0]]},
 loA:{name:'Lower A',title:'Lower day A',focus:'Quads, hamstrings, calves, abs',color:'var(--protein)',type:'lower',s:[['squat',0,'m'],['hinge',0,'m'],['quadIso',0],['legCurl',0],['calf',0],['core',0]]},
 upB:{name:'Upper B',title:'Upper day B',focus:'Back, chest, shoulders, arms',color:'var(--habit)',type:'upper',s:[['vPull',1,'m'],['chestPress',1,'m'],['hPull',1],['chest2',1],['latRaise',1,'l'],['rearDelt',0],['biceps',1]]},
 loB:{name:'Lower B',title:'Lower day B',focus:'Glutes, quads, hamstrings, calves',color:'var(--warn)',type:'lower',s:[['glute',0,'m'],['quad2',0,'m'],['legCurl',1],['quadIso',0],['calf',1],['core',1]]},
 fullA:{name:'Full body A',title:'Full body A',focus:'Legs, chest, back, shoulders',color:'var(--train)',type:'full',s:[['squat',0,'m'],['chestPress',0,'m'],['hPull',0],['vPush',0],['latRaise',0,'l'],['core',0]]},
 fullB:{name:'Full body B',title:'Full body B',focus:'Hamstrings, back, chest, arms',color:'var(--habit)',type:'full',s:[['hinge',0,'m'],['vPull',0,'m'],['chestPress',1],['quad2',0],['rearDelt',0],['triceps',0]]},
 fullC:{name:'Full body C',title:'Full body C',focus:'Legs, back, chest, arms',color:'var(--protein)',type:'full',s:[['squat',1,'m'],['hPull',1,'m'],['chest2',0],['glute',0],['latRaise',1,'l'],['biceps',0]]}
};
const TEMPLATES={2:['fullA','fullB'],3:['fullA','fullB','fullC'],4:['upA','loA','upB','loB'],5:['push','pull','legs','upper','lower'],6:['push','pull','legs','push2','pull2','legs2']};
const SPLIT_NAME={2:'Full body, twice a week',3:'Full body, three times a week',4:'Upper / Lower',5:'Push / Pull / Legs + Upper / Lower',6:'Push / Pull / Legs, twice'};
const MAX_EX={30:4,45:5,60:7,75:8};
const AVOID={
 knees:{squat:'leg-press','goblet-squat':'db-glute-bridge','bw-squat':'glute-bridge','db-split-squat':'db-glute-bridge','reverse-lunge':'glute-bridge'},
 back:{'db-rdl':{gym:'hip-thrust',db:'db-glute-bridge',bw:'glute-bridge'},'seated-cable-row':'chest-supported-row',squat:'leg-press','hanging-knee-raise':'cable-crunch','backpack-row':'backpack-row'},
 shoulders:{'seated-db-shoulder-press':null,'machine-shoulder-press':null,'db-standing-press':null,'pike-push-up':null,'overhead-triceps':'rope-pushdown','db-overhead-ext':'close-push-up','assisted-pullup':'lat-pulldown','incline-db-press':'machine-chest-press'}
};
const GENERIC={
 push:{warm:['5 min brisk walk, bike or marching on the spot','10 arm circles each way','2 light sets of your first exercise (about 50% and 75% of your working weight)'],
   dos:['Pinch your shoulder blades back and down before every press','Lower the weight slowly, 2–3 seconds','Keep lateral raises light and strict','Stop each set with the reps in reserve your phase says'],
   donts:['Bouncing the weight off your chest','Flaring your elbows straight out to the sides','Shrugging on lateral raises','Training through sharp shoulder pain']},
 pull:{warm:['5 min brisk walk, bike or marching on the spot','10 band pull-aparts or light rows','1 light set of your first exercise'],
   dos:['Start every rep by pulling your shoulder blades down and back','Pull with your elbows, not your hands','Squeeze for 1 second at the end of each row','Control the way back'],
   donts:['Swinging your body to move the weight','Rounding your lower back on rows','Cutting the stretch short','Going so heavy your form breaks']},
 legs:{warm:['5 min brisk walk or bike','10 bodyweight squats and 10 leg swings each side','2 light sets of your first exercise'],
   dos:['Push through your whole foot','Go as deep as you can with a flat back','Control the way down','Do your calves and abs; they are quick wins'],
   donts:['Knees caving in','Heels lifting','Bouncing at the bottom','Skipping leg day because it’s hard']},
 upper:{warm:['5 min brisk walk, bike or marching on the spot','10 arm circles each way and 10 band pull-aparts','1 light set of your first two exercises'],
   dos:['Pair a push and a pull back to back to save time','Control every lowering phase','Keep the whole session to about an hour','Beat last week by one rep on at least one lift'],
   donts:['Rushing between sets','Ego lifting with half reps','Skipping the warm-up','Training through sharp joint pain']},
 lower:{warm:['5 min brisk walk or bike','10 glute bridges and 10 hip hinges with no weight','1 light set of your first exercise'],
   dos:['Push your hips back on hinges with a flat back','Squeeze your glutes hard at the top of bridges and thrusts','Control the way down','Finish with calves and abs'],
   donts:['Rounding your back','Rushing the reps','Locking your knees hard','Going heavy before your form is solid']},
 full:{warm:['5 min brisk walk, bike or marching on the spot','10 bodyweight squats, 10 arm circles each way','1 light set of your first two exercises'],
   dos:['Start with the hardest exercise while you’re fresh','Rest about 2 minutes on the first two lifts','Control every lowering phase','Beat last week by one rep somewhere'],
   donts:['Rushing to finish','Skipping the legs','Going to failure on every set','Training two days in a row']}
};
const STRETCH=['Hip flexor stretch, 30 s each side','Hamstring stretch, 30 s each side','Chest doorway stretch, 30 s','Child’s pose, 45 s','Cat-cow, 10 slow reps'];
const REST_TEXT={
 active:{title:'Active rest',short:'Walk, stretch, recover',todo:['30–45 minute easy walk','10-minute stretch (below)','Hit your protein target even without training','7–9 hours of sleep tonight'],stretch:STRETCH,
   dos:['Move: a walk speeds up recovery','Eat normally; muscle grows on rest days','Go to bed at your usual time'],
   donts:['Sneaking in an “easy” extra workout','Cutting protein because you didn’t train','Staying up late because there’s no session tomorrow']},
 check:{title:'Rest and weekly check-in',short:'Rest, weekly check-in',todo:['Weekly check-in: weigh in, and measure your waist every second week','Photos every 4th week (same light, same time)','45–60 minute easy walk','Plan next week: pack your gym bag, plan your meals','Sleep in if you can'],stretch:STRETCH,
   dos:['Use your one free meal of the week here if you want it','Look at your Train history: did you beat last week anywhere?','Check your habits page and pick one to focus on next week'],
   donts:['Turning the free meal into a free day','Skipping the check-in; it is how you know what to change','Late nights that wreck your next session']}
};
const HABITS={
 sleep:{name:'Sleep 7+ hours',kind:'check',cue:'Phone on the charger outside the bed 30 minutes before sleep',icon:'moon'},
 water:{name:'Drink water',kind:'count',unit:'glasses',cue:'A glass after every meal and every set break',icon:'drop'},
 steps:{name:'7,000+ steps',kind:'check',cue:'Walk while on phone calls',icon:'walk'},
 meals:{name:'Protein at every meal',kind:'check',cue:'Fill the plate with protein before rice',icon:'egg'},
 nosugar:{name:'No sugary drinks',kind:'check',cue:'Cha with 1 tsp sugar or less',icon:'cup'},
 nofried:{name:'No fried snacks',kind:'check',cue:'Chola chaat or fruit instead of singara',icon:'leaf'},
 weigh:{name:'Weigh in (morning)',kind:'check',cue:'Right after the toilet, before breakfast',icon:'scale'},
 walk:{name:'10-minute walk after dinner',kind:'check',cue:'Straight after the last bite',icon:'walk'},
 bag:{name:'Pack gym bag the night before',kind:'check',cue:'After brushing teeth',icon:'bag'},
 stretch:{name:'5-minute stretch',kind:'check',cue:'Before getting into bed',icon:'leaf'},
 nophone:{name:'No phone for the first 30 min',kind:'check',cue:'Alarm clock away from the bed',icon:'sun'},
 read:{name:'Read 10 pages',kind:'check',cue:'With the night glass of milk or tea',icon:'book'}
};
const HABIT_ORDER=['sleep','water','steps','meals','nosugar','nofried','weigh','walk','bag','stretch','nophone','read'];
const WEEK=[6,0,1,2,3,4,5];
const DAY_SHORT=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

/* ---------- Targets ---------- */
function targets(a){
  const w=+a.weight||70,h=+a.height||170,age=+a.age||25,n=(a.days||[]).length||3;
  const bmr=10*w+6.25*h-5*age+(a.sex==='male'?5:a.sex==='female'?-161:-78);
  const act=n<=3?1.375:n<=5?1.5:1.6;
  const adj={lose:-450,muscle:250,recomp:-200,health:0}[a.goal]||0;
  const kcal=Math.round((bmr*act+adj)/50)*50;
  const protein=Math.max(60,Math.min(200,Math.round(w*1.6/5)*5));
  const water=Math.max(8,Math.min(16,Math.round(w*35/250)));
  return {kcal:Math.max(1400,Math.min(4200,kcal)),protein,water,steps:7000};
}

/* ---------- Build a plan from the questionnaire ---------- */
function eqLevel(a){return a.where==='home-db'?'db':a.where==='home-bw'?'bw':'gym'}
function resolve(slot,v,eq){const list=(SLOT[slot]||{})[eq]||[];return list.length?list[Math.min(v,list.length-1)]:null}
function swapFor(k,eq,inj){
  for(const part of inj){const m=AVOID[part];if(!m||!(k in m))continue;let r=m[k];if(r&&typeof r==='object')r=r[eq];if(r===null)return null;if(r)k=r}
  return k;
}
function buildPlan(a){
  a=Object.assign({days:[6,0,1,3,4],minutes:60,where:'gym',goal:'recomp',exp:'new',injuries:[],diet:'all',allergies:[],habits:['sleep','water','steps','meals']},a||{});
  const days=WEEK.filter(d=>(a.days||[]).includes(d));
  const n=Math.max(2,Math.min(6,days.length));
  const eq=eqLevel(a),inj=(a.injuries||[]).filter(x=>AVOID[x]);
  const ids=TEMPLATES[n],max=MAX_EX[a.minutes]||7;
  const useSiam=n===5&&eq==='gym'&&!inj.length;
  const workouts={};
  ids.forEach(id=>{
    const t=W[id],seen=new Set(),ex=[];
    t.s.forEach(([slot,v,f])=>{let k=resolve(slot,v,eq);if(!k)return;k=swapFor(k,eq,inj);if(!k||seen.has(k)||!EXI[k])return;seen.add(k);
      const o={k};if(f==='m')o.main=1;if(f==='l')o.lat=1;ex.push(o)});
    const txt=(useSiam&&SIAM_TEXT[id])||GENERIC[t.type];
    const mins=Math.min(a.minutes||60,ex.slice(0,max).length*9+10);
    workouts[id]={name:t.name,title:t.title,focus:t.focus,color:t.color,mins:Math.max(25,Math.round(mins/5)*5),ex:ex.slice(0,max),warm:txt.warm.slice(),dos:txt.dos.slice(),donts:txt.donts.slice()};
  });
  const map={};WEEK.forEach(d=>map[d]='rest');days.slice(0,n).forEach((d,i)=>map[d]=ids[i]);
  const restDays=WEEK.filter(d=>map[d]==='rest');
  const checkDay=restDays.length?restDays[restDays.length-1]:null;
  const t=targets(a);
  const habits=(a.habits&&a.habits.length?a.habits:['sleep','water','steps','meals']).filter(id=>HABITS[id]).slice(0,6).map(id=>{
    const h=Object.assign({id},HABITS[id],{days:[0,1,2,3,4,5,6]});
    if(id==='water')h.target=t.water;
    if(id==='weigh')h.days=checkDay!=null?[checkDay]:[days[0]];
    if(id==='bag')h.days=days.map(d=>(d+6)%7);
    return h});
  const notes=[];
  if(inj.length)notes.push('Your plan avoids the riskiest exercises for your '+inj.join(' and ')+'. Stay in a pain-free range and stop if anything feels sharp. If pain continues, see a doctor or physiotherapist.');
  if(eq==='bw')notes.push('No equipment needed. A backpack filled with books makes rows and curls harder over time.');
  if(a.exp==='new')notes.push('Weeks 1–4 are for learning the movements: 2 sets per exercise, stopping 3–4 reps before failure.');
  return {v:1,created:new Date().toISOString(),eq,split:SPLIT_NAME[n],days:map,order:ids,checkDay,workouts,targets:t,habits,
    food:{diet:a.diet||'all',allergies:a.allergies||[]},goal:a.goal,exp:a.exp,offset:a.exp==='some'?4:a.exp==='exp'?14:0,notes};
}

/* ---------- Food filters ---------- */
const RECIPE_TAGS={shake:['milk','nuts'],overnight:['milk','nuts','gluten'],oatomelette:['egg'],bhurji:['egg','gluten'],soya:['soy'],chaat:['egg'],dimdal:['egg'],chicken:['meat','milk'],fish:['fish'],goldenmilk:['milk','nuts']};
const FOOD_TAGS={egg:['egg'],chicken:['meat'],fish:['fish'],soya:['soy'],milk:['milk'],doi:['milk'],beef:['meat'],paneer:['milk'],roti:['gluten'],peanuts:['nuts'],almonds:['nuts'],tandoori:['meat'],naan:['gluten'],biryani:['meat'],paratha:['gluten'],singara:['gluten']};
function blocked(tags,food){
  const t=tags||[],no=new Set(food&&food.allergies||[]);
  if(food&&(food.diet==='egg'||food.diet==='veg')&&(t.includes('meat')||t.includes('fish')))return true;
  if(food&&food.diet==='veg'&&t.includes('egg'))return true;
  return t.some(x=>no.has(x));
}

G.B1={EXI,EQN,NEW_EX,WEEK,DAY_SHORT,HABITS,HABIT_ORDER,REST_TEXT,RECIPE_TAGS,FOOD_TAGS,SPLIT_NAME,buildPlan,targets,blocked,
  /* Username + PIN login, mapped onto Supabase email/password */
  userEmail(u){return String(u||'').trim().toLowerCase()+'@users.better1.app'},
  userFromEmail(e){return String(e||'').split('@')[0]},
  pinPass(p){return 'b1pin-'+String(p||'').trim()},
  okUser(u){return /^[A-Za-z0-9_.]{3,20}$/.test(String(u||'').trim())},
  okPin(p){return /^[0-9]{4,6}$/.test(String(p||'').trim())},
  /* Supabase connection (keys come from config.js) */
  client(){
    if(G.__b1sb)return G.__b1sb;
    const c=G.B1_CONFIG||{};
    if(!c.url||!c.key||!G.supabase||!G.supabase.createClient)return null;
    G.__b1sb=G.supabase.createClient(c.url,c.key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,storageKey:'b1-auth'}});
    return G.__b1sb;
  }
};
})(window);
