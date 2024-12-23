"use server";
import { supabase } from "../Supabase/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const enviarSolicitud = async (formData: FormData) => {
  const nombre = formData.get("nombre");
  const apellido = formData.get("apellido");
  const correo = formData.get("correo");
  const telefono = formData.get("telefono");
  const pais = formData.get("pais");
  const profesion = formData.get("profesion");
  const tiempo = formData.get("tiempo");
  const texto = formData.get("texto");
  // Salvar en la base de datos
  try {
    if (!pais || !profesion || !tiempo) {
      return {
        error: "Ocurrio un error, debe revisar los campos de entrada",
      };
    }
    const data = await supabase.from("Solicitud").insert({
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      telefono: telefono,
      profesion: profesion,
      texto: texto,
      tiempo: tiempo,
      pais: pais,
    });
    if (data.status === 201)
      return {
        message:
          "Solicitud Recibida, espere nuevas actualizaciones vía correo electrónico",
      };
     if (data.status === 409) 
      throw new Error("Su solicitud no ha sido procesada, intente de nuevo");
     if(data.status === 0)
      throw new Error("En estos momentos no se pudo establecer la conexión con la base de datos");
  } catch(error) {
      return {
        error: "Ocurrio un error al proceso sus datos, intente de nuevo más tarde",
    }
  }
  revalidatePath("/solicitud");
  redirect("/");
};
