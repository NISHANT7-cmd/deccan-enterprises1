import FAQItem from "./FAQItem";
import { faqData } from "./faqData";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-[#F8FBFD] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#005EB8]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#102A43]">
            Got Questions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Find answers to the most common questions about our surgical
            products, wholesale services, deliveries, and customer support.
          </p>

        </div>

        <div className="mx-auto grid max-w-4xl gap-5">

          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}

        </div>

      </div>
    </section>
  );
}