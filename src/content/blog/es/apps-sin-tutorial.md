---
title: "Lo que Super Mario Bros me enseñó sobre diseñar apps sin tutorial"
description: "Cómo lograr que una persona aprenda a usar tu app mientras obtiene su primer resultado útil, sin pantallas de instrucciones."
date: 2026-11-10
translationKey: apps-without-tutorial
---

El Super Mario Bros de la NES no tiene tutorial. Enciendes la consola, aparece Mario parado a la izquierda de una pantalla casi vacía, y ya estás jugando. Nadie te dice que debes avanzar a la derecha, pero es el único lado con espacio. Nadie te explica que los enemigos hacen daño ni que puedes saltar sobre ellos; lo descubres con el primer Goomba. Para cuando terminas el primer nivel ya sabes jugar, y en ningún momento sentiste que te estaban enseñando.

Me di cuenta de eso y me quedé con una pregunta: ¿cómo lograr que una aplicación se sienta así de natural? Me puse a investigarlo y esto es lo que encontré.

## La idea central

Lo más importante es que la persona aprenda a usar la app mientras obtiene su primer resultado útil. No antes, con un recorrido de cinco pantallas, sino durante.

Igual que en Mario, el usuario debe descubrir las reglas actuando. Cada interacción debería seguir el mismo ciclo:

**Acción → Respuesta → Beneficio**

<img src="/diagrams/loop-es.svg" alt="Diagrama del ciclo: una acción (registro un gasto) produce una respuesta (aparece guardado) y un beneficio (veo cuánto llevo gastado), y el ciclo se repite" width="800" height="250" loading="lazy" decoding="async" />

Hago algo, la app me responde de forma clara y obtengo algo que me sirve. Si ese ciclo funciona, no hace falta explicar mucho más.

Para aterrizarlo voy a usar un ejemplo a lo largo de todo el artículo: una app para registrar gastos. En una app así, el diseño se sentiría natural si se cumple lo siguiente:

- La primera pantalla permite registrar algo concreto.
- El registro aparece guardado y actualiza un resultado que se entiende.
- Registrar de nuevo conserva el mismo patrón de interacción.
- La acción principal destaca y las opciones secundarias tienen menos presencia.

## Los tres momentos que hay que cuidar

Casi todo el esfuerzo de diseño suele irse al primer uso, pero hay tres momentos distintos y cada uno necesita atención:

1. **Empezar.** La primera vez que alguien abre la app.
2. **Registrar de forma recurrente.** El uso de todos los días, cuando la novedad ya pasó.
3. **Regresar después de una pausa.** Cuando alguien vuelve tras varios días sin usarla.

<img src="/diagrams/moments-es.svg" alt="Línea de tiempo con los tres momentos: empezar, registrar seguido y regresar después de varios días sin usar la app" width="800" height="215" loading="lazy" decoding="async" />

Los siete principios que siguen cubren esos tres momentos.

## 1. Convierte el primer uso en una tarea real y pequeña

En lugar de un recorrido de bienvenida, la primera pantalla debería pedir algo real: registrar un gasto. Es el equivalente a ese primer salto de Mario.

Para que funcione hay que pedir solamente lo necesario. Un monto basta para empezar. Las configuraciones complejas, como categorías, presupuestos o monedas, pueden esperar. La persona aprende interactuando y configura después, cuando ya entendió para qué sirve la app.

## 2. Muestra las opciones adicionales cuando aporten algo

El registro inicial captura el dato principal. Los detalles vienen después: una vez guardado el gasto, la app puede ofrecer añadir una nota, una categoría o una foto del recibo.

<img src="/diagrams/disclosure-es.svg" alt="Dos pantallas: el primer registro solo pide el monto; después de guardar, la app ofrece añadir nota, categoría o foto del recibo" width="800" height="305" loading="lazy" decoding="async" />

