"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, AlertTriangle, ShieldCheck, Heart, Sparkles, Building2, User } from "lucide-react";
import { ServiceSection } from "@/lib/booking";

interface BookingState {
  section: ServiceSection | null;
  serviceName: string;
  price: number | string;
}

export function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingData, setBookingData] = useState<BookingState>({
    section: null,
    serviceName: "",
    price: 0,
  });

  // Common fields
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  
  // Reserva fields
  const [fechaReserva, setFechaReserva] = useState("");
  const [horaReserva, setHoraReserva] = useState("");

  // Section specific fields:
  // 1. Bronceado
  const [acompanamiento, setAcompanamiento] = useState("Vengo sola");
  const [cantidadAcompanantes, setCantidadAcompanantes] = useState("1 persona");
  const [bronceadoSafety, setBronceadoSafety] = useState({ q1: false, q2: false, q3: false, q4: false });
  const [bronceadoTimeWarning, setBronceadoTimeWarning] = useState(false);

  // 2. Faciales
  const [facialTratamiento, setFacialTratamiento] = useState("");
  const [facialSafety, setFacialSafety] = useState({ q1: false, q2: false, q3: false, q4: false });

  // 3. Masajes
  const [masajeTipo, setMasajeTipo] = useState("");
  const [masajeMotivo, setMasajeMotivo] = useState("");
  const [masajeExperiencia, setMasajeExperiencia] = useState("No");
  const [masajeSafetyVital, setMasajeSafetyVital] = useState({ q1: false, q2: false, q3: false, q4: false, q5: false });
  const [masajeSafetyCond, setMasajeSafetyCond] = useState(false);

  // 4. Experiencias
  const [parejaNombre, setParejaNombre] = useState("");
  const [experienciaRitual, setExperienciaRitual] = useState("");
  const [experienciaOcasion, setExperienciaOcasion] = useState("Solo escapar de la rutina");
  const [experienciaSafety, setExperienciaSafety] = useState({ q1: false, q2: false, q3: false, q4: false });

  // 5. Mini Divas
  const [ninaNombre, setNinaNombre] = useState("");
  const [ninaEdad, setNinaEdad] = useState("");
  const [ninaNacimiento, setNinaNacimiento] = useState("");
  const [divasPlan, setDivasPlan] = useState("");
  const [divasSafety, setDivasSafety] = useState({ q1: false, q2: false });
  const [divasAgeError, setDivasAgeError] = useState("");

  // 6. Corporativo
  const [cargo, setCargo] = useState("");
  const [empresaNombre, setEmpresaNombre] = useState("");
  const [empresaSector, setEmpresaSector] = useState("");
  const [empresaSede, setEmpresaSede] = useState("");
  const [empleadosCantidad, setEmpleadosCantidad] = useState("");
  const [corpSolucion, setCorpSolucion] = useState("Jornadas de Bienestar In-House");
  const [corpModalidad, setCorpModalidad] = useState("Queremos que se realice en las instalaciones del Spa");

  // Error boundary/validation states
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ section: ServiceSection; serviceName?: string; price?: number | string }>;
      const { section, serviceName = "", price = 0 } = customEvent.detail;
      
      // Reset form states
      setNombre("");
      setWhatsapp("");
      setEmail("");
      setNacimiento("");
      setFechaReserva("");
      setHoraReserva("");
      setValidationError("");

      // Bronceado resets
      setAcompanamiento("Vengo sola");
      setCantidadAcompanantes("1 persona");
      setBronceadoSafety({ q1: false, q2: false, q3: false, q4: false });
      setBronceadoTimeWarning(false);

      // Faciales resets
      setFacialTratamiento(serviceName || "Limpieza Facial Express");
      setFacialSafety({ q1: false, q2: false, q3: false, q4: false });

      // Masajes resets
      setMasajeTipo(serviceName || "Bono Masaje Relajante Normal");
      setMasajeMotivo("");
      setMasajeExperiencia("No");
      setMasajeSafetyVital({ q1: false, q2: false, q3: false, q4: false, q5: false });
      setMasajeSafetyCond(false);

      // Experiencias resets
      setParejaNombre("");
      setExperienciaRitual(serviceName || "Dúo de Bienestar");
      setExperienciaOcasion("Solo escapar de la rutina");
      setExperienciaSafety({ q1: false, q2: false, q3: false, q4: false });

      // Mini Divas resets
      setNinaNombre("");
      setNinaEdad("");
      setNinaNacimiento("");
      setDivasPlan(serviceName || "Mi Primer Día de Spa");
      setDivasSafety({ q1: false, q2: false });
      setDivasAgeError("");

      // Corporativo resets
      setCargo("");
      setEmpresaNombre("");
      setEmpresaSector("");
      setEmpresaSede("");
      setEmpleadosCantidad("");
      setCorpSolucion("Jornadas de Bienestar In-House");
      setCorpModalidad("Queremos que se realice en las instalaciones del Spa");

      setBookingData({
        section,
        serviceName,
        price,
      });
      setIsOpen(true);
    };

    window.addEventListener("open-booking-modal", handleOpen);
    return () => {
      window.removeEventListener("open-booking-modal", handleOpen);
    };
  }, []);

  // Monitor booking hour for Bronceado morning restriction
  useEffect(() => {
    if (bookingData.section === "bronceado" && horaReserva) {
      const [hours, minutes] = horaReserva.split(":").map(Number);
      if (hours >= 11) {
        setBronceadoTimeWarning(true);
      } else {
        setBronceadoTimeWarning(false);
      }
    }
  }, [horaReserva, bookingData.section]);

  if (!isOpen || !bookingData.section) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  const getEstimatedValue = (section: ServiceSection, selection: string): number => {
    if (section === "bronceado") {
      const qty = acompanamiento === "Vengo acompañada" ? (cantidadAcompanantes === "2 personas" ? 3 : 2) : 1;
      return 90000 * qty;
    }
    if (section === "faciales") {
      const mapping: Record<string, number> = {
        "Limpieza Facial Express": 90000,
        "Limpieza Facial Profunda con 5 Tecnologías": 120000,
        "Limpieza Facial Profunda": 120000,
        "Hidratación Facial": 50000,
        "Tratamiento Anti-Manchas": 80000,
        "Rejuvenecimiento Facial": 500000,
      };
      return mapping[selection] || 90000;
    }
    if (section === "masajes") {
      const mapping: Record<string, number> = {
        "Bono Masaje Relajante Normal": 100000,
        "Masaje Relajante Normal": 100000,
        "Masaje Relajante Completo (Piedras Volcánicas + Bambú)": 120000,
        "Masaje Relajante Completo": 120000,
        "Masaje Deportivo": 110000,
        "Masaje Terapéutico (Dolores)": 130000,
        "Masaje Terapéutico": 130000,
      };
      return mapping[selection] || 100000;
    }
    if (section === "experiencias") {
      const mapping: Record<string, number> = {
        "Dúo de Bienestar": 205000,
        "Dúo de Bienestar y Masaje": 205000,
        "Ritual de Conexión para Dos": 250000,
        "Paquete Romántico Premium": 290000,
        "Ritual Nocturno Estándar": 350000,
        "Ritual Nocturno": 350000,
        "Ritual Nocturno con Serenata": 470000,
      };
      return mapping[selection] || 250000;
    }
    if (section === "minidivas") {
      const mapping: Record<string, number> = {
        "Mi Primer Día de Spa": 135000,
        "Experiencia Diva Premium": 160000,
        "Celebración Diva VIP": 195000,
        "Conexión Mágica Madre-Hija": 245000,
        "Conexión Mágica": 245000,
        "Vínculo Premium": 280000,
        "Recuerdo VIP": 330000,
      };
      return mapping[selection] || 135000;
    }
    return 0;
  };

  const getSectionTitle = (section: ServiceSection) => {
    switch (section) {
      case "bronceado": return "Bronceo Brasilero";
      case "faciales": return "Limpieza Facial";
      case "masajes": return "Masajes Especiales";
      case "experiencias": return "Sauna y Ritual Nocturno";
      case "minidivas": return "Plan Mini Divas (Spa Infantil)";
      case "corporativo": return "Propuesta Bienestar Corporativo";
      default: return "Reserva Zen Spa";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    const valueEstimado = getEstimatedValue(
      bookingData.section!,
      bookingData.section === "bronceado" ? "Bronceo Brasilero" : 
      bookingData.section === "faciales" ? facialTratamiento :
      bookingData.section === "masajes" ? masajeTipo :
      bookingData.section === "experiencias" ? experienciaRitual :
      bookingData.section === "minidivas" ? divasPlan : ""
    );

    let messageText = "";

    // 1. Bronceado Brasilero Submission
    if (bookingData.section === "bronceado") {
      if (bronceadoTimeWarning) {
        setValidationError("El bronceado se realiza estrictamente antes de las 11:00 AM. Por favor elija un horario matutino.");
        return;
      }
      if (!bronceadoSafety.q1 || !bronceadoSafety.q2 || !bronceadoSafety.q3 || !bronceadoSafety.q4) {
        setValidationError("Debe confirmar todas las preguntas de seguridad del bronceado.");
        return;
      }

      const q1 = bronceadoSafety.q1 ? "No tengo quemaduras/dermatitis" : "Sí";
      const q2 = bronceadoSafety.q2 ? "No sufro de presión baja/problemas circulatorios al calor" : "Sí";
      const q3 = bronceadoSafety.q3 ? "No tengo tendencia a melasma con el sol" : "Sí";
      const q4 = bronceadoSafety.q4 ? "No estoy embarazada" : "Sí";

      messageText = `¡Hola Zen Spa! ☀️ Quiero agendar mi Bronceo Brasilero. Confirmo que leí el recordatorio y acepto las condiciones. Mis datos:\n- Nombre: ${nombre}\n- WhatsApp: ${whatsapp}\n- Email: ${email}\n- Fecha de Nacimiento: ${nacimiento}\n- Modalidad: ${acompanamiento} ${acompanamiento === "Vengo acompañada" ? `(Acompañantes: ${cantidadAcompanantes})` : ""}\n- Fecha sugerida: ${fechaReserva}\n- Hora matutina elegida: ${horaReserva}\n\n🛡️ Cuestionario de Seguridad:\n- Quemaduras/Dermatitis: ${q1}\n- Hipotensión/Calor: ${q2}\n- Tendencia a manchas/Melasma: ${q3}\n- Embarazo: ${q4}`;
    }

    // 2. Limpieza Facial Submission
    else if (bookingData.section === "faciales") {
      if (!facialSafety.q1 || !facialSafety.q2 || !facialSafety.q3 || !facialSafety.q4) {
        setValidationError("Debe confirmar todas las preguntas de seguridad dermoestética.");
        return;
      }

      const q1 = facialSafety.q1 ? "No uso Retinol o ácidos activos" : "Sí";
      const q2 = facialSafety.q2 ? "No he tomado Isotretinoína en los últimos 6 meses" : "Sí";
      const q3 = facialSafety.q3 ? "No tengo brote de herpes o infección activa" : "Sí";
      const q4 = facialSafety.q4 ? "No me he realizado láser o depilación con cera reciente en rostro" : "Sí";

      messageText = `¡Hola Zen Spa! 🌿 Quiero agendar un Tratamiento Facial. Aquí tienes mis datos:\n- Nombre: ${nombre}\n- WhatsApp: ${whatsapp}\n- Email: ${email}\n- Fecha de Nacimiento: ${nacimiento}\n- Tratamiento: ${facialTratamiento}\n- Fecha y Hora sugerida: ${fechaReserva} a las ${horaReserva}\n\n🛡️ Cuestionario de Seguridad Facial:\n- Uso de Retinol/Ácidos: ${q1}\n- Toma de Isotretinoína: ${q2}\n- Herpes/Infección activa: ${q3}\n- Láser/Cera reciente: ${q4}`;
    }

    // 3. Masajes Submission
    else if (bookingData.section === "masajes") {
      if (!masajeSafetyVital.q1 || !masajeSafetyVital.q2 || !masajeSafetyVital.q3 || !masajeSafetyVital.q4 || !masajeSafetyVital.q5) {
        setValidationError("Debe confirmar todas las preguntas vitales de salud.");
        return;
      }
      if (!masajeSafetyCond) {
        setValidationError("Debe confirmar la declaración de contraindicación correspondiente al tipo de masaje.");
        return;
      }

      const qVital1 = masajeSafetyVital.q1 ? "No tengo fiebre/gripe/infección activa" : "Sí";
      const qVital2 = masajeSafetyVital.q2 ? "No tengo trombosis/flebitis/varices graves" : "Sí";
      const qVital3 = masajeSafetyVital.q3 ? "No tengo fracturas/esguinces/cirugías recientes" : "Sí";
      const qVital4 = masajeSafetyVital.q4 ? "No tengo heridas abiertas/quemaduras/hongos en piel" : "Sí";
      const qVital5 = masajeSafetyVital.q5 ? "No sufro de hipertensión grave/problemas cardíacos" : "Sí";

      let condLabel = "";
      if (masajeTipo.includes("Deportivo")) {
        condLabel = "No tengo desgarro muscular agudo en zona a tratar";
      } else if (masajeTipo.includes("Terapéutico")) {
        condLabel = "Mi dolor no es por golpe fuerte reciente o inflamación aguda";
      } else {
        condLabel = "No soy alérgico a aceites esenciales o lociones de masaje";
      }

      messageText = `¡Hola Zen Spa! 💆‍♂️ Quiero agendar un Masaje de Bienestar. Aquí tienes mis datos:\n- Nombre: ${nombre}\n- WhatsApp: ${whatsapp}\n- Email: ${email}\n- Fecha de Nacimiento: ${nacimiento}\n- Tipo de Masaje: ${masajeTipo}\n- Fecha y Hora sugerida: ${fechaReserva} a las ${horaReserva}\n- Motivo de la visita: ${masajeMotivo}\n- Experiencia previa: ${masajeExperiencia}\n\n🛡️ Cuestionario de Seguridad de Masajes:\n- Fiebre/Infección activa: ${qVital1}\n- Enfermedades vasculares/Varices: ${qVital2}\n- Fracturas/Cirugías recientes: ${qVital3}\n- Heridas/Quemaduras/Hongos: ${qVital4}\n- Hipertensión/Problemas cardíacos: ${qVital5}\n- Contraindicación específica de tipo de masaje: ${condLabel}\n- Alergias a aceites: Aceptado`;
    }

    // 4. Experiencias Submission
    else if (bookingData.section === "experiencias") {
      if (!experienciaSafety.q1 || !experienciaSafety.q2 || !experienciaSafety.q3 || !experienciaSafety.q4) {
        setValidationError("Debe confirmar todas las preguntas de seguridad del Santuario y Sauna.");
        return;
      }

      const q1 = experienciaSafety.q1 ? "Ninguno sufre de hipotensión o problemas de corazón" : "Sí";
      const q2 = experienciaSafety.q2 ? "La asistente no está embarazada o sospecha estarlo" : "Sí";
      const q3 = experienciaSafety.q3 ? "Ninguno tiene fiebre, infecciones o heridas abiertas" : "Sí";
      const q4 = experienciaSafety.q4 ? "Ninguno tiene condiciones neurológicas que impidan sudar" : "Sí";

      messageText = `¡Hola Zen Spa! 💖 Queremos reservar una Experiencia en Pareja. Aquí tienes nuestros datos:\n- Mi nombre: ${nombre}\n- WhatsApp: ${whatsapp}\n- Email: ${email}\n- Fecha de Nacimiento: ${nacimiento}\n- Acompañante: ${parejaNombre}\n- Ritual de Interés: ${experienciaRitual}\n- Ocasión Especial: ${experienciaOcasion}\n- Fecha y Hora sugerida: ${fechaReserva} a las ${horaReserva}\n\n🛡️ Cuestionario de Seguridad (Termoterapia/Sauna):\n- Hipotensión/Problemas de corazón: ${q1}\n- Embarazo: ${q2}\n- Fiebre/Heridas abiertas: ${q3}\n- Condiciones de transpiración: ${q4}`;
    }

    // 5. Mini Divas Submission
    else if (bookingData.section === "minidivas") {
      const ageNum = parseInt(ninaEdad, 10);
      if (isNaN(ageNum) || ageNum < 4 || ageNum > 13) {
        setValidationError("La edad de la niña debe estar estrictamente entre 4 y 13 años.");
        return;
      }
      if (!divasSafety.q1 || !divasSafety.q2) {
        setValidationError("Debe confirmar todas las preguntas de seguridad infantil.");
        return;
      }

      const q1 = divasSafety.q1 ? "No tiene alergias en piel o sensibilidad extrema" : "Sí";
      const q2 = divasSafety.q2 ? "No presenta heridas, sarpullidos, quemaduras o hongos" : "Sí";

      // Detect if booking date matches girl's birthday month & day
      let infoCumple = "";
      if (ninaNacimiento && fechaReserva) {
        const birthMD = ninaNacimiento.substring(5); // "MM-DD"
        const bookingMD = fechaReserva.substring(5); // "MM-DD"
        if (birthMD === bookingMD) {
          infoCumple = " (¡Es su cumpleaños! Preparar torta de cortesía de Zen Spa 🎂)";
        }
      }

      messageText = `¡Hola Zen Spa! 🌸 Me interesa reservar un Plan Mini Divas para mi hija. Aquí tienes los datos:\n- Representante: ${nombre}\n- WhatsApp: ${whatsapp}\n- Email: ${email}\n- Nombre de la Niña: ${ninaNombre}\n- Edad de la Niña: ${ninaEdad} años\n- Fecha de Nacimiento: ${ninaNacimiento}${infoCumple}\n- Plan de Interés: ${divasPlan}\n- Fecha y Hora sugerida: ${fechaReserva} a las ${horaReserva}\n\n🛡️ Cuestionario de Seguridad Infantil:\n- Alergias/Dermatitis: ${q1}\n- Heridas/Quemaduras/Sarpullidos: ${q2}`;
    }

    // 6. Corporativo B2B Submission
    else if (bookingData.section === "corporativo") {
      messageText = `¡Hola Zen Spa! 💼 Me interesa solicitar una Propuesta de Bienestar Corporativo B2B para nuestra empresa. Detalles del contacto:\n- Nombre: ${nombre}\n- Cargo: ${cargo}\n- WhatsApp: ${whatsapp}\n- Email: ${email}\n\n🏢 Datos de la Empresa:\n- Razón Social: ${empresaNombre}\n- Sector: ${empresaSector}\n- Ubicación: ${empresaSede}\n- Cantidad de Empleados: ${empleadosCantidad}\n- Solución de Interés: ${corpSolucion}\n- Modalidad de Servicio: ${corpModalidad}`;
    }

    // Fire Meta Pixel Lead Conversion event
    if (typeof window !== "undefined" && typeof (window as any).fbq !== "undefined") {
      (window as any).fbq("track", "Lead", {
        content_name: bookingData.section === "bronceado" ? "Bronceo Brasilero" : 
                      bookingData.section === "faciales" ? facialTratamiento :
                      bookingData.section === "masajes" ? masajeTipo :
                      bookingData.section === "experiencias" ? experienciaRitual :
                      bookingData.section === "minidivas" ? divasPlan : "Corporativo B2B",
        content_category: bookingData.section,
        value: valueEstimado || 0,
        currency: "COP",
      });
    }

    // Redirect to WhatsApp
    const waUrl = `https://wa.me/573156881765?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white border border-zen-wine/10 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-fade-in"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-zen-wine to-[#58150f] text-zen-beige p-6 md:p-8 flex justify-between items-center z-10">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-zen-pink block mb-1">
              Zen Spa Reservas
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-medium">
              {getSectionTitle(bookingData.section)}
            </h2>
          </div>
          <button 
            onClick={handleClose}
            className="text-zen-beige/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 font-sans">
          
          {/* Validation Alert */}
          {validationError && (
            <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl flex items-start gap-3">
              <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
              <p className="text-xs text-red-800 font-medium leading-relaxed">{validationError}</p>
            </div>
          )}

          {/* SECTION 1: CRM Fields (Tutor / Link for Corp / Mini Divas) */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-zen-brown font-bold border-b border-zen-brown/10 pb-2 flex items-center gap-2">
              <User size={14} />
              {bookingData.section === "minidivas" ? "Datos del Representante / Tutor" : "Datos del Solicitante (CRM)"}
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zen-wine mb-1.5">Nombre Completo *</label>
                <input 
                  type="text" 
                  required 
                  value={nombre} 
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ej. María Fernanda Gómez"
                  className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zen-wine mb-1.5">Número de WhatsApp *</label>
                <input 
                  type="tel" 
                  required 
                  value={whatsapp} 
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="Ej. 315 6881765"
                  className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zen-wine mb-1.5">
                  {bookingData.section === "corporativo" ? "Correo Corporativo *" : "Correo Electrónico *"}
                </label>
                <input 
                  type="email" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ej. maria@ejemplo.com"
                  className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                />
              </div>

              {bookingData.section !== "corporativo" && (
                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Fecha de Nacimiento *</label>
                  <input 
                    type="date" 
                    required 
                    value={nacimiento} 
                    onChange={(e) => setNacimiento(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>
              )}

              {bookingData.section === "corporativo" && (
                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Cargo en la Empresa *</label>
                  <input 
                    type="text" 
                    required 
                    value={cargo} 
                    onChange={(e) => setCargo(e.target.value)}
                    placeholder="Ej. Directora de Gestión Humana"
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>
              )}
            </div>
          </div>

          {/* SECTION 2: Specific Fields based on active section */}
          {/* A. BRONCEADO BRASILER0 FIELDS */}
          {bookingData.section === "bronceado" && (
            <div className="space-y-6 pt-4 border-t border-zen-brown/5">
              <h3 className="text-xs uppercase tracking-widest text-zen-brown font-bold border-b border-zen-brown/10 pb-2 flex items-center gap-2">
                <Calendar size={14} />
                Detalles del Bronceado
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Fecha de Reserva *</label>
                  <input 
                    type="date" 
                    required 
                    value={fechaReserva} 
                    onChange={(e) => setFechaReserva(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Hora de Reserva (Mañana) *</label>
                  <input 
                    type="time" 
                    required 
                    value={horaReserva} 
                    onChange={(e) => setHoraReserva(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">¿Viene sola o acompañada? *</label>
                  <select 
                    value={acompanamiento} 
                    onChange={(e) => setAcompanamiento(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  >
                    <option value="Vengo sola">Vengo sola</option>
                    <option value="Vengo acompañada">Vengo acompañada</option>
                  </select>
                </div>

                {acompanamiento === "Vengo acompañada" && (
                  <div>
                    <label className="block text-xs font-semibold text-zen-wine mb-1.5">¿Con cuántas personas? (Límite 3 camillas en total) *</label>
                    <select 
                      value={cantidadAcompanantes} 
                      onChange={(e) => setCantidadAcompanantes(e.target.value)}
                      className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                    >
                      <option value="1 persona">1 persona (Total: 2 personas)</option>
                      <option value="2 personas">2 personas (Total: 3 personas)</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Hourly Alert Warning */}
              {bronceadoTimeWarning && (
                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl flex items-start gap-3">
                  <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-xs text-amber-800 font-medium leading-relaxed">
                    ⚠️ Horario restringido: El servicio se agenda estrictamente antes de las 11:00 AM. El calor de la tarde impide la fijación homogénea de la marquinha.
                  </p>
                </div>
              )}

              {/* Indications text block */}
              <div className="p-5 bg-zen-beige/30 rounded-2xl border border-zen-brown/10 text-xs text-zen-wine/80 leading-relaxed font-light">
                <span className="font-bold block mb-1 text-zen-brown">🌿 Recordatorio para el día de su cita:</span>
                Debe traer traje de baño/bikini, ropa de cambio que sea holgada y de color oscuro, una moña para recogerse el cabello, y presentarse con la piel libre de desodorantes, perfumes, cremas corporales o aceites.
              </div>
            </div>
          )}

          {/* B. FACIALES FIELDS */}
          {bookingData.section === "faciales" && (
            <div className="space-y-6 pt-4 border-t border-zen-brown/5">
              <h3 className="text-xs uppercase tracking-widest text-zen-brown font-bold border-b border-zen-brown/10 pb-2 flex items-center gap-2">
                <Sparkles size={14} />
                Detalles del Tratamiento Facial
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Tratamiento de Interés *</label>
                  <select 
                    value={facialTratamiento} 
                    onChange={(e) => setFacialTratamiento(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  >
                    <option value="Limpieza Facial Express">Limpieza Facial Express</option>
                    <option value="Limpieza Facial Profunda con 5 Tecnologías">Limpieza Facial Profunda con 5 Tecnologías</option>
                    <option value="Hidratación Facial">Hidratación Facial</option>
                    <option value="Tratamiento Anti-Manchas">Tratamiento Anti-Manchas</option>
                    <option value="Rejuvenecimiento Facial">Rejuvenecimiento Facial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Fecha de Reserva *</label>
                  <input 
                    type="date" 
                    required 
                    value={fechaReserva} 
                    onChange={(e) => setFechaReserva(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Hora de Reserva *</label>
                  <input 
                    type="time" 
                    required 
                    value={horaReserva} 
                    onChange={(e) => setHoraReserva(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>
              </div>
            </div>
          )}

          {/* C. MASAJES FIELDS */}
          {bookingData.section === "masajes" && (
            <div className="space-y-6 pt-4 border-t border-zen-brown/5">
              <h3 className="text-xs uppercase tracking-widest text-zen-brown font-bold border-b border-zen-brown/10 pb-2 flex items-center gap-2">
                <Heart size={14} />
                Detalles del Masaje
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Tipo de Masaje *</label>
                  <select 
                    value={masajeTipo} 
                    onChange={(e) => setMasajeTipo(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  >
                    <option value="Bono Masaje Relajante Normal">Bono Masaje Relajante Normal</option>
                    <option value="Masaje Relajante Completo (Piedras Volcánicas + Bambú)">Masaje Relajante Completo (Piedras Volcánicas + Bambú)</option>
                    <option value="Masaje Deportivo">Masaje Deportivo</option>
                    <option value="Masaje Terapéutico (Dolores)">Masaje Terapéutico (Dolores)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Fecha de Reserva *</label>
                  <input 
                    type="date" 
                    required 
                    value={fechaReserva} 
                    onChange={(e) => setFechaReserva(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Hora de Reserva *</label>
                  <input 
                    type="time" 
                    required 
                    value={horaReserva} 
                    onChange={(e) => setHoraReserva(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">¿Ha tenido experiencias previas con masajes profesionales? *</label>
                  <select 
                    value={masajeExperiencia} 
                    onChange={(e) => setMasajeExperiencia(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  >
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">¿Cuál es el motivo principal de su visita? *</label>
                  <textarea 
                    required 
                    value={masajeMotivo} 
                    onChange={(e) => setMasajeMotivo(e.target.value)}
                    placeholder="Ej. Aliviar dolor en espalda baja, contractura en cuello por mala postura..."
                    rows={2}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>
              </div>

              {masajeTipo.includes("Terapéutico") && (
                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs text-amber-800 leading-relaxed font-medium">
                  ⚠️ Masaje Clínico Terapéutico: Diseñado para tratar dolores severos. Dependiendo de la cronicidad y zona afectada, el tratamiento puede requerir una doble sesión para su total recuperación.
                </div>
              )}
            </div>
          )}

          {/* D. EXPERIENCIAS FIELDS */}
          {bookingData.section === "experiencias" && (
            <div className="space-y-6 pt-4 border-t border-zen-brown/5">
              <h3 className="text-xs uppercase tracking-widest text-zen-brown font-bold border-b border-zen-brown/10 pb-2 flex items-center gap-2">
                <Heart size={14} />
                Detalles del Ritual en Pareja
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Ritual o Experiencia *</label>
                  <select 
                    value={experienciaRitual} 
                    onChange={(e) => setExperienciaRitual(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  >
                    <option value="Dúo de Bienestar">Dúo de Bienestar</option>
                    <option value="Ritual de Conexión para Dos">Ritual de Conexión para Dos</option>
                    <option value="Paquete Romántico Premium">Paquete Romántico Premium</option>
                    <option value="Ritual Nocturno Estándar">Ritual Nocturno Estándar</option>
                    <option value="Ritual Nocturno con Serenata">Ritual Nocturno con Serenata</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Nombre de la Pareja o Acompañante *</label>
                  <input 
                    type="text" 
                    required 
                    value={parejaNombre} 
                    onChange={(e) => setParejaNombre(e.target.value)}
                    placeholder="Ej. Juan Carlos Pérez"
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Ocasión Especial *</label>
                  <select 
                    value={experienciaOcasion} 
                    onChange={(e) => setExperienciaOcasion(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  >
                    <option value="Aniversario">Aniversario</option>
                    <option value="Cumpleaños">Cumpleaños</option>
                    <option value="Solo escapar de la rutina">Solo escapar de la rutina</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Fecha de Reserva *</label>
                  <input 
                    type="date" 
                    required 
                    value={fechaReserva} 
                    onChange={(e) => setFechaReserva(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Hora de Reserva *</label>
                  <input 
                    type="time" 
                    required 
                    value={horaReserva} 
                    onChange={(e) => setHoraReserva(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>
              </div>
            </div>
          )}

          {/* E. MINI DIVAS FIELDS */}
          {bookingData.section === "minidivas" && (
            <div className="space-y-6 pt-4 border-t border-zen-brown/5">
              <h3 className="text-xs uppercase tracking-widest text-zen-brown font-bold border-b border-zen-brown/10 pb-2 flex items-center gap-2">
                <Sparkles size={14} />
                Datos de la Niña y Reserva
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Nombre de la Niña *</label>
                  <input 
                    type="text" 
                    required 
                    value={ninaNombre} 
                    onChange={(e) => setNinaNombre(e.target.value)}
                    placeholder="Ej. Isabella Beltrán"
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Edad de la Niña (Entre 4 y 13 años) *</label>
                  <input 
                    type="number" 
                    required 
                    min="4"
                    max="13"
                    value={ninaEdad} 
                    onChange={(e) => setNinaEdad(e.target.value)}
                    placeholder="Ej. 8"
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Fecha de Nacimiento de la Niña *</label>
                  <input 
                    type="date" 
                    required 
                    value={ninaNacimiento} 
                    onChange={(e) => setNinaNacimiento(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Plan Seleccionado *</label>
                  <select 
                    value={divasPlan} 
                    onChange={(e) => setDivasPlan(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  >
                    <option value="Mi Primer Día de Spa">Mi Primer Día de Spa</option>
                    <option value="Experiencia Diva Premium">Experiencia Diva Premium</option>
                    <option value="Celebración Diva VIP">Celebración Diva VIP</option>
                    <option value="Conexión Mágica Madre-Hija">Conexión Mágica Madre-Hija</option>
                    <option value="Vínculo Premium">Vínculo Premium</option>
                    <option value="Recuerdo VIP">Recuerdo VIP</option>
                    <option value="¡El Cumple de sus Sueños!">¡El Cumple de sus Sueños!</option>
                    <option value="¡Mini Divas en tu Casa!">¡Mini Divas en tu Casa!</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Fecha de Reserva *</label>
                  <input 
                    type="date" 
                    required 
                    value={fechaReserva} 
                    onChange={(e) => setFechaReserva(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Hora de Reserva *</label>
                  <input 
                    type="time" 
                    required 
                    value={horaReserva} 
                    onChange={(e) => setHoraReserva(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>
              </div>
            </div>
          )}

          {/* F. CORPORATIVO FIELDS */}
          {bookingData.section === "corporativo" && (
            <div className="space-y-6 pt-4 border-t border-zen-brown/5">
              <h3 className="text-xs uppercase tracking-widest text-zen-brown font-bold border-b border-zen-brown/10 pb-2 flex items-center gap-2">
                <Building2 size={14} />
                Datos de la Empresa y Propuesta
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Nombre de la Empresa *</label>
                  <input 
                    type="text" 
                    required 
                    value={empresaNombre} 
                    onChange={(e) => setEmpresaNombre(e.target.value)}
                    placeholder="Ej. Inversiones Valle S.A.S."
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Sector Económico *</label>
                  <input 
                    type="text" 
                    required 
                    value={empresaSector} 
                    onChange={(e) => setEmpresaSector(e.target.value)}
                    placeholder="Ej. Agrícola, Comercial, Financiero..."
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Ubicación / Sede Principal *</label>
                  <input 
                    type="text" 
                    required 
                    value={empresaSede} 
                    onChange={(e) => setEmpresaSede(e.target.value)}
                    placeholder="Ej. Roldanillo / Zarzal / Cali"
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Número de Empleados / Pacientes Proyectados *</label>
                  <input 
                    type="number" 
                    required 
                    value={empleadosCantidad} 
                    onChange={(e) => setEmpleadosCantidad(e.target.value)}
                    placeholder="Ej. 25"
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">¿Qué solución buscan principalmente? *</label>
                  <select 
                    value={corpSolucion} 
                    onChange={(e) => setCorpSolucion(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  >
                    <option value="Jornadas de Bienestar In-House">Jornadas de Bienestar In-House</option>
                    <option value="Bonos de Regalo (Gift Cards)">Bonos de Regalo (Gift Cards)</option>
                    <option value="Evento Privado (Zen Day)">Evento Privado (Zen Day)</option>
                    <option value="Charlas y Talleres">Charlas y Talleres</option>
                    <option value="Alianza o Suscripción">Alianza o Suscripción</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zen-wine mb-1.5">Modalidad del Servicio *</label>
                  <select 
                    value={corpModalidad} 
                    onChange={(e) => setCorpModalidad(e.target.value)}
                    className="w-full bg-zen-beige/10 border border-zen-wine/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zen-brown font-light"
                  >
                    <option value="Queremos que se realice en las instalaciones del Spa">En las instalaciones del Spa</option>
                    <option value="Queremos que el Spa se desplace a las instalaciones de la Empresa">El Spa se desplaza a la Empresa (In-House)</option>
                    <option value="Queremos bonos de regalo">Bonos de regalo para el equipo</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 3: Safety Questionnaires with Checkboxes (ALL REQUIRED EXCEPT B2B) */}
          {bookingData.section !== "corporativo" && (
            <div className="space-y-4 pt-4 border-t border-zen-brown/5">
              <h3 className="text-xs uppercase tracking-widest text-zen-brown font-bold border-b border-zen-brown/10 pb-2 flex items-center gap-2">
                <ShieldCheck size={16} className="text-zen-pink" />
                Cuestionario de Seguridad y Consentimiento (Obligatorio)
              </h3>
              <p className="text-[11px] text-zen-wine/60 leading-normal mb-3">
                Para tu seguridad dermoestética y clínica, por favor confirma que cumples con las siguientes condiciones mínimas de salud antes de agendar:
              </p>

              {/* 1. Bronceado Brasilero Safety Checks */}
              {bookingData.section === "bronceado" && (
                <div className="space-y-3.5">
                  <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      required 
                      checked={bronceadoSafety.q1} 
                      onChange={(e) => setBronceadoSafety({ ...bronceadoSafety, q1: e.target.checked })}
                      className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                    />
                    <span>¿Confirma que <strong>NO</strong> tiene quemaduras solares activas, dermatitis, psoriasis o heridas abiertas? *</span>
                  </label>
                  <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      required 
                      checked={bronceadoSafety.q2} 
                      onChange={(e) => setBronceadoSafety({ ...bronceadoSafety, q2: e.target.checked })}
                      className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                    />
                    <span>¿Confirma que <strong>NO</strong> sufre de presión arterial baja (hipotensión) o problemas circulatorios al exponerse al calor? *</span>
                  </label>
                  <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      required 
                      checked={bronceadoSafety.q3} 
                      onChange={(e) => setBronceadoSafety({ ...bronceadoSafety, q3: e.target.checked })}
                      className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                    />
                    <span>¿Confirma que <strong>NO</strong> tiene tendencia a que le salgan manchas oscuras (melasma) en la piel con el sol? *</span>
                  </label>
                  <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      required 
                      checked={bronceadoSafety.q4} 
                      onChange={(e) => setBronceadoSafety({ ...bronceadoSafety, q4: e.target.checked })}
                      className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                    />
                    <span>¿Confirma que <strong>NO</strong> está embarazada o sospecha estarlo? *</span>
                  </label>
                </div>
              )}

              {/* 2. Faciales Safety Checks */}
              {bookingData.section === "faciales" && (
                <div className="space-y-3.5">
                  <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      required 
                      checked={facialSafety.q1} 
                      onChange={(e) => setFacialSafety({ ...facialSafety, q1: e.target.checked })}
                      className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                    />
                    <span>¿Confirma que <strong>NO</strong> está usando Retinol o ácidos (Glicólico, Salicílico) en su rutina activa de cuidado facial? *</span>
                  </label>
                  <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      required 
                      checked={facialSafety.q2} 
                      onChange={(e) => setFacialSafety({ ...facialSafety, q2: e.target.checked })}
                      className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                    />
                    <span>¿Confirma que <strong>NO</strong> ha tomado Isotretinoína (Roaccutan) en los últimos 6 meses? *</span>
                  </label>
                  <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      required 
                      checked={facialSafety.q3} 
                      onChange={(e) => setFacialSafety({ ...facialSafety, q3: e.target.checked })}
                      className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                    />
                    <span>¿Confirma que <strong>NO</strong> tiene ningún brote de herpes o infección bacteriana/viral activa en el rostro en este momento? *</span>
                  </label>
                  <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      required 
                      checked={facialSafety.q4} 
                      onChange={(e) => setFacialSafety({ ...facialSafety, q4: e.target.checked })}
                      className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                    />
                    <span>¿Confirma que <strong>NO</strong> se ha realizado algún procedimiento láser o depilación con cera en la cara recientemente? *</span>
                  </label>
                </div>
              )}

              {/* 3. Masajes Safety Checks */}
              {bookingData.section === "masajes" && (
                <div className="space-y-4">
                  {/* Part A: Vital Health */}
                  <div className="space-y-3.5 bg-zen-wine/5 p-4 rounded-2xl border border-zen-wine/10">
                    <span className="text-[11px] font-bold text-zen-wine block mb-1 uppercase tracking-wider">A. Salud Vital</span>
                    
                    <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                      <input 
                        type="checkbox" 
                        required 
                        checked={masajeSafetyVital.q1} 
                        onChange={(e) => setMasajeSafetyVital({ ...masajeSafetyVital, q1: e.target.checked })}
                        className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                      />
                      <span>¿Confirma que <strong>NO</strong> tiene fiebre, gripe o alguna infección sistémica activa? *</span>
                    </label>
                    
                    <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                      <input 
                        type="checkbox" 
                        required 
                        checked={masajeSafetyVital.q2} 
                        onChange={(e) => setMasajeSafetyVital({ ...masajeSafetyVital, q2: e.target.checked })}
                        className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                      />
                      <span>¿Confirma que <strong>NO</strong> padece de trombosis venosa profunda, flebitis o varices graves? *</span>
                    </label>
                    
                    <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                      <input 
                        type="checkbox" 
                        required 
                        checked={masajeSafetyVital.q3} 
                        onChange={(e) => setMasajeSafetyVital({ ...masajeSafetyVital, q3: e.target.checked })}
                        className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                      />
                      <span>¿Confirma que <strong>NO</strong> tiene fracturas recientes sin consolidar, esguinces o cirugías en los últimos meses? *</span>
                    </label>
                    
                    <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                      <input 
                        type="checkbox" 
                        required 
                        checked={masajeSafetyVital.q4} 
                        onChange={(e) => setMasajeSafetyVital({ ...masajeSafetyVital, q4: e.target.checked })}
                        className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                      />
                      <span>¿Confirma que <strong>NO</strong> presenta heridas abiertas, quemaduras solares o micosis/infecciones en la piel? *</span>
                    </label>
                    
                    <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                      <input 
                        type="checkbox" 
                        required 
                        checked={masajeSafetyVital.q5} 
                        onChange={(e) => setMasajeSafetyVital({ ...masajeSafetyVital, q5: e.target.checked })}
                        className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                      />
                      <span>¿Confirma que <strong>NO</strong> sufre de hipertensión grave descompensada o problemas cardíacos severos? *</span>
                    </label>
                  </div>

                  {/* Part B: Conditional Health Check based on Type */}
                  <div className="space-y-3 p-4 bg-zen-pink/5 rounded-2xl border border-zen-pink/20">
                    <span className="text-[11px] font-bold text-zen-pink block mb-1 uppercase tracking-wider">B. Preguntas Especiales del Masaje Seleccionado</span>
                    
                    {masajeTipo.includes("Deportivo") && (
                      <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                        <input 
                          type="checkbox" 
                          required 
                          checked={masajeSafetyCond} 
                          onChange={(e) => setMasajeSafetyCond(e.target.checked)}
                          className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                        />
                        <span>¿Confirma que <strong>NO</strong> tiene ningún desgarro muscular agudo o inflamación en fase inicial (primeras 72h) en la zona a tratar? *</span>
                      </label>
                    )}

                    {masajeTipo.includes("Terapéutico") && (
                      <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                        <input 
                          type="checkbox" 
                          required 
                          checked={masajeSafetyCond} 
                          onChange={(e) => setMasajeSafetyCond(e.target.checked)}
                          className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                        />
                        <span>¿Confirma que su dolor <strong>NO</strong> es producto de un golpe fuerte reciente o inflamación aguda activa sin previa valoración? *</span>
                      </label>
                    )}

                    {!masajeTipo.includes("Deportivo") && !masajeTipo.includes("Terapéutico") && (
                      <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                        <input 
                          type="checkbox" 
                          required 
                          checked={masajeSafetyCond} 
                          onChange={(e) => setMasajeSafetyCond(e.target.checked)}
                          className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                        />
                        <span>¿Confirma que <strong>NO</strong> es alérgico a ningún tipo de aceite esencial, loción o aroma de masaje común? *</span>
                      </label>
                    )}
                  </div>
                </div>
              )}

              {/* 4. Experiencias Safety Checks */}
              {bookingData.section === "experiencias" && (
                <div className="space-y-3.5">
                  <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      required 
                      checked={experienciaSafety.q1} 
                      onChange={(e) => setExperienciaSafety({ ...experienciaSafety, q1: e.target.checked })}
                      className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                    />
                    <span>¿Confirma que <strong>NINGUNO</strong> de los asistentes sufre de presión arterial baja (hipotensión) o problemas de corazón (arritmias o infartos)? *</span>
                  </label>
                  <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      required 
                      checked={experienciaSafety.q2} 
                      onChange={(e) => setExperienciaSafety({ ...experienciaSafety, q2: e.target.checked })}
                      className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                    />
                    <span>¿Confirma que la asistente <strong>NO</strong> está embarazada o sospecha estarlo (debido al calor extremo del vapor y sauna)? *</span>
                  </label>
                  <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      required 
                      checked={experienciaSafety.q3} 
                      onChange={(e) => setExperienciaSafety({ ...experienciaSafety, q3: e.target.checked })}
                      className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                    />
                    <span>¿Confirma que <strong>NINGUNO</strong> tiene fiebre, infecciones agudas activas o heridas abiertas en la piel? *</span>
                  </label>
                  <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      required 
                      checked={experienciaSafety.q4} 
                      onChange={(e) => setExperienciaSafety({ ...experienciaSafety, q4: e.target.checked })}
                      className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                    />
                    <span>¿Confirma que <strong>NINGUNO</strong> tiene una condición neurológica o física que le impida transpirar/sudar con normalidad? *</span>
                  </label>
                </div>
              )}

              {/* 5. Mini Divas Safety Checks */}
              {bookingData.section === "minidivas" && (
                <div className="space-y-3.5">
                  <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      required 
                      checked={divasSafety.q1} 
                      onChange={(e) => setDivasSafety({ ...divasSafety, q1: e.target.checked })}
                      className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                    />
                    <span>¿Confirma que la niña <strong>NO</strong> tiene alguna alergia conocida en la piel, dermatitis o sensibilidad extrema a productos cosméticos? *</span>
                  </label>
                  <label className="flex items-start gap-3 text-xs text-zen-wine/85 leading-relaxed cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      required 
                      checked={divasSafety.q2} 
                      onChange={(e) => setDivasSafety({ ...divasSafety, q2: e.target.checked })}
                      className="mt-0.5 h-4.5 w-4.5 rounded border-zen-wine/25 text-zen-pink focus:ring-zen-pink cursor-pointer" 
                    />
                    <span>¿Confirma que la niña <strong>NO</strong> presenta heridas abiertas, sarpullidos, quemaduras solares activas o micosis (hongos) en manos o pies? *</span>
                  </label>
                </div>
              )}
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-6 border-t border-zen-brown/10 flex justify-end">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-zen-wine text-zen-beige hover:bg-zen-brown hover:text-white transition-all duration-300 px-8 py-4 font-sans text-xs tracking-widest uppercase rounded-full shadow-lg font-semibold active:scale-98 cursor-pointer text-center"
            >
              Confirmar disponibilidad
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
