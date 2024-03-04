import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), partytown(), icon()],
});
