const uuid = require("uuid");
const AWS = require("aws-sdk");

const update = async (event) => {
 try{

  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  const { nombres, email, phone } = JSON.parse(event.body);

  await dynamodb
    .update({
      TableName: "CrudT",
      Key: { id },
      UpdateExpression: "set nombres = :nombres, email = :email, phone = :phone",
      ExpressionAttributeValues: {
        ":nombres": nombres,
        ":email": email,
        ":phone": phone,

      },
      ReturnValues: "ALL_NEW",
    })
    .promise();

  return {
    status: 200,
    body: JSON.stringify({
      message: "task updated",
    }),
  };
  }catch(error){
    return {
      status: 500,
      body: JSON.stringify(error),
  };
  }


};

module.exports = {
  update,
};