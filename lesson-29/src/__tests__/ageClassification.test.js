import {ageClassification} from '../ageClassification';

test('should return null for negative numbers', () => {
    expect(ageClassification(-1)).toBeNull();
});

test('should return null for 0', () => {
    expect(ageClassification(0)).toBe('Дитинство');
});

test('should return "Дитинство" for age 1 to 24', () => {
    expect(ageClassification(1)).toBe('Дитинство');
    expect(ageClassification(24)).toBe('Дитинство');
});

test('should return "Молодість" for age 24.01 to 44', () => {
    expect(ageClassification(24.01)).toBe('Молодість');
    expect(ageClassification(44)).toBe('Молодість');
});

test('should return "Зрілість" for age 44.01 to 65', () => {
    expect(ageClassification(44.01)).toBe('Зрілість');
    expect(ageClassification(65)).toBe('Зрілість');
});

test('should return "Старість" for age 65.01 to 75', () => {
    expect(ageClassification(65.01)).toBe('Старість');
    expect(ageClassification(75)).toBe('Старість');
});

test('should return "Довголіття" for age 75.01 to 90', () => {
    expect(ageClassification(75.01)).toBe('Довголіття');
    expect(ageClassification(90)).toBe('Довголіття');
});

test('should return "Рекорд" for age 90.01 to 122', () => {
    expect(ageClassification(90.01)).toBe('Рекорд');
    expect(ageClassification(122)).toBe('Рекорд');
});

test('should return null for age greater than 122', () => {
    expect(ageClassification(122.01)).toBeNull();
    expect(ageClassification(150)).toBeNull();
});