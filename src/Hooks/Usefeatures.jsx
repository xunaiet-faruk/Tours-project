import { useEffect, useState } from "react";


const Usefeatures = () => {
    const [Fature, setFature] = useState([])
    const [loading, setloading] = useState(true);
    useEffect(() => {

        fetch('/Features.json')
            .then(res => res.json())
            .then(data =>
                setFature(data),
                setloading(false)
            )


    }, [])
    return [Fature, loading]

};

export default Usefeatures;