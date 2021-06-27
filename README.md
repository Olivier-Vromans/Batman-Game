# Batman-Game

[link to game](https://olivier-vromans.github.io/Batman-Game/)

---

## Encapsulation

In mijn game heb ik alles private gemaakt behalve wat public moet zijn om gebruikt te kunnen worden. In de Entity Class zijn alle properties protected zodat deze in de Child Classes wel aangepast kan worden maar daar buiten niet.

ik maak gebruik van een Get functie in de UI class om de score die in de game behaald is te kunnen gebruiken in de Endscreen. Ik heb dit zo gedaan omdat ik dan de score private kan houden maar alsnog vanuit de endscreen de score kan uitlezen. De endscreen hoeft namelijk niet de score te wijzigen of heel de UI uit te lezen.

---  

## Composition

In mijn game gebruik gemaakt van compostion voor Batman en Catwoman. Beide zijn eigendom van een Superhero hierin is alleen het verschil van uiterlijk en spritesheets verdere zijn ze precies het zelfde. Enemy is een Array van de eigendom Enemy hierin kunnen meerdere enemies zitten die allemaal hetzelde zijn. Tenslotte is bullets eigendom van Bullet omdat deze na het schieten eigendom is van het spel omdat er verder geen invloed meer op uitgeoefend kan worden. Deze bevindin zich ook in een array omdat deze ook vaker voor kunnen komen. 

---

## Inheritance

hoi.

---

## Game development technieken

hoi.