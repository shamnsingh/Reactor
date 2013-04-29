// Function to load data from ChemDoodle servers.

// ChemDoodle.iChemLabs.getMoleculeFromDatabase('morphine', {
// 	'database' : 'pubchem'
// }, function (mol) {
// 	var morphine = ChemDoodle.readMOL(mol);
// 	alertMolecular(mol);
// });


//Sample molecules in the database.
var res_fact = 2;
var pyridineMolFile = 'Molecule Name\n  CHEMDOOD01011121543D 0   0.00000     0.00000     0\n[Insert Comment Here]\n  6  6  0  0  0  0  0  0  0  0  1 V2000\n    0.0000    1.0000    0.0000   N 0  0  0  0  0  0  0  0  0  0  0  0\n   -0.8660    0.5000    0.0000   C 0  0  0  0  0  0  0  0  0  0  0  0\n   -0.8660   -0.5000    0.0000   C 0  0  0  0  0  0  0  0  0  0  0  0\n    0.0000   -1.0000    0.0000   C 0  0  0  0  0  0  0  0  0  0  0  0\n    0.8660   -0.5000    0.0000   C 0  0  0  0  0  0  0  0  0  0  0  0\n    0.8660    0.5000    0.0000   C 0  0  0  0  0  0  0  0  0  0  0  0\n  1  2  2  0  0  0  0\n  2  3  1  0  0  0  0\n  3  4  2  0  0  0  0\n  4  5  1  0  0  0  0\n  5  6  2  0  0  0  0\n  6  1  1  0  0  0  0\nM  END';
var morphine = ChemDoodle.readMOL(pyridineMolFile);

var caffeineMolFile = 'Molecule Name\n  CHEMDOOD08070920033D 0   0.00000     0.00000     0\n[Insert Comment Here]\n 14 15  0  0  0  0  0  0  0  0  1 V2000\n   -0.3318    2.0000    0.0000   O 0  0  0  1  0  0  0  0  0  0  0  0\n   -0.3318    1.0000    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -1.1980    0.5000    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n    0.5342    0.5000    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -1.1980   -0.5000    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -2.0640    1.0000    0.0000   C 0  0  0  4  0  0  0  0  0  0  0  0\n    1.4804    0.8047    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n    0.5342   -0.5000    0.0000   C 0  0  0  1  0  0  0  0  0  0  0  0\n   -2.0640   -1.0000    0.0000   O 0  0  0  1  0  0  0  0  0  0  0  0\n   -0.3318   -1.0000    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n    2.0640   -0.0000    0.0000   C 0  0  0  2  0  0  0  0  0  0  0  0\n    1.7910    1.7553    0.0000   C 0  0  0  4  0  0  0  0  0  0  0  0\n    1.4804   -0.8047    0.0000   N 0  0  0  1  0  0  0  0  0  0  0  0\n   -0.3318   -2.0000    0.0000   C 0  0  0  4  0  0  0  0  0  0  0  0\n  1  2  2  0  0  0  0\n  3  2  1  0  0  0  0\n  4  2  1  0  0  0  0\n  3  5  1  0  0  0  0\n  3  6  1  0  0  0  0\n  7  4  1  0  0  0  0\n  4  8  2  0  0  0  0\n  9  5  2  0  0  0  0\n 10  5  1  0  0  0  0\n 10  8  1  0  0  0  0\n  7 11  1  0  0  0  0\n  7 12  1  0  0  0  0\n 13  8  1  0  0  0  0\n 13 11  2  0  0  0  0\n 10 14  1  0  0  0  0\nM  END\n> <DATE>\n07-08-2009\n';
var caffeine = ChemDoodle.readMOL(caffeineMolFile);

constructCanvas(window.innerWidth / res_fact, window.innerHeight, morphine);
var myCanvas;
var can_type = 1;

$(document).ready(function() {

	$('#View1').click(function(e) {
		can_type = 1;
		constructCanvas(window.innerWidth / res_fact, window.innerHeight, morphine);
	});

	$('#View2').click(function(e) {
		can_type = 2;
		constructLineModel(window.innerWidth / res_fact, window.innerHeight, morphine);
	});

});

// Function to construct the canvas.
function constructCanvas(height, width, molecule) {
	myCanvas = new ChemDoodle.TransformCanvas('transformer', height, width, true);
	myCanvas.rotate3D = true;
	myCanvas.specs.atoms_useJMOLColors = true;
	myCanvas.specs.atoms_circles_2D = true;
	myCanvas.specs.bonds_symmetrical_2D = false;
	myCanvas.specs.bonds_atomLabelBuffer_2D = 1;
	myCanvas.specs.bonds_color = '#000000';
	myCanvas.specs.fog_mod_3D = 3;
	myCanvas.specs.backgroundColor = '#FFFFFF';
	myCanvas.loadMolecule(molecule);
};

// Function to construct the line model for the molecule.
function constructLineModel(height, width, molecule) {
	myCanvas = new ChemDoodle.TransformCanvas('transformer', height, width, true);
	ChemDoodle.default_bondLength_2D = 14.4;
	ChemDoodle.default_bonds_width_2D = .6;
	ChemDoodle.default_bonds_saturationWidth_2D = .18;
	ChemDoodle.default_bonds_hashSpacing_2D = 2.5;
	ChemDoodle.default_atoms_font_size_2D = 10;
	ChemDoodle.default_atoms_font_families_2D = ['Helvetica', 'Arial', 'sans-serif'];
	ChemDoodle.default_atoms_displayTerminalCarbonLabels_2D = true;
	ChemDoodle.default_atoms_useJMOLColors = true;
	myCanvas.loadMolecule(molecule);
}

window.onresize = function(event) {
	if (can_type == 1) {
		constructCanvas(window.innerWidth / res_fact, window.innerHeight, morphine);
	} else if (can_type == 2) {
		constructLineModel(window.innerWidth / res_fact, window.innerHeight, morphine);
	}
};

//myCanvas.click = handleMouseMove;

function handleMouseMove(event) {
	delete myCanvas;
	constructCanvas(window.innerWidth / res_fact, window.innerHeight, morphine);
}