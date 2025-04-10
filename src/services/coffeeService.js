const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/coffee`

const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        return res.json()
    } catch (err) {
        console.log(err);
    }
};

const create = async (formData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        return res.json()
    } catch (err) {
        console.log(err)
    }
}

const update = async (formData, coffeeId) => {
    try {
        const res = await fetch(`${BASE_URL}/${coffeeId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        return res.json();
    } catch (err) {
        console.log(err)
    }
}

// console.log(await index()) // Way to confirm that the URL is connecting correctly if it console.logs object

export {
    index,
    create,
    update,
}