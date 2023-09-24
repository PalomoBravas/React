import {PatchRequestServiceProps} from "@/services/PatchRequestService.props";

const patchRequestService: PatchRequestServiceProps = (id, likeValue, yourLikeIt) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
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
        .then((response) => response.json());

};

export default patchRequestService;

