const CustomerService = require('../services/customer-service');

module.exports = (app) => {
  const service = new CustomerService();

  app.use('/app-events', async (req, res, next) => {
    const { payload } = req.body;
    console.log('PAYLOAD', payload)

    service.SubscribeEvents(payload);

    console.log(
      '======================== Customer Service Received Event ========================',
    );

    return res.status(200).json(payload);
  });
};
