import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionFour = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Politicas de Seguridad
                </h2>
                <div>
                  <h6>1. ACEPTACIÓN </h6> 
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    En el presente documento se establecen los términos y
                    condiciones de ETC- Solution Empresa de Construcción, con
                    sede en la ciudad de Lodz ubicada en el centro de Polonia
                    que serán de aplicación al acceso y uso por parte del
                    Usuario de esta página web (el “Sitio Web”). Les rogamos
                    lean atentamente el presente documento. Al acceder,
                    consultar o utilizar el Sitio Web, los Usuarios (“Vd.”,
                    “usted”, “Usuario”, o “usuario”) aceptan cumplir los
                    términos y condiciones establecidos en este documento. En
                    caso de que usted no acepte quedar vinculado por los
                    presentes términos y condiciones, no podrá acceder a, ni
                    utilizar, el Sitio Web. ETC- Solution Empresa de
                    Construcción se reservan el derecho de actualizar el
                    presente Contrato siempre que lo consideren oportuno. En
                    consecuencia, recomendamos al Usuario revisar periódicamente
                    las modificaciones efectuadas al documento. El presente
                    Sitio Web está dirigido a personas residentes en
                    Latinoamérica.
                  </p>
                  <h6>2. REQUISITOS RELATIVOS AL USUARIO</h6>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    El Sitio Web y los servicios relacionados con el mismo se
                    ofrecen a los Usuarios que deseen realizar el proceso de
                    solicitud y participar en la selección por parte de nuestro
                    equipo. Los menores no están autorizados para utilizar el
                    Sitio Web. Si usted es menor de edad, por favor, no utilice
                    esta web.
                  </p>
                  <h6>3.LICENCIA</h6>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Todo el material mostrado u ofrecido en el Sitio Web, entre
                    otros ejemplos, el material gráfico, los documentos, textos,
                    imágenes, las ilustraciones, el software y el código HTML
                    (en conjunto, el “Contenido”), es de exclusiva propiedad de
                    ETC- Solution. El Contenido está protegido por las leyes de
                    copyright, así como por las demás leyes, reglamentos y
                    normas aplicables a los derechos de propiedad intelectual.
                    El Usuario no podrá (i) utilizar, copiar, modificar,
                    mostrar, eliminar, distribuir o publicar el proceso. Tampoco
                    podrá (ii) utilizar el Contenido en otras páginas Web o en
                    cualquier medio de comunicación como, por ejemplo, en un
                    entorno de red. Todas las marcas comerciales, las marcas de
                    servicio y los logos (en adelante, las “Marcas”) mostrados
                    en el Sitio Web son propiedad exclusiva de ETC- Solution y
                    de sus respectivos propietarios. El Usuario no podrá
                    utilizar las Marcas en modo alguno.
                  </p>
                  <h6>4. INFORMACIÓN FACILITADA POR EL USUARIO</h6>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      El Sitio Web ofrece al Usuario un foro de obtención de
                    empleo e información profesional. Al facilitar o introducir
                    la información en el Sitio Web (“Información del Usuario”),
                    el Usuario otorga a ETC- Solution licencia y derecho
                    permanente, no exclusivo, irrevocable, libre de royalties,
                    durante el tiempo máximo permitido por la legislación
                    aplicable, pero no le impone obligación de, utilizar,
                    copiar, modificar, mostrar, distribuir, publicar información
                    en ningún modo o manera. El Usuario reconoce y acepta que
                    ETC- Solution es solamente un foro pasivo a través del cual
                    los usuarios pueden conseguir empleo o informarse a nivel
                    profesional. ETC- Solution no comprueba ni controla la
                    Información del Usuario. En consecuencia, ETC- Solution no
                    asume garantía alguna en cuanto a la fiabilidad, precisión,
                    integridad, validez o veracidad de la Información remitida
                    por los usuarios. ETC- Solution se reserva el derecho de, a
                    su libre JUICIO, eliminar, retirar, negarse a reflejar o
                    bloquear toda Información del Usuario que ETC- Solution
                    considere como inaceptable. En caso de que ETC- Solution
                    reciba alguna notificación sobre la inaceptabilidad de
                    determinada información facilitada por los usuarios, ETC-
                    Solution podrá, con total discrecionalidad, investigar dicha
                    información. El Usuario asume y acepta que ETC- Solution
                    podrá conservar copia de la Información del Usuario: (i)
                    proteger la integridad del Sitio Web;(ii) proteger los
                    derechos de RH;(iii) cumplir una orden judicial;(iv) cumplir
                    cualquier trámite legal;(v) hacer valer los derechos y
                    acciones que asisten a ETC- Solution a tenor de este
                    documento; y(vi) satisfacer cualquier petición relativa a la
                    infracción de derechos de terceros. 5. PROHIBICIÓN GENERAL
                    Al acceder y utilizar el Sitio Web, el Usuario se compromete
                    a NO:(a) incumplir todas las leyes, reglamentos y normas
                    aplicables a nivel local, estatal, provincial, nacional, así
                    como cualquier otra legislación aplicable como las leyes
                    contra la discriminación laboral o las leyes por la igualdad
                    de oportunidades en el empleo, cuando proceda;(b) infringir
                    los derechos de propiedad intelectual y de privacidad, entre
                    otros, los derechos de patente (copyright), los derechos
                    sobre la base de datos, las marcas registradas ;(c)
                    descargar, enviar, transmitir o almacenar material que: sea
                    ilegal, ofensivo, difamatorio, fraudulento, engañoso, que
                    induzca a error, dañino, amenazador, hostil, obsceno o
                    censurable; infrinja las obligaciones contractuales o de
                    confidencialidad del Usuario; perjudique o interfiera en
                    las aplicaciones normales del Sitio Web, como el envío o la
                    transmisión de virus, gusanos o troyanos, el envío
                    continuado de material repetido o el envío de archivos
                    desacostumbradamente grandes; o que no esté permitido por
                    ETC- Solution, como, por ejemplo, material publicitario no
                    autorizado, material promocional no solicitado, “correo
                    basura”, “spams”, “cartas en cadena”, mensajes de venta
                    directa piramidal, franquicias, material de distribución, de
                    asociación a un club, contratos de venta o cualquier otro
                    material inaceptable; (d) vulnerar los derechos personales y
                    de privacidad de terceros abusando del Contenido, como, por
                    ejemplo, acosando o molestando continuadamente a dichas
                    personas enviándoles correos electrónicos no solicitados, o
                    recabando información de carácter personal;(e) contravenir,
                    o intentar contravenir, las medidas de seguridad del Sitio
                    Web;(f) utilizar cualquier aparato, procedimiento o
                    mecanismo como, por ejemplo, spiders y robots de rastreo,
                    para localizar, rescatar, buscar, o acceder al Sitio Web o
                    al Contenido;(h) copiar, modificar, distribuir y publicar
                    información en lo que concierne al material remitido por el
                    propio Usuario y que es de su propiedad, o si así lo
                    autorizan las leyes de propiedad intelectual aplicables;(i)
                    enviar o facilitar información incorrecta, falsa o
                    incompleta, en relación con el currículum vitae, los datos
                    biográficos, la fecha en que empezó a trabajar o el perfil
                    de la empresa del Usuario;(j) hacerse pasar por otra persona
                    o empresa;(k) utilizar el Sitio Web de forma no autorizada o
                    para alguna actividad delictiva;(l) falsificar la
                    información de cabecera en el correo electrónico; o(m)
                    falsear los datos sobre sí mismo, sobre su asociación con
                    terceros o sobre su empresa.
                  </p>
                  <h6>5. UTILIZACIÓN DEL SITIO Y OBLIGACIONES CONCRETAS</h6>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Además de las obligaciones generales señaladas en el
                    Artículo 5, el Usuario deberá:(a) utilizar el Sitio Web
                    únicamente para los fines legalmente permitidos de buscar
                    empleo y recabar información profesional;(b) facilitar y
                    mantener los datos personales que conforman la Información
                    del Usuario de forma completa, correcta, actualizada y
                    veraz;(c) enviar solamente material sobre el que el Usuario
                    tenga los correspondientes derechos o licencia para
                    hacerlo;(d) utilizar su propio criterio, precaución y
                    sentido común al gestionar las oportunidades de empleo y la
                    información  conseguida a través del Sitio Web; y(e) asumir
                    el riesgo de confiar en el contenido.
                  </p>
                  <h6>6. EMPLEO</h6>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    El Usuario asume y acepta que ETC- Solution:(a) no garantiza
                    que el Usuario reciba efectivamente una oferta de empleo a
                    través del Sitio Web;(b) no se responsabiliza de las ofertas
                    de empleo, la comprobación de dichas ofertas, las decisiones
                    sobre contratación que adopten y los trabajos que oferten
                    terceras personas o empresas;(c) no garantiza la exactitud,
                    integridad, validez o vigencia de la información incluida en
                    la Web por terceras personas o empresas;(d) aunque ETC-
                    Solution revisa el material de terceros y solamente permite
                    la inclusión del material que, a su leal saber y entender,
                    no infringe la legislación aplicable, no asumirá
                    responsabilidad alguna por el material enviado por terceros,
                    como, por ejemplo, la información relativa a la creación de
                    puestos de trabajo en una empresa o la incluida en las
                    listas de empleo; y(e) no es ni una empresa que contrata al
                    Usuario ni existe contrato de agencia alguno. El Usuario
                    deberá usar su buen juicio, precaución y sentido común a la
                    hora de evaluar las empresas que puedan contratarle y la
                    información facilitada por terceros.
                  </p>
                  <h6>7. PRIVACIDAD</h6>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    ETC-Solution procesará toda la información personal que el
                    Usuario introduzca o facilite a través de nuestro Sitio Web
                    de conformidad con la Política de Privacidad del Sitio Web y
                    los términos y condiciones relativos a la misma en este
                    documento.
                  </p>
                  <h6>8. DESCARGO DE RESPONSABILIDAD</h6>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    El usuario reconoce y acepta que:(a) el usuario asume todos
                    los riesgos relativos a, o derivados de, el uso, consulta o
                    acceso por su parte al sitio web. el sitio web se facilita
                    como está y según disponibilidad, sin garantía alguna;(b)
                    dentro de los límites legales, rh declina expresamente y en
                    este acto, toda garantía o responsabilidad, expresa o
                    implícita, legal o de otro tipo, incluidas, entre otras: las
                    garantías implícitas de calidad satisfactoria, idoneidad
                    para el uso concreto, prohibición de uso indebido y las
                    habituales en la práctica comercial o en las negociaciones
                    en este sector; y(c) aunque rh tiene sistemas anti-virus y
                    adopta medidas de seguridad para proteger el sitio web y su
                    contenido de todo tipo de ataques informáticos con el fin de
                    reducir el nivel de riesgo, en este acto rh declina
                    expresamente toda garantía respecto a: (i) que el sitio web
                    y su contenido estará siempre libre de errores o virus o no
                    sufrirá nunca ataques de terceros; (ii) el funcionamiento
                    ininterrumpido y siempre seguro del sitio web; (iii) la
                    permanente disponibilidad del sitio; (iv) que el sitio web
                    cubra o no las necesidades del usuario; y (v) la fiabilidad,
                    exactitud, integridad, validez o veracidad de la información
                    facilitada por el usuario.
                  </p>
                  <h6>9. GENERAL</h6>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    El Usuario declara que entre él y ETC-Solution existe
                    relación de contratación laboral derivadas del acceso y uso
                    del Sitio Web. El presente documento integra todos los
                    acuerdos a que el Usuario y ETC-Solution han llegado en
                    relación el acceso y uso del Sitio Web, y se suscribe de
                    forma adicional a cualquier acuerdo vinculante que pueda
                    existir entre el Usuario y ETC-Solution. El presente
                    documento se regirá e interpretará por la legislación polaca
                    y el Usuario se somete a la exclusiva jurisdicción de los
                    tribunales de Polonia. El Usuario será el único responsable
                    de sus actos y asumirá todos los riesgos. El Usuario no
                    podrá utilizar ni exportar el Contenido del Sitio Web ni
                    efectuar copia o adaptación alguna que infrinja las leyes,
                    reglamentos o normas aplicables, entre las que se incluyen
                    las leyes y reglamentos. La invalidez o inaplicabilidad de
                    cualquiera de los presentes términos y condiciones -en todo
                    o en parte- o de los derechos derivados de este documento,
                    no afectará la validez o la aplicabilidad de los demás
                    derechos, términos y condiciones, o al resto de la
                    disposición en cuestión, que continuarán en pleno vigor y
                    efectos, quedando excluida solamente la cláusula viciada (o
                    la parte que se invalida en dicha cláusula. Si desea más
                    información sobre el Sitio Web o sobre el presente
                    documento, contactar con:  Todos los derechos reservados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionFour;
