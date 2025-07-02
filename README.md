Elimina un índice único innecesario en tu base de datos MongoDB, que cause el error: 
E11000 duplicate key error collection: luxury-backend.staffs index: specialty_1 dup key: { specialty: "Limpieza" }

Al inicio MongoDB creó un índice único en el campo specialty
specialty: { type: String, required: true, unique: true }

Eso le dijo a MongoDB:
“No permitas que haya dos documentos con el mismo valor en specialty.”

Aunque ya quites el " unique: true " del esquema, el índice seguía existiendo en la base de datos, porque Mongoose no elimina índices automáticamente.

¿Qué hace el script?
Se conectó a tu base de datos.
Buscó el índice llamado specialty_1 (O el nombre que tenga segun sea el caso).
Si existía, lo eliminó con .dropIndex().
Y por ultimo cierra la conexión.
