import openai
import os
from flask import Flask, request



# Set your OpenAI API key

# Assistant ID
assistant_id = "asst_0gCnV9wFE8ZYuUYmOLg7Li1i"

# Create a thread
# thread = openai.ChatCompletion.create(
#     model="gpt-3.5-turbo",
#     messages=[
#     {"role": "system", "content": "You are a helpful assistant."},
#     {"role": "user", "content": "Hello!"},
# ])

# Run an instruction
instruction = "What is deficency in '{health_condition}'?"
# response = openai.ChatCompletion.create(model="gpt-3.5-turbo",
# messages=[
#     {"role": "system", "content": "You are a helpful assistant."},
#     {"role": "user", "content": "Hello!"},
#     {"role": "assistant", "content": instruction},
# ])

# Retrieve the assistant's response
# assistant_response = response['choices'][0]['message']['content']

# print("Assistant's response:", assistant_response)

# Set your OpenAI API key here

def get_holistic_info(health_condition: str):
    """
    Retrieves information on alkaline foods with high pH balance for a given health condition.

    Parameters:
    - health_condition: str
        The specific health condition for which alkaline foods are being searched.

    Returns:
    - str:
        A comprehensive report on alkaline foods, potential deficiencies in vitamins and nutrients,
        and warnings about foods that may adversely affect human body function in relation to the given health condition.
        The report also includes a reminder to consult with a healthcare professional for personalized advice.
    """

    # Dictionary of alkaline foods with high pH balance for different health conditions
