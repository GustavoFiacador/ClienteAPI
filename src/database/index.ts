import { createConnection} from 'typeorm';

createConnection().then(() => console.log('📦 Conected in SQL'));
