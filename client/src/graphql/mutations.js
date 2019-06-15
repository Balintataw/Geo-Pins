export const CREATE_PIN_MUTATION = `
    mutation($title: String!, $imageURL: String!, $publicId: String!, $content: String!, $latitude: Float!, $longitude: Float!) {
        createPin(input: {
            title: $title,
            image: {
                imageURL: $imageURL,
                publicId: $publicId
            },
            content: $content,
            latitude: $latitude,
            longitude: $longitude
        }) {
            _id
            createdAt
            title
            image {
                imageURL
                publicId
            }
            content
            latitude
            longitude
            author {
                _id
                name
                email
                picture
            }
        }
    }
`;

export const DELETE_PIN_MUTATION = `
    mutation($pinId: ID!) {
        deletePin(pinId: $pinId) {
            _id
        }
    }
`;

export const CREATE_COMMENT_MUTATION = `
    mutation($pinId: ID!, $text: String!) {
        createComment(pinId: $pinId, text: $text) {
            _id
            createdAt
            title
            content
            image {
                imageURL
            }
            latitude
            longitude
            author {
                _id
                name
            }
            comments {
                text
                createdAt
                author {
                    name
                    picture
                }
            }
        }
    }
`;