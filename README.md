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
| `supabase-schema.sql` | Database tables, row-level security and pre-loaded plans (already applied) |

## Accounts and privacy

- Log in with a username and a 4 to 6 digit PIN. Under the hood each username maps to a Supabase account; no email is collected.
- Forgotten PIN: reset it in Supabase → Authentication → Users (set a new password of `b1pin-` followed by the new PIN).
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

Free-plan note: the project pauses after 7 days with no activity. Resume it from the dashboard.
Email confirmation is off because accounts use usernames, not real email addresses.

Made by Abdullah Siam. Not medical advice. Check with a doctor before starting if you have an injury or condition.
