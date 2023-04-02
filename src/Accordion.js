import React, { useState } from 'react';
import { questions } from "./file"
import MyAccordian from './MyAccordian';


const Accordian = () => {
    const [data, setData] = useState(questions);
    return (
    <>
            <section className="main-div">
                <h1 >React related Questions</h1>

                {
                    data.map((curElem) => {
                        return <MyAccordian key={curElem.id} {...curElem} />
                    })}
            </section>
        </>
    )
}

export default Accordian