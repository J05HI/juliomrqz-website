---
published: '2013-09-12'
created: '2017-09-18'
modified: '2020-05-23T17:06:42Z'
description: Probability, risk and uncertainty are concepts that must be understood not only in the geosciences, but in life.
title: Bayes' Theorem and Natural Frequencies
# image: blog/probabilities-and-uncertainty/cover.jpg
# image_thumbnail: blog/probabilities-and-uncertainty/cover.thumbnail.jpg
canonical: 'https://latraza.wordpress.com/2013/09/12/probabilities-and-uncertainty-bayes-theorem-and-natural-frequencies/'
---

Probability, risk and uncertainty are concepts that must be understood not only in the geosciences, but in life. The way we process information in order to make decisions relies many times in the reduction of quantitative uncertainty. The more information we gather, the better the improvement of our prediction capabilities. This information is expressed as discrete probabilities or as probability density functions. In this post I intend to clarify through an example the concepts of joint and conditional probability and their relationship with Bayes Theorem. Two approaches will be presented in order to help you get the ideas: a probabilistic one and a frequentist one.

Before we see the example let's review the definitions

**Joint Probability (`$ P(X,Y) $` or `$ P(X∩Y) $`):** a statistical measure where the likelihood of two events occurring together and at the same point in time are calculated.

| **Independent events** |   **Dependent events**   |
| :--------------------: | :----------------------: |
| `$ P(X∩Y)=P(X).P(Y) $` | `$ P(X∩Y)=P(X).P(Y/X) $` |

**Conditional Probability (`$ P(X ❘ Y) $`):** probability that an event will occur, when another event is known to occur or have occurred.

`$ P(X ❘ Y) = P(X∩Y)/P(Y); P(Y)>0 $`

Joint probability is a measure of the intersection of two conditions, whereas conditional probability is the joint probability of two conditions normalized by the probability of the conditional event. So far, ¡so theoretic and boring!

Let's get to the example. This example was taken from a New York Times article of Steven Strogatz and has to do with the estimation of risk and the limits of certainty.

## The Problem

We have to estimate the **probability** that a woman **with a positive mammogram** in a **very low risk group**, with no symptoms or family history of breast cancer actually has breast cancer.

