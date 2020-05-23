---
published: '2013-07-16'
created: '2017-09-18'
modified: '2020-05-23T17:06:42Z'
description: >-
  The problem of Least Squares is a very interesting and recursive one in
  Geophysics, especially in interpolation, inversion and filtering techniques.
title: Least Squares - First Approach
headline: >-
  The Least Squares is a very interesting especially in interpolation, inversion
  and filtering techniques.
canonical: 'https://latraza.wordpress.com/2013/07/16/least-squares-first-approach/'
---


The problem of Least Squares is a very interesting and recursive one in Geophysics, especially in interpolation, inversion and filtering techniques. My first approach to students into the subject is through the simple fitting of a three-point curve in `$ R^2 $`.

I start by assuming a model to fit the data, a linear model to begin with.  A linear model in `$ R^2 $` is of the form:

`$ y=ax+b $`

Once the model has been stablished is time to set the conditions for Least Squares.  The purpose is to minimize a quadratic function (`$ L^2 $`) that contains the squared sum of differences or errors between the data and the prediction of the model assumed for that data.

Mathematically it would look like this:

`$ L^2(a,b)=(ax_1+b-y_1)^2+(ax_2+b-y_2)^2+(ax_3+b-y_3)^2 $`

As can be seen `$ L^2 $` is a function of "a" and "b" which are the fitting parameters of the model.

What comes next? Well, minimization of the function!  As you may recall from math, one has to take the partial derivatives of the variables involved and set them to zero.  As shown below:

`$ \frac{\partial L^2}{\partial b}=0 $`

Those equations lead to a system of equations that most of the time in Geophysics is either determined or overdetermined.  The system of equations looks like this:

`$ Ap=t $`

Where "p" is a vector with the parameters to fit. Once you solve that system of equations, you will have found the fitting parameters.  Pretty simple, isn't it?.

If we take a closer look at the structure of the system of equations of the Least Squares problem, one can see a structure. What is the purpose of "A" and "t"?

At this moment I say: "A" relates the data to the chosen model, one can say that it shows the way in which your data is seen through the model, and "t" is related to the desired output of the fit, in this case, the best output in the sense of minimizing the quadratic error.    At this point students tend to blindly believe me, so I take another approach to the Least Squares problem to clarify the tricky points of my dubious interpretation.

In order to make my point, I start the exercise from another formulation, a formulation that resembles somehow the system of equations from the very beginning.  What I want is this:

`$ ax_1+b=y_1 $`

`$ ax_2+b=y_2 $`

`$ ax_3+b=y_3 $`

This system of equations can be written as:

`$ Ap=t $`

`$ \left(\begin{array}{cc}x_1&1\\ x_2&1\\ x_3&1\end{array}\right)\left(\begin{array}{c}a\\ b\end{array}\right)=\left(\begin{array}{c}y_1\\ y_2\\ y_3\end{array}\right) $`


That's an overdetermined problem, three equations and two variables. This system is solved as follows:

`$ (A^T.A).p=A^T.t $`

`$ p= (A^T.A)^{-1}.A^T.t $`

Following this formulation one reaches the same results but without partial derivation.
