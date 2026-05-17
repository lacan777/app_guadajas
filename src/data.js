export const pages = {
  presencia: {
    navLabel: "Presencia",
    title: "Presencia",
    subtitle: "Actividad de la habitación con una lectura tranquila y clara.",
    status: "Rutina estable",
    tone: "ok",
    summary: "Hay presencia activa y movimiento normal. No se observan patrones de riesgo inmediato.",
    primaryAction: "Ver detalle de habitación",
    secondaryAction: "Ajustar sensibilidad",
    metrics: [
      { label: "Habitación", value: "Activa" },
      { label: "Movimiento", value: "Normal" },
      { label: "Confianza", value: "94%" },
      { label: "Última lectura", value: "Hace 6 s" }
    ],
    timeline: [
      { time: "18:31", title: "Ingreso a habitación", detail: "Actividad detectada cerca de la entrada." },
      { time: "18:36", title: "Movimiento suave", detail: "Patrón compatible con rutina normal." },
      { time: "18:44", title: "Lectura estable", detail: "Sin señales de inmovilidad prolongada." }
    ]
  },
  estado: {
    navLabel: "Estado y voz",
    title: "Estado y voz",
    subtitle: "Lectura emocional basada en tono, ritmo y lenguaje.",
    status: "Serenidad detectada",
    tone: "ok",
    summary: "La voz y el lenguaje sugieren calma. La lectura se mantiene positiva y con buena confianza.",
    primaryAction: "Ver historial emocional",
    secondaryAction: "Configurar umbrales",
    metrics: [
      { label: "Tono", value: "Calmo" },
      { label: "Valencia", value: "Positiva" },
      { label: "Energía", value: "Serena" },
      { label: "Confianza", value: "89%" }
    ],
    timeline: [
      { time: "18:32", title: "Conversación tranquila", detail: "Ritmo de voz estable." },
      { time: "18:39", title: "Ligera tristeza", detail: "Cambio breve en semántica." },
      { time: "18:44", title: "Retorno a estabilidad", detail: "Se recupera tono sereno." }
    ]
  },
  alertas: {
    navLabel: "Alertas",
    title: "Alertas",
    subtitle: "Seguimiento de eventos que requieren atención del cuidador.",
    status: "Revisión sugerida",
    tone: "warn",
    summary: "Se detectó inmovilidad y falta de respuesta reciente. Conviene validar el estado de la habitación.",
    primaryAction: "Contactar cuidador",
    secondaryAction: "Marcar como resuelto",
    metrics: [
      { label: "Riesgo", value: "Alto" },
      { label: "Habitación", value: "Detectada" },
      { label: "Respuesta", value: "Pendiente" },
      { label: "Última alerta", value: "Hace 12 s" }
    ],
    timeline: [
      { time: "19:02", title: "Posible caída", detail: "Presencia inmóvil detectada." },
      { time: "19:05", title: "Sin respuesta", detail: "No hubo respuesta por voz." },
      { time: "19:08", title: "Cuidador notificado", detail: "Alerta enviada correctamente." }
    ]
  }
};

export const pageOrder = ["presencia", "estado", "alertas"];
