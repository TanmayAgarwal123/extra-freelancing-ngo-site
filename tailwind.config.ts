
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				lakshya: {
					blue: '#0EA5E9',
					'light-blue': '#D3E4FD',
					orange: '#F97316',
					'light-orange': '#FEC6A1',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'count-up': {
					'0%': { content: '0' },
					'2%': { content: '1' },
					'4%': { content: '2' },
					'6%': { content: '3' },
					'8%': { content: '4' },
					'10%': { content: '5' },
					'12%': { content: '6' },
					'14%': { content: '7' },
					'16%': { content: '8' },
					'18%': { content: '9' },
					'20%': { content: '10' },
					'22%': { content: '11' },
					'24%': { content: '12' },
					'26%': { content: '13' },
					'28%': { content: '14' },
					'30%': { content: '15' },
					'32%': { content: '16' },
					'34%': { content: '17' },
					'36%': { content: '18' },
					'38%': { content: '19' },
					'40%': { content: '20' },
					'42%': { content: '21' },
					'44%': { content: '22' },
					'46%': { content: '23' },
					'48%': { content: '24' },
					'50%': { content: '25' },
					'52%': { content: '26' },
					'54%': { content: '27' },
					'56%': { content: '28' },
					'58%': { content: '29' },
					'60%': { content: '30' },
					'62%': { content: '31' },
					'64%': { content: '32' },
					'66%': { content: '33' },
					'68%': { content: '34' },
					'70%': { content: '35' },
					'72%': { content: '36' },
					'74%': { content: '37' },
					'76%': { content: '38' },
					'78%': { content: '39' },
					'80%': { content: '40' },
					'82%': { content: '41' },
					'84%': { content: '42' },
					'86%': { content: '43' },
					'88%': { content: '44' },
					'90%': { content: '45' },
					'92%': { content: '46' },
					'94%': { content: '47' },
					'96%': { content: '48' },
					'98%': { content: '49' },
					'100%': { content: '50' }
				},
				'fade-in': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'pulse-slow': {
					'0%, 100%': { 
						opacity: '1',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '0.8',
						transform: 'scale(1.05)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'count-up': 'count-up 3s forwards',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'slide-in': 'slide-in 0.7s ease-out forwards',
				'pulse-slow': 'pulse-slow 3s infinite'
			},
			fontFamily: {
				'serif': ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
				'sans': ['Inter', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
