const { v4 } = require("uuid");
const AWS = require("aws-sdk");
 
const create = async (event) => {
    try{
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { nombres, email, phone } = JSON.parse(event.body);
    const createdAt = new Date().toISOString();
    const id = v4();


   const newUser = {
        id,
        nombres,
        email,
        phone,
        createdAt,
        
     };

    await dynamodb.put({
        TableName: "CrudT",
        Item: newUser,
        
    }).promise();


    return {
        status: 200,
        body: JSON.stringify(newUser),
    };
}catch(error){
    return {
        status: 500,
        body: JSON.stringify(error),
    };
}
};

module.exports = {
    create,
};