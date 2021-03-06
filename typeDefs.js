const { gql } = require('apollo-server');

module.exports = gql`
    type User {
        _id: ID
        name: String
        email: String
        picture: String
    }

    type Image {
        _id: ID
        createdAt: String
        imageURL: String
        publicId: String
    }

    type Pin {
        _id: ID
        createdAt: String
        title: String
        content: String
        image: Image
        latitude: Float
        longitude: Float
        author: User
        comments: [Comment]
    }

    type Comment {
        text: String
        createdAt: String
        author: User
    }

    input CreateImageInput {
        imageURL: String
        publicId: String
    }

    input CreatePinInput {
        title: String
        image: CreateImageInput
        content: String
        latitude: Float
        longitude: Float
    }

    type Query {
        me: User
        getPins: [Pin!]
    }

    type Mutation {
        createPin(input: CreatePinInput!): Pin
        createComment(pinId: ID!, text: String): Pin
        deletePin(pinId: ID!): Pin
    }

    type Subscription {
        pinAdded: Pin
        pinDeleted: Pin
        pinUpdated: Pin
    }
`