# Dictionary of alkaline foods with high pH balance for different health conditions
alkaline_foods = {
    "acid reflux": {
        "foods": ["amaranth greens (callaloo, a variety of greens)", "avocado", "Bell peppers",
                "Chayote (Mexican squash)", "cucumber", "dandelion greens", "Garbanzo beans",
                "Izote (cactus flower/cactus leaf)", "kale", "Lettuce (all except shitake)",
                "Nopales (Mexican cactus)", "Okra", "Olives", "onions",
                "sea Vegetables (wakame, dulse, arame, hijiki, nori)", "squash",
                "tomato (cherry and plum only)", "tomatillo", "turnip greens", "watercress",
                "purslane (verdolaga)", "wild arugula", "Apples", "bananas (the smallest one or the burro/midsize/original banana)",
                "berries (all varieties, no cranberries)", "Elderberries (in any form)",
                "cherries", "currants", "dates", "figs", "grapes (seeded)",
                "limes (key limes, with seeds)", "mango", "melons (seeded)",
                "orange (seville or sour preferred, difficult to find)", "papayas", "peaches",
                "pears", "plums", "prickly pear (cactus fruit)", "prunes", "raisins (seeded)",
                "soft jelly coconuts", "soursops (latin or west indian markets)", "tamarind",
                "burdock tea", "chamomile tea", "Elderberry tea", "Fennel tea", "Ginger",
                "Raspberry teas", "tila tea", "grains: amaranth, fonio, kamut, quinoa, rye, spelt, tef, wild rice",
                "hemp seeds", "raw sesame seeds", 'raw sesame "Tahni" butter', "walnuts", "brazil nuts",
                "oils: olive oil (do not cook), coconut oil (do not cook), sesame oil, hempseed oil, avocado oil",
                "mild flavors: basil, bay leaf, cloves, dill, oregano, savory, sweet basil, tarragon, thyme, achiote",
                "cayenne pepper", "onion powder", "habanero", "sage", "pre agave syrup (from cactus)", "date sugar"],
        "deficiencies": ["vitamin A", "vitamin C", "vitamin K", "folate", "fiber", "potassium", "magnesium", "omega-3 fatty acids"],
        "benefits": ["reduced acidity", "anti-inflammatory properties"],
        "cautions": ["Limit intake of acidic foods", "Avoid high-fat foods", "Be cautious with citrus fruits"],
    },
    "arthritis": {
        "foods": ["amaranth greens (callaloo, a variety of greens)", "avocado", "Bell peppers",
                "Chayote (Mexican squash)", "cucumber", "dandelion greens", "Garbanzo beans",
                "Izote (cactus flower/cactus leaf)", "kale", "Lettuce (all except shitake)",
                "Nopales (Mexican cactus)", "Okra", "Olives", "onions",
                "sea Vegetables (wakame, dulse, arame, hijiki, nori)", "squash",
                "tomato (cherry and plum only)", "tomatillo", "turnip greens", "watercress",
                "purslane (verdolaga)", "wild arugula", "Apples", "bananas (the smallest one or the burro/midsize/original banana)",
                "berries (all varieties, no cranberries)", "Elderberries (in any form)",
                "cherries", "currants", "dates", "figs", "grapes (seeded)",
                "limes (key limes, with seeds)", "mango", "melons (seeded)",
                "orange (seville or sour preferred, difficult to find)", "papayas", "peaches",
                "pears", "plums", "prickly pear (cactus fruit)", "prunes", "raisins (seeded)",
                "soft jelly coconuts", "soursops (latin or west indian markets)", "tamarind",
                "burdock tea", "chamomile tea", "Elderberry tea", "Fennel tea", "Ginger",
                "Raspberry teas", "tila tea", "grains: amaranth, fonio, kamut, quinoa, rye, spelt, tef, wild rice",
                "hemp seeds", "raw sesame seeds", 'raw sesame "Tahni" butter', "walnuts", "brazil nuts",
                "oils: olive oil (do not cook), coconut oil (do not cook), sesame oil, hempseed oil, avocado oil",
                "mild flavors: basil, bay leaf, cloves, dill, oregano, savory, sweet basil, tarragon, thyme, achiote",
                "cayenne pepper", "onion powder", "habanero", "sage", "pre agave syrup (from cactus)", "date sugar"],
        "deficiencies": ["vitamin C", "vitamin D", "omega-3 fatty acids"],
        "benefits": ["anti-inflammatory properties", "joint health support"],
        "cautions": ["Limit intake of processed foods", "Moderate consumption of nightshade vegetables", "Consult with a rheumatologist"]

    
    },

# Continuing with more health conditions
    "diabetes": {
        "foods": ["avocado", "Bell peppers", "Chayote (Mexican squash)", "cucumber", "dandelion greens",
            "Garbanzo beans", "Izote (cactus flower/cactus leaf)", "kale", "Lettuce (all except shitake)",
            "Nopales (Mexican cactus)", "Okra", "Olives", "onions", "sea Vegetables (wakame, dulse, arame, hijiki, nori)",
            "squash", "tomato (cherry and plum only)", "tomatillo", "turnip greens", "watercress",
            "purslane (verdolaga)", "wild arugula", "Apples", "bananas (the smallest one or the burro/midsize/original banana)",
            "berries (all varieties, no cranberries)", "Elderberries (in any form)", "cherries", "currants", "dates",
            "figs", "grapes (seeded)", "limes (key limes, with seeds)", "mango", "melons (seeded)",
            "orange (seville or sour preferred, difficult to find)", "papayas", "peaches", "pears", "plums",
            "prickly pear (cactus fruit)", "prunes", "raisins (seeded)", "soft jelly coconuts",
            "soursops (latin or west indian markets)", "tamarind", "burdock tea", "chamomile tea", "Elderberry tea",
            "Fennel tea", "Ginger", "Raspberry teas", "tila tea", "grains: amaranth, fonio, kamut, quinoa, rye, spelt, tef, wild rice",
            "hemp seeds", "raw sesame seeds", 'raw sesame "Tahni" butter', "walnuts", "brazil nuts",
            "oils: olive oil (do not cook), coconut oil (do not cook), sesame oil, hempseed oil, avocado oil",
            "mild flavors: basil, bay leaf, cloves, dill, oregano, savory, sweet basil, tarragon, thyme, achiote",
            "cayenne pepper", "onion powder", "habanero", "sage", "pre agave syrup (from cactus)", "date sugar"],
    "deficiencies": ["fiber", "vitamin C", "magnesium", "omega-3 fatty acids"],
    "benefits": ["blood sugar regulation", "heart health support"]
},
"osteoporosis": {
    "foods": ["amaranth greens (callaloo, a variety of greens)", "avocado", "Bell peppers",
            "Chayote (Mexican squash)", "cucumber", "dandelion greens", "Garbanzo beans",
            "Izote (cactus flower/cactus leaf)", "kale", "Lettuce (all except shitake)",
            "Nopales (Mexican cactus)", "Okra", "Olives", "onions", "sea Vegetables (wakame, dulse, arame, hijiki, nori)",
            "squash", "tomato (cherry and plum only)", "tomatillo", "turnip greens", "watercress",
            "purslane (verdolaga)", "wild arugula", "Apples", "bananas (the smallest one or the burro/midsize/original banana)",
            "berries (all varieties, no cranberries)", "Elderberries (in any form)", "cherries", "currants", "dates",
            "figs", "grapes (seeded)", "limes (key limes, with seeds)", "mango", "melons (seeded)",
            "orange (seville or sour preferred, difficult to find)", "papayas", "peaches", "pears", "plums",
            "prickly pear (cactus fruit)", "prunes", "raisins (seeded)", "soft jelly coconuts",
            "soursops (latin or west indian markets)", "tamarind", "burdock tea", "chamomile tea", "Elderberry tea",
            "Fennel tea", "Ginger", "Raspberry teas", "tila tea", "grains: amaranth, fonio, kamut, quinoa, rye, spelt, tef, wild rice",
            "hemp seeds", "raw sesame seeds", 'raw sesame "Tahni" butter', "walnuts", "brazil nuts",
            "oils: olive oil (do not cook), coconut oil (do not cook), sesame oil, hempseed oil, avocado oil",
            "mild flavors: basil, bay leaf, cloves, dill, oregano, savory, sweet basil, tarragon, thyme, achiote",
            "cayenne pepper", "onion powder", "habanero", "sage", "pre agave syrup (from cactus)", "date sugar"],
    "deficiencies": ["calcium", "vitamin D", "vitamin K", "magnesium"],
    "benefits": ["bone health support", "calcium absorption"]
},
"digestive issues": {
    "foods": ["avocado", "Bell peppers", "Chayote (Mexican squash)", "cucumber", "dandelion greens",
            "Garbanzo beans", "Izote (cactus flower/cactus leaf)", "kale", "Lettuce (all except shitake)",
            "Nopales (Mexican cactus)", "Okra", "Olives", "onions", "sea Vegetables (wakame, dulse, arame, hijiki, nori)",
            "squash", "tomato (cherry and plum only)", "tomatillo", "turnip greens", "watercress",
            "purslane (verdolaga)", "wild arugula", "Apples", "bananas (the smallest one or the burro/midsize/original banana)",
            "berries (all varieties, no cranberries)", "Elderberries (in any form)", "cherries", "currants", "dates",
            "figs", "grapes (seeded)", "limes (key limes, with seeds)", "mango", "melons (seeded)",
            "orange (seville or sour preferred, difficult to find)", "papayas", "peaches", "pears", "plums",
            "prickly pear (cactus fruit)", "prunes", "raisins (seeded)", "soft jelly coconuts",
            "soursops (latin or west indian markets)", "tamarind", "burdock tea", "chamomile tea", "Elderberry tea",
            "Fennel tea", "Ginger", "Raspberry teas", "tila tea", "grains: amaranth, fonio, kamut, quinoa, rye, spelt, tef, wild rice",
            "hemp seeds", "raw sesame seeds", 'raw sesame "Tahni" butter', "walnuts", "brazil nuts",
            "oils: olive oil (do not cook), coconut oil (do not cook), sesame oil, hempseed oil, avocado oil",
            "mild flavors: basil, bay leaf, cloves, dill, oregano, savory, sweet basil, tarragon, thyme, achiote",
            "cayenne pepper", "onion powder", "habanero", "sage", "pre agave syrup (from cactus)", "date sugar"],
    "deficiencies": ["fiber", "probiotics"],
    "benefits": ["improved digestion", "gut health support"]
},
"skin conditions": {
    "foods": ["avocado", "Bell peppers", "Chayote (Mexican squash)", "cucumber", "dandelion greens",
            "Garbanzo beans", "Izote (cactus flower/cactus leaf)", "kale", "Lettuce (all except shitake)",
            "Nopales (Mexican cactus)", "Okra", "Olives", "onions", "sea Vegetables (wakame, dulse, arame, hijiki, nori)",
            "squash", "tomato (cherry and plum only)", "tomatillo", "turnip greens", "watercress",
            "purslane (verdolaga)", "wild arugula", "Apples", "bananas (the smallest one or the burro/midsize/original banana)",
            "berries (all varieties, no cranberries)", "Elderberries (in any form)", "cherries", "currants", "dates",
            "figs", "grapes (seeded)", "limes (key limes, with seeds)", "mango", "melons (seeded)",
            "orange (seville or sour preferred, difficult to find)", "papayas", "peaches", "pears", "plums",
            "prickly pear (cactus fruit)", "prunes", "raisins (seeded)", "soft jelly coconuts",
            "soursops (latin or west indian markets)", "tamarind", "burdock tea", "chamomile tea", "Elderberry tea",
            "Fennel tea", "Ginger", "Raspberry teas", "tila tea", "grains: amaranth, fonio, kamut, quinoa, rye, spelt, tef, wild rice",
            "hemp seeds", "raw sesame seeds", 'raw sesame "Tahni" butter', "walnuts", "brazil nuts",
            "oils: olive oil (do not cook), coconut oil (do not cook), sesame oil, hempseed oil, avocado oil",
            "mild flavors: basil, bay leaf, cloves, dill, oregano, savory, sweet basil, tarragon, thyme, achiote",
            "cayenne pepper", "onion powder", "habanero", "sage", "pre agave syrup (from cactus)", "date sugar"],
    "deficiencies": ["vitamin A", "vitamin C", "vitamin E", "omega-3 fatty acids"],
    "benefits": ["skin health support", "anti-inflammatory properties"]
},
"anxiety": {
    "foods": ["avocado", "Bell peppers", "Chayote (Mexican squash)", "cucumber", "dandelion greens",
            "Garbanzo beans", "Izote (cactus flower/cactus leaf)", "kale", "Lettuce (all except shitake)",
            "Nopales (Mexican cactus)", "Okra", "Olives", "onions", "sea Vegetables (wakame, dulse, arame, hijiki, nori)",
            "squash", "tomato (cherry and plum only)", "tomatillo", "turnip greens", "watercress",
            "purslane (verdolaga)", "wild arugula", "Apples", "bananas (the smallest one or the burro/midsize/original banana)",
            "berries (all varieties, no cranberries)", "Elderberries (in any form)", "cherries", "currants", "dates",
            "figs", "grapes (seeded)", "limes (key limes, with seeds)", "mango", "melons (seeded)",
            "orange (seville or sour preferred, difficult to find)", "papayas", "peaches", "pears", "plums",
            "prickly pear (cactus fruit)", "prunes", "raisins (seeded)", "soft jelly coconuts",
            "soursops (latin or west indian markets)", "tamarind", "burdock tea", "chamomile tea", "Elderberry tea",
            "Fennel tea", "Ginger", "Raspberry teas", "tila tea", "grains: amaranth, fonio, kamut, quinoa, rye, spelt, tef, wild rice",
            "hemp seeds", "raw sesame seeds", 'raw sesame "Tahni" butter', "walnuts", "brazil nuts",
            "oils: olive oil (do not cook), coconut oil (do not cook), sesame oil, hempseed oil, avocado oil",
            "mild flavors: basil, bay leaf, cloves, dill, oregano, savory, sweet basil, tarragon, thyme, achiote",
            "cayenne pepper", "onion powder", "habanero", "sage", "pre agave syrup (from cactus)", "date sugar"],
    "deficiencies": ["omega-3 fatty acids", "vitamin B complex", "magnesium"],
    "benefits": ["stress relief", "calming properties"]
}
# Add more health conditions here if needed
}

