import Head from 'next/head';
import Link from 'next/link';

export default function RrssPage() {
  return (
    <div className="bg-gray-200 dark:bg-gray-800">
      <Head>
        <title>Evolve Sport Material</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container mx-auto px-6 pt-16 w-screen">
        <div className="  md:flex items-center mb ">
          <div className="w-full md:w-1/2 ">
            <div className="px-6 py-8 shadow rounded-3xl max-w-2xl space-y-16 space-between">
              <h1 className="font-black text-gray-800 uppercase xl:text-7xl lg:text-6xl sm:text-5xl ss:text-4xl">
                Únete a nuestra comunidad
              </h1>
              <p className="transition delay-150 duration-300 ease-in-out mt-2 text- text-gray-600 dark:text-gray-400 pr-8 opacity-50 hover:opacity-100">
                Desde el equipo de Evolve Sport Material tenemos un compromiso
                con la actividad física y la salud. Y por este motivo queremos
                que formes parte de nuestra comunidad. En nuestras redes
                sociales podrás encontrar lo último para la práctica de
                ejercicio físico además de consejos y estudios constatados sobre
                actividad física que podrás utilizar ent u día a día. Así que no
                pierdas ni un segundo y síguenos en Instagram.
              </p>
              <Link href="https://www.instagram.com/evolve_material_deportivo/">
                <button className="transition ease-in duration-700 w- inline-flex text-white bg-purple-700 border-0 py-2 px-6 focus:outline-none place-self-stretch  hover:bg-purple-400 rounded text-lg shadow ">
                  Instagram
                </button>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2 sm:w-1/2">
            <img
              className="max-w-xl w-full h-full shadow rounded-3xl "
              src="/rss.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
