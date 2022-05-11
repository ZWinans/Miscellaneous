import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // use effect hook to contact our json api to get the blogs
    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok){throw Error('could not fetch the blog data')}
                return res.json()
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if(!err.name === 'AbortError'){
                    setIsPending(false);
                    setError(err.message);
                }
                console.log('fetch aborted');
            })
        // abort fetch
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;