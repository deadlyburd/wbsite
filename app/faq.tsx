import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



const FAQS = () => {
    return ( 
        <div className=" mt-10 md:py-10 bg-black w-full
        rounded-3xl">
          <div className=" rounded-sm p-10 md:p-4 md:px-20">
            <div className="text-4xl md:text-7xl font-bold text-neutral-100 rounded-full">
              Have questions ?
            </div>
            <div className=" font-semibold text-3xl md:text-6xl  bg-gradient-to-r text-neutral-100 bg-clip-text text-transparent">
              Get answers
            </div>
            <div className="text-3xl md:text-3xl font-bold text-neutral-100">
            <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>How long does it take to design and launch a website?</AccordionTrigger>
      <AccordionContent>
      Typically, our custom dental websites are designed and launched within 4-6 weeks, depending on the complexity of your requirements.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Can I update my website content myself??</AccordionTrigger>
      <AccordionContent>
      Yes, all our websites come with a user-friendly content management system that allows you to easily update and manage your content.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Is my patient data secure?</AccordionTrigger>
      <AccordionContent>
      Absolutely. We use HIPAA-compliant data storage solutions to ensure that all patient information is secure and confidential.  
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger>
      Do you provide ongoing support?
        </AccordionTrigger>
      <AccordionContent>
      Yes, we offer various support plans to ensure your website continues to run smoothly and remains up-to-date.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  </div>
  
  
          </div>
        </div> );
}
 
export default FAQS;