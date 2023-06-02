// Listes de prénoms et de noms
var liste_prenoms = ["José", "Christophe", "Michel", "Christine", "Clara", "Jean Michel", "Francis", "Jean François", "Eric", "Benoît", "René", "Fredo", "Philippe", "Martin", "Jean", "Alfred", "Didier", "Tony", "Jean Louis", "Albert", "Johnny", "Günther", "Amélie", "Carlos", "Lucien", "Dominique","Gustave", "Daryl", "Cindy", "Helmut", "Julia", "Jimmy", "Samuel", "Hervé", "Christian", "Claude", "Hugo", "Cédric", "Jean Luc", "Pascal", "Dorothée", "Frédéric", "Aurélie"];

var liste_noms = ["Radis", "Courgette", "Cheesecake", "Poivron", "Bifteck", "Tenders", "Couscous", "Carbonara", "Rösti", "Choucroute", "Bolognaise", "Gaspacho", "Potiron", "Burger", "Rôti","Tomate", "Raclette", "Potage", "Sushi", "Gnocchi", "Von Frituur", "Parmesan", "Lasagne", "Flamiche", "Falafel", "Pancake", "Jambon", "Friture", "Surimi", "Velouté", "Béchamel", "Nuggets", "Bavette", "Tartare", "Cabillaud", "Croûton", "Sardine", "Rognon", "Yaourt", "Tajine", "Cheddar", "Brochette", "Merguez", "Tacos", "Persil", "Côtelette", "Blanquette"];

// Fonction pour générer un nom
function genererNom() {
    var prenom = liste_prenoms[Math.floor(Math.random() * liste_prenoms.length)];
    var nom = liste_noms[Math.floor(Math.random() * liste_noms.length)];
    var nomComplet = prenom + " " + nom;
    document.getElementById("resultat").textContent = nomComplet;
}