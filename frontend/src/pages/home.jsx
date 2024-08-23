function Home() {
    return (
        <main className="bg-white px-5 flex justify-center items-center w-full min-h-screen overflow-hidden">
            <section className="flex">
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">Universo de conhecimento.</h1>
                    <p className="mb-6 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-32">Consectetur excepteur est tempor nisi culpa cupidatat eiusmod dolor.</p>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-[#4ecc52] rounded-lg hover:bg-[#2cd132] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Entrar
                    </a>
                </div>
            </section>
            <div className="px-6 z-0">
                <img className="border-[#68d06b] border-4" src="https://imagens3.ne10.uol.com.br/blogsjconline/blogdofera/2017/10/IFPE_editada.jpg" />
            </div>
        </main>

    )
}

export default Home
