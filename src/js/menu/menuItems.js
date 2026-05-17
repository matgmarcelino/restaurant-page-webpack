export const itemDisplayController = (() => {
    

    const createItem = (name, desc, tags, price) => {
        const item = document.createElement('div');
        item.className = 'item'
        const about = document.createElement('div');
        about.className = 'item-about';
        item.append(about);

        const pName = document.createElement('p')
        pName.className = 'item-name';
        pName.textContent = name;

        const pDesc = document.createElement('p');
        pDesc.className = 'item-desc';
        pDesc.textContent = desc;
        
        const pTags = document.createElement('p');
        pTags.className = 'tags';
        pTags.textContent = tags;

        about.append(pName, pDesc, pTags);

        const btns = document.createElement('div');
        btns.className = 'item-btn';
        item.append(btns);

        const pPrice = document.createElement('p');
        pPrice.textContent = '$' + price;

        const btn = document.createElement('button');
        btn.textContent = 'ADD';

        btns.append(pPrice, btn);

        return item;
    }
    
    const createTitle = (name, subtitle) => {
        const section = document.createElement('section');
        section.className = 'title';

        const pName = document.createElement('p');
        pName.className = 'name';
        pName.textContent = name;

        const pSubtitle = document.createElement('p');
        pSubtitle.className = 'subtitle';
        pSubtitle.textContent = subtitle;

        section.append(pName,pSubtitle);
        return section;
    }


    const smallPlates = () => {
        const main = document.createElement("main");
        const mainContainer = document.createElement("div");
        mainContainer.className = 'main-container';
        main.append(mainContainer);

        const title = createTitle("Small Plates", "Designed for the table. Order a few, share everything. All prepared over live fire or cast iron.");
        mainContainer.append(title);

        const items = document.createElement('section');
        items.className = 'items';
        mainContainer.append(items);
        
        const item1 = createItem('Ember-Roasted Beets', "Whipped goat cheese, candied pistachio, local honey, fresh thyme", "GF \u2022 V", 14);
        const item2 = createItem('Wood-Fired Oysters', "Half dozen, charred herb butter, sourdough breadcrumb, lemon", "GF available", 18);
        const item3 = createItem('Smoked Lamb Ribs', "Low-and-slow over cherry wood, pomegranate molasses glaze, mint yogurt, sumac", "GF", 22);
        const item4 = createItem('Cast Iron Mushrooms', "Wild blend, black truffle salt, shaved parmesan, lemon oil, grilled bread", "V", 13);
        const item5 = createItem('Charred Corn Bisque', "Fire-charred sweet corn, chipotle cr\u00e8me fra\u00eeche, cotija, smoked chili oil", "GF \u2022 V", 12);
        const item6 = createItem('Bone Marrow Toast', "Roasted marrow, caramelized shallot jam, pickled mustard seed, toasted sourdough", "Contains gluten", 17);

        items.append(item1, item2, item3, item4, item5, item6)



        return main;
        
    }

    const flatbreads = () => {
        const main = document.createElement("main");
        const mainContainer = document.createElement("div");
        mainContainer.className = 'main-container';
        main.append(mainContainer);

        const title = createTitle("Flatbreads", "Stone-baked to order in our wood-fired oven. Crisp edges, charred crust, bold toppings.");
        mainContainer.append(title);

        const items = document.createElement('section');
        items.className = 'items';
        mainContainer.append(items);

        const item1 = createItem('Ember & Fig', "Whipped ricotta, black mission fig, prosciutto, arugula, aged balsamic", "Contains gluten", 17);
        const item2 = createItem('Smoked Mushroom', "Wild mushroom blend, fontina, roasted garlic, fresh thyme, truffle oil", "V", 15);
        const item3 = createItem('Charred Tomato', "San Marzano crush, fresh mozzarella, basil oil, sea salt, chili flake", "V", 14);
        const item4 = createItem('Lamb & Harissa', "Spiced ground lamb, harissa, labneh, pickled red onion, mint", "Contains gluten", 18);
        const item5 = createItem('Roasted Butternut', "Butternut squash purée, gruyère, crispy sage, toasted pepitas, honey", "V", 15);
        const item6 = createItem('Clam & Pancetta', "Littleneck clams, pancetta, roasted garlic cream, lemon zest, parsley", "Contains gluten", 19);

        items.append(item1, item2, item3, item4, item5, item6);

        return main;
    }

    const fromTheHearth = () => {
        const main = document.createElement("main");
        const mainContainer = document.createElement("div");
        mainContainer.className = 'main-container';
        main.append(mainContainer);

        const title = createTitle("From The Hearth", "Mains cooked over open flame. Heritage cuts, whole fish, and slow-roasted vegetables.");
        mainContainer.append(title);

        const items = document.createElement('section');
        items.className = 'items';
        mainContainer.append(items);

        const item1 = createItem('Cast Iron Ribeye', "28-day dry-aged, bone marrow butter, charred shallot, smoked sea salt", "GF", 52);
        const item2 = createItem('Whole Branzino', "Salt-crusted, fennel pollen, preserved lemon, grilled herb salsa verde", "GF", 38);
        const item3 = createItem('Cherry Wood Duck', "Half duck, blackberry-juniper glaze, charred stone fruit, wild rice", "GF", 36);
        const item4 = createItem('Hearth-Roasted Chicken', "Heritage bird, brown butter jus, confit garlic, grilled sourdough", "Contains gluten", 28);
        const item5 = createItem('Smoked Short Rib', "48-hour braise over oak, red wine reduction, bone marrow polenta, gremolata", "GF", 42);
        const item6 = createItem('Ember-Roasted Cauliflower', "Whole head, tahini, pomegranate, dukkah, charred lemon", "GF • V", 24);

        items.append(item1, item2, item3, item4, item5, item6);

        return main;
    }

    const sides = () => {
        const main = document.createElement("main");
        const mainContainer = document.createElement("div");
        mainContainer.className = 'main-container';
        main.append(mainContainer);

        const title = createTitle("Sides", "Built for sharing. Fire-kissed vegetables and grains to round out the table.");
        mainContainer.append(title);

        const items = document.createElement('section');
        items.className = 'items';
        mainContainer.append(items);

        const item1 = createItem('Charred Brussels', "Bacon lardons, maple-sherry glaze, toasted hazelnut, parmesan", "GF", 11);
        const item2 = createItem('Smoked Potatoes', "Crushed fingerlings, crème fraîche, chive, smoked paprika oil", "GF • V", 10);
        const item3 = createItem('Grilled Asparagus', "Charred lemon, soft egg, brown butter breadcrumb, shaved pecorino", "V", 12);
        const item4 = createItem('Fire-Roasted Carrots', "Local honey, harissa yogurt, toasted cumin, fresh dill", "GF • V", 10);
        const item5 = createItem('Hearth Bread', "Wood-fired sourdough, cultured butter, flaky salt", "V", 8);
        const item6 = createItem('Wild Mushroom Farro', "Cracked farro, foraged mushrooms, thyme, aged sherry", "V", 12);

        items.append(item1, item2, item3, item4, item5, item6);

        return main;
    }

    const desserts = () => {
        const main = document.createElement("main");
        const mainContainer = document.createElement("div");
        mainContainer.className = 'main-container';
        main.append(mainContainer);

        const title = createTitle("Desserts", "Sweet endings touched by smoke, char, and seasonal fruit.");
        mainContainer.append(title);

        const items = document.createElement('section');
        items.className = 'items';
        mainContainer.append(items);

        const item1 = createItem('Smoked Chocolate Tart', "Dark chocolate ganache, smoked sea salt, cocoa nib brittle, crème fraîche", "V", 12);
        const item2 = createItem('Ember-Roasted Stone Fruit', "Charred peach, vanilla bean ice cream, brown butter crumble, basil", "V", 11);
        const item3 = createItem('Burnt Honey Panna Cotta', "Local honey, candied pistachio, citrus, olive oil", "GF • V", 10);
        const item4 = createItem('Wood-Fired Apple Galette', "Heirloom apples, calvados caramel, crème anglaise, toasted oat", "V", 12);
        const item5 = createItem('Smoked Vanilla Affogato', "Smoked vanilla gelato, espresso, hazelnut praline", "GF • V", 9);
        const item6 = createItem('Cheese Board', "Three local cheeses, honeycomb, charred fig jam, seeded crackers", "V", 18);

        items.append(item1, item2, item3, item4, item5, item6);

        return main;
    }

    const cocktails = () => {
        const main = document.createElement("main");
        const mainContainer = document.createElement("div");
        mainContainer.className = 'main-container';
        main.append(mainContainer);

        const title = createTitle("Cocktails", "House creations built around smoke, fire, and seasonal botanicals.");
        mainContainer.append(title);

        const items = document.createElement('section');
        items.className = 'items';
        mainContainer.append(items);

        const item1 = createItem('Smoked Old Fashioned', "Bourbon, applewood smoke, demerara, charred orange, aromatic bitters", "", 16);
        const item2 = createItem('Ember Negroni', "Mezcal, Campari, sweet vermouth, smoked rosemary, grilled grapefruit", "", 15);
        const item3 = createItem('Cast Iron Margarita', "Reposado tequila, charred lime, agave, smoked salt rim, jalapeño", "", 14);
        const item4 = createItem('Hearth & Honey', "Rye whiskey, burnt honey syrup, lemon, sage, sparkling wine float", "", 15);
        const item5 = createItem('Fireside Manhattan', "Smoked rye, vermouth, black walnut bitters, brandied cherry", "", 16);
        const item6 = createItem('Garden Smash', "Gin, muddled herbs, cucumber, elderflower, charred citrus", "", 14);

        items.append(item1, item2, item3, item4, item5, item6);

        return main;
    }

    const wine = () => {
        const main = document.createElement("main");
        const mainContainer = document.createElement("div");
        mainContainer.className = 'main-container';
        main.append(mainContainer);

        const title = createTitle("Wine", "A short, focused list. Old world classics and small-production new world picks.");
        mainContainer.append(title);

        const items = document.createElement('section');
        items.className = 'items';
        mainContainer.append(items);

        const item1 = createItem('Pinot Noir, Willamette', "Oregon. Bright cherry, forest floor, soft tannin. Pairs with duck.", "Glass", 14);
        const item2 = createItem('Châteauneuf-du-Pape', "Rhône, France. Garrigue, dark fruit, leather. Pairs with ribeye.", "Bottle", 78);
        const item3 = createItem('Chenin Blanc, Loire', "Vouvray, France. Quince, honey, wet stone. Pairs with branzino.", "Glass", 13);
        const item4 = createItem('Nebbiolo, Barolo', "Piedmont, Italy. Tar, rose, dried cherry. Pairs with short rib.", "Bottle", 92);
        const item5 = createItem('Albariño, Rias Baixas', "Spain. Salinity, citrus, stone fruit. Pairs with oysters.", "Glass", 12);
        const item6 = createItem('Syrah, Northern Rhône', "Crozes-Hermitage. Black pepper, smoked meat, violet. Pairs with lamb.", "Bottle", 68);

        items.append(item1, item2, item3, item4, item5, item6);

        return main;
    }

    const beerAndCider = () => {
        const main = document.createElement("main");
        const mainContainer = document.createElement("div");
        mainContainer.className = 'main-container';
        main.append(mainContainer);

        const title = createTitle("Beer & Cider", "Local taps and a handful of imports. Rotating selection, always cold.");
        mainContainer.append(title);

        const items = document.createElement('section');
        items.className = 'items';
        mainContainer.append(items);

        const item1 = createItem('Wasatch Pilsner', "Salt Lake City. Crisp, clean, lightly hopped. 4.8% ABV.", "Local", 7);
        const item2 = createItem('Epic Smoked Porter', "Utah. Beechwood smoke, dark chocolate, coffee. 6.5% ABV.", "Local", 9);
        const item3 = createItem('Allagash White', "Maine. Wheat ale, coriander, orange peel. 5.1% ABV.", "", 8);
        const item4 = createItem('Pilsner Urquell', "Czech Republic. Original golden lager. 4.4% ABV.", "Import", 8);
        const item5 = createItem('Mountain West Cider', "Salt Lake City. Heirloom apples, dry finish. 6.9% ABV.", "Local • GF", 8);
        const item6 = createItem('Etienne Dupont Cidre', "Normandy, France. Bottle-conditioned, funky, complex. 5.5% ABV.", "Import • GF", 12);

        items.append(item1, item2, item3, item4, item5, item6);

        return main;
    }

    const nonAlcoholic = () => {
        const main = document.createElement("main");
        const mainContainer = document.createElement("div");
        mainContainer.className = 'main-container';
        main.append(mainContainer);

        const title = createTitle("Non-Alcoholic", "Crafted with the same care as our cocktails. House syrups, fresh juice, smoked botanicals.");
        mainContainer.append(title);

        const items = document.createElement('section');
        items.className = 'items';
        mainContainer.append(items);

        const item1 = createItem('Smoked Citrus Spritz', "Charred grapefruit, rosemary syrup, soda, sea salt", "GF • V", 9);
        const item2 = createItem('Ember Shrub', "House blackberry shrub, ginger beer, charred lemon, mint", "GF • V", 8);
        const item3 = createItem('Garden Tonic', "Cucumber, basil, elderflower cordial, tonic water", "GF • V", 8);
        const item4 = createItem('House Lemonade', "Fresh-pressed lemon, burnt honey, thyme, sparkling water", "GF • V", 7);
        const item5 = createItem('Cold Brew Tonic', "Local cold brew, tonic, orange peel, vanilla", "GF • V", 7);
        const item6 = createItem('Hearth Hot Chocolate', "Smoked dark chocolate, steamed milk, sea salt, marshmallow", "V", 8);

        items.append(item1, item2, item3, item4, item5, item6);

        return main;
    }

    return { smallPlates, flatbreads, fromTheHearth, sides, desserts, cocktails, wine, beerAndCider, nonAlcoholic };
})();

export default itemDisplayController;