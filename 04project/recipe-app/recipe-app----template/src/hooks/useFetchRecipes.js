import axios from "axios";
import { useState } from "react";
const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes",
    params: {
        from:'0',
        size:'20'
    },

    headers: {
        "X-RapidAPI-Key": "a53eceeadbmsh543db1bb038e084p15859ajsn9796c3b62ce4",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
};



const useFetchRecipes = () => {
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchRecipes = async (searchTerm) => {
        setLoading(true);
        setRecipes(null);
        setError(null);
        try {

            const reqOptions = { ...options };

            reqOptions.params.q = searchTerm;

            const response = await
                axios.request(reqOptions);
            setRecipes(response.data.results);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return [fetchRecipes, { data: recipes, loading, error }];
};

export default useFetchRecipes;