import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from './Accordion'
import './styles.scss'

function App() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionButton>What is ARIA?</AccordionButton>
        <AccordionPanel>
          A way to make web content more accessible: "Accessible Rich Internet Applications".
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>What does "a11y" stand for?</AccordionButton>
        <AccordionPanel>
          A11y is short for "accessibility" since there are 11 characters between "a" and "y".
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Other</AccordionButton>
        <AccordionPanel>Other Content</AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

// function CustomAccordionItems() {
//   return (
//     <>
//       <AccordionItem>
//         <AccordionButton>What does "a11y" stand for?</AccordionButton>
//         <AccordionPanel>
//           A11y is short for "accessibility" since there are 11 characters between "a" and "y".
//         </AccordionPanel>
//       </AccordionItem>
//       <AccordionItem>
//         <AccordionButton>Other</AccordionButton>
//         <AccordionPanel>Other Content</AccordionPanel>
//       </AccordionItem>
//     </>
//   )
// }

/*
✅ It works, but needs some improvements...

Remember these problems we've had the whole time? Let's fix them:
❌ Can't add extra DOM container around elements
❌ Can't abstract compound component elements into other components
*/

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
