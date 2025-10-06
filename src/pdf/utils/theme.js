import { Font } from '@react-pdf/renderer';

export const colors = {
  brand: '#184B37',
  brandLight: '#E8F3EF',
  tableHeader: '#124B2F',
  border: '#D1D5DB',
  ok: '#22C55E',
  warn: '#F59E0B',
  bad: '#EF4444',
};

export function registerFonts() {
  // Using default fonts if custom files are not added; this is a safe no-op placeholder
  // Drop-in: add ttf files to public/fonts and register families here if needed
  try {
    // Example (commented):
    // Font.register({ family: 'Inter', src: '/fonts/Inter-Regular.ttf' });
    // Font.register({ family: 'InterBold', src: '/fonts/Inter-Bold.ttf' });
  } catch (e) {
    // ignore font registration failures for now
  }
}