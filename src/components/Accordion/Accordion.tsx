type AccordionProps = { title: string; collapsed?: boolean };

function Accordion({ title, collapsed = false }: AccordionProps) {
  console.log("Accordion rendering");
  return (
    <div>
      <AccordionTitle text={title} />
      {!collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitleProps = { text: string };

function AccordionTitle({ text }: AccordionTitleProps) {
  console.log("AccordionTitle rendering");
  return <h3>{text}</h3>;
}

function AccordionBody() {
  console.log("AccordionBody rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

export { Accordion };
