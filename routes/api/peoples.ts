

import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req) {
    const peos=[
        {name:'xiaoyu',age:33,sex:'men'},
        {name:'haha',age:4,sex:'girl'},
        {name:'ruru',age:33,sex:'women'},
    ]



    // const a={name:'xiaoyu',age:33,sex:'men'}
    return new Response(JSON.stringify(peos), {
      headers: { "Content-Type": "application/json" },
    });
  },
};