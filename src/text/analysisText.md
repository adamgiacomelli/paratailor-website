# How to use 3D analysis

You can work two model MODES:
- smooth model; canopy is as it would be rigid from chosen geometry ,takes around 10 seconds
- inflated model / canopy is inflated via skin tension
factor as it is,takes around 20 times more time / up to 2-3 minutes,
depends much on your computer's speed and number of cores /two cores minimum/
If there was CFD on this model already done,you see 3D model image on the left,

the pilot position window is on the right.

Important: pilot position is the last information needed to complete the model !

After this is done,one can start to export all necessary part to dxf format !

Now you can play with:
- twist angles;
- profile twist alignment in [% from LE],probably around 0-25%,

(99% is not appropriate for sure)


when twist angle is being set or changed, always use

RECALCULATE button ,what should take some time

when this is  finished,continue with

POLARS preview button to watch the polar table

Inside this window you can set  4  parameters:

-Oswald factor e: 0.9 .. 1.4

- pilot's cross square  in m2

- total weight (pilot+harness+...)

- tracking force in kg

Two constants are fixed on purpose:
Pilot's Cd is set to 0.78, a bit conservative

Ropes Cd is set to 1.0, which is good choice!

You can see several graphs on the left side.

Sum ropes length and moment factor for ropes moment are calculated from

paraglider's geometry.

Important: In Bridle Tab you can set diameters for your ropes.

From polar table you can see the several possible flight solutions,
it is up to you to select the proper one for your paraglider!

On exit ,the table is saved,so it takes some time to load previous attempts

That's it for now !



