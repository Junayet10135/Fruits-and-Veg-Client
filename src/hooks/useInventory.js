import { useEffect, useState } from "react";

const useInventory = () => {
    const [inventorys, setInventorys] = useState([]);
    useEffect(() => {
        fetch('https://cryptic-escarpment-05910.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventorys(data))
    }, []);
    return [inventorys, setInventorys]
}

export default useInventory;

