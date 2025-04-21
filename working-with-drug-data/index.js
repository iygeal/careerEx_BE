// Below is an array of objects which will be used for the entire assignment

const drugs = [
  {
    id: 1,
    name: 'Amoxicillin',
    category: 'Antibiotic',
    dosageMg: 500,
    isPrescriptionOnly: true,
    stock: 120,
    manufacturer: 'Pfizer',
  },

  {
    id: 2,
    name: 'Paracetamol',
    category: 'Analgesic',
    dosageMg: 1000,
    isPrescriptionOnly: false,
    stock: 200,
    manufacturer: 'GSK',
  },

  {
    id: 3,
    name: 'Ibuprofen',
    category: 'Analgesic',
    dosageMg: 400,
    isPrescriptionOnly: false,
    stock: 150,
    manufacturer: 'Bayer',
  },

  {
    id: 4,
    name: 'Chloroquine',
    category: 'Antimalarial',
    dosageMg: 250,
    isPrescriptionOnly: true,
    stock: 80,
    manufacturer: 'Sanofi',
  },

  {
    id: 5,
    name: 'Ciprofloxacin',
    category: 'Antibiotic',
    dosageMg: 500,
    isPrescriptionOnly: true,
    stock: 70,
    manufacturer: 'Pfizer',
  },

  {
    id: 6,
    name: 'Loratadine',
    category: 'Antihistamine',
    dosageMg: 10,
    isPrescriptionOnly: false,
    stock: 160,
    manufacturer: 'Novartis',
  },

  {
    id: 7,
    name: 'Metformin',
    category: 'Antidiabetic',
    dosageMg: 850,
    isPrescriptionOnly: true,
    stock: 140,
    manufacturer: 'Teva',
  },

  {
    id: 8,
    name: 'Artemether',
    category: 'Antimalarial',
    dosageMg: 20,
    isPrescriptionOnly: true,
    stock: 60,
    manufacturer: 'Roche',
  },

  {
    id: 9,
    name: 'Aspirin',
    category: 'Analgesic',
    dosageMg: 300,
    isPrescriptionOnly: false,
    stock: 180,
    manufacturer: 'Bayer',
  },

  {
    id: 10,
    name: 'Omeprazole',
    category: 'Antacid',
    dosageMg: 20,
    isPrescriptionOnly: true,
    stock: 90,
    manufacturer: 'AstraZeneca',
  },

  {
    id: 11,
    name: 'Azithromycin',
    category: 'Antibiotic',
    dosageMg: 250,
    isPrescriptionOnly: true,
    stock: 50,
    manufacturer: 'Pfizer',
  },

  {
    id: 12,
    name: 'Cetirizine',
    category: 'Antihistamine',
    dosageMg: 10,
    isPrescriptionOnly: false,
    stock: 110,
    manufacturer: 'Novartis',
  },

  {
    id: 13,
    name: 'Insulin',
    category: 'Antidiabetic',
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 30,
    manufacturer: 'Novo Nordisk',
  },

  {
    id: 14,
    name: 'Artemisinin',
    category: 'Antimalarial',
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 50,
    manufacturer: 'GSK',
  },

  {
    id: 15,
    name: 'Codeine',
    category: 'Analgesic',
    dosageMg: 30,
    isPrescriptionOnly: true,
    stock: 20,
    manufacturer: 'Teva',
  },

  {
    id: 16,
    name: 'Vitamin C',
    category: 'Supplement',
    dosageMg: 500,
    isPrescriptionOnly: false,
    stock: 300,
    manufacturer: 'Nature’s Bounty',
  },

  {
    id: 17,
    name: 'Ranitidine',
    category: 'Antacid',
    dosageMg: 150,
    isPrescriptionOnly: false,
    stock: 90,
    manufacturer: 'Sanofi',
  },

  {
    id: 18,
    name: 'Doxycycline',
    category: 'Antibiotic',
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 40,
    manufacturer: 'Pfizer',
  },

  {
    id: 19,
    name: 'Tramadol',
    category: 'Analgesic',
    dosageMg: 50,
    isPrescriptionOnly: true,
    stock: 45,
    manufacturer: 'Teva',
  },

  {
    id: 20,
    name: 'Folic Acid',
    category: 'Supplement',
    dosageMg: 5,
    isPrescriptionOnly: false,
    stock: 250,
    manufacturer: 'Nature’s Bounty',
  },
];

//1.  Get all drugs from the array which fall to the category of antibiotic

const antibiotics = drugs
  // Filter out antibiotics
  .filter((each) => each.category === 'Antibiotic')

  // Use map to display just the name for cleaner output
  .map((each) => each.name);

// Output as an array of just the names of antibiotics
console.log(antibiotics);

//2. Return an array of just the drug names in small letters

const lowercaseDrugs = drugs.map((each) => each.name.toLowerCase());

// Output as an array of just the names in small letters
console.log(lowercaseDrugs);

// 3. Write a function that accepts a category and returns all drugs under that
// category

const getDrugsByCategory = (category) => {
  return drugs
    .filter((each) => each.category === category)
    .map((each) => each.name);
};

// Test with category 'Antibiotic'
console.log(getDrugsByCategory('Antibiotic'));
// Test again with category 'Antimalarial'
console.log(getDrugsByCategory('Antimalarial'));

// 4. Log drug names and manufacturers to the console

drugs.forEach((each) => {
  console.log(`Drug: ${each.name}, Manufacturer: ${each.manufacturer}`);
});


// 5. Return all drugs that require a prescription

const prescriptionDrugs = drugs.filter((each) => each.isPrescriptionOnly);
// Output as an array of just the names of prescription drugs (for testing)
console.log(prescriptionDrugs.map((each) => each.name));

// 6. New array with the format: "Drug: [name] - [dosageMg]mg".

const formattedDrugs = drugs.map((each) => {
  return `Drug: [${each.name}] - [${each.dosageMg}]mg`;
})
// Output as an array of just the formatted drugs (for testing)
console.log(formattedDrugs);


// 7. Write a function that returns all drugs with a stock less than 50.

const getLowStockDrugs = () => {
  return drugs.filter((each) => each.stock < 50);
};

// Output as an array of just the names of low stock drugs (for testing)
console.log(getLowStockDrugs().map((each) => each.name));