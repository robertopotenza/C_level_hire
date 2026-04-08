# Balanced Body® Stockout Dashboard

This dashboard is available at `/dashboard.html` and is designed for a 16:9 TV display.

## The simplest daily update method

Edit the file `stockout-state.json`.

### Recommended mode: automatic day counting

In this mode, you only update the start date of the current streak and the message.

```json
{
  "mode": "auto",
  "streakStartDate": "2026-02-26",
  "days": 42,
  "maxDays": 100,
  "message": "Disciplined planning keeps the floor moving and customers supported.",
  "updatedAt": "2026-04-08T00:00:00Z"
}
```

When `mode` is set to `"auto"`, the dashboard calculates the visible day count from `streakStartDate`. That means the number increases automatically every day without editing the file daily.

## If a stockout happens

Reset the streak by changing `streakStartDate` to the new restart date and optionally update `updatedAt`.

## If you prefer manual counting

Change the file to:

```json
{
  "mode": "manual",
  "days": 12,
  "maxDays": 100,
  "message": "Every clean day protects service, production, and trust.",
  "updatedAt": "2026-04-08T00:00:00Z"
}
```

In manual mode, the dashboard displays the `days` value directly.

## Message updates

You can change the motivational line at any time by editing the `message` field.

## Logo

If you add a file named `BB_logo.png` in the same public folder as `dashboard.html`, it will appear automatically in the white pill at the top left.

Current path for the logo file:

- `client/public/BB_logo.png`

If the logo file is not present, the dashboard shows a clean text fallback instead.

## Live behavior

The screen polls `/api/state` every 4 seconds. When the count increases, the number bumps and a sparkle animation appears automatically.
