import Head from 'next/head';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Evolve Sport Material</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className="text-gray-600 body-font md:self-auto bg-gray-50">
        <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center bg-gray-50 ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col mb-18 items-center text-center bg-gray-50">
            <h1 className="text- title-font sm:text-6xl text-5xl mb-4 font-black text-gray-900">
              Únete a nuestra comunidad
            </h1>
            <p className="text-justify mr-16 leading-relaxed ">
              Desde el equipo de Evolve Sport Material tenemos un compromiso con
              la actividad física y la salud. Y por este motivo queremos que
              formes parte de nuestra comunidad. En nuestras redes sociales
              podrás encontrar lo último para la práctica de ejercicio físico
              además de consejos y estudios constatados sobre actividad física
              que podrás utilizar ent u día a día. Así que no pierdas ni un
              segundo y síguenos en Instagram.
            </p>
            <div className="flex justify-center sm:p-6">
              <a href="https://www.instagram.com/evolve_material_deportivo/">
                <button className="w- inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none place-self-stretch shadow hover:bg-gray-200 rounded text-lg ">
                  Instagram
                </button>
              </a>
            </div>
          </div>
          <div class="p- lg:max-w-lg lg:w-full md:w-max w-5/6 pt-16 ">
            <img
              class="object-cover object-center rounded shadow"
              alt="hero"
              src="/rss.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
