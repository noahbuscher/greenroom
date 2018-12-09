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
  Store.find().sort('-dateAdded').exec((err, stores) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.status(200).json({ stores });
  });
}

/**
 * Update a Store
 * @param req
 * @param res
 * @returns void
 */
export function updateStore(req, res) {
  Store.findOne({ slug: req.params.slug }).exec((err, store) => {
    if (err) {
      return res.status(500).send(err);
    }

    store.status = req.body.store.status;

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
  newStore.status = 'uncontacted';

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
        console.log(store);
        const newStore = new Store();

        // Let's sanitize inputs
        newStore.name = sanitizeHtml(store.name);
        newStore.street = sanitizeHtml(store.street);
        newStore.city = sanitizeHtml(store.city);
        newStore.state = sanitizeHtml(store.state);
        newStore.status = 'uncontacted';

        const slug = randomstring.generate(6);
        newStore.cuid = cuid();
        newStore.slug = slug;

        stores.push(newStore);
      });

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
  Store.findOne({ slug: req.params.slug }).exec((err, store) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({ store });
  });
}