health_condition = "all condition"
health_condition_lower = health_condition.lower()

if health_condition_lower in alkaline_foods:
    condition_info = alkaline_foods[health_condition_lower]
    foods = condition_info["foods"]
    deficiencies = condition_info["deficiencies"]
    benefits = condition_info["benefits"]
    cautions = condition_info.get("cautions", [])

    report = f"For the health condition '{health_condition}', the alkaline foods with high pH balance are: {', '.join(foods)}.\n"
    report += f"Potential deficiencies in vitamins and nutrients associated with this health condition are: {', '.join(deficiencies)}.\n"
    report += f"Please be cautious of the following foods that may adversely affect your body function: {', '.join(cautions)}.\n"
    report += "Remember to consult with a healthcare professional for personalized advice."

def get_report ():
    return report

def get_holistic_info (health_condition):
    """
    Retrieves holistic information for a given health condition.

    Parameters:
    - health_condition (str): The health condition for which to retrieve information.

    Returns:
    - str: A message indicating that no information is available for the given health condition.
    """
    return f"No information available for the health condition '{health_condition}'."

# Example usage of the get_holistic_info function:
health_condition1 = "acid reflux"
info1 = get_holistic_info(health_condition1)
print(info1)

health_condition2 = "migraine"
info2 = get_holistic_info(health_condition2)
print(info2)

