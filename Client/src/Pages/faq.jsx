import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(false);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What specific services and solutions can Web Genius provide to help my business thrive in the digital landscape ?",
            answer: "We offer a wide range of services, including web development, mobile app development, and e-commerce solutions. Our team specializes in creating customized solutions tailored to meet your specific needs."
        },
        {
            question: "Can you provide an estimated timeline for completing a project based on its complexity, and what factors influence this timeline ?",
            answer: "The timeline for completing a project depends on its complexity and scope. After discussing your requirements, we will provide you with a detailed timeline for your project."
        },
        {
            question: "What quality assurance measures do you implement during the development process to ensure a high standard of work ?",
            answer: "We follow a rigorous quality assurance process that includes testing at various stages of development. Our team is committed to delivering high-quality solutions that exceed your expectations."
        },
        {
            question: "How does your pricing structure work, and what factors should I consider when budgeting for my project with Web Genius ?",
            answer: "Our pricing structure varies based on the services required and the complexity of the project. We offer competitive pricing and will provide you with a detailed quote after our initial consultation."
        },
        {
            question: "What are the best ways to get in touch with your team for support or inquiries, and what response times can I expect ?",
            answer: "You can reach out to us via our contact page, where you can fill out a form, or you can directly email us at contact@webgenius.com. We are always here to help!"
        }
    ];


    return (
        <div className="flex flex-col mt-4 max-w-7xl mx-auto px-6">
            <div className=" flex flex-col items-start  p-10">

                <h2 className="text-3xl font-bold ">Frequently Asked Questions</h2>
            </div>
            <div className="flex w-full px-11 flex-col  items-start space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-collapse pb-4 cursor-pointer" onClick={() => toggleQuestion(index)}>
                        <div className='flex justify-between items-center'>
                            <h3 className="text-lg">{faq.question}</h3>
                            <span className='ml-5'>
                                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                            </span>
                        </div>
                        {openIndex === index && <p className="text-lg text-neutral-400 mt-5">{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

