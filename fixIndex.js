import mongoose from 'mongoose';
import dotenv from 'dotenv'; // Usaremos variables de entorno
import Staff from './models/staff.js'; // Asegurate de que esta ruta sea la de tu esquema

dotenv.config();

const dropDuplicateSpecialtyIndex = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI); // Usa tu variable de entorno de mongo

    const indexes = await Staff.collection.getIndexes({ full: true });
    const specialtyIndex = indexes.find(index => index.name === 'specialty_1');

    if (specialtyIndex) {
      await Staff.collection.dropIndex('specialty_1');
      console.log('Indice specialty_1 eliminado correctamente.');
    } else {
      console.log('No se encontro el indice specialty_1.');
    }

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error al eliminar el indice:', error.message);
    process.exit(1);
  }
};

dropDuplicateSpecialtyIndex();
