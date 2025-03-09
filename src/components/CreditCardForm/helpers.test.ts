import { formatCardNumber, formatExpiryDate } from './helpers';

describe('Credit Card Form Helpers', () => {
  describe('formatCardNumber', () => {
    it('should format card number with spaces every 4 digits', () => {
      expect(formatCardNumber('4111111111111111')).toBe('4111 1111 1111 1111');
      expect(formatCardNumber('411111')).toBe('4111 11');
    });

    it('should remove non-numeric characters', () => {
      expect(formatCardNumber('4111-1111-1111-1111')).toBe(
        '4111 1111 1111 1111',
      );
      expect(formatCardNumber('4111a1111b1111c1111')).toBe(
        '4111 1111 1111 1111',
      );
    });
  });

  describe('formatExpiryDate', () => {
    it('should format expiry date with slash', () => {
      expect(formatExpiryDate('1225')).toBe('12/25');
      expect(formatExpiryDate('0123')).toBe('01/23');
    });

    it('should handle partial input', () => {
      expect(formatExpiryDate('12')).toBe('12');
      expect(formatExpiryDate('1')).toBe('1');
    });
  });
});
