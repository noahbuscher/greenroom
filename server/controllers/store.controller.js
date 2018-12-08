import Store from '../models/store.model';
import cuid from 'cuid';
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

    res.json({ stores });
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
