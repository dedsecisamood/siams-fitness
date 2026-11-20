# Better 1%

A free training app for a small test group. Answer 10 questions and get your own plan:
a split that fits your days, every exercise with a drawing, form cues and a demo link,
calorie, protein and water targets, recipes filtered to how you eat, and daily habits.

Live: https://dedsecisamood.github.io/siams-fitness/

## Files

| File | What it is |
| --- | --- |
| `index.html` | Landing page, questionnaire, sign-up and log-in |
| `app.html` | The app (Today, Train, Exercises, Fuel, Recipes, Habits, Progress, Plan, Guide) |
| `plan.js` | Plan builder shared by both pages: splits, exercise swaps, targets, habits |
| `config.js` | Supabase project URL and **publishable** key |
| `supabase-schema.sql` | Database tables and row-level security (already applied) |

## Accounts and privacy

- Accounts run on Supabase (email and password).
- Each person's answers, plan and logs live in their own rows. Row-level security blocks
  everyone else, including logged-out visitors.
- Settings → Delete my account removes the account and every row it owns.
- The app also keeps a copy on the device so it works offline, and syncs when back online.

## Setup

1. Put the project's publishable key (`sb_publishable_…`) in `config.js`.
   It is safe in a public repo. **Never** put the secret key (`sb_secret_…`) or the
   database password in this repo.
2. Supabase → Authentication → URL configuration: Site URL and redirect URL
   `https://dedsecisamood.github.io/siams-fitness/**`.

Free-plan notes: the project pauses after 7 days with no activity (resume it from the
dashboard), and the built-in email sender is limited to a few emails an hour, which is why
email confirmation is off.

Not medical advice. Check with a doctor before starting if you have an injury or condition.
