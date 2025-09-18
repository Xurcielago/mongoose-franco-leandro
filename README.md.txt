Trabajo de TLP II sobre práctica de Mongoose, alumno Franco Sian, Leandro Francisco.

Relaciones: 

1 a 1: Warship y Builder, una nave puede haber sido construida por una empresa.

1 a muchos: Warship y Armament, una nave posee un variado arsenal de armas.
//Referenciado, una misma pieza de equipamiento puede ser instalada en varias naves,
pero se debe específicar la cantidad que esa nave lleva específicamente.
(Por ejemplo, 2 × twin 20.3 cm/45 Type 41 naval guns)

1 a muchos: Warship y armoured_parts
//Embebido, la armadura de una nave se divide en varias partes (casco, monturas, lado), con su grosor correspondiente
pero la información de esta es única de cada nave, a diferencia de las armas.

muchos a muchos: Warship y Battle, una nave pudo haber participado en varias batallas,
una batalla involucra conflicto entre muchas naves
//Referenciado