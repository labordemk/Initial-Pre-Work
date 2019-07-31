//in the past, require() would be used to import the functions and code in external files and modules, but some files and modules are large and you may only need certain code from them. import can be used to choose which parts of a module or file to load si you can save time and memory.

"use strict";
import {capitalizeString} from "string_functions";
capitalizeString("hello!");
