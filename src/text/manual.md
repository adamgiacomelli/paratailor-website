# User's manual
##### PT9   /paratailor PT9  2018 /


This manual covers the following topics, listed bellow:
 
1. Geometry and other data
 
2. Ribs,morphing,cross ports
 
3. Central line positions
 
4. Base line shape morphing
 
5. Wingtip shape
 
6. Line's morphing
 
7. Billow compensation
 
8. Bridle & risers
 
9. Reinforcements and miniribs
 
10. Diagonals
 
11. Patterns design, upper and lower
 
12. CFD (twist angle & pilot position)
 
13. Loading
 
14. Scaling models
 
15. Output

## 1. Geometry data
 
Geometry dimensions: [m]  by default,
some small geometry values in [mm]
weight in [kg],
angles in [deg]
 
Total span[m],
Pilot’s hang height[m],
carabiner distance[m],
profile (rotation) alignment [%],
angle of twist [deg],
Pilot+equipment weight[kg],
Pulling force in horizontal direction [kg] {*g}
several sewing  allowances in [mm] ...
control points diameter [mm] (for DXF output files)
 
Totala number of cells – <accept change> or ignore to preserve the current value
 
 
## 2. Ribs,morphing,cross ports
 
<Import>  button:
- airfoils in the default form of text files { X[]   Y[] } table, normalized or not …
- default directory /PT9work/Airfoils
- select the airfoil you will use and morph it as necessarry,
- assign it as the main, (or,and) transitional airfoil,
- define rib, where transition starts up to the last rib (tip)
- maximum  two airfoils can be is used
if exact one airfoil type is used, the transition rib is the last one (last rib),
else it is optional … (slider)
<apply>
 
 
 
## 3. Central line positions
- select the position of lines  A,B,C,D,E and F  in %  from the leading edge,
- select opening points O1,O2 in %, where O1 is start opening, O2 is end opening,
 
- select O2, where the opening is closed
- generally: move appropriate <small> buttons to the desired position
 
Using line-morphing, you can adjust lines all over the wing to the desired shape;
be aware of overlapping lines,what would result in unexpected behaviour …
 
 
## 4. Base line shape morphing
 
- base line should lay under the main circle (the center in hangning point)
- at the top center, base line should be directed horizontal (but not necesarry! )
- use arrow keys to adjust fine position of the small buttons
- every change of button position results in the change of canopy area and aspect ratio,which depends also on the flat wingtip shape !
 
## 5. Wingtip shape
 
The same technique is used as at base-line shape morphing
The size of the picture can be zoomed,translated, as you need.
In [proportional cells widths] tab,
use the horizontal scroll bar to adjust
(more or less) the ribs positions to the (cell-width / cell-depth)  ratio.
This results essentially on skin tension.
If the ratio is too big, billow compensation is very big…
If the ratio is constant over the canopy,  billow compensation is uniform …
 
In the [rib’s offset] tab,
use the horizontal scroll bar to adjust the position of the single
rib (offset from normal position is zero by default)
select the rib number first in the spin box,
then use the scroll bar to move the rib left or right…
 
## 6. Line's morphing
 
The positions at the center cell remain unchanged. The changes can be large at the wingtip.
 
 
## 7. Billow compensation
 
The cell’s (airfoil) surface is virtually unfolded in clockwise direction from the trailing edge down to the trailing edge up as the rectangle. The red dotted line represents the actual pattern shape.
Wheel scales (exaggerates) the actual morphism, one can better see the transitions of the red line.
Cyan line represents the morphism calculated by-theory.
 
With the mouse click on cyan buttons bellow the rectangle they can be moved left or right inside each button’s domain. So the transition shapes are changing.
Billow up/down percent tells, how much of the compensation wil be used in a real case.
Use upper side billow compensation checbox enables the auto-creation of a pattern somewhere between top and nose point.
The extension graph shows the extension % of the whole wingtip canopy.
 
## 8. Bridle & risers
 
Loading Tab:  contains definition of number of line-grups.
Vertical scroll bars (A,B,C,D,E) defines the weights of points in particular line.
As default set it to 99, later it can be fine tuned, especially for lines C,D,E
Deafault loading percents are (0.50,0.30,0.10,0.10) if 4 lines are used (+brakes)
Percents are recalculated in the case of less then 4 lines,for example:
3 – lines …. (0.50,0.30,0.20)
2 – lines …..(0.50,0.50)     / minimal number of lines is 2 /
Raiser Tab:  is usually created after all data for line grups are present
creation of the riser follows the same logic as the creation of the linegrups
On  OK exit from this page,lingrups are attached to risers.
 
Bridel model Tab:
 
Select the line grup first,what opens the virtual wingtip rectangle and display bridle, if one is already created.
 All bridle data are entered here. The starting points for selected grup line are yellow points in the rectangle,which virtually represents the canopy, the fasten points. Right click on the point
opens the context menu to carry out f.e.  <add new rope>. If pressed, watch the red line from selected point to cursor. Press right button again,line is fixed.
Two lines are connected, if two endpoints are the same point (watch hoovered). Connections go downwards,there are no upward connections!
The bridle tree must end with a single root point,which is attached to particular riser’s start point.
Green points on  the rectangle are fixed, those out of rectangle can be moved.
Moving green points changes the lengths of ropes,in the case of pyramids,it changes the angles of connections.
Moving root point doesn’t change anything,it behaves scale-like.
Green numbers represent max join-angle in degrees  in the case of at least two lines.
Right click on Red point show context menu, enables direct change of length and diameter of the line-rope.
Auxiliary window check box 2D dim:  open/close auxiliary window with a face preview in “D space,actual dimensions,angles etc…
Auxiliary window check box 3D dim:  open/close auxiliary window with a preview in 3D space
Bridle tables Tab:
- preview of the structure and dimensions in the bridle for every single linegrup.
When shown on the page,it can be edited with a mouse. One can move points to more apropriate position, especially for printing !
Right mouse button opens  printing request.
 
## 9. Reinforcements and miniribs
milar Tab:
two horizontal scroll bars  sets milar’s upper end or down end position,
end points are connected with a line,containing 5 inner points: they are simply used
with a left mouse button to morph the inner shape of milar,
if both positions are at the most left position,there is no milar
Rear miniribs Tab:
one  horizontal scroll bar is at the most right position,if no miniribs
otherwise move it to the desired left position
selection to build: the list of cells with a rear minirib
 
Front miniribs Tab:
two  horizontal scroll bar are at the most left position,if no front miniribs
/ the same principle as milar creation ,but no further morfing /
otherwise move it to the desired right position
selection to build: the list of cells with a front minirib
 
Upper reinf.  Tab:
two  horizontal scroll bars // upper side and lower side // are at the most left position,if no upper reinforcement; ; reinforcement follow the outer shape of the rib
/ the same as milar creation ,further morphing of the both final parts with two green points /
otherwise move it to the desired right position
Lower reinf.  Tab:
two  horizontal scroll bars // Left side and right side  // are at the most rightleft position,if no upper reinforcement; reinforcement follow the outer shape of the rib
/ further morphing of the both final parts  with two red points /
otherwise move it to the desired right position
 
Straps.  Tab:
Straps can be created at the positions of A,B,C,D,E  lines.
They can be either fixed width or proportional.
Click on the line in the right side windows to select line:
in the left side windows set appropriate values as: width, type(fixed or selected),
check box (is selected)  put strap line to be used or not …
 selection to build: the list of cells with a strap
 
## 10.Diagonals
diagonals plan Tab:
two windows for diagonals: simple case only D1 window is used,in more complex case D2 is used also lower control window shows cross view of diagonals.
 