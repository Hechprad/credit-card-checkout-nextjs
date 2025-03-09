import '@testing-library/jest-dom';
// Mock de arquivos SVG
jest.mock('@/assets/icons/chevron-left.svg', () => 'chevron-left');

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    back: jest.fn(),
  })),
}));
