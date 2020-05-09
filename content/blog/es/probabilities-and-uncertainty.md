---
slug: "probabilities-and-uncertainty"
published: '2013-09-12'
created: '2017-09-18'
modified: '2020-05-09T20:25:25Z'
description: >-
  Probabilidad, riesgo e incertidumbre son conceptos que deben entenderse no
  sólo en las geociencias, sino en la vida.
title: Teorema de Bayes y Frecuencias Naturales
headline: >-
  Probabilidad, riesgo e incertidumbre son conceptos que deben ser entendidos en
  la vida.
canonical: 'https://latraza.wordpress.com/2013/09/12/probabilities-and-uncertainty-bayes-theorem-and-natural-frequencies/'
includeMathJax: 'True'
---

Probabilidad, riesgo e incertidumbre son conceptos que deben entenderse no sólo en las geociencias, sino en la vida. La forma en que procesamos la información para tomar decisiones depende muchas veces de la reducción de la incertidumbre cuantitativa. Cuanta más información recopilemos, mejoraran nuestras capacidades para predecir. Esta información es expresada como probabilidades discretas o funciones de densidad de probabilidad. En este post pretendo aclarar a través de un ejemplo de los conceptos de probabilidad conjunta y condicional y su relación con el Teorema de Bayes. Se presentarán dos enfoques para ayudarle a obtener las ideas: una probabilística y una frecuente.

Antes de ver los ejemplos, veamos las definiciones.

**Probabilidad conjunta (`$ P(X,Y) $` o `$ P(X∩Y) $`):** una medida estadística donde se calcula la probabilidad de que se produzcan dos eventos que ocurren juntos y en el mismo punto en el tiempo.

| **Eventos independientes** | **Eventos dependientes** |
| :------------------------: | :----------------------: |
|   `$ P(X∩Y)=P(X).P(Y) $`   | `$ P(X∩Y)=P(X).P(Y/X) $` |

**Probabilidad condicional (`$ P(X ❘ Y) $`):** probabilidad de que ocurra un evento, cuando se sabe que ocurre o ha ocurrido otro evento.

`$ P(X ❘ Y) = P(X∩Y)/P(Y); P(Y)>0 $`

La probabilidad conjunta es una medida de la intersección de dos condiciones, mientras que la probabilidad condicional es la probabilidad conjunta de dos condiciones normalizadas por la probabilidad del evento condicional. Hasta ahora, ¡tan teórico y aburrido!

Veamos el ejemplo. Este ejemplo fue tomado de un artículo de Steven Strogatz del New York Times y tiene que ver con la estimación del riesgo y los límites de la certidumbre.

## El problema

Tenemos que estimar la **probabilidad** de que una mujer **con una mamografía positiva** en un **grupo de riesgo muy bajo**, sin síntomas o antecedentes familiares de cáncer de mama realmente tiene cáncer de mama.

Una vez declarado el problema, necesitamos información, ¿no? Aquí está en forma de probabilidades discretas o hechos probabilísticos:

 - La probabilidad de que una mujer en este grupo tenga cáncer de mama es del 0,8% (sí, menos del 1%).
 - En un grupo de mujeres con cáncer de mama, la detección positiva de la mamografía tiene una probabilidad de certeza del 90% (noventa por ciento del tiempo, el mamograma lo hace bien).
 - En un grupo de mujeres sanas, la probabilidad de que las mamografías den una detección positiva es del 7% (Estos son los falsos positivos de la prueba de mamografía, no es perfecta, todo tiene su incertidumbre).
 - ¡Eso es todo! Si una mujer obtiene una mamografía positiva, ¿cuál es la probabilidad de que realmente tenga cáncer de mama?.

### El Enfoque Bayesiano

Este es el enfoque probabilístico prometido en la introducción. La idea es aprovechar el teorema de Bayes, que es una simple y poderosa ecuación que relaciona las probabilidades condicionales de dos eventos. El teorema se parece a esto:

`$ P(X ❘ Y)=P(Y ❘ X).P(X)/P(Y) $`

¿Cómo adaptamos este teorema a nuestro problema? ¡Esa es la parte que hace estragos a todos! Usted se siente como tomar un examen, empieza a sudar y no sabe cómo empezar (he estado allí, estoy allí casi todo el tiempo!).

Primero tenemos que escribir los hechos dados en este sofisticado lenguaje "estadístico" de probabilidades condicionales. Asi que:

**Hechos:**

- `$ P(C+)=0.8% $` (Probabilidad de tener cáncer de mama en este grupo de bajo riesgo).
- `$ P(+m ❘ C+)=90% $` (Probabilidad de mamografía positiva, dado que una mujer tiene realmente cáncer de mama).
- `$ P(+m ❘ C-)=7% $` (Probabilidad de mamografía positiva, dado que una mujer es sana/no tiene cáncer).

**Problema:**

Queremos saber `$ P (C+ | +m) $`, cual es la probabilidad de tener cáncer de mama, dado un mamograma positivo.

Espero que usted esté consiguiendo las diferencias aquí, especialmente entre estos dos: `$ P(+m ❘ C+) $` y `$ P(C+ ❘ +m) $`. Ambas probabilidades condicionales piden, por así decirlo, diferentes preguntas.

`$ P(+m ❘ C+) $`: ¿Cuál es la probabilidad de tener una mamografía positiva si un paciente ya tiene cáncer de mama?

