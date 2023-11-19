module.exports.handler = async (event) => {
    const request = JSON.parse(event.body);

    if(!request || !request.firstName || !request.lastName){
        return {
            statusCode: 400,
            body: JSON.stringify(
              {
                message: "Invalid Request",
              }
            ),
        }; 
    }
    const firstName = request.firstName;
    const lastName = request.lastName;
    const raffleCode = Math.floor(100000 + Math.random() * 900000);

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          status: true,
          message: `Dear ${firstName} ${lastName}, your raffle code is ${raffleCode}`,
        }
      ),
    };
  };