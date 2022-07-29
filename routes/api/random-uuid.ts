// routes/api/random-uuid.ts

import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req) {
    const uuid = crypto.randomUUID();
    const a={name:'xiaoyu',age:33,sex:'men'}
    return new Response(JSON.stringify(a), {
      headers: { "Content-Type": "application/json" },
    });
  },
};