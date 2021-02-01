import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import config from './config';
import router from './routes';
const { host, port } = config;


const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/uploads', express.static('uploads'));
app.use('/', router);


app.listen(port, host, () => {
  console.log(`listening on http://${host}:${port}`);
});