A esto se le llama divulgación progresiva: mostrar cada opción en el momento en que tiene sentido y no todas desde el inicio. La regla práctica es evitar demasiadas preguntas en muy poco tiempo. Cada pregunta extra antes del primer resultado es una oportunidad para que la persona cierre la app.

## 3. Haz que la respuesta del sistema enseñe

La respuesta de la app después de una acción es la mejor oportunidad para enseñar lo que sigue. Cuando el gasto queda creado, aparece en la lista junto con las acciones que ahora son posibles, como editar o deshacer. Nadie tuvo que explicar que los registros se pueden corregir: se ve.

Aquí hay un límite que vale la pena respetar. Con un solo registro la app puede confirmar que guardó la información y mostrarla de vuelta, pero no puede hablar de tendencias. Una gráfica de "tus gastos del mes" con un único dato no enseña nada. Las tendencias requieren más datos, así que es mejor mostrarlas cuando existan.

## 4. Da la ayuda junto a la acción que la necesita

Cuando sí hace falta explicar algo, el mejor lugar es justo donde se usa y justo cuando aparece por primera vez. El mensaje debe ser breve, descartable y recuperable: lo leo, lo cierro, y si después lo necesito lo puedo volver a encontrar.

Lo que evita la mayoría de las explicaciones son las etiquetas claras y los controles reconocibles. Nada de gestos secretos ni botones difíciles de descubrir. Si una función solo existe para quien adivina que hay que deslizar con dos dedos, para el resto de las personas no existe.

## 5. Optimiza especialmente el registro número veinte

El primer registro decide si alguien se queda, pero el número veinte decide si la app se vuelve un hábito. Para entonces la persona ya sabe usarla y lo único que quiere es terminar rápido.

Aquí ayuda conservar preferencias, ofrecer los elementos recientes, permitir repetir un registro anterior y automatizar la información cuando se pueda hacer de forma fiable. La condición es mantener visibles los valores sugeridos y facilitar su corrección: si la app adivina la categoría, debo poder verla y cambiarla con un toque.

También conviene decidir qué se captura a mano y qué de forma automática según el objetivo. Automatizar ahorra tiempo, pero hay casos en los que escribir el dato es justo lo que hace que la persona tome conciencia de él.

## 6. Vincula cuentas y permisos con una necesidad comprensible

Pedir que alguien cree una cuenta antes de ver para qué sirve la app es cobrar la entrada antes de mostrar el juego. Es mejor dejar que la persona empiece y ofrecerle la cuenta cuando la necesite: al querer un respaldo o sincronizar con otro dispositivo.

<img src="/diagrams/asking-es.svg" alt="Tres casos: al abrir la app no se pide nada; al querer un respaldo se ofrece crear una cuenta; al escanear un recibo se pide el permiso de cámara" width="800" height="285" loading="lazy" decoding="async" />

Lo mismo aplica a los permisos. Si uno es indispensable, hay que explicar su propósito en el momento de pedirlo. "Necesitamos tu cámara para escanear el recibo" se acepta mucho más fácil que una ventana de permiso que aparece sin contexto al abrir la app.

## 7. Diseña un regreso sencillo

Tarde o temprano la persona va a dejar de usar la app unos días. Lo que encuentre al volver define si retoma o la borra.

El regreso debería conservar el historial y permitir continuar desde hoy, sin exigir completar todos los huecos. Si la app me recibe con diez días pendientes por llenar, lo que siento es culpa, y lo más fácil es cerrarla. Si me recibe con la misma pantalla de siempre lista para registrar el gasto de hoy, sigo como si nada.

## Para cerrar

Cuando Mario se topa con el primer Goomba no hay texto en pantalla. Hay una acción posible, una respuesta inmediata y una recompensa por hacerlo bien. Cuarenta años después, la mayoría de las apps siguen abriendo con un carrusel de instrucciones que casi nadie lee.

La próxima vez que diseñe un flujo voy a hacerme una sola pregunta: ¿qué puede lograr esta persona en sus primeros segundos, y qué va a aprender al lograrlo?
