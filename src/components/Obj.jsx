import { useState, useEffect } from 'react';

export default function Obj({ Key, value, time }) {
    const [counter, setCounter] = useState(Math.floor(time / 1000));

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => {
                if (prevCounter > 0) {
                    return prevCounter - 1;
                } else {
                    clearInterval(interval);
                    return 0;
                }
            });
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    if (counter === 0) {
        return null;
    }

    return (
        <div className="flex flex-row gap-10 px-2 py-3 bg-indigo-900 my-2">
            <div>key: {Key}</div>
            <div>value: {value}</div>
            <div>timer: {counter}</div>
        </div>
    );
}
