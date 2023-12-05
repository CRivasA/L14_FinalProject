//final project JS scrips

//Create a refresh button listener
document.getElementById("refresh").addEventListener('click',refreshFun)
function refreshFun(){
    console.log("refreshing")
    location.reload()
}

//Create meal plan button listener
document.getElementById("myButton").addEventListener('click',mealPlan)
function mealPlan()
    {
        // get value of name input
        let uName = document.getElementById("username").value;
        // get value of goal input
        let uGoal = document.getElementById("goal").value;
        console.log(uGoal)
        // get the value of email input
        let uEmail = document.getElementById("useremail").value;
        //console.log(uEmail)
        if (emailcheck(uEmail) == true){
            var umenu = menu(uGoal)            

                // open a web site   
            myText = ("<html>\n<head\n<title><h2>Weekly Meal Plan!</h2><br></title>\n</head>\n<body>\n");
            myText += ("Hello " +uName+ "<br>This your meal plan for this week with " +uGoal+ " calories per day:<br>");
            myText +=("<h3>Monday</h3>")
            myText +=("<a><strong>Breakfast :&emsp;</strong>"+umenu.Monday[0]+"<a><br><a><strong>AM Snack:&emsp;</strong>"+umenu.Monday[1]+"<a><br><a><strong>Lunch :&emsp;&emsp;</strong>"+umenu.Monday[2]+"<a><br><a><strong>PM Snack:&emsp;</strong>"+umenu.Monday[3]+"<a><br><a><strong>Dinner :&emsp;&emsp;</strong>"+umenu.Monday[4])
            myText +=("<h3>Tuesday</h3>")
            myText +=("<a><strong>Breakfast :&emsp;</strong>"+umenu.Tuesday[0]+"<a><br><a><strong>AM Snack:&emsp;</strong>"+umenu.Tuesday[1]+"<a><br><a><strong>Lunch :&emsp;&emsp;</strong>"+umenu.Tuesday[2]+"<a><br><a><strong>PM Snack:&emsp;</strong>"+umenu.Tuesday[3]+"<a><br><a><strong>Dinner :&emsp;&emsp;</strong>"+umenu.Tuesday[4])
            myText +=("<h3>Wednesday</h3>")
            myText +=("<a><strong>Breakfast :&emsp;</strong>"+umenu.Wend[0]+"<a><br><a><strong>AM Snack:&emsp;</strong>"+umenu.Wend[1]+"<a><br><a><strong>Lunch :&emsp;&emsp;</strong>"+umenu.Wend[2]+"<a><br><a><strong>PM Snack:&emsp;</strong>"+umenu.Wend[3]+"<a><br><a><strong>Dinner :&emsp;&emsp;</strong>"+umenu.Wend[4])
            myText += ("</body>\n</html>");              
            flyWindow = window.open('about:blank','Your Meal PLan','width=800,height=600,left=200,top=200');
            flyWindow.document.write(myText);
        }
        else{
            window.alert("Invalid e-mail! Please enter a valid e-mail address.")
        }
    }
    
function emailcheck(email) {
    // check email validator
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(emailRegex.test(email))
    return emailRegex.test(email);
}
function menu(uGoal){    
    if (uGoal == 2000){
        var m_menu={Monday:["1 serving Baked Banana-Nut Oatmeal Cups and 1/2 apple", "1 clementine",
        "1 serving Veggie & Hummus Sandwich","1/2 Banana","1 serving Sheet-Pan Chicken Fajita Bowls with 1/2 cup cooked brown rice"], 
        Tuesday:["1 serving Muesli with Raspberries", "1 oz. Cheddar cheese 1 hard-boiled egg", "1 serving Chipotle-Lime Cauliflower Taco Bowls", "1/2 cup raspberries", "1 serving Sheet-Pan Chicken Fajita Bowls with 1/2 cup cooked brown rice"],
        Wend:["1 serving Egg in a Hole Peppers with Avocado Salsa", "1/2 apple", "1 serving Curried Sweet Potato & Peanut Soup", "1 cup raspberries and 1 oz. dark chocolate", "serving Spinach Ravioli with Artichokes & Olives"]}
    }
    else if (uGoal == 4000){
        var m_menu={Monday:["1 grapefruit, 2 poached eggs , and 1 slice 100% whole wheat toast", "1 clementine","One fresh pear and 22 almonds", "1 fried egg ,1 slice whole wheat bread, and 1/2 avocado, 1/2 apple", "1 banana and 2 tablespoons peanut butter", "5-ounce sirloin steak, 1 roasted sweet potato, 1 cup cooked spinach ,1 cup green beans"], 
        Tuesday:["1 cup cooked oatmeal, 1/2 cup blueberries, and 1/2 cup non-fat milk", "1 cup grapes, and 14 walnuts", "One whole wheat tortilla, 4 ounces turkey, 1 slice cheddar cheese,1 cup mixed greens", "1 cup cottage cheese, and 1/2 cup blueberries", "Veggie burger, Whole grain bun , 1 slice cheddar cheese, and 1 sliced apple"],
        Wend:["Overnight Oats (1 mashed banana, 2 tablespoons chia seeds, 1/2 cup oats, 1 cup almond milk)", "1 cup baby carrots, 1 cup cauliflower pieces, 2 tablespoons ranch dressing", "Large garden salad (3 cups mixed greens with 1 cup cherry tomatoes, 1/4 avocado, with vinaigrette)", "One fresh pear", "1 serving Chicken & Cucumber Lettuce Wraps"]}
    }
    return m_menu
}