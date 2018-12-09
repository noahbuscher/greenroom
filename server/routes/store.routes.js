import { Router } from 'express';
import * as StoreController from '../controllers/store.controller';
const router = new Router();

// Get all Stores
router.route('/stores').get(StoreController.getStores);

// Get one Store by slug
router.route('/stores/:slug').get(StoreController.getStore);

// Add a new Store
router.route('/stores').post(StoreController.addStore);

// Update a store
router.route('/stores/:slug').put(StoreController.updateStore);

export default router;
