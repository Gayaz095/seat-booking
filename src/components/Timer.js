import React, { useState, useEffect } from "react";

export default function Timer () {
    const [count, setCount] = useState(15);
    useEffect(() => {
      const timer = setTimeout(() => {
        const counter = count ;
        if(counter > 0){
            const counter = count -1;
            setCount(counter);
        }else {
            return () => clearTimeout(timer);
        }
      }, 1000);
    }, [count]);
    
    return (
      <section>
        <div>Time left: {count} seconds</div>
      </section>
    );
};
