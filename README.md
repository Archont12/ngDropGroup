ngDropGroup
=============

Native Angular / vanilla JS dropdown group control.

**Licensed under [cc by-sa 3.0](http://creativecommons.org/licenses/by-sa/3.0/) with attribution required**

Tested in Chrome, FF & IE9.

[Demo can be seen here](http://sw4.github.io/ngDropGroup/)

Usage
====

Include `ng-dropGroup` as an application dependancy.

```(html)
<ng-drop-group dg-placeholder="Please select" dg-model="myModel" dg-source="mySource"></ng-drop-group>
```

Where `myModel` is the variable name in the parent scope to read/save selections to, and `mySource` is the variable in the parent scope to fetch groups from- in the format:

```(javascript)
$scope.mySource = [{
				name: 'group1',
				items: [{
					name: 'item1',
					value: 'itemval1'
				}, {
					name: 'subitem2',
					value: 'itemval2'
				}]
			}, {
				name: 'group2',
				items: [{
					name: 'item3',
					value: 'itemval3'
				}, {
					name: 'item4',
					value: 'itemval4'
				}]
			}, {
				name: 'group3',
				items: [{
					name: 'item5',
					value: 'itemval5'
				}, {
					name: 'item6',
					value: 'itemval6'
				}]
			}];
```