health_condition4 = "diabetes"
info4 = get_holistic_info(alkaline_foods)
print(info4)


# response = openai.ChatCompletion.create(
#     model="gpt-3.5-turbo",
#     messages=[
#     {"role": "system", "content": "You are a helpful assistant."},
#     {"role": "user", "content": "Tell me something about health conditions and living a healthy lifestyle."},
#     {
#     "role": "user",
#     "content": "Hi"
#     },
#     {
#     "role": "assistant",
#     "content": "Hi there! How can I assist you today?"
#     },
#     {
#     "role": "user",
#     "content": "how can you help me?"
#     },
#     {
#     "role": "assistant",
#     "content": "I can help you in various ways! Here are a few things I can assist you with:\n\nProviding information on various health conditions and their symptoms.\nSuggesting natural remedies for common ailments.\nOffering tips for maintaining a healthy lifestyle.\nAnswering questions about nutrition and suggesting healthy foods.\nProviding insights into the benefits of specific vitamins and minerals.\nGuiding you through relaxation and stress management techniques.\nLet me know what specific assistance you need, and I'll be happy to help you!"
#     },
#     {
#     "role": "user",
#     "content": "give me a diet plan for the day"
#     },
#     {
#     "role": "assistant",
#     "content": " Here's an sample plant-based and dairy-free diet plan for a day based on alkaline foods that are rich in vitamins and nutrients:\n\nBreakfast:\n\nSmoothie bowl made with avocado, banana, and mixed berries (such as strawberries, blueberries, and raspberries). Top with hemp seeds and sliced almonds.\nSnack:\n\nSliced cucumber with hummus or guacamole.\nLunch:\n\nQuinoa salad with chopped bell peppers, cherry tomatoes, diced avocado, and black beans. Dress with a squeeze of lime juice and drizzle of olive oil.\nA side of mixed greens with dandelion greens, topped with sliced almonds and a light vinaigrette dressing.\nSnack:\n\nA small apple with a tablespoon of almond butter.\nDinner:\n\nRoasted Chayote and mixed vegetables (such as roasted bell peppers, onions, and zucchini) seasoned with a blend of herbs and spices like basil, oregano, and thyme.\nA side of steamed kale.\nSnack:\n\nA handful of mixed berries (such as strawberries, blueberries, and raspberries).\nPlease note that it's important to consult with a healthcare professional or registered dietitian for personalized advice, especially if you have specific dietary restrictions or considerations."
#     },
#     {
#     "role": "user",
#     "content": "Can i have a diet plan for the week?"
#     },
#     {
#     "role": "assistant",
#     "content": "Certainly! Here's a sample plant-based and dairy-free diet plan for a week:\n\nDay 1:\n\nBreakfast: Smoothie bowl made with avocado, banana, and mixed berries. Top with hemp seeds and sliced almonds.\nLunch: Quinoa salad with chopped bell peppers, cherry tomatoes, diced avocado, and black beans. Dress with a squeeze of lime juice and drizzle of olive oil.\nDinner: Roasted Chayote and mixed vegetables seasoned with basil, oregano, and thyme. Serve with a side of steamed kale.\nSnacks: Sliced cucumber with hummus or guacamole, and a handful of mixed berries.\nDay 2:\n\nBreakfast: Oatmeal topped with sliced apples, dates, and a sprinkle of cinnamon.\nLunch: Mixed green salad with dandelion greens, cherry tomatoes, cucumber, and a light vinaigrette dressing. Serve with a side of garbanzo beans.\nDinner: Stuffed bell peppers with quinoa, black beans, onions, and tomatoes. Serve with a side of roasted squash.\nSnacks: Sliced pear with a tablespoon of almond butter, and a small handful of walnuts.\nDay 3:\n\nBreakfast: Toasted whole grain bread topped with mashed avocado and sliced tomatoes.\nLunch: Lentil and vegetable soup with a side of steamed broccoli.\nDinner: Veggie stir-fry with tofu, bell peppers, onions, and snap peas. Serve over a bed of brown rice.\nSnacks: Raw vegetables with hummus, and a small handful of grapes.\nDay 4:\n\nBreakfast: Vegan banana pancakes made with mashed banana and almond flour. Top with fresh berries and a drizzle of date syrup.\nLunch: Spinach salad with diced mango, sliced almonds, and a light vinaigrette dressing. Serve with a side of quinoa.\nDinner: Veggie curry with chickpeas, cauliflower, and coconut milk. Serve with a side of steamed basmati rice.\nSnacks: Sliced cucumber with guacamole, and a small handful of mixed nuts.\nDay 5:\n\nBreakfast: Chia seed pudding made with almond milk, topped with sliced bananas and crushed walnuts.\nLunch: Roasted vegetable wrap with grilled eggplant, bell peppers, onions, and avocado. Serve with a side of mixed greens.\nDinner: Baked falafel with a side of quinoa tabbouleh salad and a drizzle of tahini sauce.\nSnacks: Apple slices with almond butter, and a small handful of berries.\nDay 6:\n\nBreakfast: Overnight oats made with almond milk, chia seeds, and mixed berries. Top with a sprinkle of hemp seeds and a drizzle of maple syrup.\nLunch: Mediterranean salad with lettuce, cucumber, cherry tomatoes, olives, and chickpeas. Dress with lemon juice and olive oil.\nDinner: Vegan chili with kidney beans, diced tomatoes, onions, and spices. Serve with a side of steamed green beans.\nSnacks: Carrot sticks with hummus, and a small handful of grapes.\nDay 7:\n\nBreakfast: Tofu scramble with sautéed vegetables (such as onions, bell peppers, and spinach).\nLunch: Lentil salad with diced tomatoes, cucumbers, onions, and a light vinaigrette dressing.\nDinner: Vegetable stir-fry with tofu, broccoli, snap peas, and mushrooms. Serve over brown rice.\nSnacks: Sliced bell peppers with guacamole, and a small handful of mixed nuts.\nFeel free to adjust the portion sizes and ingredients based on your preferences and dietary needs. It's always recommended to consult with a healthcare professional or registered dietitian for personalized advice."
#     },
#     {
#     "role": "user",
#     "content": "what should i stay away from?"
#     },
#     {
#     "role": "assistant",
#     "content": "In general, it is advisable to limit or avoid certain foods and ingredients when managing heart disease. Here are some foods to consider avoiding or minimizing:\n\nSaturated and Trans Fats: Limit intake of foods high in saturated and trans fats, such as fatty meats, full-fat dairy products, fried foods, and commercially baked goods.\n\nSodium: Reduce the consumption of high-sodium foods, including processed and packaged foods, fast food, and salty snacks. Opt for lower-sodium alternatives and use salt sparingly when cooking.\n\nAdded Sugars: Minimize the consumption of foods and beverages that are high in added sugars, such as sugary drinks, desserts, and processed snacks. Choose natural sweeteners or reduce overall sugar intake.\n\nRefined Grains: Limit refined grains like white bread, white rice, and pasta, as they have lower nutritional value compared to whole grains. Instead, opt for whole grain varieties like whole wheat bread, brown rice, and whole grain pasta.\n\nProcessed Meats: Avoid or minimize processed meats like sausage, bacon, deli meats, and hot dogs, which are often high in sodium and unhealthy fats. Opt for lean sources of protein instead, such as poultry, fish, legumes, and tofu.\n\nExcessive Alcohol: Limit alcohol consumption as excessive intake can have negative effects on heart health. Stick to moderate drinking guidelines, which typically entail up to one drink per day for women and up to two drinks per day for men.\n\nCaffeine and Energy Drinks: Limit consumption of caffeinated beverages and energy drinks, as they can increase heart rate and blood pressure. Opt for herbal teas or decaffeinated options instead.\n\nRemember, it is essential to consult with a healthcare professional or registered dietitian to evaluate your specific condition and receive personalized recommendations for your heart health."
#     },
#     {
#     "role": "user",
#     "content": "Thank you HolisticBot"
#     },
#     {
#     "role": "assistant",
#     "content": "You're welcome! I'm here to assist you with any further questions or information you may need. Take care of your health, and feel free to reach out at any time. Stay well!"
#     },
#     {
#     "role": "assistant",
#     "content": "Hi there! How can I assist you today?"
#     },
#     {
#     "role": "assistant",
#     "content": "Hello! How can I help you today?"
#     }
# ],
# temperature=1,
# max_tokens=256,
# top_p=1,
# frequency_penalty=0,
# presence_penalty=0
# )


