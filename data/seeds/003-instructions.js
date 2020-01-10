
exports.seed = async (knex) => {
  await knex("instructions").insert([
    { id: 1, name: "Fudge Cake Instructions", step: 1, one: "Lightly grease an 8x10 baking dish and line with parchment paper. Melt 8 oz of chocolate with butter, cool for 5 mins.", recipe_id: 1 },
    { id: 2, name: "Fudge Cake Instructions", step: 2, two: "Whisk eggs and sugar until thick, while cake cooks. Beat in cooled chocolate mixture and fold in flour and baking powder.", recipe_id: 1 },
    { id: 3, name: "Fudge Cake Instructions", step: 3, three: "Spoon batter into pan. Bake 325 F for 45-50 mins. Let cool for 10 mins, then turn onto wire rack to cool completely. Remove paper", recipe_id: 1 },
    { id: 4, name: "Fudge Cake Instructions", step: 4, four: "Icing: 6 oz of chocolate and cream and heat gently, stirring in a saucepan. Let cool for 1 hour ", recipe_id: 1 },
    { id: 5, name: "Tea Bread Instructions", step: 1, one: "Grease loaf pan and line with parchment paper", recipe_id: 2 },
    { id: 6, name: "Tea Bread Instructions", step: 2, two: "Beat butter, sugar, eggs, flour, baking powder and cocoa powder in a bowl until smooth. Add 4 oz of chopped chocolate to bowl and mix well", recipe_id: 2 },
    { id: 7, name: "Tea Bread Instructions", step: 3, three: "Put batter into pan and bake at 325 F for 50 mins or until firm. Loosen cake out of pan and place on a wire rack to cool.", recipe_id: 2 },
    { id: 8, name: "Tea Bread Instructions", step: 4, four: "Buttercream: Melt broken pieces of chocolate in a bowl. Beat butter and powdered sugar until pale and creamy. Beat in the melted chocolate. Spread over cooled cake and sprinkle remaining chopped chocolate ", recipe_id: 2 },
    // { id: 9, name: "Raspberry Souffles Instructions", step: 1, one: "Break the chocolate into squares and put them in a bowl and melt, then cool. Whisk the egg yolks and fold in the flour and baking powder.", recipe_id: 3 },
    // { id: 10, name: "Raspberry Souffles Instructions", step: 2, two: "Whisk the egg whites and fine sugar until they form soft peaks. Beat a spoonful of egg whites into the chocolate mixture to loosen it before gently folding in the rest.", recipe_id: 3 },
    // { id: 11, name: "Raspberry Souffles Instructions", step: 3, three: "Put raspberries into lightly greased ramekins, pour over the chocolate mixture and cook in a preheated oven, 375 F for 12-15 mins. until they have risen.", recipe_id: 3 },
    // { id: 12, name: "Raspberry Souffles Instructions", step: 4, four: "Sprinkle the souffles with powdered sugar and serve with extra berries, if desired.", recipe_id: 3 },
    // { id: 13, name: "Puddle Cake Instructions", step: 1, one: "Rub a little butter all over sides of baking dish and stand dish on baking sheet. Put the butter, 1/3 cup of lightly packed brown sugar and eggs in a large bowl and sift in the flour, 3 tablespoons cocoa powder and baking powder. Beat together until batter is smooth and pour into dish. Smooth top", recipe_id: 4 },
    // { id: 14, name: "Puddle Cake Instructions", step: 2, two: "Sauce: put remaining 2 tablespoons cocoa powder and brown sugar in small bowl and mix in a little of the measured boiling water to make a smooth paste. Gradually mix in the rest of the water, then pour cocoa sauce over the batter.", recipe_id: 4 },
    // { id: 15, name: "Puddle Cake Instructions", step: 3, three: "Bake at 350 F for 15 mins. or until sauce has sunk to the bottom of the dish and the cake is well risen.", recipe_id: 4 },
    // { id: 16, name: "Puddle Cake Instructions", step: 4, four: "Sift powdered sugar over cake. Serve with vanilla ice cream or whipped cream, if desired.", recipe_id: 4 },
  ]);
}

// Steps table 1:* Create a table one step 
// Id column, instructions column, recipe_id column