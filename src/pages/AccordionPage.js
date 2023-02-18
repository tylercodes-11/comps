import Accordion from "../components/Accordion";

function AccordionPage() {
   const items = [
    {
        id: 'fkjv',
        label: 'Can I use React on any project?',
        content: 'You can use React on- any project you want'

    },
     {
        id: 'fjvdf',
        label: 'Can I use Javascript on any project?',
        content: 'You can use Javascript on any project you want'

     },
     {
    id: 'fjdfojng',
     label: 'Can I use CSS on any project?',
     content: 'You can use CSS on any project you want'
     }
   ];


return <Accordion items={items} />;
    
}

export default AccordionPage;