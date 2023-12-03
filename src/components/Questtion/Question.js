import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
           <div className='ans'>
                <h3>
                    How react works?
                </h3>
                <p> DOM is sluggish while developing client-side apps.  It specifies the logical structure of documents as well as how they are accessed and modified.) To speed things up, React uses a virtual DOM, which is essentially a JavaScript version of a DOM tree. As a result, it will utilize the virtual representation of the DOM when reading or writing to it. The virtual DOM will then attempt to update the browser's DOM in the most efficient manner possible.
                React elements, unlike browser DOM components, are simple objects that are easy to generate. The DOM is updated to match the React elements using React DOM. The rationale for this is because JavaScript is incredibly fast and it’s worth having a DOM tree in it to speed up its operations.
Although React was designed to be used in the browser, it can also be utilized in the server using Node.js due to its architecture. 
                </p>
            </div>
            <div className='ans'>
            <h3>What is difference bwtween props and state?</h3>
            <p>
           1. Props allow you to pass data from one component to other components as an argument.
           State holds information about the components.
           2. Props are read-only.
           State changes can be asynchronous.
           3. 	Props can be accessed by the child component.
           State cannot be accessed by child components.
           4. 	Props make components reusable.
           State cannot make components reusable.
           5. 	Props are external and controlled by whatever renders the component.
           The State is internal and controlled by the React Component itself.
            </p>
            </div>
            
        </div>
    );
};

export default Question;