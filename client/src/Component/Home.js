import React, { useEffect, useState } from 'react'

export function Home() {
    const [message, setMessage] = useState(null);

    useEffect(() => {
        getMessage();
    }, [message]);

    const getMessage = async () => {
        try {
            const response = await fetch("home", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const data = await response.json();
            console.log(data);
            setMessage(data.message);
        } catch (error) {
            console.log("Error:", error);
        }
    }

    return (
        <div>
            <h1>{ message }</h1>
        </div>
    )
}
