import {useState, useEffect} from 'react';

const useFetch = (url, options) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options)
                const dataJson = await response.json()
                setData(dataJson)
                setLoading(false)
            } catch (e) {
                setError(e)
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    return {data, loading, error};
};

export default useFetch;