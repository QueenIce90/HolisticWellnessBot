# import openai

# # Set your OpenAI API key

# messages = [
#     {"role": "user", "content": "What's a good diet plan for acid reflux?"},
#     {
#         "role": "assistant",
#         "content": "Sure, I can help you with that. Please wait a moment while I retrieve the information.",
#     },
#     {
#         "role": "assistant",
#         "content": "Holistic Wellness Assistant: {'healthCondition': 'acid reflux', 'unit': 'foods'}",
#     },
# ]

# tools = [
#     {
#         "type": "function",
#         "function": {
#             "name": "Holistic_Wellness_Assistant",  
#             "description": "Get alkaline foods with high pH balance information for a given health condition. The function provides insights into possible deficiencies in vitamins and nutrients associated with the specified health condition. Additionally, it issues warnings about foods that may adversely affect human body function.",
#             "parameters": {
#                 "type": "object",
#                 "properties": {
#                     "healthCondition": {
#                         "type": "string",
#                         "description": "The health condition for which alkaline foods and nutritional information are requested.",
#                     },
#                     "unit": {"type": "string", "enum": ["healthCondition", "foods", "deficiencies", "benefits", "cautions"]},
#                 },
#                 "required": ["healthCondition"],
#             },
#         },
#     }
# ]

# # completion = openai.ChatCompletion.create(
# #     model="gpt-3.5-turbo",
# #     messages=messages,
# #     tools=tools,
# #     tool_choice="auto",
# # )

# # print(completion)
