"use server";
export const enviarSolicitud = async (formData: FormData) => {
  const name = formData.get("nombre");
  const apellido = formData.get("apellido");
  const correo = formData.get("correo");
  const telefono = formData.get("telefono");
  const pais = formData.get("pais");
  const profesion = formData.get("profesion");
  const tiempo = formData.get("tiempo");
  const cv = formData.get("file");
  const texto = formData.get("mensaje");

  const newSolicitud = {
    name: name,
    apellido: apellido,
    correo: correo,
    telefono: telefono,
    pais: pais,
    profesion: profesion,
    tiempo: tiempo,
    cv: cv,
    texto: texto,
  };
  // Salvar en la base de datos
  console.log(newSolicitud);
};
