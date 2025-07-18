import React, { useState } from 'react';

const defaultFaqs = [
  { question: 'What is BookTranspo?', answer: 'BookTranspo is a platform for booking vehicles for goods transport, both locally and long-distance.' },
  { question: 'How do I book a vehicle?', answer: 'You can book a vehicle by signing up on our platform, selecting your pickup and drop locations, and choosing a vehicle.' },
  { question: 'What types of vehicles are available?', answer: 'We offer a range of vehicles including mini trucks, vans, and more, suitable for various delivery needs.' },
  { question: 'Is BookTranspo available in my city?', answer: 'BookTranspo is expanding rapidly. Please check our website or app to see if we operate in your city.' },
  { question: 'Can I schedule a delivery in advance?', answer: 'Yes, you can schedule deliveries in advance through our platform.' },
  { question: 'Do you support inter-city or long-distance deliveries?', answer: 'Yes, we support both inter-city and long-distance deliveries.' },
  { question: 'How can I track my delivery?', answer: 'You can track your delivery in real-time using our tracking feature in the app or website.' },
  { question: 'Is there customer support available?', answer: 'Yes, our customer support is available 24/7 to assist you.' },
  { question: 'What payment options are available?', answer: 'We accept various payment options including credit/debit cards, net banking, and UPI.' },
  { question: 'Can small businesses or shops use BookTranspo?', answer: 'Absolutely! BookTranspo is designed for both individuals and businesses.' },
];

const ChevronCircleIcon = ({ rotated }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transition: 'transform 0.2s',
      transform: rotated ? 'rotate(180deg)' : 'rotate(0deg)',
      display: 'block',
    }}
  >
    <circle cx="14" cy="14" r="13" stroke="#EE4237" strokeWidth="2" fill="#fff" />
    <path d="M9.5 12L14 16.5L18.5 12" stroke="#EE4237" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Frame9 = ({ faqs = defaultFaqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div
      style={{
        width: '1440px',
        margin: '0 auto',
        minHeight: '974px',
        background: 'linear-gradient(to bottom, #fff3ef 0%, #ffffff 20%)',
        padding: '97px 271px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: 900, width: '100%', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 32, color: '#EE4237', marginBottom: 8 }}>
          Frequently Asked Questions
        </div>
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 400, fontSize: 18, color: '#1C264C', marginBottom: 40 }}>
          In case you have more questions, feel free to reach out to us.
        </div>
        <div style={{ background: 'white', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.03)', padding: 0 }}>
          {faqs.map((faq, idx) => (
            <div key={faq.question} style={{ borderBottom: idx !== faqs.length - 1 ? '1px solid #eee' : 'none' }}>
              <button
                onClick={() => handleToggle(idx)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '24px 32px',
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 400,
                  fontSize: 18,
                  color: '#1C264C',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span>{faq.question}</span>
                <span style={{ marginLeft: 16 }}>
                  <ChevronCircleIcon rotated={openIndex === idx} />
                </span>
              </button>
              {openIndex === idx && (
                <div style={{ padding: '0 32px 24px 32px', fontSize: 16, color: '#444', textAlign: 'left', background: 'white' }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frame9; 