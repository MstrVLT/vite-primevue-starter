import { createApp } from 'vue'
import './style.css'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';

const Fractal = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{sky.50}',
            100: '{sky.100}',
            200: '{sky.200}',
            300: '{sky.300}',
            400: '{sky.400}',
            500: '{sky.500}',
            600: '{sky.600}',
            700: '{sky.700}',
            800: '{sky.800}',
            900: '{sky.900}',
            950: '{sky.950}'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '{sky.950}',
                    inverseColor: '#ffffff',
                    hoverColor: '{sky.900}',
                    activeColor: '{sky.800}'
                },
                highlight: {
                    background: '{sky.950}',
                    focusBackground: '{sky.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff'
                }
            },
        }
    }
});
import App from './App.vue'

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Fractal,
        options: {
            darkModeSelector: '.fractal-app-dark',
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        }
    }
 });

app.mount('#app')
