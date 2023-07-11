import { z } from 'zod';

const envSchema = z.object({
    APP_ID: z.number().default(1)
})
    
console.log({id: process.env.APP_ID})
const Env = envSchema.parse({...import.meta.env, APP_ID: process.env.APP_ID})
export default Env

