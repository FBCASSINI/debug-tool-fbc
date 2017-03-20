const db = require('./db');

// Create---------------------------------------------------------------------------//
exports.create = (payload, err, success) => {
  db.url.create(payload).then(success).catch(err);
};

// READ----------------------------------------------------------------------------//
exports.findAll = (err, success) => {
  db.url.findAll().then(success).catch(err);
};

exports.find = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },
// *Find all relations in sequelize*//
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
};


exports.findShortURL = (payload, err, success) => {
  db.url.find({
    where: {
      shorturl: payload.shorturl,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
};


// UPDATE---------------------------------------------------------------------------//
exports.update = (payload, err, success) => {
  db.url.update({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};


// Delete--------------------------------------------------------------------------//
exports.destroy = (payload, err, success) => {
  db.url.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};
