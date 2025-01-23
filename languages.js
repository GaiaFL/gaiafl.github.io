const translations = {
    en: `
        <h2>Education and Experience</h2>
        <div class="content">
            <div class="text">
                <ul>
                    <li><strong>2018-2024:</strong> Bachelor of Computer Science at Unicamp.</li>
                    <li><strong>2019-2022:</strong> Scientific initiation in the field of IoT, with publications in IEEE and academic journals.</li>
                    <li><strong>2022:</strong> Internship at CNPEM, working with high-performance computing and process parallelisation.</li>
                    <li><strong>2022-2024:</strong> Double degree from Télécom SudParis (France) in Computer Engineering and Master's Degree, with an emphasis on Distributed Services Architecture.</li>
                    <li><strong>2024:</strong> Internship at Amadeus in Nice, with the project of optimising the data ingestion services of the company's platform.</li>
                    <li><strong>2025:</strong> Admission to the Master's programme in Computer Science at Unicamp.</li>
                    </ul>
            </div>
            <div class="photo">
                <img src="imgs/image1.jpeg" alt="Photo of Marianna">
            </div>
        </div>

        <h2>Technical Skills</h2>
        <ul>
            <li><strong>Programming:</strong> Python, C, Java, JavaScript, Golang, C++, C#, Kotlin, React.</li>
            <li><strong>Networks and IoT:</strong> LoRa, Simulators, Digital Twins.</li>
            <li><strong>Cloud and Big Data:</strong> Kafka, Azure.</li>
            <li><strong>HPC:</strong> Cuda, Open MPI.</li>
        </ul>

        <h2>Public Projects on Github</h2>
        <ul>
            <li><a href="https://github.com/wasp-lahis/ns3-bmap">LoraWan simulations in NS-3</a>.</li>
            <li><a href="https://github.com/GaiaFL/Projet-Cassiopee">Panic Button System</a>.</li>
            
        </ul>

         <h2>Publications</h2>
        <ul>
            <li>“On the Simulation of LoRaWAN Networks: A Focus on Reproducible Parameter Configuration”.
                Computer Networks and Communications, 2(1), 148–171, doi: 10.37256/cnc.2120244496.</li>
            <li>“LoRaWAN Infrastructure for Urban Waste Management: A Simulation Study”.
                IEEE 9th World Forum on Internet of Things (WF-IoT), doi: 10.1109/WF-IoT58464.2023.10539568.</a></li>
            
        </ul>

        <h2>Languages</h2>
        <p>Proficient in English with Cambridge certification (CAE) and TOEIC level C1.</p>
        <p>Intermediate French: Reads well, understands well, speaks regularly and (for the time being) writes badly.</p>


        <h2>Motivation</h2>
        <p>Learning about new technologies and their constant updating, as well as the desire to apply technology in the social environment in order to improve everyone's knowledge and daily life.</p>
    
    `,
    pt:
    `
    <h2>Formação e Experiência</h2>
        <div class="content">
            <div class="text">
            <ul>
                <li><strong>2018-2024:</strong> Bacharelado de Ciência da Computação na Unicamp.</li>
                <li><strong>2019-2022:</strong> Iniciação científica no ramo de IoT, com publicações no IEEE e em periódico acadêmico.</li>
                <li><strong>2022:</strong> Estágio no CNPEM, atuando com computação de alto desempenho e paralelização de processos.</li>
                <li><strong>2022-2024:</strong> Duplo diploma na Télécom SudParis (França) em Engenharia de Computação e Mestrado, com ênfase em Arquitetura de Serviços Distribuídos.</li>
                <li><strong>2024:</strong> Estágio na Amadeus em Nice, com o projeto de otimizar os serviços de ingestão de dados da plataforma da empresa.</li>
                <li><strong>2025:</strong> Ingresso no Mestrado de Ciência da Computação na Unicamp.</li>
            </ul>
            </div>

            <div class="photo">
                <img src="imgs/image1.jpeg"  alt="Foto de Marianna">
            </div>
        </div>   
        <h2>Habilidades Técnicas</h2>
        <ul>
            <li><strong>Programação:</strong> Python, C, Java, JavaScript, Golang, C++, C#, Kotlin, React.</li>
            <li><strong>Redes e IoT:</strong> LoRa, Simuladores, Digital Twins.</li>
            <li><strong>Cloud e Big Data:</strong> Kafka, Azure.</li>
            <li><strong>HPC:</strong> Cuda, Open MPI.</li>

        </ul>

        <h2>Projetos Públicos no Github</h2>
        <ul>
            <li><a href="https://github.com/wasp-lahis/ns3-bmap">Simulações LoraWan no NS-3</a>.</li>
            <li><a href="https://github.com/GaiaFL/Projet-Cassiopee">Sistema de Botão do Pânico</a>.</li>
            
        </ul>

        <h2>Publicações</h2>
        <ul>
            <li>“On the Simulation of LoRaWAN Networks: A Focus on Reproducible Parameter Configuration”.
                Computer Networks and Communications, 2(1), 148–171, doi: 10.37256/cnc.2120244496.</li>
            <li>“LoRaWAN Infrastructure for Urban Waste Management: A Simulation Study”.
                IEEE 9th World Forum on Internet of Things (WF-IoT), doi: 10.1109/WF-IoT58464.2023.10539568.</a></li>
            
        </ul>


        <h2>Idiomas</h2>
        <p>Proficiente em inglês com certificação em Cambridge (CAE) e TOEIC level C1.</p>
        <p>Francês intermediário: Lê bem, entende bem, fala regular e (por ora) escrita ruim. </p>


        <h2>Motivação</h2>
        <p>Aprender sobre novas tecnologias e suas constantes atualizações, além do desejo de aplicar a tecnologia no meio social, de forma a aprimorar o conhecimento e o cotidiano de todos.</p>

    `
};

function switchLanguage(lang) {
    const main = document.querySelector('main');
    main.innerHTML = translations[lang];
}