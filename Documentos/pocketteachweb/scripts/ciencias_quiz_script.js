const startButton = document.getElementById('start-btn')
const submitButton = document.getElementById('submit-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerELement = document.getElementById('question-container')
const infoELement = document.getElementById('info')
const infoImageElementDIV = document.getElementById('info-image-div')
const infoImageELement = document.getElementById('info-image')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions = randomizeQuestionsAndAnswers(questions)
    currentQuestionIndex = 0
    questionContainerELement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    infoELement.innerText = question.info
    if (question.infoImage) {
        infoImageElementDIV.classList.remove('hide')
        infoImageELement.src = question.infoImageSRC
    }
    questionElement.innerText = question.question

    console.log(question.answers)

    question.answers.forEach(answer => {
        const button = document.createElement('button')
        
        button.innerText = answer.text
        if (answer.optionImage) {
            const img = document.createElement('img')
            img.src = answer.optionImageSRC;
            img.style.pointerEvents = 'none'
            button.appendChild(img)
        }
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    infoImageElementDIV.classList.add('hide')
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    Array.from(answerButtonsElement.children).forEach(button => {
        button.classList.remove('selected')
    })
    const selectedButton = e.target
    selectedButton.classList.add('selected')
    submitButton.classList.remove('hide')
    submitButton.addEventListener('click', () => {
        const correct = selectedButton.dataset.correct
        setStatusClass(document.body, correct)
        Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct)
        })
        submitButton.classList.add('hide')
        if (shuffledQuestions.length > currentQuestionIndex + 1 ) {
            nextButton.classList.remove('hide')
        } else {
            startButton.innerText = 'Restart'
            startButton.classList.remove('hide')
        }
    })
}



function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        element.classList.remove('selected')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to randomize answers within each question and then randomize the questions
function randomizeQuestionsAndAnswers(questions) {
    // Shuffle answers within each question
    questions.forEach(question => {
        question.answers = shuffle(question.answers);
    });

    // Shuffle the questions
    const shuffledQuestions = shuffle(questions);

    return shuffledQuestions;
}
























