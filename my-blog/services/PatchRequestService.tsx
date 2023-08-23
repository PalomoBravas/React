import {PatchRequestServiceProps} from "@/services/PatchRequestService.props";
const PatchRequestService = (id: number, likeValue: unknown, yourLikeIt: boolean): void => {

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