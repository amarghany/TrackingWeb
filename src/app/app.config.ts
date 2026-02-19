import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Material from '@primeuix/themes/material';
import Nora from '@primeuix/themes/nora';



const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#E6EBF5',
      100: '#B3C1E0',
      200: '#8097CC',
      300: '#4D6DB8',
      400: '#1A43A3',
      500: '#003591', // DNV Sea Blue
      600: '#0f204b', // DNV Dark Blue
      700: '#0C1A3D',
      800: '#091430',
      900: '#060D22'
    }
  },
  components: {
    datatable: {
      colorScheme: {
        light: {
          root: {
            borderColor: '{primary.color}',
          },
          headerCell: {
            background: '{yellow.300}',
            // color: '{blue.950}'
          },
          footerCell: {
            background: '{blue.300}',
          },
          row:{
            selectedBackground:'{red.100}',
            hoverBackground:'{blue.100}',
            stripedBackground:'{gray.100}'
          }
        },
        dark: {
          root: {
            borderColor: '{primary.color}',
          },
          headerCell: {
            background: '{yellow.300}',
            // color: '{blue.950}'
          },
          footerCell: {
            background: '{blue.300}',
          }
        }
      }
    },
    button: {
      root: {
        borderRadius: '10px', // DNV override
        roundedBorderRadius: '2rem',
        gap: '0.75rem',
        paddingX: '1.143rem',
        paddingY: '0.571rem',
        iconOnlyWidth: '2.5rem',
        sm: {
          fontSize: '{form.field.sm.font.size}',
          paddingX: '{form.field.sm.padding.x}',
          paddingY: '{form.field.sm.padding.y}',
          iconOnlyWidth: '2rem'
        },
        lg: {
          fontSize: '{form.field.lg.font.size}',
          paddingX: '{form.field.lg.padding.x}',
          paddingY: '{form.field.lg.padding.y}',
          iconOnlyWidth: '3rem'
        },
        label: {
          fontWeight: '700' // DNV override
        },
        raisedShadow: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        focusRing: {
          width: '{focus.ring.width}',
          style: '{focus.ring.style}',
          offset: '{focus.ring.offset}'
        },
        badgeSize: '1rem',
        transitionDuration: '{form.field.transition.duration}'
      },
      colorScheme: {
        light: {
          root: {
            primary: {
              background: '{primary.color}',
              hoverBackground: '{primary.hover.color}',
              activeBackground: '{primary.active.color}',
              borderColor: '{primary.color}',
              hoverBorderColor: '{primary.hover.color}',
              activeBorderColor: '{primary.active.color}',
              color: '{primary.contrast.color}',
              hoverColor: '{primary.contrast.color}',
              activeColor: '{primary.contrast.color}',
              focusRing: {
                color: '{primary.color}',
                shadow: 'none'
              }
            }
            // Add other variants (secondary, info, success, etc.) if needed
          },
          outlined: {
            primary: {
              hoverBackground: '{primary.50}',
              activeBackground: '{primary.100}',
              borderColor: '{primary.200}',
              color: '{primary.color}'
            }
            // Add other variants if needed
          },
          text: {
            primary: {
              hoverBackground: '{primary.50}',
              activeBackground: '{primary.100}',
              color: '{primary.color}'
            }
            // Add other variants if needed
          },
          link: {
            color: '{primary.color}',
            hoverColor: '{primary.color}',
            activeColor: '{primary.color}'
          }
        },
        dark: {
          // Add dark theme overrides if needed
          root: {
            primary: {
              background: '{primary.color}',
              hoverBackground: '{primary.hover.color}',
              activeBackground: '{primary.active.color}',
              borderColor: '{primary.color}',
              hoverBorderColor: '{primary.hover.color}',
              activeBorderColor: '{primary.active.color}',
              color: '{primary.contrast.color}',
              hoverColor: '{primary.contrast.color}',
              activeColor: '{primary.contrast.color}',
              focusRing: {
                color: '{primary.color}',
                shadow: 'none'
              }
            }
          }
        }
      }
    }
  },
  cssLayer: {
    name: 'primeng',
    order: 'tailwind, primeng'
  },
  darkModeSelector: '.my-app-dark'
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
      },
    })
  ]
};
