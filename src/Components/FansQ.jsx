import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetail = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Who Should Go for These Treks?",
      items: [
        "Are these treks beginner-friendly or suitable for experienced trekkers?",
        "Is it safe for solo travelers or families with children?",
      ],
    },
    {
      title: "Trek Planning Questions",
      items: [
        "What is the best time of year to visit Kedarnath, Nagtibba, or Chopta?",
        "How should I prepare physically and mentally for the trek?",
      ],
    },
    {
      title: "Packing & Gear",
      items: [
        "What essential items should I carry for a Himalayan trek?",
        "Do I need special trekking gear or equipment for these routes?"
      ],
    },
    {
      title: "Travel & Accessibility",
      items: [
        "How do I reach the base camps of these treks?",
        "Are there local guides or porters available for hire?",
      ],
    },
    {
      title: "Budget & Accommodation",
      items: [
        "What is the approximate cost of the entire trek including stay and food?",
        "Are there affordable homestays or campsites along the trek route?"
      ],
    }
  ];
  
  

  return (
    <div className="container mx-auto my-12 px-8">
      <h2 className="text-center text-3xl font-bold mb-8">I know, you have questions like...</h2>
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
