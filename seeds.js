var mongoose   = require("mongoose");
var Blog = require("./models/blog");

var data = [
    {
        title: "Portuguese Egg Tarts",
        image: "https://res.cloudinary.com/monocosmo/image/upload/v1534644922/Portuguese-Egg-Tart.jpg",
        body: "Portuguese colonists brought pastel de nata to Macau, and over the years it has evolved into its own particular tart influenced by the"
              + " British custard tarts that were brought over to Hong Kong. Nowadays this crisp, flaky crust holding a creamy custard center Portuguese"
              + " dessert can be found in almost any Chinese bakery.<br><br><strong>INGREDIENTS</strong><br><br>Dough<br><li>½ teaspoon kosher salt</li>"
              + " <li>1 cup all-purpose flour, plus more for dusting</li><li>½ cup (1 stick) unsalted butter, softened</li><br>Filling and Assembly"
              + " <br><br><li>1 lemon</li><li>1 3–4-inch cinnamon stick</li><li>¾ cup sugar</li><li>⅓ cup all-purpose flour</li><li>⅛ teaspoon kosher salt</li>"
              + " <li>1½ cups whole milk, divided</li><li>6 large egg yolks</li><li>1 teaspoon vanilla extract</li><br>"
    },
    {
        title: "Mooncake",
        image: "https://res.cloudinary.com/monocosmo/image/upload/v1534644922/yolk-moon-cake.jpg",
        body: "Mid-Autumn Festival is a big thing in China, and eating mooncakes with family members is a must. It’s the the 15th day of the 8th month"
              + " of the lunar year – the middle day of autumn and the day of the full moon. It’s the day that family members sit together and enjoy"
              + " mooncakes and a peaceful night with the brightest moon.<br><br><strong>INGREDIENTS</strong><br><br>Dough<br><li>Flour 100 g, all-purpose variety</li>"
              + " <li>Golden syrup 60 g</li><li>Alkaline water 1/2 tsp</li><li>Vegetable oil 28g</li><br>Filling<br><br><li>Lotus seed paste 420g</li>"
              + " <li>Egg yolk 6 each, salted</li><li>Rose-flavoured cooking wine 1 tbsp</li><br>"
    },
    {
        title: "Sweetheart cake",
        image: "https://res.cloudinary.com/monocosmo/image/upload/v1534644922/wifecake.jpg",
        body: "Sweetheart cake, or wife cake is a traditional Cantonese pastry with a thin crust of flaky pastry, and made with a filling of winter melon,"
              + " almond paste, and sesame, and spiced with five spice powder. The outside is toasted into a seductive golden color, and the layers of the"
              + " pastry are as thin as cotton tissue.'Wife cake' is the translation of lou po beng from Cantonese,"
              + " The cake is still popular in Hong Kong and Mainland China. Many people in Hong Kong, as well as professional chefs, also bake modern variants."
              + " <br><br><strong>INGREDIENTS</strong><br><br>Glutenous Rice stuffing<br><li>110g of water</li><li>60g of fine sugar</li><li>30g of salad oil</li>"
              + " <li>70g of glutinous rice flour</li><li>30g of fried white sesame seeds</li><li>40g of melon sugar</li><br>Lard Dough<br><br>"
              + " <li>100g of medium-gluten flour</li><li>20g of fine sugar</li><li>50g of warm water</li><li>25g of lard</li><li>80g of flour</li><li>45g of lard</li><br>"
    },
    {
        title: "Pineapple bun",
        image: "https://res.cloudinary.com/monocosmo/image/upload/v1534644922/PineappleButter_750x390.jpg",
        body: "Pineapple Bun, known as bor lor bao in Cantonese, or bo luo bao in Mandarin, is a very popular Cantonese/Hong Kong style pastry served as"
              + " a dim sum snack, breakfast bun, or dessert pastry and it’s sold in Chinese bakeries all around the world. If you’ve never had a pineapple bun"
              + " before, the first thing you’d notice is that signature golden, crumbly crust which resembles the pattern of pineapple skin."
              + " Underneath that crunchy and sweet crust is a fluffy and soft bun that sometimes comes with a custard or red bean stuffing."
              + " <br><br><strong>INGREDIENTS</strong><br><br>Bread dough<br><li>2/3 cup heavy cream</li><li>1 cup, plus 1 tablespoon milk</li><li>1 large egg</li>"
              + " <li>1/3 cup sugar</li><li>1/2 cup cake flour</li><li>3 1/2 cups bread flour</li><li>1 tablespoon active dry yeast</li><li>1 1/2 teaspoons salt</li>"
              + " <br>Topping dough<br><br><li>¼ cup nonfat dry milk powder</li><li>1¼ cups all-purpose flour</li><li>½ teaspoon baking soda</li>"
              + " <li>¼ teaspoon baking powder</li><li>2/3 cup superfine sugar</li><li>¼ cup vegetable shortening</li><li>2 tablespoons milk</li><li>1 egg yolk</li><li>1/8 teaspoon vanilla extract</li><br>"
    }
];

function seedDB(){
    // Remove all data
   Blog.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed content");
        // add seed data
        data.forEach(function(seed){
            Blog.create(seed, function(err, blog){
                if(err){
                    console.log(err);
                }else{
                    console.log("added a blog");
                }
            });
        });
    });
};

module.exports = seedDB;