`$ P(C+ ❘ +m) $`: ¿Cuál es la probabilidad de tener cáncer de mama si un paciente tiene una mamografía positiva?

Lo que es impresionante sobre el teorema de Bayes es cómo se relacionan entre sí esas dos preguntas diferentes.

Necesito un poco de ayuda visual aquí. Así que preparé un diagrama que muestra las relaciones anteriores:

<ImageBlog src="blog/probabilities-and-uncertainty/figure_1.jpg" width="1646" height="696" alt="Figura 1: Representación visual de probabilidades condicionales y conjuntas"/>

El diagrama no está a escala, pero ilustra muy bien las dependencias y significado de las probabilidades. **Las probabilidades condicionales** dependen de un evento previo y **Las probabilidades conjuntas** son como las áreas que miden la incertidumbre de un resultado. Cuanto mayor es el área, más probable es que el resultado se convierte.

El teorema de Bayes se reduce a esto:

`$ P(+C ❘ m+)=P(+m ❘ C+).P(+C)/P(m+) $`

Ya tenemos las probabilidades del numerador (hechos iniciales) y el denominador, que mide la probabilidad de un mamograma positivo como resultado, es la suma o unión de las dos áreas azules (las probabilidades conjuntas de obtener una mamografía positiva juntos, ya sea tener cáncer de mama o no). Así que la fórmula final es:

`$ P(+C ❘ m+)=P(+m ❘ C+).P(+C)/(P(C+).P(m+ ❘ C+)+(1-P(C+)).P(+m ❘ C-)) $`

Haciendo la sustitución, `$ P(+C ❘ m+) $` es de alrededor del 9,39%. ¡Problema resuelto!

Este enfoque probabilístico tiene una increíble habilidad para ser olvidado tanto por los estudiantes como por los practicantes, porque la mayoría de las veces vemos ecuaciones y teoremas como objetos mágicos. Estos "objetos mágicos" fueron desarrollados o concebidos para concentrar las relaciones matemáticas entre variables de forma compacta, pero no como sustitutos de la lógica y el sentido común. Veamos ahora cómo el pensamiento lógico y las frecuencias pueden ayudarnos a resolver el mismo problema.

### Enfoque de frecuencia

Aquí tenemos que escribir los hechos iniciales como frecuencias o número de eventos en una población. Vamos a hacerlo:

**Hechos:**

- 8 de cada 1000 mujeres del grupo de bajo riesgo tienen cáncer de mama.
- 9 de cada 10 mamografías lo hacen bien con las mujeres con cáncer de mama.
- En 7 mujeres de 100 sanas, la mamografía se equivoca (7 falsos positivos en 100 ensayos en mujeres sanas).

En una población de 1000 mujeres en este grupo de bajo riesgo, 8 tendrán cáncer de mama (Figura 2a). Necesitamos saber ahora cuántas de estas mujeres sanas y no sanas tendrán una mamografía positiva. En el grupo de 8 mujeres hay un 90% de probabilidad de obtener una mamografía positiva, de modo que 7 de esas 8 tendrán una mamografía positiva (`$ P(+m ❘ C+)=8*9/10 $` o alrededor 7 mujeres). En el resto de 992 mujeres sanas, un 7 por ciento de ellas tendrán una mamografía positiva, esto significa (`$ P(+m ❘ C-)=992*7/100 $` o alrededor de 69). ¿Cuántas mujeres tendrán una mamografía positiva, sana o no? La respuesta es 7 + 69 o 76 (la unión o la suma de las probabilidades conjuntas o el círculo azul en la figura 2b).

<ImageBlog src="blog/probabilities-and-uncertainty/figure_2.jpg" width="487" height="257" alt="Figure 2: a) Representation of women with breast cancer to healthy ones. b) The blue circle represents the union of the joint probabilities of getting a positive mammogram in the populations of 'a'.s"/>

Si queremos saber `$ P(+C ❘ +m) $`, tenemos que comparar el número de mujeres con cáncer que realmente se someten a pruebas positivas (`$ P(+C,+m) $` or `$ P(C+**∩**+m) $`) contra toda la población de detecciones positivas y falsos positivos (el denominador aparentemente loco del enfoque bayesiano).

`$ P(+C ❘ +m)=7/76 $` (Siete de las mujeres de setenta y seis tendrá cáncer de mama y mamografía positiva). Eso es 9.21% ya que hemos redondeado a números enteros.

## Conclusión

Ambos enfoques hacen lo mismo, pero dependiendo de su forma de pensar, uno será más fácil que el otro. Lo que es importante entender es el concepto de incertidumbre y cómo lo rodea todo, desde pruebas médicas como mamografías, pruebas de VIH e incluso el reconocimiento de ADN al clima y los juegos de azar. Espero que hayas obtenido una mejor comprensión de la probabilidad condicional y conjunta después de pasar por el ejemplo.

Si estás interesado en la incertidumbre, recomiendo el libro de Gerd Gigerenzer _**“Reckoning with Risk: Learning to Live with Uncertainty”**_ y como una recomendación adicional este de Nate Silver _**“The Signal and the Noise: Why So Many Predictions Fail-but Some Don't”**_. El artículo de Steven Strogatz se puede leer aquí: [http://opinionator.blogs.nytimes.com/2010/04/25/chances-are/](http://opinionator.blogs.nytimes.com/2010/04/25/chances-are/).

