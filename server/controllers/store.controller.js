import Store from '../models/store.model';
import cuid from 'cuid';
import csv from 'csvtojson';
import fs from 'fs';
import randomstring from 'randomstring';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all Stores
 * @param req
 * @param res
 * @returns void
 */
export function getStores(req, res) {
  let q = {};

  // Add all filters to Query, ignoring "all"
  for (const prop in req.query) {
    if (req.query.hasOwnProperty(prop)) {
        if (req.query[prop] !== 'all') {
          q[prop] = req.query[prop];
        }
    }
  }

  // Find all Stores that match Query
  Store.find(q).sort({ name:'asc' }).exec((err, stores) => {
    if (err) {
      return res.status(500).send(err);
    }

    // Find all unique field values
    Store
      .aggregate([
        {
          $group: {
            _id: null,
            city: {$addToSet: '$city'},
            state: {$addToSet: '$state'},
            status: {$addToSet: '$status'},
          }
        }
      ])
      .exec(function (err, distinct) {
        if (err) {
          return res.status(500).send(err);
        }

        // Add fields to res
        let d = {
          city: [],
          state: [],
          status: [],
        };

        if (distinct[0]) {
          d = {
            city: distinct[0].city.sort(),
            state: distinct[0].state.sort(),
            status: distinct[0].status.sort(),
          };
        }

        res.status(200).json({ stores, fields: d });
      });
  });
}

/**
 * Update a Store
 * @param req
 * @param res
 * @returns void
 */
export function updateStore(req, res) {

  // Find Store by slug
  Store.findOne({ slug: req.params.slug }).exec((err, store) => {
    if (err) {
      return res.status(500).send(err);
    }

    // Let's sanitize inputs
    store.name = sanitizeHtml(req.body.store.name);
    store.street = sanitizeHtml(req.body.store.street);
    store.city = sanitizeHtml(req.body.store.city);
    store.state = sanitizeHtml(req.body.store.state);
    store.status = sanitizeHtml(req.body.store.status);

    store.save((err, saved) => {
      if (err) {
        return res.status(500).send(err);
      }

      res.json({ store: saved });
    });
  });
}

/**
 * Save a new Store
 * @param req
 * @param res
 * @returns void
 */
export function addStore(req, res) {
  if (!req.body.store) {
    return res.status(403).end();
  }

  const newStore = new Store();

  // Let's sanitize inputs
  newStore.name = sanitizeHtml(req.body.store.name);
  newStore.street = sanitizeHtml(req.body.store.street);
  newStore.city = sanitizeHtml(req.body.store.city);
  newStore.state = sanitizeHtml(req.body.store.state);
  newStore.status = 'Uncontacted';

  // Generate random slug
  const slug = randomstring.generate(6);
  newStore.cuid = cuid();
  newStore.slug = slug;

  newStore.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ store: saved });
  });
}

/**
 * Upload stores from CSV
 * @param req
 * @param res
 * @returns void
 */
export function uploadStore(req, res) {
  if (!req.file) {
    return res.status(403).end();
  }

  let stores = [];

  // Read CSV file
  csv()
    .fromFile(req.file.path)
    .then((rawStores) => {

      // Iterate over all stores
      rawStores.forEach(function (store) {
        const newStore = new Store();

        // Let's sanitize inputs
        newStore.name = sanitizeHtml(store.name);
        newStore.street = sanitizeHtml(store.street);
        newStore.city = sanitizeHtml(store.city);
        newStore.state = sanitizeHtml(store.state);
        newStore.status = 'Uncontacted';

        // Generate random slug
        const slug = randomstring.generate(6);
        newStore.cuid = cuid();
        newStore.slug = slug;

        stores.push(newStore);
      });

      // Delete tmp CSV file
      fs.unlink(req.file.path, (err) => {
        if (err) throw err;

        // Save all stores
        Store.insertMany(stores, (err, docs) => {
          if (err) {
            return res.status(500).send(err);
          }

          res.json({ stores: docs });
        });
      });
    });
}


/**
 * Get a single Store
 * @param req
 * @param res
 * @returns void
 */
export function getStore(req, res) {

  // Find one Store by slug
  Store.findOne({ slug: req.params.slug }).exec((err, store) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({ store });
  });
}
