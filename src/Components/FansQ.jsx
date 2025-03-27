import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetail = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "6.1 Introduction",
      items: [
        "1729, the Hardy-Ramanujan Number, is the smallest number that can be expressed as the sum of two cubes in two different ways: 1729=1³+12³=10³+9³."
      ],
    },
    {
      title: "6.2 Cubes",
      items: [
        "A perfect cube (or cube number) is a number obtained by multiplying a number by itself three times (e.g., 1³=1, 2³=8, 3³=27).",
        "Cubes of even numbers are even, and cubes of odd numbers are odd."
      ],
    },
    {
      title: "6.2.1 Some Interesting Patterns",
      items: [
        "The sum of consecutive odd numbers can result in a perfect cube (e.g., 1³=1, 3+5=2³, 7+9+11=3³).",
        "There is a pattern relating the difference of consecutive cubes and their product (e.g., n³ - (n-1)³ = 1 + n * (n-1) * 3).",
        "In the prime factorisation of a perfect cube, each prime factor appears three times."
      ],
    },
    {
      title: "6.2.2 Smallest Multiple that is a Perfect Cube",
      items: [
        "To find the smallest multiple of a number to make it a perfect cube, look at its prime factorisation. Multiply by the missing prime factors needed to complete groups of three.",
        "To find the smallest number to divide a number by to make it a perfect cube, look at its prime factorisation. Divide by any prime factors that don't appear in groups of three."
      ],
    }
  ];

  return (
    <div className="container mx-auto my-12 px-8">
      <h2 className="text-center text-3xl font-bold mb-8">Cubes and Cube Roots - Key Points</h2>
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className="bg-white/60 rounded-2xl shadow-lg backdrop-blur-md border border-white/30"
          >
            <div 
              className="flex items-center justify-between p-5 cursor-pointer"
              onClick={() => toggleDetail(index)}
            >
              <strong>{section.title}</strong>
              <svg 
                className={`w-6 h-6 transition-transform transform ${openIndex === index ? 'rotate-90' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            {openIndex === index && (
              <ul className="p-4 m-4 bg-gray-100 rounded-lg shadow-inner">
                {section.items.map((item, i) => (
                  <li key={i} className="list-disc ml-5">{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
