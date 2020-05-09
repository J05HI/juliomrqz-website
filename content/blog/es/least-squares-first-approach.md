---
slug: least-squares-first-approach
published: '2013-07-16'
created: '2017-09-18'
modified: '2020-05-09T20:25:25Z'
description: >-
  El problema de los mínimos cuadrados es muy interesante y recursivo en
  geofísica, especialmente en las técnicas de interpolación, inversión y
  filtrado.
title: Mínimos cuadrados - Primer acercamiento
headline: >-
  Los mínimos cuadrados son muy interesantes especialmente en las técnicas de
  interpolación, inversión y filtrado.
canonical: 'https://latraza.wordpress.com/2013/07/16/least-squares-first-approach/'
includeMathJax: 'True'
---


El problema de los mínimos cuadrados es muy interesante y recursivo en geofísica, especialmente en las técnicas de interpolación, inversión y filtrado. Mi primer acercamiento a los estudiantes en el tema es a través de la simple instalación de una curva de tres puntos en `$ R^2 $`.

Empecé por asumir un modelo para ajustar los datos, un modelo lineal para empezar. Un modelo lineal en `$ R^2 $` es de la forma:

`$ y=ax+b $`

Una vez que el modelo se ha sido establecido es tiempo para establecer las condiciones para los Mínimos Cuadrados. El propósito es minimizar una función cuadrática (`$ L^2 $`) que contiene la suma al cuadrado de las diferencias o errores entre los datos y la predicción del modelo asumido para esos datos.

Matemáticamente se vería así:

`$ L^2(a,b)=(ax_1+b-y_1)^2+(ax_2+b-y_2)^2+(ax_3+b-y_3)^2 $`

Como se puede ver `$ L^2 $` es una función de "a" y "b" que son los parámetros de ajuste del modelo.

¿Que viene despues? Bueno, ¡la minimización de la función! Como se puede recordar de las matemáticas, se tiene que tomar las derivadas parciales de las variables implicadas y ponerlas a cero. Como se muestra abajo:

`$ \frac{\partial L^2}{\partial b}=0 $`

Esas ecuaciones conducen a un sistema de ecuaciones que la mayor parte del tiempo en Geofísica está determinado o sobredeterminado. El sistema de ecuaciones se ve así:

`$ Ap=t $`

Donde "p" es un vector con los parámetros que se ajustan. Una vez que haya resuelto ese sistema de ecuaciones, habrás encontrado los parámetros de ajuste. Bastante simple, ¿no?.

Si echamos un vistazo más de cerca a la estructura del sistema de ecuaciones del problema de los Mínimos Cuadrados, podemos ver una estructura. ¿Cuál es el propósito de "A" y "t"?

En este momento digo: "A" relaciona los datos con el modelo elegido, se puede decir que muestra la forma en que los datos se ven a través del modelo, y "t" está relacionado con la salida deseada del ajuste, en en este caso, la mejor salida en el sentido de minimizar el error cuadrático. En este punto, los estudiantes tienden a creerme ciegamente, por lo que toman otro enfoque para el problema de mínimos cuadrados para aclarar los puntos difíciles de mi interpretación dudosa.

Con el fin de hacer mi punto, comienzo el ejercicio de otra formulación, una formulación que se asemeja de alguna manera al sistema de ecuaciones desde el principio. Lo que quiero es esto:

`$ ax_1+b=y_1 $`

`$ ax_2+b=y_2 $`

`$ ax_3+b=y_3 $`

Este sistema de ecuaciones puede ser escrito como:

`$ Ap=t $`

`$ \left(\begin{array}{cc}x_1&1\\ x_2&1\\ x_3&1\end{array}\right)\left(\begin{array}{c}a\\ b\end{array}\right)=\left(\begin{array}{c}y_1\\ y_2\\ y_3\end{array}\right) $`

Es un problema sobredeterminado, tres ecuaciones y dos variables. Este sistema se resuelve de la siguiente manera:

`$ (A^T.A).p=A^T.t $`

`$ p= (A^T.A)^{-1}.A^T.t $`

Siguiendo esta formulación se alcanzan los mismos resultados pero sin derivación parcial.
