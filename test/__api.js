const url = require('../src/models/url');
const fs = require('fs');


module.exports = (express) => {
  const router = express.Router();


// READ and Find All URLS----------------------------------------------------//
  router.get('/api/v1/url', (req, res) => {
    url.findAll((err) => {
      fs.appendFileSync('./logs/log.log', 'Error: Someone tried to access all urls \n');
      res.status(500).json(err);
    }, (data) => {
      fs.appendFileSync('./logs/log.log', 'Success: Someone accessed all urls \n');
      res.status(200).json(data);
    });
  });

// READ and Find specific url by id---------------------------------------------------->
  router.get('/api/v1/url/:id', (req, res) => {
    req.body.id = req.params.id;
    url.find(req.body, (err) => {
      fs.appendFileSync('./logs/log.log', 'Error: Someone tried to access a single url \n');
      res.status(500).json(err);
    }, (data) => {
      fs.appendFileSync('./logs/log.log', 'Success: Someone accessed a single url \n');
      res.status(200).json(data);
    });
  });


// create and generate short url------------------------------------------------------------------->
  router.post('/api/v1/url', (req, res) => {
    const generate = require('../../util');
    req.body.shorturl = generate.returnStringGen();
    url.create(req.body, (err) => {
      fs.appendFileSync('./logs/log.log', 'Error: Someone tried to generate a short url \n');
      res.status(500).json(err);
    }, (data) => {
      fs.appendFileSync('./logs/log.log', 'Success: Someone generated a short url \n');
      res.status(200).json(data);
    });
  });


    // update specific url by finding id ------------------------------------------------------->
  router.post('/api/v1/url/:id', (req, res) => {
    req.body.id = req.params.id;
    url.update(req.body, (err) => {
      fs.appendFileSync('./logs/log.log', 'Error: Someone tried to update a url \n');
      res.status(500).json(err);
    }, (data) => {
      fs.appendFileSync('./logs/log.log', 'Success: Someone updated a url \n');
      res.status(200).json(data);
    });
  });

    // delete url specific url by finding id ----------------------------------------------------->
  router.delete('/api/v1/url:id', (req, res) => {
    req.body.id = req.params.id;
    url.destroy(req.body, (err) => {
      fs.appendFileSync('./logs/log.log', 'Error: Someone tried to delete a url \n');
      res.status(500).json(err);
    }, (data) => {
      fs.appendFileSync('./logs/log.log', 'Success: Someone deleted a url \n');
      res.status(200).json(data);
    });
  });
  return router; 
};
