module.exports.handler = async (event) => {
  return {
    status: 201,
    body: JSON.stringify(
      {
        message: "Hola Pueblo",
        input: event,
      },
      null,
      2
    ),
  };
};