app = Flask(__name__)

@app.route('/chatbot', methods=['POST'])
def handle_request():
    prompt = request.json['prompt']
    completion = openai.ChatCompletion.create(
        assistant_id=assistant_id,
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a Holistic Wellness Assistant."},
            {"role": "user", "content": prompt},
        ],
        temperature=1,
        max_tokens=256,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    return completion.choices[0].message.content

# @app.route('/request', methods=['GET'])
# def request_dietplan():
#     prompt = request_dietplan.args.get('prompt')
#     completion = openai.ChatCompletion.create(
#         model="gpt-3.5-turbo",
#         messages=[
#             {"role": "system", "content": "You are a Holistic Wellness Assistant."},
#             {"role": "user", "content": prompt},
#         ],
#         temperature=1,
#         max_tokens=256,
#         top_p=1,
#         frequency_penalty=0,
#         presence_penalty=0
#     )
#     return completion.choices[0].message.content

# @app.route('/request', methods=['GET'])
# def alkalinefood_list():
#     prompt = alkalinefood_list.args.get('prompt')
#     completion = openai.ChatCompletion.create(
#         model="gpt-3.5-turbo",
#         messages=[
#             {"role": "system", "content": "You are a Holistic Wellness Assistant."},
#             {"role": "user", "content": prompt},
#         ],
#         temperature=1,
#         max_tokens=256,
#         top_p=1,
#         frequency_penalty=0,
#         presence_penalty=0
#     )
#     return completion.choices[0].message.content

if __name__ == '__main__':
    app.run()
