// Funciones de interactividad para la plataforma
document.addEventListener("DOMContentLoaded", () => {
    // Función para mostrar información adicional sobre trastornos
    function showDisorderInfo(disorderType) {
        const infoMap = {
            tea: {
                title: "Trastorno del Espectro Autista (TEA)",
                description:
                    "El TEA afecta la comunicación social y puede incluir patrones repetitivos de comportamiento. Los apoyos visuales y la comunicación aumentativa son fundamentales.",
                tips: [
                    "Usar pictogramas claros y consistentes",
                    "Mantener rutinas predecibles",
                    "Proporcionar tiempo adicional para procesar información",
                    "Utilizar apoyos visuales para transiciones",
                ],
            },
            afasia: {
                title: "Afasia",
                description:
                    "La afasia afecta la capacidad de usar y comprender el lenguaje, generalmente después de un daño cerebral.",
                tips: [
                    "Hablar despacio y con claridad",
                    "Usar gestos y expresiones faciales",
                    "Dar tiempo para responder",
                    "Utilizar tableros de comunicación",
                ],
            },
            disartria: {
                title: "Disartria",
                description: "La disartria afecta los músculos usados para hablar, resultando en habla poco clara.",
                tips: [
                    "Practicar ejercicios de respiración",
                    "Hablar más despacio",
                    "Usar dispositivos de amplificación si es necesario",
                    "Practicar ejercicios de articulación",
                ],
            },
        }

        const info = infoMap[disorderType]
        if (info) {
            alert(
                `${info.title}\n\n${info.description}\n\nConsejos útiles:\n${info.tips.map((tip) => `• ${tip}`).join("\n")}`,
            )
        }
    }

    // Función para simular el uso de CAA
    function demonstrateCAA() {
        const examples = [
            "👋 Hola - Saludo básico",
            "🍎 Manzana - Solicitar comida",
            "💧 Agua - Solicitar bebida",
            "🚽 Baño - Necesidad básica",
            "😊 Feliz - Expresar emoción",
            "❤️ Me gusta - Expresar preferencia",
        ]

        const randomExample = examples[Math.floor(Math.random() * examples.length)]
        alert(
            `Ejemplo de CAA:\n\n${randomExample}\n\nLa comunicación aumentativa permite expresar necesidades y emociones de manera visual y clara.`,
        )
    }

    // Función para mostrar recursos adicionales
    function showResources() {
        const resources = [
            "📚 Guías de implementación de CAA",
            "🎯 Ejercicios interactivos personalizados",
            "👥 Comunidad de apoyo para familias",
            "🔧 Herramientas de evaluación",
            "📱 Apps recomendadas para CAA",
            "🎓 Cursos de formación para terapeutas",
        ]

        alert(a
            `Recursos disponibles:\n\n${resources.join("\n")}\n\n¡Explora nuestra plataforma para acceder a todos estos recursos!`,
        )
    }

    // Función para contacto
    function showContact() {
        alert(
            "📞 Información de Contacto:\n\n" +
            "📧 Email: info@plataformacaa.co\n" +
            "📱 WhatsApp: +57 300 123 4567\n" +
            "🌐 Web: www.plataformacaa.co\n\n" +
            "¡Estamos aquí para apoyarte en este camino hacia una comunicación más inclusiva!",
        )
    }

    // Agregar eventos a los botones
    const buttons = document.querySelectorAll(".btn")
    buttons.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault()
            const action = this.getAttribute("onclick")
            if (action) {
                eval(action)
            }
        })
    })

    // Efecto de aparición suave para las secciones
    const sections = document.querySelectorAll(".section")
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1"
                entry.target.style.transform = "translateY(0)"
            }
        })
    }, observerOptions)

    sections.forEach((section) => {
        section.style.opacity = "0"
        section.style.transform = "translateY(30px)"
        section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
        observer.observe(section)
    })

    // Función para mejorar la accesibilidad
    function enhanceAccessibility() {
        // Agregar atributos ARIA donde sea necesario
        const headings = document.querySelectorAll("h1, h2, h3, h4")
        headings.forEach((heading, index) => {
            if (!heading.id) {
                heading.id = `heading-${index}`
            }
        })

        // Mejorar la navegación por teclado
        const interactiveElements = document.querySelectorAll("button, .btn, [onclick]")
        interactiveElements.forEach((element) => {
            if (!element.getAttribute("tabindex")) {
                element.setAttribute("tabindex", "0")
            }

            // Agregar soporte para navegación por teclado
            element.addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    this.click()
                }
            })
        })
    }

    // Inicializar mejoras de accesibilidad
    enhanceAccessibility()

    // Exponer funciones globalmente para los botones inline
    window.showDisorderInfo = showDisorderInfo
    window.demonstrateCAA = demonstrateCAA
    window.showResources = showResources
    window.showContact = showContact

    console.log("🌟 Plataforma de Comunicación y Aprendizaje cargada correctamente")
})

// Función adicional para validar formularios (si se agregan en el futuro)
function validateForm(formData) {
    const errors = []

    if (!formData.name || formData.name.trim().length < 2) {
        errors.push("El nombre debe tener al menos 2 caracteres")
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.push("Por favor ingresa un email válido")
    }

    return {
        isValid: errors.length === 0,
        errors: errors,
    }
}

// Función para manejar el envío de formularios
function handleFormSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())

    const validation = validateForm(data)

    if (validation.isValid) {
        alert("¡Gracias por tu interés! Te contactaremos pronto.")
        event.target.reset()
    } else {
        alert("Por favor corrige los siguientes errores:\n" + validation.errors.join("\n"))
    }
}
