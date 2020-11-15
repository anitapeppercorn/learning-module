import { AccordionButton, AccordionItem, Accordion, AccordionPanel } from "@chakra-ui/react";

const Section = () => {
    return(
        <Accordion>
            <AccordionItem>
                <h3>
                <AccordionButton>This is the button</AccordionButton>
                </h3>
                <AccordionPanel>This is the content</AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
};

export default Section;