Once stated the problem, we need information, don't we? Here it is in the form of discrete probabilities or probabilistic facts:

 - The probability that a woman in this group has breast cancer is 0.8% (yes, less than 1 %).
 - In a group of women with breast cancer, the mammogram positive detection has a certainty probability of 90% (ninety percent of the time, the mammogram gets it right).
 - In a group of healthy women, the probability of mammograms giving a positive detection is 7% (These are the false positives of the mammogram test, it's not perfect! Everything has its uncertainty).
 - That's it! If a woman gets a positive mammogram, what is the probability that she actually has breast cancer?.


### The Bayesian Approach

This is the probabilistic approach promised in the introduction. The idea is to take advantage of Bayes theorem, which is a simple yet powerful equation relating the conditional probabilities of two events. The theorem looks like this:

`$ P(X ❘ Y)=P(Y ❘ X).P(X)/P(Y) $`

How do we adapt this theorem to our problem? That's the part that freaks everybody out! You feel like taking an exam, start sweating and don't know how to start (I have been there, I am there almost all of the time!).

First we have to write the given facts in this fancy “statistical” language of conditional probabilities. So:

**Facts:**

- `$ P(C+)=0.8% $` (Probability of having breast cancer in this low risk group).
- `$ P(+m ❘ C+)=90% $` (Probability of positive mammogram, given that a woman has actually breast cancer).
- `$ P(+m ❘ C-)=7% $` (Probability of positive mammogram, given that a woman is healthy–has no cancer).


**Problem:**

We want to know `$ P(C+ ❘ +m) $`, which is the probability of having breast cancer, given a positive mammogram.

I hope you are getting the differences here, specially between these two: `$ P(+m ❘ C+) $` and `$ P(C+ ❘ +m) $`. Both conditional probabilities ask, so to speak, different questions.

`$ P(+m ❘ C+) $`: What is the probability of having a positive mammogram if a patient have breast cancer already?

`$ P(C+ ❘ +m) $`: What is the probability of having breast cancer if a patient has a positive mammogram?

What is awesome about Bayes´ theorem is how those two different questions relate to each other.

I need a little visual help here. So I prepared a diagram showing the relationships above:

<blog-image src="blog/probabilities-and-uncertainty/figure_1.jpg" width="1646" height="696" alt="Figure 1: Visual representation of Conditional and Joint probabilities"></blog-image>

The diagram is not to scale but illustrates pretty well the dependencies and meaning of the probabilities. **Conditional probabilities** depend on a previous event and **Joint probabilities** are like areas that measure the uncertainty of an outcome. The bigger the area, the more probable that outcome becomes.

Bayes' theorem boils down to this:

`$ P(+C ❘ m+)=P(+m ❘ C+).P(+C)/P(m+) $`

We already have the probabilities of the numerator (initial facts) and the denominator, which measures the probability of a positive mammogram as an outcome, is the sum or union of the two blue areas (the joint probabilities of getting a positive mammogram together, either having breast cancer or not). So the final formula is:

`$ P(+C ❘ m+)=P(+m ❘ C+).P(+C)/(P(C+).P(m+ ❘ C+)+(1-P(C+)).P(+m ❘ C-)) $`

By doing the substitution, `$ P(+C ❘ m+) $` is around 9.39%. Problem solved!

This probabilistic approach has an incredible ability to be forgotten by students and practitioners alike, because most of the time we see equations and theorems as magical objects. This “magical objects” were developed or conceived to concentrate the mathematical relationships between variables in a compact way, but not as substitutes for logic and common sense. Let's see now how logical thinking and frequencies can help us solve the same problem.

### Frequentist Approach

Here we have to write the initial facts as frequencies or number of events in a population. Let's do it:

**Facts:**

- 8 out of a 1000 women in the low risk group have breast cancer.
- 9 out of 10 mammograms get it right with women with breast cancer.
- In 7 women out of a 100 healthy ones, the mammogram gets it wrong (7 false positives in a 100 trials on healthy women).

In a population of 1000 women in this low risk group, 8 will have breast cancer (Figure 2a). We need to know now how many of these healthy and non-healthy women will have a positive mammogram.  In the group of 8 women there is a 90% percent chance of getting a positive mammogram, so 7 out of those 8 will have a positive mammogram (`$ P(+m ❘ C+)=8*9/10 $` or around 7 women). In the remaining 992 healthy women, a 7 percent of them will have a positive mammogram, this mean (`$ P(+m ❘ C-)=992*7/100 $` or around 69). How many women will have a positive mammogram, either healthy or not? The answer is 7+69 or 76 (the union or sum of the joint probabilities or the blue circle in Figure 2b).

<blog-image src="blog/probabilities-and-uncertainty/figure_2.jpg" width="487" height="257" alt="Figure 2: a) Representation of women with breast cancer to healthy ones. b) The blue circle represents the union of the joint probabilities of getting a positive mammogram in the populations of 'a'.s"></blog-image>

If we want to know `$ P(+C ❘ +m) $`, we have to compare the number of women with cancer that actually get positively tested (`$ P(+C,+m) $` or `$ P(C+**∩**+m) $`) against the whole population of positive detections and false positives (the apparently crazy denominator of the Bayesian approach).

`$ P(+C ❘ +m)=7/76 $` (Seven women out of seventy-six will have breast cancer and positive mammogram). That is 9.21% since we have rounded up to integers.


## Conclusion

Both approaches do the same thing but depending on your way of thinking, one will be easier than the other. What is important to understand is the concept of uncertainty and how it surrounds everything, from medical tests like mammograms, HIV-tests and even DNA recognition to the weather and games of chance. I hope you have gotten a better insight into conditional and joint probability after going through the example.

If you are interested in uncertainty I recommend the book of Gerd Gigerenzer _**“Reckoning with Risk: Learning to Live with Uncertainty”**_ and as an extra recommendation this one from Nate Silver _**“The Signal and the Noise: Why So Many Predictions Fail-but Some Don't”**_.  The article of Steven Strogatz can be read here: [http://opinionator.blogs.nytimes.com/2010/04/25/chances-are/](http://opinionator.blogs.nytimes.com/2010/04/25/chances-are/).
