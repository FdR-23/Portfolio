# PORTFOLIO V2 — PRODUCT DOCUMENT

**Autor:** Federico Rampi  
**Estado:** En diseño  
**Versión:** 0.1  
**Última actualización:** Junio 2026

---

## 0. OBJETIVO DEL REDISEÑO

Rediseñar completamente el portfolio actual.

**El portfolio actual comunica demasiado:**
- frontend clásico
- muchas tecnologías
- portfolio de desarrollador genérico

**El nuevo portfolio debe comunicar:**
- Frontend Engineer
- experiencia construyendo producto
- capacidad real Full Stack
- resolución de problemas
- experiencia trabajando en producción

**NO debe sentirse:**
- junior
- portfolio template
- freelance
- bootcamp
- catálogo de tecnologías

**Debe sentirse:** Apple × Vercel. Visual limpio. Contenido fuerte. Experiencia primero.

---

## 1. OBJETIVOS DE NEGOCIO

**Prioridad:**
1. Conseguir mejores oportunidades laborales
2. Mejorar posicionamiento profesional
3. Aumentar salario
4. Mostrar experiencia real
5. Generar confianza técnica

**Métrica de éxito:** Un recruiter o CTO debe entender en menos de 30 segundos: qué hago, dónde trabajo, qué impacto tuve, por qué debería entrevistarme.

---

## 2. POSICIONAMIENTO

**Mensaje principal:** Frontend Engineer building real products.

**Mensaje secundario:** Trabajo construyendo y evolucionando aplicaciones reales conectando experiencia de usuario, producto y sistemas.

**Diferencial:** No solamente construyo interfaces. Entiendo negocio. Resuelvo problemas. Evoluciono sistemas existentes.

---

## 3. COSAS QUE SE ELIMINAN

- [ ] Foto grande hero
- [ ] Skills con logos
- [ ] Barras de porcentaje
- [ ] Timeline personal
- [ ] Pokémon
- [ ] Sección demasiadas tecnologías
- [ ] Texto motivacional
- [ ] Portfolio genérico
- [ ] Cards sin contexto
- [ ] Mucha animación
- [ ] Mucho texto

---

## 4. NUEVA ARQUITECTURA

**Orden definitivo (no agregar más secciones):**

1. Hero
2. Experiencia
3. Proyectos
4. Cómo trabajo
5. Sobre mí
6. Contacto

---

## 5. HERO

**Objetivo:** Explicar quién soy en 5 segundos.

**Contenido:**

```
Federico Rampi

Frontend Engineer
building real products.

Trabajo creando y evolucionando aplicaciones
utilizadas en entornos reales de producción.
```

**Botones:**
- Ver experiencia
- Ver proyectos
- Descargar CV

**Stack pequeño (solo 5 tecnologías):**
- React
- Next.js
- Laravel
- WebSocket
- PostgreSQL

**Pendientes:**
- [ ] Probar versiones del texto
- [ ] Definir animación
- [ ] Definir fondo

---

## 6. EXPERIENCIA (SECCIÓN PRINCIPAL)

**Objetivo:** Mostrar experiencia antes que proyectos.

**Formato:** Timeline.

### 42 Mate — 2023 — Actualidad

**Contenido a mostrar:**
- Desarrollo frontend
- Participación backend
- Integraciones
- Producto
- Evolución técnica
- Operación
- Incidentes

**Proyectos a mencionar:**
- Classroom Champions
- Pro Sports
- Sysbrazo
- Mi Fibrazo

**NO** mostrar tecnologías como protagonista acá.

**Pendiente:**
- [ ] Validar nombres públicos

---

## 7. PROYECTOS

**Orden definitivo:**
1. Sysbrazo
2. Mi Fibrazo
3. Classroom Champions
4. Pro Sports
5. Proyecto amigo

**Formato de cada caso:**
- Contexto
- Problema
- Mi aporte
- Tecnologías
- Resultado
- Lecciones

### Sysbrazo

**Objetivo:** Mostrar pensamiento producto.

**Caso principal:** Autodiagnóstico.

**Historia:** Portal → omnicanal → WhatsApp → operación

**Mostrar:** capturas, arquitectura simple, flujo

**Pendientes:**
- [ ] Capturas
- [ ] Redactar caso completo
- [ ] Ocultar datos privados

### Mi Fibrazo

**Mostrar:** Portal, recargas, diagnóstico, integraciones

**Pendientes:**
- [ ] Recopilar material

### Classroom Champions

**Caso principal:** Optimización carga.

**Problema:** Carga demoraba horas.

**Solución:** Procesamiento por chunks.

**Resultado:** horas → minutos

**Pendiente:**
- [ ] Validar número exacto

---

## 8. CÓMO TRABAJO

Eliminar sección Skills. Reemplazar por:

- Resolver antes que agregar complejidad
- Evolución gradual
- Producto primero
- Colaboración

**Pendiente:**
- [ ] Escribir ejemplos reales

---

## 9. SOBRE MÍ

**Objetivo:** No parecer junior.

**NO poner:**
- apasionado
- autodidacta
- me gustan los desafíos

**Hablar de:** producto, usuarios, sistemas, resolución.

**Borrador actual:**

> Me interesa construir productos que resuelvan problemas reales. Mi foco principal está en frontend pero trabajo habitualmente colaborando en backend, integraciones y evolución de sistemas.

**Pendiente:**
- [ ] Mejorar texto

---

## 10. DISEÑO

**Dirección:** Apple × Vercel

**Inspiración:**
- mucho espacio
- tipografía fuerte
- motion suave
- menos cajas

**NO usar:**
- gradientes fuertes
- cards pesadas
- glass excesivo

**Pendientes:**
- [ ] Tipografía
- [ ] Colores
- [ ] Layout desktop
- [ ] Layout mobile

---

## 11. EXPERIENCIA VISUAL

- Hero: 80vh
- Scroll suave
- Animaciones: solo contenido importante
- Velocidad: rápida
- Responsive: mobile primero

---

## 12. TECNOLOGÍA

**Posible stack (pendiente de definir):**

- Next.js
- Tailwind
- Motion
- MDX
- Shadcn
- Analytics
- SEO

---

## 13. MÉTRICAS (USAR CON MODERACIÓN)

**Mostrar solo impacto.**

**Ejemplos válidos:**
- 3 años experiencia
- horas → minutos
- Producción

**NO mostrar:**
- 100%
- 20 tecnologías
- porcentajes

---

## 14. CHECKLIST

### Contenido
- [ ] Hero
- [ ] Experiencia
- [ ] Proyectos
- [ ] Sobre mí

### Diseño
- [ ] Wireframe
- [ ] UI
- [ ] Mobile

### Implementación
- [ ] Componentes
- [ ] SEO
- [ ] Performance

### Publicación
- [ ] Deploy
- [ ] Analytics
- [ ] CV actualizado

---

## 15. NO OLVIDAR

No intentar impresionar. Intentar generar confianza.

---

## 16. STACK ACTUAL (V1 — lo que dejamos funcionando)

- Vite 8 + React 18
- Tailwind CSS v4
- shadcn/ui (Button + Dialog)
- i18next (ES/EN)
- AOS (Animate on Scroll)

**Comandos:**
```bash
npm run dev      # desarrollo
npm run build    # producción
npm run preview  # previsualizar build
```

---

*Próximo paso: definir stack V2 y arrancar wireframe.*
