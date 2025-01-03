export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "18-10605" );
  }

  if (query.toLowerCase().includes("name")) {
    return ( "Eliezer" );
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    // Extrae los números de la pregunta
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers) {
      return Math.max(...numbers).toString();
    }
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length === 2) {
      return (numbers[0] + numbers[1]).toString();
    }
  }

  if (query.toLowerCase().includes("multiplied by")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length === 2) {
      return (numbers[0] * numbers[1]).toString();
    }
  }

  if (query.toLowerCase().includes("both a square and a cube")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers) {
      // Encuentra todas las sextas potencias perfectas
      const results = numbers.filter(num => {
        const root = Math.round(Math.pow(num, 1 / 6));
        return root ** 6 === num;
      });
      return results.length > 0 ? results.join(", ") : "None";
    }
  }

  if (query.toLowerCase().includes("which of the following numbers are primes")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers) {
      const isPrime = (num: number): boolean => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };
      const primes = numbers.filter(isPrime);
      return primes.length > 0 ? primes.join(", ") : "None";
    }
  }

  if (query.toLowerCase().includes("minus")) {
    const numbers = query.match(/-?\d+/g)?.map(Number);
    if (numbers && numbers.length === 2) {
      return (numbers[0] - numbers[1]).toString();
    }
  }
  return "";
}