const questions = [
    {
        questionID: "S01",
        competence: 1,
        subject: "Física",
        info: "Un niño vuela un helicóptero de masa M controlado a control remoto. El helicóptero se mueve de forma horizontal con una velocidad constante como se ilustra en la figura 1. Mientras tanto, una niña que se encuentra en el parque decide usar la observación del helicóptero en vuelo para hacer su tarea de física, en la que le pidieron que hiciera un diagrama de cuerpo libre, e hizo la representación que se observa en la figura 1.",
        infoImage: true,
        infoImageSRC: "images/quiz_images/science_images/cuestionario_ciencias_pregunta_01.png",
        question: "La niña desea incluir en su trabajo un diagrama que muestre las fuerzas que actúan sobre el helicóptero mientras se está elevando, en el instante medio entre el instante 1 y 2. El diagrama que mejor se ajusta a la situación que la niña quiere representar es:",
        answers: [
            { 
                text: "Este diagrama, porque para que aumente la altura debe aumentar la rotación del motor que provoca la elevación.", 
                optionImage: true, 
                optionImageSRC: 'images/quiz_images/science_images/cuestionario_ciencias_pregunta_01_opcion_a.png', 
                correct: true 
            },
            { 
                text: "Este diagrama, porque al aumentar la altura aumenta tanto la fuerza de elevación necesaria como la fuerza de empuje que se ejerce hacia abajo.", 
                optionImage: true, 
                optionImageSRC: 'images/quiz_images/science_images/cuestionario_ciencias_pregunta_01_opcion_d.png', 
                correct: false 
            },
            { 
                text: "Este diagrama, porque para que aumente la altura debe aumentar la velocidad con la que mueve el helicóptero.", 
                optionImage: true, 
                optionImageSRC: 'images/quiz_images/science_images/cuestionario_ciencias_pregunta_01_opcion_b.png', 
                correct: false 
            },
            { 
                text: "Este diagrama, porque mientras la altura aumenta también aumenta la resistencia del aire y la velocidad del helicóptero.", 
                optionImage: true, 
                optionImageSRC: 'images/quiz_images/science_images/cuestionario_ciencias_pregunta_01_opcion_c.png', 
                correct: false 
            },
        ]
    },
    {
        questionID: "S02",
        competence: 1,
        subject: "Física",
        info: "En un laboratorio de física se tienen dos altavoces que producen un sonido que tiene una longitud de onda de 1 m. En un experimento, el profesor les pide a los estudiantes que se hagan a una distancia de 3 m de los altavoces, y luego de esto los activa. Todos los estudiantes logran escuchar el sonido producido por los altavoces. Luego de esto, el profesor apaga los altavoces, desplaza uno de los altavoces 50 cm delante del otro, y los vuelve a activar, como se observa en la figura:",
        infoImage: true,
        infoImageSRC: "images/quiz_images/science_images/cuestionario_ciencias_pregunta_02.png",
        question: "Luego de que el profesor desplazara uno de los altavoces, los estudiantes:",
        answers: [
            { 
                text: "No percibirán ningún sonido, porque las ondas experimentan una interferencia destructiva.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: true 
            },
            { 
                text: "Percibirán un sonido más fuerte, porque las ondas experimentan una interferencia constructiva.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "Percibirán un sonido más fuerte, porque las ondas experimentan una interferencia destructiva.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "No percibirán ningún sonido, porque las ondas experimentan una interferencia constructiva.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            }
        ]
    },
    {
        questionID: "S03",
        competence: 2,
        subject: "Física",
        info: "Gary hizo una gran cantidad de sopa. Hizo tanta que no puede consumirla inmediatamente, por lo cual debe introducirla en la nevera para conservarla. Sin embargo, poner cosas calientes en la nevera haría que esta se dañara. Gary tiene un poco de prisa, ya que debe ir a trabajar, por lo cual debe tomar alguna medida para acelerar el enfriamiento de la gran cantidad de sopa que preparó. Gary sabe que entre mayor sea la relación superficie – volumen (S/V), más rápido pierde calor un cuerpo.",
        infoImage: false,
        infoImageSRC: "",
        question: "De acuerdo con lo anterior, la medida más simple que puede adoptar Gary para enfriar su sopa es:",
        answers: [
            { 
                text: "Dividir la sopa en volúmenes pequeños que tengan una menor masa y una mayor superficie, que haga que toda la sopa se enfríe más rápidamente.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: true 
            },
            { 
                text: "Poner la olla de sopa dentro de otra olla más grande con agua fría, para incrementar la transferencia de calor y que se enfríe más rápido la sopa.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "Ponerle bolsas de hielo a la sopa, para que el frío liberado por el hielo le baje la temperatura rápidamente a la sopa y esta se pueda guardar.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "Soplar la sopa usando su propia boca o la tapa de otra olla, para que el aire que roza contra la sopa la enfríe y esta se pueda guardar rápidamente.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            }
        ]
    },    
    {
        questionID: "S04",
        competence: 2,
        subject: "Física",
        info: "Una persona usa un pogo saltarín como elemento para practicar deporte. Este instrumento sirve para saltar valiéndose de la recuperación de la forma de un resorte que se comprime cada vez que la persona toca el suelo. Con dicho aparato, la persona es capaz de elevarse hasta una altura h.",
        infoImage: true,
        infoImageSRC: "images/quiz_images/science_images/cuestionario_ciencias_pregunta_04.png",
        question: "Con respecto a la energía potencial que experimenta el sistema formado por la persona y el pogo saltarín, puede afirmarse que:",
        answers: [
            { 
                text: "La energía potencial adquiere su máximo valor cuando la persona se encuentra en la máxima altura durante un salto.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: true 
            },
            { 
                text: "La energía potencial adquiere su máximo valor cuando la persona se encuentra en la mínima altura durante un salto.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "La energía potencial adquiere su mínimo valor cuando la persona se encuentra en la máxima altura durante el salto.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "La energía potencial adquiere el mismo valor que la energía elástica del resorte cuando la base del pogo saltarín toca el suelo.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            }
        ]
    },
    {
        questionID: "S05",
        competence: 3,
        subject: "Física",
        info: "Un estudiante quiere comparar los valores de conductividad eléctrica de tres materiales (A, B y C) a distintas temperaturas. Para lograrlo, hace tres mediciones de la resistencia de cables de 1 m de largo y 2 mm de ancho constituidos por los tres materiales, sometidos a cuatro temperaturas. Los resultados que obtuvo se muestran en la tabla.",
        infoImage: true,
        infoImageSRC: "images/quiz_images/science_images/cuestionario_ciencias_pregunta_05.png",
        question: "De acuerdo con la información, puede concluirse que el experimento:",
        answers: [
            { 
                text: "Está mal planteado, porque las temperaturas no son las mismas, lo que impide hacer comparaciones entre los tres materiales.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: true 
            },
            { 
                text: "Está bien planteado, ya que se muestra la variación que experimenta la conductividad de los materiales a distintas temperaturas.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "Está mal planteado, porque debieron considerarse cables de distintos tamaños para verificar el efecto de esta variable.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "Está bien planteado, porque ilustra el efecto de la temperatura sobre la conductividad de los materiales evaluados.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            }
        ]
    },    
    {
        questionID: "S06",
        competence: 3,
        subject: "Física",
        info: "En una ciudad con calles muy empinadas, a los niños les gusta practicar un deporte en el que descienden en bicicletas por pendientes a grandes velocidades. A uno de los niños en particular, además de que le gusta la adrenalina de este deporte, también le gusta la física, y sabe que la bicicleta a alta velocidad presenta una alta energía cinética. Teniendo en cuenta el principio de conservación de la energía, el niño se pregunta ¿qué pasa con toda esa energía cinética al momento en el cual se activan los frenos de la bicicleta?",
        infoImage: false,
        infoImageSRC: "",
        question: "El niño adquiere un termómetro infrarrojo, y se dispone a usarlo para medir la temperatura de los frenos en el momento en el que la bicicleta de uno de sus amigos se detiene completamente en medio de una pendiente. Esta acción se ajusta a la verificación de:",
        answers: [
            { 
                text: "La hipótesis de que la energía cinética de la bicicleta se convirtió en energía térmica en los frenos.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: true 
            },
            { 
                text: "La hipótesis de que la energía potencial de la bicicleta se convirtió en energía térmica en los frenos.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "La hipótesis de que la energía cinética de la bicicleta se convirtió en energía elástica en los frenos.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "La hipótesis de que la energía potencial de la bicicleta se convirtió en energía cinética en los frenos.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
        ]
    },
    {
        questionID: "S07",
        competence: 1,
        subject: "Química",
        info: "En la figura se representan moléculas de agua líquida contenidas en un recipiente:",
        infoImage: true,
        infoImageSRC: "images/quiz_images/science_images/cuestionario_ciencias_pregunta_07.png",
        question: "Cuando el agua se enfría y se congela, las moléculas de agua adquieren una configuración cristalina, de menor densidad. El modelo que mejor representa el agua en el contenedor en estado congelado es:",
        answers: [
            { 
                text: "", 
                optionImage: true, 
                optionImageSRC: 'images/quiz_images/science_images/cuestionario_ciencias_pregunta_07_opcion_a.png', 
                correct: true 
            },
            { 
                text: "", 
                optionImage: true, 
                optionImageSRC: 'images/quiz_images/science_images/cuestionario_ciencias_pregunta_07_opcion_b.png', 
                correct: false 
            },
            { 
                text: "", 
                optionImage: true, 
                optionImageSRC: 'images/quiz_images/science_images/cuestionario_ciencias_pregunta_07_opcion_c.png', 
                correct: false 
            },
            { 
                text: "", 
                optionImage: true, 
                optionImageSRC: 'images/quiz_images/science_images/cuestionario_ciencias_pregunta_07_opcion_d.png', 
                correct: false 
            }
        ]
    },    
    {
        questionID: "S08",
        competence: 1,
        subject: "Química",
        info: "A continuación se presenta la reacción general de la formación de la glucosa en la fotosíntesis.",
        infoImage: true,
        infoImageSRC: "images/quiz_images/science_images/cuestionario_ciencias_pregunta_08.png",
        question: "La forma correcta de escribir los productos de esta reacción es:",
        answers: [
            { 
                text: "", 
                optionImage: true, 
                optionImageSRC: 'images/quiz_images/science_images/cuestionario_ciencias_pregunta_08_opcion_a.png', 
                correct: true 
            },
            { 
                text: "", 
                optionImage: true, 
                optionImageSRC: 'images/quiz_images/science_images/cuestionario_ciencias_pregunta_08_opcion_b.png', 
                correct: false 
            },
            { 
                text: "", 
                optionImage: true, 
                optionImageSRC: 'images/quiz_images/science_images/cuestionario_ciencias_pregunta_08_opcion_c.png', 
                correct: false 
            },
            { 
                text: "", 
                optionImage: true, 
                optionImageSRC: 'images/quiz_images/science_images/cuestionario_ciencias_pregunta_08_opcion_d.png', 
                correct: false 
            }
        ]
    },
    {
        questionID: "S09",
        competence: 2,
        subject: "Química",
        info: "Don Napoleón tiene un cultivo hidropónico de lechuga. El agua que usa para irrigar sus plantas presenta un carácter básico, por lo cual debe tomar medidas para reducir su pH. Para ello dispone de dos botellas, una con 500 ml de ácido fosfórico al 85% volumen – volumen y otra con 550 ml de ácido nítrico, que contiene 250 ml de ácido nítrico en los 500 ml totales de solución.",
        infoImage: false,
        infoImageSRC: "",
        question: "Debido al gran volumen de agua que Don Napoleón debe acidificar y al carácter tan básico de esta, el agricultor desea usar el ácido que se encuentra a la mayor concentración. ¿Cuál ácido debe usar Don Napoleón?",
        answers: [
            { 
                text: "El ácido fosfórico, porque la concentración del ácido nítrico es del 50% volumen – volumen.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: true 
            },
            { 
                text: "El ácido nítrico, porque al tener más volumen se encuentra más cantidad del ácido.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "El ácido nítrico, porque tiene más volumen de ácido en el interior de la botella.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "El ácido fosfórico, porque al tener menos volumen se encuentra más concentrado el ácido.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
        ]
    },
    {
        questionID: "S10",
        competence: 2,
        subject: "Química",
        info: "A continuación se presenta la reacción de formación de dióxido de carbono a partir del grafito, y las masas molares de los reactivos y productos:",
        infoImage: true,
        infoImageSRC: "images/quiz_images/science_images/cuestionario_ciencias_pregunta_10.png",
        question: "De acuerdo con la información, si reaccionan 122 g de grafito con 169 g de oxígeno, ¿cuál es el reactivo límite?",
        answers: [
            { 
                text: "El oxígeno, porque reaccionarían en su totalidad los 169 g de oxígeno y quedarían 63,97 g de grafito.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: true 
            },
            { 
                text: "El grafito, porque hay una menor masa de este reactivo que de oxígeno.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "El oxígeno, porque según la reacción siempre se necesitan dos átomos de oxígeno, que es el doble que los átomos de carbono necesarios.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "El grafito, porque su masa molecular es menos de la mitad que la masa molecular del oxígeno.",
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            }
        ]
    },
    {
        questionID: "S11",
        competence: 2,
        subject: "Química",
        info: "La materia puede clasificarse según su composición. Si la materia no es uniforme en todas sus partes, esta puede clasificarse como mezcla heterogénea. Pero si la materia es uniforme en todas sus partes, esta puede clasificarse en dos categorías de acuerdo a su composición: Si su composición no es variable, es decir, está hecha de un solo elemento o compuesto, la materia es una sustancia pura, pero si la materia tiene composición variable, es decir, está hecha de dos o más elementos o compuestos, la materia es una mezcla homogénea.",
        infoImage: true,
        infoImageSRC: "",
        question: "El bronce es un material compuesto de cobre y estaño. Dos muestras de este material tienen distintas proporciones de los dos elementos, pero en ambas se observa una composición uniforme. De acuerdo con la información anterior, usted puede clasificar al bronce como:",
        answers: [
            { 
                text: "Una mezcla homogénea, porque está formada por dos elementos y es uniforme.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: true 
            },
            { 
                text: "Una sustancia pura, porque está totalmente constituido por bronce.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "Una mezcla heterogénea, porque ambas muestras tienen distintas proporciones de bronce.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "Una sustancia pura, porque está constituida por elementos puros.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            }
        ]
    },
    {
        questionID: "S12",
        competence: 3,
        subject: "Química",
        info: "En un experimento se calentó una sustancia desconocida haciendo que pasara por los tres estados de la materia: sólido, líquido y gaseoso. A partir de los datos generados, se obtuvo la gráfica que se observa en la figura. Para identificar la sustancia, se cuenta con la información de la tabla debajo de la figura.",
        infoImage: true,
        infoImageSRC: "images/quiz_images/science_images/cuestionario_ciencias_pregunta_12.png",
        question: "¿Qué sustancia es la que se utilizó en el experimento?",
        answers: [
            { 
                text: "Butano", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: true 
            },
            { 
                text: "Metano", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "Etano", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "Pentano", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            }
        ]
    },    
    {
        questionID: "S13",
        competence: 3,
        subject: "Química",
        info: "La ADN polimerasa es una enzima que se encarga de sintetizar nucleótidos a partir de una cadena molde, y es utilizada rutinariamente en muchos laboratorios para hacer experimentos en los que debe clonarse ADN de forma química. La eficacia de esta enzima es medida según la cantidad de nucleótidos que es capaz de incorporar por segundo. Para que esta enzima pueda funcionar, depende de que en el ambiente en el cual funciona se encuentre magnesio, el cual es un cofactor necesario para que la proteína funcione correctamente. Por lo general, el magnesio es suministrado al medio como sulfato de magnesio. En un laboratorio se realizó un experimento para estandarizar las condiciones necesarias para que la enzima ADN polimerasa funcionara, y se obtuvo un gráfico como el que se muestra a continuación:",
        infoImage: true,
        infoImageSRC: "images/quiz_images/science_images/cuestionario_ciencias_pregunta_13.png",
        question: "Según la gráfica, el objetivo del experimento era:",
        answers: [
            { 
                text: "Determinar la concentración óptima de sulfato de magnesio para hacer que la proteína trabajara a su máxima eficiencia.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: true 
            },
            { 
                text: "Evaluar el efecto de la temperatura en la actividad de la enzima.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "Estudiar el efecto de la velocidad de síntesis de la enzima sobre la concentración de sulfato de magnesio.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "Verificar el efecto de la disociación iónica del sulfato de magnesio sobre la actividad enzimática de la ADN polimerasa.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            }
        ]
    },
    
    {
        questionID: "S14",
        competence: 1,
        subject: "Biología",
        info: "La figura muestra una cadena alimenticia de un ecosistema de alta montaña tropical:",
        infoImage: true,
        infoImageSRC: "images/quiz_images/science_images/cuestionario_ciencias_pregunta_14.png",
        question: "La colonización humana para el cultivo de papa y la tenencia de ganado ha provocado el declive de poblaciones de animales como el venado de cola blanca. Con base en la información, ¿cuál es una consecuencia a mediano plazo de la pérdida del venado de cola blanca de los ecosistemas de alta montaña tropicales?",
        answers: [
            { 
                text: "Disminuyen las poblaciones de cóndor, debido a la pérdida de su principal fuente de alimento.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: true
            },
            { 
                text: "Los pastos aumentarían, ya que ya no tienen más poblaciones que los consuman.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "Los cóndores podrían desarrollar estrategias para alimentarse de otras cosas y se preservarían en el ambiente.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "Las poblaciones de pumas disminuyen rápidamente, debido a que son altamente dependientes de los venados.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
        ]
    },
    {
        questionID: "S15",
        competence: 1,
        subject: "Biología",
        info: "A continuación se presenta un modelo de un lago, en el cual se pueden distinguir dos tipos de zonas de acuerdo con la cantidad de luz que penetra en ellas. La zona fótica corresponde a la parte superficial del lago, en la cual puede penetrar la luz del sol. En esta zona se encuentran plantas acuáticas y microorganismos que hacen fotosíntesis y producen oxígeno. Debajo de la zona fótica se encuentra la zona afótica, donde ya no puede entrar la luz solar y por tal motivo la fotosíntesis no puede ocurrir.",
        infoImage: true,
        infoImageSRC: "images/quiz_images/science_images/cuestionario_ciencias_pregunta_15.png",
        question: "En el diagrama puede observarse una mayor abundancia de peces en la parte superior del lago. De acuerdo con la información, esto puede explicarse porque:",
        answers: [
            { 
                text: "En la parte superficial del lago hay una mayor cantidad de plantas, las cuales pueden ser consumidas por los peces.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: true 
            },
            { 
                text: "En la parte profunda del lago hay una mayor cantidad de depredadores, por lo cual los peces los evitan estando en la superficie.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "En la parte superficial del lago se encuentra una mayor concentración de oxígeno, lo que favorece la respiración de los animales.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "En la parte inferior del lago hay una menor cantidad de luz solar, por lo cual los peces buscan la parte superior para mantener su temperatura.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            }
        ]
    },    
    {
        questionID: "S16",
        competence: 2,
        subject: "Biología",
        info: "En una población de mosca de la fruta se pueden encontrar moscas de color café y moscas de color negro. La cantidad de moscas de color café es mayor que la de moscas de color negro. En un experimento se cruzaron una hembra y un macho de color café. En este cruce se obtuvo un total de 72 moscas, de las cuales 54 eran cafés y 18 eran negras.",
        infoImage: false,
        infoImageSRC: "",
        question: "De los genotipos de los padres puede decirse que:",
        answers: [
            { 
                text: "Ambos padres eran heterocigotos.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: true 
            },
            { 
                text: "El macho era homocigoto dominante y la hembra homocigota recesiva.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "El macho era heterocigoto y la hembra era homocigota recesiva.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "Ambos padres eran homocigotos recesivos.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            }
        ]
    },
    {
        questionID: "S17",
        competence: 2,
        subject: "Biología",
        info: "La gran mayoría de las bacterias que causan enfermedades en los humanos presentan una pared celular que está constituida por una combinación de carbohidratos y aminoácidos, conocida como peptidoglicano. Esta pared se encuentra fuera de la célula, y es un carácter diferencial entre las células bacterianas y las del hospedante humano, ya que los humanos no tienen una pared celular. En el tratamiento de las infecciones causadas por bacterias se usan antibióticos como la penicilina, que previenen la formación de la pared celular bacteriana.",
        infoImage: false,
        infoImageSRC: "",
        question: "La penicilina ayuda a combatir las infecciones bacterianas porque:",
        answers: [
            { 
                text: "La penicilina previene la formación de la pared celular lo que hace que las bacterias no pueden dividirse, lo que facilita la destrucción de las bacterias existentes por parte del sistema inmunológico.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: true 
            },
            { 
                text: "La penicilina mata las bacterias existentes al prevenir la formación de la pared celular, por lo que las bacterias se vuelven sensibles al ambiente que las rodea.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "La penicilina activa al sistema inmunológico al destruir la pared celular bacteriana, haciendo que la infección sea removida más rápidamente del cuerpo.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "La penicilina mata las bacterias existentes al intoxicar su citoplasma en el momento en el que llega hasta este, al prevenir la formación de los componentes constitutivos de la pared celular.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            }
        ]
    },    
    {
        questionID: "S18",
        competence: 2,
        subject: "Biología",
        info: "El ribosoma es la entidad celular que se encarga de producir las proteínas. Esto ocurre por la lectura del ARN mensajero, en el cual se encuentra el código para introducir la secuencia correcta de aminoácidos en la proteína en formación. Este mensaje se encuentra escrito en un código de 3 bases nitrogenadas, conocidas como el codón, en el cual por cada tres bases nitrogenadas se incorpora determinado nucleótido. El primer aminoácido incorporado en las proteínas recién formadas es la metionina, que es codificada por el codón AUG. Luego de eso se van incorporando los aminoácidos según el codón, hasta que se reconoce uno de tres posibles codones que no codifican para ningún aminoácido, sino que le indican al ribosoma que debe separarse. Estos tres codones, conocidos como codones de STOP, son el codón UAA, el codón UAG y el codón UGA. A continuación se observa una imagen de una secuencia de ARN mensajero.",
        infoImage: true,
        infoImageSRC: "images/quiz_images/science_images/cuestionario_ciencias_pregunta_18.png",
        question: "Incluyendo la metionina, ¿cuántos aminoácidos tiene la proteína codificada por este ARN mensajero?",
        answers: [
            { 
                text: "6", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: true 
            },
            { 
                text: "10", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "8", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "4", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            }
        ]
    },
    {
        questionID: "S19",
        competence: 3,
        subject: "Biología",
        info: "La broca del café es una especie de escarabajo que causa graves pérdidas económicas a los productores de café, debido a que la larva de este insecto se desarrolla en los granos de café, lo que arruina la producción de los agricultores.",
        infoImage: false,
        infoImageSRC: "",
        question: "Según la información anterior, ¿cuál de las siguientes preguntas puede resolverse con una investigación en el campo de las ciencias naturales?",
        answers: [
            { 
                text: "¿Qué mecanismos de resistencia presenta la planta de café para defenderse del insecto de la broca?", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: true 
            },
            { 
                text: "¿Cuáles son las variedades de café usadas en la caficultura?", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "¿Cuál es el efecto económico del insecto de la broca en las zonas cafeteras del mundo?", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "¿Cuáles estrategias de control de la broca usan los productores de café alrededor del mundo?", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            }
        ]
    },    
    {
        questionID: "20",
        competence: 3,
        subject: "Biología",
        info: "Un investigador quiere desarrollar nuevos repelentes para mosquitos. Para ello plantea un experimento en el que toma algunos mosquitos y los sacrifica mediante choque térmico (temperaturas de 60 °C), y luego de ello hace un caldo macerando los insectos y disolviéndolos en agua. El investigador siguió el mismo procedimiento con un escarabajo no relacionado con los mosquitos. Luego toma a mosquitos hembra que mantiene en el laboratorio y los pone en recipientes individuales. Divide a los mosquitos hembra en tres grupos, a uno de los grupos les administra su dieta recubierta de agua, al otro grupo le administra su dieta, pero esta había sido previamente recubierta con el macerado de escarabajos obtenido previamente, y al tercer grupo le administró la dieta recubierta del extracto obtenido con los mosquitos de la misma especie. El investigador tomó los mosquitos hembra y midió la cantidad de sangre que se encontraba en el interior de cada una de estas luego de 1 hora de haber estado en contacto con su dieta. Se encontró que los mosquitos que tenían que alimentarse de la dieta recubierta de extracto de mosquito sacrificado tenían un 45% menos de contenido de alimento en sus sistemas digestivos que los que habían sido alimentados con la dieta con extracto de escarabajo, y un 60% menos que los que habían sido alimentados con la dieta recubierta de agua.",
        infoImage: false,
        infoImageSRC: "",
        question: "De acuerdo con el experimento, ¿por qué los mosquitos que se alimentaron de la dieta recubierta de extracto de mosquito consumieron menos alimento?",
        answers: [
            { 
                text: "Porque percibieron alguna sustancia asociada a la maceración de los mosquitos, que alertaba sobre la presencia de un peligro en el ambiente.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: true 
            },
            { 
                text: "Porque los mosquitos hembra consumen una cantidad mucho menor de alimento que los mosquitos machos, y por esa razón se registró un resultado menor en el experimento.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "Porque el agua estimula el consumo de alimento por parte de los mosquitos, por lo cual al añadir agua a la dieta se incrementó el consumo de esta.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            },
            { 
                text: "Porque los mosquitos seleccionados para consumir la dieta cubierta del extracto de mosquitos consumían naturalmente menos alimento que los otros mosquitos.", 
                optionImage: false, 
                optionImageSRC: "", 
                correct: false 
            }
        ]
    },
]