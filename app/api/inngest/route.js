import { inngest } from "@/lib/inngest/client";
import { helloWorld } from "@/lib/inngest/function";
import { serve } from "inngest/next";


// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
   
  ],
});
