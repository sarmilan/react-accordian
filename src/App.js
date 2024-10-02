import "./styles.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [openCard, setOpenCard] = useState(null);

  // function handleCardUpdate(num) {
  //   setOpenCard((prev) => (prev === num ? null : num));
  // }

  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem
          title={el.title}
          num={index}
          key={el.title}
          openCard={openCard}
          onOpen={setOpenCard}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        title="Test 1"
        num={22}
        key="rtitle"
        openCard={openCard}
        onOpen={setOpenCard}
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ title, num, openCard, onOpen, children }) {
  const isOpen = openCard === num;

  function handleToggle(num) {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`${isOpen ? "open" : ""} item`}
      onClick={() => handleToggle(num)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title ">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
