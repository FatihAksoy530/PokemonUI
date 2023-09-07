type TypeColor = {
    [key: string]: {
        backgroundColor: string;
        color: string;
    }
}


const typeColors: TypeColor = {
    "Colorless": {
        backgroundColor: "#9f9f9f",
        color: "#000000",
    },
    "Darkness": {
        backgroundColor: "linear-gradient(to bottom, #705746, #6a5342, #654e3f, #5f4a3b, #5a4638)",
        color: "#ffffff",
    },
    "Dragon": {
        backgroundColor: "linear-gradient(to bottom, #6f35fc, #6a32f1, #652fe6, #602ddc, #5b2ad1)",
        color: "#ffffff",
    },
    "Fairy": {
        backgroundColor: "linear-gradient(to bottom, #d685ad, #d68bb0, #d690b3, #d696b5, #d69bb8)",
        color: "#000000",
    },
    "Fighting": {
        backgroundColor: "linear-gradient(to bottom, #c22e28, #b82a25, #ae2721, #a5231e, #9b201b)",
        color: "#ffffff",
    },
    "Fire": {
        backgroundColor: "linear-gradient(to bottom, #ee8130, #e77b2b, #e07526, #da7020, #d36a1b)",
        color: "#000000",
    },
    "Grass": {
        backgroundColor: "linear-gradient(to bottom, #7ac74c, #84cd59, #8fd367, #99d873, #a3de80)",
        color: "#000000",
    },
    "Lightning": {
        backgroundColor: "linear-gradient(to bottom, #7ac74c, #80cb54, #87cf5c, #8dd263, #93d66b)",
        color: "#000000",
    },
    "Metal": {
        backgroundColor: "linear-gradient(to bottom, #b7b7ce, #c0c0d3, #c9c9d7, #d2d2dc, #dbdbe0)",
        color: "#000000",
    },
    "Psychic": {
        backgroundColor: "linear-gradient(to bottom, #f95587, #f95e8d, #f96793, #f96f99, #f9779f)",
        color: "#000000",
    },
    "Water": {
        backgroundColor: "linear-gradient(to bottom, #6390f0, #6c96f0, #769def, #7fa3ef, #88a9ee)",
        color: "#000000",
    },
}


export default typeColors;