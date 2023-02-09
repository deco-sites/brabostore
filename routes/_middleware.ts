import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 510,
  site: "brabostore",
  domains: ["brabostore.deco.site"],
});