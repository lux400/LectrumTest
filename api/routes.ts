import * as express from 'express';
import * as auth from './controllers/auth';

const router = express.Router();

router.post('/login', auth.login);
router.post('/signup', auth.register);

router.use((req, res) => {
  res.json({ error: 404 });
});

export default router;
