const PatchRequestService = (id: number, likeValue: number, yourLikeIt: boolean): void => {

    fetch(`https://jsonplaceholder.typicode.com/posts/:${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            id,
            likeValue,
            yourLikeIt,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
}

export default PatchRequestService
