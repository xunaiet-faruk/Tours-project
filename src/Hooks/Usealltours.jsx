import { useEffect, useState } from "react";


const Usealltours = () => { 
    const [tour, settour] = useState([])
    const [loading,setloading] =useState(true);
    useEffect(() => {

        fetch('http://localhost:5000/tours')
            .then(res => res.json())
            .then(data => 
                settour(data),
                setloading(false)
               )


    }, [])
    return [tour,loading]

};

export default Usealltours;