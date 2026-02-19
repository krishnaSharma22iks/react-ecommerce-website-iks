import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Fade, } from "react-awesome-reveal";
import {faqData} from "../../Data"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-20">
         <Fade triggerOnce  duration={1500}>
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-black">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-black rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 bg-black text-white text-left"
              >
                <span className="font-medium">
                  {item.question}
                </span>
                {activeIndex === index ? <FiMinus /> : <FiPlus />}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index
                    ? "max-h-40 p-5"
                    : "max-h-0"
                } bg-white text-black`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
      </Fade>
    </section>
  );
};

export default FAQ;
