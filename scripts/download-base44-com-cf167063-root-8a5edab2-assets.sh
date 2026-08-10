#!/usr/bin/env bash
set -euo pipefail

asset_root="public/sites/base44-com-cf167063/root-8a5edab2"

while IFS='|' read -r url relative_path; do
  [[ -z "$url" ]] && continue
  destination="$asset_root/$relative_path"
  mkdir -p "$(dirname "$destination")"
  curl --fail --location --silent --show-error --retry 3 "$url" --output "$destination"
  echo "$relative_path"
done <<'ASSETS'
https://media.base44.com/images/public/marketing-site-assets/branded/header/globe.svg|header/globe.svg
https://media.base44.com/images/public/marketing-site-assets/branded/header/hamburger.svg|header/hamburger.svg
https://media.base44.com/images/public/marketing-site-assets/branded/cards/distance-duration.webp|hero/apps/distance-duration.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/total-repetitions.webp|hero/apps/total-repetitions.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/badge-88.webp|hero/apps/badge-88.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/footprint-lab.webp|hero/apps/footprint-lab.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/rising-companies.webp|hero/apps/rising-companies.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/altitude.webp|hero/apps/altitude.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/websites/websites-1-cart.webp|hero/websites/websites-1-cart.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/websites/websites-2-fermented.webp|hero/websites/websites-2-fermented.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/websites/websites-3-stateofart.webp|hero/websites/websites-3-stateofart.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/websites/websites-4-forms.webp|hero/websites/websites-4-forms.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/websites/websites-5-globe.webp|hero/websites/websites-5-globe.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/websites/websites-6-modular.webp|hero/websites/websites-6-modular.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/games/games-1-level.webp|hero/games/games-1-level.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/games/games-2-golf.webp|hero/games/games-2-golf.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/games/games-3-icon.webp|hero/games/games-3-icon.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/games/games-4-castle.webp|hero/games/games-4-castle.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/games/games-5-leaderboard.webp|hero/games/games-5-leaderboard.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/games/games-6-tetris.webp|hero/games/games-6-tetris.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/tools/tools-1-light.webp|hero/tools/tools-1-light.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/tools/tools-2-gear.webp|hero/tools/tools-2-gear.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/tools/tools-3-finance.webp|hero/tools/tools-3-finance.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/tools/tools-4-map.webp|hero/tools/tools-4-map.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/tools/tools-5-weather.webp|hero/tools/tools-5-weather.webp
https://media.base44.com/images/public/marketing-site-assets/branded/cards/tools/tools-6-sound.webp|hero/tools/tools-6-sound.webp
https://media.base44.com/images/public/marketing-site-assets/branded/section2/collage.webp|sections/stack/collage.webp
https://media.base44.com/images/public/marketing-site-assets/branded/section5/grow-bg.webp|sections/grow/grow-bg.webp
https://media.base44.com/images/public/marketing-site-assets/branded/section5/grow-bg-tablet.webp|sections/grow/grow-bg-tablet.webp
https://media.base44.com/images/public/marketing-site-assets/branded/section6/yoav-hornung-v2.jpg|sections/testimonial/yoav-hornung-v2.jpg
https://media.base44.com/images/public/marketing-site-assets/branded/section6/check.svg|sections/pricing/check.svg
https://media.base44.com/images/public/marketing-site-assets/branded/sendoff/cards/dashboard.webp|sections/sendoff/dashboard.webp
https://media.base44.com/images/public/marketing-site-assets/branded/sendoff/cards/black-mode.jpg|sections/sendoff/black-mode.jpg
https://media.base44.com/images/public/marketing-site-assets/branded/sendoff/cards/sendoff-image.jpg|sections/sendoff/sendoff-image.jpg
https://media.base44.com/images/public/marketing-site-assets/branded/sendoff/cards/aftertone.webp|sections/sendoff/aftertone.webp
https://media.base44.com/images/public/marketing-site-assets/branded/sendoff/cards/image-sendoff.jpg|sections/sendoff/image-sendoff.jpg
https://media.base44.com/images/public/marketing-site-assets/grunge-cover.webp|textures/grunge-cover.webp
https://media.base44.com/files/public/marketing-site-assets/fonts/dazzed/dazzed-regular.woff2|fonts/dazzed-regular.woff2
https://media.base44.com/files/public/marketing-site-assets/fonts/dazzed/dazzed-medium.woff2|fonts/dazzed-medium.woff2
https://media.base44.com/files/public/marketing-site-assets/fonts/dazzed/dazzed-semibold.woff2|fonts/dazzed-semibold.woff2
https://base44.com/fonts/geist/geist-latin-wght-normal.woff2|fonts/geist-latin-wght-normal.woff2
https://media.base44.com/images/public/marketing-site-assets/branded/favicon-branded-v2.png|seo/favicon-branded-v2.png
https://media.base44.com/images/public/marketing-site-assets/social-share-og-en.jpg|seo/social-share-og-en.jpg
ASSETS
