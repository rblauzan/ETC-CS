"use server";
import { ok } from "assert";
import { supabase } from "../Supabase/supabase";
import { error } from "console";
import {z} from "zod"

export const enviarSolicitud = async (formData: FormData) => {
  const nombre = formData.get("nombre");
  const apellido = formData.get("apellido");
  const correo = formData.get("correo");
  const telefono = formData.get("telefono");
  const pais = formData.get("pais");
  const profesion = formData.get("profesion");
  const tiempo = formData.get("tiempo");
  const archivo = formData.get("archivo");
  const texto = formData.get("texto");

  // const solictudSchema = z.object({
  //   nombre : z.string().max(20,{message:"El nombre debe ser menos de 20 caracteres"}),
  //   apellido : z.string().max(20,{message:"El nombre debe ser menos de 20 caracteres"}),
  //   correo: z.string().email({message: "Por favor introduzca un correo valido"}),
  //   telefono: z.string().refine(telefono => !isNaN(parseInt(telefono)),{message:"Solo se aceptan numeros en este campo"}),
  //   pais: z.string().min(4).max(20,{message:""}),
  //   profesion : z.string().max(20,{message:""}),
  //   tiempo : z.string().max(20,{message:""}),
  //   texto : z.string().min(50).max(250,{message:""}),
  // })
  // Salvar en la base de datos
  if(!nombre || !apellido || !correo || !telefono || profesion || tiempo || !pais)
      return null;
  try {
    const data = await supabase.from("Solicitud").insert({
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      telefono: telefono,
      profesion: profesion,
      texto: texto,
      tiempo: tiempo,
      pais: pais
    });
    if(data.status == 201)
      return ok;
    else if (data.status == 409)
      return error;
    console.log(data);
  } catch {error}
    return {
      error : 'Algo salio mal'
    }
};
