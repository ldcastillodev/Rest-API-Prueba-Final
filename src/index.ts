import "reflect-metadata";
import app from './app';
import { AppDataSource } from './db';

async function main() {
  try {
    await AppDataSource.initialize();
    console.log('database connected')
    app.listen(8080, () => {
      console.log('app running on port 8080');
    });

  } catch (error) {
      console.log(error);
    }

}

main();
